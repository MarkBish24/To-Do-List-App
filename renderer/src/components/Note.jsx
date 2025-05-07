import "./Note.css";
import notebookImg from "../../assets/photos/trashcan.png";
import editImg from "../../assets/photos/edit.svg";

export default function Note({
  id,
  title,
  description,
  setIsEditing,
  setTempId,
  deleteData,
}) {
  return (
    <li>
      <div className="note-header">
        <p className="title">{title}</p>
        <div className="note-button-container">
          <button
            class="note-button"
            onClick={() => {
              setIsEditing(true);
              setTempId(id);
            }}
          >
            <img src={editImg} alt="Icon" height="20" width="20" />
          </button>
          <button
            class="note-button"
            onClick={() => {
              deleteData(id);
            }}
          >
            <img src={notebookImg} alt="Icon" height="20" width="20" />
          </button>
        </div>
      </div>
      <p className="description">{description}</p>
    </li>
  );
}
