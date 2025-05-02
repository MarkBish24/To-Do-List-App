import "./Header.css";

export default function Header() {
  return (
    <>
      <div className="header">
        <h1 className="title">Welcome To The Notes App!</h1>
        <div className="subheader-container">
          <h2 className="subheader">Add a New Note</h2>
          <button className="add-note-button">+</button>
        </div>
      </div>
    </>
  );
}
