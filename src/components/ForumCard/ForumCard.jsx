/**
 * NOTA PARA EL ESTUDIO DE JOEL:
 * Componente visual que recibe los datos y las funciones para editar/borrar.
 */
import "./ForumCard.css";

function ForumCard({ post, onEdit, onDelete }) {
  return (
    <article className="forum-card">
      <div className="forum-card-header">
        <span className="forum-category-badge">{post.category}</span>
        <span className="forum-author">✍ {post.author}</span>
      </div>
      <h3 className="forum-card-title">{post.title}</h3>
      <p className="forum-card-content">{post.content}</p>
      <div className="forum-card-actions">
        <button className="btn-edit" onClick={() => onEdit(post)}>
          Edit
        </button>
        <button className="btn-delete" onClick={() => onDelete(post.id)}>
          Delete
        </button>
      </div>
    </article>
  );
}

export default ForumCard;
