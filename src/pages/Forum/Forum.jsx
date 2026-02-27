import { useEffect, useMemo, useState } from "react";
import { ref, get } from "firebase/database";
import { database } from "../../firebase/firebase";

function Forum() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    const load = async () => {
      try {
        setIsLoading(true);

        const snap = await get(ref(database, "forumPosts"));
        const val = snap.val();

        if (!val) {
          setPosts([]);
          return;
        }

        const list = Object.entries(val).map(([id, data]) => ({ id, ...data }));
        setPosts(list);
      } catch (e) {
        console.error(e);
        setPosts([]);
      } finally {
        setIsLoading(false);
      }
    };

    load();
  }, []);

  const categories = useMemo(() => {
    const set = new Set(posts.map((p) => p.category).filter(Boolean));
    return ["all", ...Array.from(set)];
  }, [posts]);

  const filtered = useMemo(() => {
    const q = searchText.trim().toLowerCase();
    return posts.filter((p) => {
      const okCat = selectedCategory === "all" || p.category === selectedCategory;
      const okText =
        !q ||
        (p.title || "").toLowerCase().includes(q) ||
        (p.content || "").toLowerCase().includes(q) ||
        (p.author || "").toLowerCase().includes(q);
      return okCat && okText;
    });
  }, [posts, selectedCategory, searchText]);

  return (
    <section className="container">
      <h2 className="section-title">Forum</h2>

      <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 16 }}>
        <select
          className="form-input"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          style={{ maxWidth: 220 }}
        >
          {categories.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>

        <input
          className="form-input"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          placeholder="Search..."
          style={{ flex: "1 1 260px" }}
        />
      </div>

      {isLoading ? (
        <p>Loading...</p>
      ) : filtered.length === 0 ? (
        <p>No posts found (check Firebase forumPosts).</p>
      ) : (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 16 }}>
          {filtered.map((p) => (
            <article key={p.id} className="band-card" style={{ padding: 16 }}>
              <h3 className="band-title" style={{ marginBottom: 8 }}>
                {p.title || "Untitled"}
              </h3>
              <p className="band-meta" style={{ marginBottom: 10 }}>
                <strong>Category:</strong> {p.category || "unknown"} · <strong>Author:</strong> {p.author || "anonymous"}
              </p>
              <p>{p.content || "No content"}</p>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}

export default Forum;