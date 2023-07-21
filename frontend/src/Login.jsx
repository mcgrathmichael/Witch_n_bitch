import React, { useState, useContext } from "react";
import { AuthContext } from "./Context/authContext";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function LoginForm() {
  // const { setUser, setIsconnected } = useContext(AuthContext);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const success = () => toast.success("🦄 You did it!");

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post("http://localhost:5000/login", formData)
      .then(({ data }) => {
        const { user } = data;
        setFormData({
          email: "",
          password: "",
        });
        console.log(user);
        // Set the user using the setUser function from the AuthContext
        // setUser(user);
        localStorage.setItem("user", JSON.stringify(user));

        // setIsconnected(true);
        navigate("/home");
      })
      .catch((error) => {
        console.error("Erreur lors de la requête :", error);
      });
  };

  return (
    <div className=" mx-auto">
      <div className="max-w-md mx-auto p-8 mt-10 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-6">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Email
            </label>
            <input
              onChange={handleChange}
              value={formData.email}
              name="email"
              type="email"
              id="email"
              className="input input-bordered input-primary w-full p-2 border rounded"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Password
            </label>
            <input
              name="password"
              onChange={handleChange}
              type="password"
              id="password"
              className="input-primary input w-full p-2 border rounded"
              placeholder="Enter your password"
              value={formData.password}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full btn btn-secondary font-bold py-2 px-4 rounded"
          >
            Log in
          </button>
        </form>
        <div className="mt-4 text-center">
          <p className="text-gray-600 text-sm">Don't have an account?</p>
          <a href="/register" className=" hover:font-bold">
            Register
          </a>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
