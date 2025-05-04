import "./Note.css";
import notebookImg from "../../assets/photos/trashcan.png";
import editImg from "../../assets/photos/edit.svg";

export default function Note({ title, description }) {
  return (
    <li>
      <div className="note-header">
        <p className="title">{title}</p>
        <div className="note-button-container">
          <button class="note-button">
            <img src={editImg} alt="Icon" height="20" width="20" />
          </button>
          <button class="note-button">
            <img src={notebookImg} alt="Icon" height="20" width="20" />
          </button>
        </div>
      </div>
      <p className="description">{description}</p>
    </li>
  );
}
