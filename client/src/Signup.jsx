import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3000/register", { name, email, password })
      .then((result) => {
        console.log(result);
        navigate("/login");
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <h2 className="bg-blue">Register</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">
          <strong>Name:</strong>
        </label>
        <input
          type="text"
          placeholder="Enter name..."
          autoComplete="off"
          name="name"
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="email">
          <strong>Email:</strong>
        </label>
        <input
          type="email"
          placeholder="Enter email..."
          autoComplete="off"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password">
          <strong>Password:</strong>
        </label>
        <input
          type="password"
          placeholder="Enter password..."
          autoComplete="off"
          name="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Register</button>
      </form>
      <Link to={"/login"}>Login</Link>
    </div>
  );
}

export default Signup;
