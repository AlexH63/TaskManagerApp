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
    // const targetDiv = document.getElementById('task');
    // const addButton = document.getElementById('addButton');
    // const picker = document.getElementById("colorPicker");
    // if(targetDiv != null && addButton.onAdd){
    //     picker.addEventListener('input', (event) => {
    //     targetDiv.style.backgroundColor = event.target.value;
    // }) 
    // }
 

    return(
        <form onSubmit={handleSubmit}>
            <input placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} required />
            <input placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
            {/* <label for="colorPicker">Choose a color for your task: </label>
            <input type="color" id="colorPicker" name="colorPicker" value="#ffffff"></input> */}
            <button type="submit">Add</button>
        </form>
    );
}

export default TaskForm;