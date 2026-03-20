import { useState } from "react";
// import { API } from "../config"; // ✅ IMPORT API URL

export default function Inquiry() {

  const [form, setForm] = useState({
    name: "",
    email: "",
    country: "",
    message: ""
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem("token");

      if (!token) {
        alert("Please login first");
        return;
      }

      if (!form.name || !form.email || !form.message) {
        alert("Please fill all required fields");
        return;
      }

      const res = await fetch("${API}/requests/general", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(form)
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.message || "Failed to send inquiry");
        return;
      }

      alert("Inquiry sent successfully ✅");

      setForm({
        name: "",
        email: "",
        country: "",
        message: ""
      });

    } catch (err) {
      console.log(err);
      alert("Server error");
    }
  };

  return (
    <section className="min-h-screen bg-black text-white py-20">

      <div className="max-w-3xl mx-auto px-10">

        <h1 className="text-4xl font-bold mb-10 text-center">
          Send Inquiry
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6">

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            className="w-full p-3 bg-gray-900 rounded"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            className="w-full p-3 bg-gray-900 rounded"
          />

          <input
            type="text"
            name="country"
            placeholder="Country"
            value={form.country}
            onChange={handleChange}
            className="w-full p-3 bg-gray-900 rounded"
          />

          <textarea
            name="message"
            placeholder="Your Requirement"
            value={form.message}
            onChange={handleChange}
            className="w-full p-3 bg-gray-900 rounded"
            rows="5"
          />

          <button className="bg-green-500 px-6 py-3 rounded hover:bg-green-600">
            Send Inquiry
          </button>

        </form>

      </div>

    </section>
  );
}