import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { API } from "../utils/api"; // ✅ IMPORT API URL

export default function Signup() {

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",      // ✅ ADDED
    password: "",
    role: "user"
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const safeData = {
        ...form,
        role: "user"
      };

      const res = await fetch(`${API}/auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(safeData)
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.message || "Signup failed");
        return;
      }

      alert("Signup successful 🎉");
      navigate("/login");

    } catch (err) {
      console.log(err);
      alert("Server error");
    }
  };

  return (
    <section className="min-h-screen bg-black text-white flex items-center justify-center">

      <form
        onSubmit={handleSubmit}
        className="bg-gray-900 p-10 rounded-lg w-96"
      >

        <h1 className="text-3xl font-bold mb-6 text-center">
          Signup
        </h1>

        <input
          type="text"
          name="name"
          placeholder="Full Name"
          required
          onChange={handleChange}
          className="w-full mb-4 p-3 bg-black rounded border border-gray-700"
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          required
          onChange={handleChange}
          className="w-full mb-4 p-3 bg-black rounded border border-gray-700"
        />

        {/* ✅ PHONE FIELD */}
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          required
          onChange={handleChange}
          className="w-full mb-4 p-3 bg-black rounded border border-gray-700"
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          required
          onChange={handleChange}
          className="w-full mb-6 p-3 bg-black rounded border border-gray-700"
        />

        <select
          name="role"
          onChange={handleChange}
          className="w-full mb-6 p-3 bg-black rounded border border-gray-700"
        >
          <option value="user">User</option>
          <option value="seller">Seller</option>
        </select>

        <button className="w-full bg-green-500 hover:bg-green-600 py-3 rounded">
          Signup
        </button>

      </form>

    </section>
  );
}