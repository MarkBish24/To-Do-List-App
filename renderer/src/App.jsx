import Header from "./components/Header.jsx";
import Note from "./components/Note.jsx";
import "./App.css";

import data from "./data.js";

export default function App() {
  return (
    <>
      <div className="app-container">
        <Header />
        <ul className="note-list">
          {data.map((note) => (
            <Note
              key={note.id}
              title={note.title}
              description={note.description}
            />
          ))}
        </ul>
      </div>
    </>
  );
}
