import { useState } from "react";

function TaskItem({ task, onDelete, onUpdate }) {
  const [editing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description);
  const [color, setColor] = useState(task.color);
  // Handle saving updates
  const handleSave = () => {
    onUpdate(task._id, { title, description, color });
    setIsEditing(false);
  };

  return (
    <div
      className="task"
      style={{ backgroundColor: editing ? color : task.color }}
    >
      {editing ? (
        <>
          <input value={title} onChange={(e) => setTitle(e.target.value)} />
          <input
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <div className="buttonContainer">
            <input
              id="colorPicker"
              type="color"
              value={color}
              onChange={(e) => setColor(e.target.value)}
            />
          </div>
          <div className="buttonContainer">
            <button onClick={handleSave}>Save</button>
            <button onClick={() => setIsEditing(false)}>Cancel</button>
          </div>
        </>
      ) : (
        <>
          <h3>{task.title}</h3>
          <p>{task.description}</p>
          <div className="buttonContainer">
            <button onClick={() => setIsEditing(true)}>Edit</button>
            <button onClick={() => onDelete(task._id)}>Delete</button>
          </div>
        </>
      )}
    </div>
  );
}

export default TaskItem;
