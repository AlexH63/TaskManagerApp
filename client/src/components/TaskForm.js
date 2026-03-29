import { useState } from "react";

function TaskForm({ onAdd }) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState();

    const handleSubmit = (e) => {
        e.preventDefault();
        onAdd({title, description});
        setTitle("");
        setDescription("");
    };

    return(
        <form onSubmit={handleSubmit}>
            <input placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} required />
            <input placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
            <button type="submit">Add</button>
        </form>
    );
}

export default TaskForm;