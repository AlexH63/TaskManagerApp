import { useState } from "react";

function TaskItem({ task, onDelete, onUpdate }) {
    const [editing, setIsEditing] = useState(false);
    const [title, setTitle] = useState(task.title);
    const [description, setDescription] = useState(task.description);

    // Handle saving updates
    const handleSave = () => {
        onUpdate(task._id, { title, description });
        setIsEditing(false);
    };

    return(
        <div className="task">
            {editing ? (
                <>
                    <input value={title} onChange={(e) => setTitle(e.target.value)} />
                    <input value={description} onChange={(e) => setDescription(e.target.value)} />
                    
                    <button onClick={handleSave}>Save</button>
                    <button onClick={() => setIsEditing(false)}>Cancel</button>
                </>
            ) : (
                <>
                    <h3>{task.title}</h3>
                    <p>{task.description}</p>
                    <div class="buttonContainer">
                        <button onClick={() => setIsEditing(true)}>Edit</button>
                        <button onClick={() => onDelete(task._id)}>Delete</button>
                    </div>
                    
                </>
            )}
        </div>
    );
}

export default TaskItem;