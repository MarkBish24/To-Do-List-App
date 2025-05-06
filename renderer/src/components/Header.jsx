import "./Header.css";

export default function Header({ setIsAdding }) {
  return (
    <>
      <div className="header">
        <h1 className="title">Welcome To The Notes App!</h1>
        <button className="add-note-button" onClick={() => setIsAdding(true)}>
          Add A New Note +
        </button>
      </div>
    </>
  );
}
