import { useState } from "react";

function TaskForm({ onAdd }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [color, setColor] = useState("#ffffff");

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd({ title, description, color });
    setTitle("");
    setDescription("");
    setColor("#ffffff");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <input
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <label>Choose a color for your task: </label>
      <input
        id="colorPicker"
        type="color"
        value={color}
        onChange={(e) => setColor(e.target.value)}
      />
      <div className="buttonContainer">
        <button type="submit">Add</button>
      </div>
    </form>
  );
}

export default TaskForm;
