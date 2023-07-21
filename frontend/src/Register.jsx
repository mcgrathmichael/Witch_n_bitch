import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "", // Champ pour le nom
    email: "", // Champ pour l'email
    password: "", // Champ pour le mot de passe
    starsign: "",
  });

  const fail = () => toast.warn("🦄Oops - try again!");

  const success = () => toast.success("🦄 You did it!");

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post("http://localhost:5000/users", formData)
      .then(() => {
        setFormData({
          name: "",
          email: "",
          password: "",
          starsign: "",
        });
        navigate("/");
        success();
      })
      .catch((error) => {
        fail();
        console.error("Error: ", error);
      });
  };

  return (
    <div className=" mx-auto">
      <div>
        <Toaster />
      </div>

      <div className="max-w-md mx-auto p-8 mt-10 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-6">Register</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Name
            </label>
            <input
              onChange={handleChange}
              value={formData.name}
              name="name"
              type="name"
              id="name"
              className="input input-bordered input-primary w-full p-2 border rounded"
              placeholder="Enter your name"
              required
            />
          </div>

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
          <div>
            <label>
              Select your star sign:
              <select
                onChange={handleChange}
                className="input-primary input w-full p-2 mb-12 border rounded"
              >
                <option value="aries">Aries</option>
                <option value="taurus">Taurus</option>

                <option value="gemini">Gemini</option>
                <option value="cancer">Cancer</option>
                <option value="leo">Leo</option>
                <option value="virgo">Virgo</option>
                <option value="libra">Libra</option>
                <option value="scorpio">Scorpio</option>
                <option value="sagittarius">Sagittarius</option>
                <option value="capricorn">Capricorn</option>
                <option value="aquarius">Aquarius</option>
                <option value="pisces">Pisces</option>
              </select>
            </label>
          </div>
          <button
            type="submit"
            className="w-full btn btn-secondary font-bold py-2 px-4 rounded"
          >
            Register{" "}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;
