import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Register() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = setNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();

        try{
            await axios.post("http://localhost:5000/api/auth/register", {
                username,
                email,
                password
            });

            alert("Account created");
            navigate("/");
        } catch {
            alert("Registration failed");
        }
    };

    return (
        <diiv className="container">
            <h2>Register</h2>

            <form onSubmit={handleRegister}>
                <input placeholder="Username" onChange={(e) => setUsername(e.target.value)} required/>
                <input placeholder="email" onChange={(e) => setEmail(e.target.value)} required/>
                <input placeholder="Password" onChange={(e) => setPassword(e.target.value)} required/>
                <button type="submit">Register</button>
            </form>
        </diiv>
    );
}

export default Register;