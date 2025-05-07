import { useEffect, useState } from "react";

import Header from "./components/Header.jsx";
import Note from "./components/Note.jsx";
import AddNoteBox from "./components/AddNoteBox.jsx";
import "./App.css";

export default function App() {
  const [data, setData] = useState([]);
  const [isAdding, setIsAdding] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [tempId, setTempId] = useState(null);

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

  const handleAddData = async (id, title, description) => {
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

  const handleEditData = async (id, title, description) => {
    try {
      const updatedData = data.map((note) =>
        note.id === id ? { ...note, title, description } : note
      );

      await window.electronAPI.editData({
        id,
        title,
        description,
      });

      setData(updatedData);
    } catch (error) {
      console.error("Error editing data:", error);
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
              id={note.id}
              title={note.title}
              description={note.description}
              setIsEditing={setIsEditing}
              setTempId={setTempId}
            />
          ))}
        </ul>
      </div>
      {isAdding ? (
        <AddNoteBox
          Action="Add"
          id={tempId}
          setTempId={setTempId}
          changeFunction={setIsAdding}
          handleData={handleAddData}
        />
      ) : null}
      {isEditing ? (
        <AddNoteBox
          Action="Edit"
          id={tempId}
          setTempId={setTempId}
          changeFunction={setIsEditing}
          handleData={handleEditData}
        />
      ) : null}
    </>
  );
}
