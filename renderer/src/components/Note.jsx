import "./Note.css";
import notebookImg from "../../assets/photos/trashcan.png";
import editImg from "../../assets/photos/edit.svg";

export default function Note() {
  return (
    <li>
      <div className="note-header">
        <p className="title">Title</p>
        <div className="note-button-container">
          <button class="note-button">
            <img src={editImg} alt="Icon" height="20" width="20" />
          </button>
          <button class="note-button">
            <img src={notebookImg} alt="Icon" height="20" width="20" />
          </button>
        </div>
      </div>
      <p className="description">
        This is an Example of a Description that you can Add
      </p>
    </li>
  );
}
