import "./AddNoteBox.css";

export default function AddNoteBox({
  Action,
  id,
  setTempId,
  changeFunction,
  handleData,
}) {
  return (
    <>
      <div className="background-container"></div>
      <div className="add-note-container">
        <div className="title-container">
          <h1>{Action} a Note</h1>
          <button
            className="cancel-button"
            onClick={() => {
              changeFunction(false);
              setTempId(null);
            }}
          >
            ✖
          </button>
        </div>
        <div className="input-container">
          <input id="input-title" placeholder="Enter a Title"></input>
          <input
            id="input-description"
            placeholder="Enter a Description"
          ></input>
          <button
            onClick={() => {
              changeFunction(false);
              let title = document.getElementById("input-title").value;
              let description =
                document.getElementById("input-description").value;
              if (title && description) {
                handleData(id, title, description);
              }
            }}
          >
            {Action} Note
          </button>
        </div>
      </div>
    </>
  );
}
