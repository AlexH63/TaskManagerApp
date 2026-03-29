import { useEffect, useState } from "react";
import axios from "axios";
import TaskForm from "../components/TaskForm";
import TaskItem from "../components/TaskItem.js";

function Dashboard() {
    const [tasks, setTasks] = useState([]);
    const token = localStorage.getItem("token");

    // Fetch Tasks
    const fetchTasks = async () => {
        const res = await axios.get("http://localhost:5000/api/tasks", {
            headers: { Authorization: token}
        });
        setTasks(res.data);
    };

    useEffect(() => {
        fetchTasks();
    }, []);

    // Add Task
    const addTask = async (task) => {
        await axios.post("http://localhost:5000/api/tasks", task, {
            headers: { Authorization: token }
        });
        fetchTasks();
    };

    // Delete Task
    const deleteTask = async (_id) => {
        await axios.delete(`http://localhost:5000/api/tasks/${_id}`, {
            headers: { Authorization: token }
        });
        fetchTasks();
    };

    // Update Task
    const updateTask = async (_id, updatedTask) => {
        await axios.put(`http://localhost:5000/api/tasks/${_id}`, updatedTask, {
            headers: { Authorization: token }
        });
        fetchTasks();
    };

    return(
        <div className="container">
            <h2>My Tasks</h2>

            <TaskForm onAdd={addTask} />
            {tasks.map(task => (
                <TaskItem
                    key={task._id}
                    task={task}
                    onDelete={deleteTask}
                    onUpdate={updateTask}
                />
            ))}
        </div>
    );
}

export default Dashboard;