import { useEffect, useState } from "react";

import Header from "./components/Header.jsx";
import Note from "./components/Note.jsx";
import AddNoteBox from "./components/AddNoteBox.jsx";
import "./App.css";

export default function App() {
  const [data, setData] = useState([]);
  const [isAdding, setIsAdding] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await window.electronAPI.readData();
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleSaveData = async () => {
    try {
      const newData = [
        ...data,
        {
          id: data.length + 1,
          title: "New Note",
          description: "Description here",
        },
      ];
      await window.electronAPI.writeData(newData);
      setData(newData);
    } catch (error) {
      console.error("Error saving data:", error);
    }
  };

  const handleAddData = async (title, description) => {
    try {
      const newNote = {
        id: data.length + 1,
        title: title,
        description: description,
      };

      await window.electronAPI.addData(newNote);
      setData([...data, newNote]);
    } catch (error) {
      console.error("Error adding data:", error);
    }
  };

  return (
    <>
      <div className="app-container">
        <Header setIsAdding={setIsAdding} />
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
      {isAdding ? (
        <AddNoteBox setIsAdding={setIsAdding} handleAddData={handleAddData} />
      ) : null}
    </>
  );
}
