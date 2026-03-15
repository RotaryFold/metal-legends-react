import { useMemo, useState, useEffect } from "react";
import { ref, onValue, push, set, remove, update } from "firebase/database";
import { database } from "../../firebase/firebase";
import ForumCard from "../../components/ForumCard/ForumCard";
import "./Forum.css";

const CATEGORIES = ["all", "Discussion", "News", "Concerts", "Reviews"];

function Forum() {
  // ── State ────────────────────────────────────────────────────────────────
  const [posts, setPosts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchText, setSearchText] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  // ── Firebase Sync ────────────────────────────────────────────────────────
  useEffect(() => {
    const postsRef = ref(database, "posts");
    const unsubscribe = onValue(postsRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        // Transform object to array with IDs
        const postsList = Object.keys(data).map((key) => ({
          id: key,
          ...data[key],
        }));
        setPosts(postsList.reverse()); // Show newest first
      } else {
        setPosts([]);
      }
      setIsLoading(false);
    });

    return () => unsubscribe();
  }, []);

  // Form state
  const [editingId, setEditingId] = useState(null);
  const [formTitle, setFormTitle] = useState("");
  const [formContent, setFormContent] = useState("");
  const [formAuthor, setFormAuthor] = useState("");
  const [formCategory, setFormCategory] = useState("Discussion");
  const [hasError, setHasError] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);

  // ── Filtered list ────────────────────────────────────────────────────────
  const filteredPosts = useMemo(() => {
    const query = searchText.trim().toLowerCase();
    return posts.filter((post) => {
      const matchesCategory =
        selectedCategory === "all" || post.category === selectedCategory;
      const matchesText =
        !query ||
        post.title.toLowerCase().includes(query) ||
        post.content.toLowerCase().includes(query) ||
        post.author.toLowerCase().includes(query);
      return matchesCategory && matchesText;
    });
  }, [posts, selectedCategory, searchText]);

  // ── Helpers ──────────────────────────────────────────────────────────────
  const resetForm = () => {
    setEditingId(null);
    setFormTitle("");
    setFormContent("");
    setFormAuthor("");
    setFormCategory("Discussion");
    setHasError(false);
    setIsFormOpen(false);
  };

  const openNewForm = () => {
    resetForm();
    setIsFormOpen(true);
  };

  // ── CRUD handlers ────────────────────────────────────────────────────────
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formTitle.trim() || !formContent.trim() || !formAuthor.trim()) {
      setHasError(true);
      return;
    }

    if (editingId) {
      // Update in Firebase
      const postRef = ref(database, `posts/${editingId}`);
      update(postRef, {
        title: formTitle.trim(),
        content: formContent.trim(),
        author: formAuthor.trim(),
        category: formCategory,
      }).catch((error) => console.error("Error updating post:", error));
    } else {
      // Insert into Firebase
      const postsRef = ref(database, "posts");
      const newPostRef = push(postsRef);
      set(newPostRef, {
        title: formTitle.trim(),
        content: formContent.trim(),
        author: formAuthor.trim(),
        category: formCategory,
        createdAt: Date.now(),
      }).catch((error) => console.error("Error creating post:", error));
    }

    resetForm();
  };

  const handleEdit = (post) => {
    setEditingId(post.id);
    setFormTitle(post.title);
    setFormContent(post.content);
    setFormAuthor(post.author);
    setFormCategory(post.category);
    setHasError(false);
    setIsFormOpen(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this post?")) {
      const postRef = ref(database, `posts/${id}`);
      remove(postRef).catch((error) => console.error("Error deleting post:", error));
    }
  };

  // ── Render ───────────────────────────────────────────────────────────────
  return (
    <section className="forum-section">
      <div className="container">
        <h2 className="section-title">Metal Forum</h2>

        {/* Controls */}
        <div className="forum-controls">
          <div className="forum-filters">
            <select
              className="form-input"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              aria-label="Filter by category"
            >
              {CATEGORIES.map((cat) => (
                <option key={cat} value={cat}>
                  {cat === "all" ? "All categories" : cat}
                </option>
              ))}
            </select>

            <input
              className="form-input forum-search"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              placeholder="Search by title, content or author…"
              aria-label="Search forum posts"
            />
          </div>

          <button className="btn-primary forum-new-btn" onClick={openNewForm}>
            + New Post
          </button>
        </div>

        {/* Form (Insert / Update) */}
        {isFormOpen && (
          <form className="forum-form" onSubmit={handleSubmit} noValidate>
            <h3 className="forum-form-title">
              {editingId ? "Edit Post" : "New Post"}
            </h3>

            <label className="form-label" htmlFor="form-title">
              Title
            </label>
            <input
              id="form-title"
              className="form-input"
              value={formTitle}
              onChange={(e) => setFormTitle(e.target.value)}
              placeholder="Post title"
            />

            <label className="form-label" htmlFor="form-author">
              Author
            </label>
            <input
              id="form-author"
              className="form-input"
              value={formAuthor}
              onChange={(e) => setFormAuthor(e.target.value)}
              placeholder="Your username"
            />

            <label className="form-label" htmlFor="form-category">
              Category
            </label>
            <select
              id="form-category"
              className="form-input"
              value={formCategory}
              onChange={(e) => setFormCategory(e.target.value)}
            >
              {CATEGORIES.filter((c) => c !== "all").map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>

            <label className="form-label" htmlFor="form-content">
              Content
            </label>
            <textarea
              id="form-content"
              className="form-input form-textarea"
              value={formContent}
              onChange={(e) => setFormContent(e.target.value)}
              placeholder="What's on your mind?"
              rows={4}
            />

            {hasError && (
              <p className="forum-error">Please fill in all fields.</p>
            )}

            <div className="forum-form-actions">
              <button className="btn-secondary" type="submit">
                {editingId ? "Update Post" : "Publish Post"}
              </button>
              <button
                className="btn-cancel"
                type="button"
                onClick={resetForm}
              >
                Cancel
              </button>
            </div>
          </form>
        )}

        {/* Post list */}
        {isLoading ? (
          <div className="forum-loading">
            <div className="spinner"></div>
            <p>Loading metal wisdom...</p>
          </div>
        ) : filteredPosts.length === 0 ? (
          <p className="forum-empty">No posts found. Be the first to post!</p>
        ) : (
          <div className="forum-grid">
            {filteredPosts.map((post) => (
              <ForumCard
                key={post.id}
                post={post}
                onEdit={handleEdit}
                onDelete={handleDelete}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default Forum;