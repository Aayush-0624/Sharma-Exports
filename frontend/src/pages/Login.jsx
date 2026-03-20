import { useState } from "react";
import { useNavigate } from "react-router-dom";
 import { API } from "../utils/api"; // ✅ IMPORT API

export default function Login({ role = "user", onClose, redirectPath }) {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const isPopup = !!onClose;

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Please fill all fields");
      return;
    }

    try {
      const res = await fetch(`${API}/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password })
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.message || "Login failed");
        return;
      }

      // ✅ Save user
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));

      // ✅ Close popup
      if (onClose) onClose();

      // 🔥 PRODUCT REDIRECT (FIXED)
      if (redirectPath) {
        navigate("/inquiry", {
          state: {
            productId: redirectPath.id,
            productName: redirectPath.name
          }
        });
        return;
      }

      // 🔥 ROLE BASED REDIRECT
      if (data.user.role === "admin") {
        navigate("/admin-dashboard");
      } else {
        navigate("/home");
      }

    } catch (err) {
      alert("Server error");
      console.log(err);
    }
  };

  const form = (
    <form
      onSubmit={handleLogin}
      className="relative bg-gray-900 p-10 rounded-lg w-96 border-2 border-green-500"
    >

      {/* ❌ Close only in popup */}
      {isPopup && (
        <button
          type="button"
          onClick={onClose}
          className="absolute top-3 right-3 text-white text-xl"
        >
          ✕
        </button>
      )}

      <h1 className="text-3xl font-bold mb-6 text-center text-green-500">
        Login
      </h1>

      <input
        type="text"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full mb-3 p-3 bg-black text-white rounded border border-gray-700 outline-none focus:border-green-500"
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="w-full mb-6 p-3 bg-black text-white rounded border border-gray-700 outline-none focus:border-green-500"
      />

      <button
        type="submit"
        className="w-full py-3 rounded bg-green-500 hover:bg-green-600"
      >
        Login
      </button>

    </form>
  );

  // 🔥 POPUP MODE
  if (isPopup) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
        {form}
      </div>
    );
  }

  // 🔥 PAGE MODE
  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      {form}
    </div>
  );
}