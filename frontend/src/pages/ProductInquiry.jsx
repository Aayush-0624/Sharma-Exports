import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { API } from "../utils/api"; // ✅ make sure this file exists

export default function ProductInquiry() {

  const { id } = useParams();

  const [form, setForm] = useState({
    name: "",
    email: "",
    country: "",
    product: "",
    product_id: "",
    quantity: "",
    message: ""
  });

  // ✅ HANDLE INPUT
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  // ✅ LOAD USER + PRODUCT ID
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));

    if (user) {
      setForm((prev) => ({
        ...prev,
        name: user.name,
        email: user.email
      }));
    }

    if (id) {
      setForm((prev) => ({
        ...prev,
        product_id: id,
        product: `Product ID: ${id}` // optional display
      }));
    } else {
      alert("Invalid product");
    }

  }, [id]);

  // ✅ SUBMIT
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem("token");

      if (!token) {
        alert("Please login first");
        return;
      }

      if (!form.product_id) {
        alert("Product not selected properly");
        return;
      }

      if (!form.quantity) {
        alert("Please enter quantity");
        return;
      }

      const res = await fetch(`${API}/requests`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({
          product_id: Number(form.product_id),
          quantity: Number(form.quantity),
          message: form.message
        })
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.message || "Failed to send inquiry");
        return;
      }

      alert("Inquiry submitted successfully ✅");

      // reset fields
      setForm((prev) => ({
        ...prev,
        country: "",
        quantity: "",
        message: ""
      }));

    } catch (err) {
      console.log(err);
      alert("Server error");
    }
  };

  return (
    <section className="min-h-screen bg-black text-white py-20">

      <div className="max-w-4xl mx-auto px-10">

        <h1 className="text-4xl font-bold mb-10 text-center">
          Product Inquiry
        </h1>

        <form
          onSubmit={handleSubmit}
          className="bg-gray-900 p-10 rounded-lg grid md:grid-cols-2 gap-6"
        >

          {/* Name */}
          <input
            type="text"
            name="name"
            value={form.name}
            readOnly
            className="p-3 rounded bg-gray-800"
          />

          {/* Email */}
          <input
            type="email"
            name="email"
            value={form.email}
            readOnly
            className="p-3 rounded bg-gray-800"
          />

          {/* Country */}
          <input
            type="text"
            name="country"
            placeholder="Country"
            value={form.country}
            onChange={handleChange}
            className="p-3 rounded bg-gray-800"
          />

          {/* Product */}
          <input
            type="text"
            name="product"
            value={form.product}
            readOnly
            className="p-3 rounded bg-gray-800"
          />

          {/* Quantity */}
          <input
            type="number"
            name="quantity"
            placeholder="Quantity Required"
            value={form.quantity}
            onChange={handleChange}
            className="p-3 rounded bg-gray-800"
          />

          {/* Message */}
          <textarea
            name="message"
            placeholder="Additional Details"
            rows="5"
            value={form.message}
            onChange={handleChange}
            className="p-3 rounded bg-gray-800 md:col-span-2"
          />

          {/* Submit */}
          <button
            type="submit"
            className="bg-green-500 hover:bg-green-600 py-3 rounded md:col-span-2"
          >
            Submit Inquiry
          </button>

        </form>

      </div>

    </section>
  );
}