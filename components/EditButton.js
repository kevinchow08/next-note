import Link from "next/link";

function EditButton({ noteId, children }) {
  const isEdit = noteId === null;
  return (
    <Link href={`/note/edit/${noteId || ""}`} className="link--unstyled">
      <button
        className={`edit-button ${
          isEdit ? "edit-button--solid" : "edit-button--outline"
        }`}
      >
        {children}
      </button>
    </Link>
  );
}

export default EditButton;
