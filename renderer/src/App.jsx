import { useState } from "react";
import Header from "./components/Header.jsx";
import Note from "./components/Note.jsx";
import "./App.css";

export default function App() {
  return (
    <>
      <div className="app-container">
        <Header />
        <ul className="note-list">
          <Note />
          <Note />
          <Note />
          <Note />
        </ul>
      </div>
    </>
  );
}
