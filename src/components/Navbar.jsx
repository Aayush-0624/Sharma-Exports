import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {

  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const token = localStorage.getItem("token");
  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    window.location.href = "/login";
  };

  return (
    <nav className="w-full bg-black text-white sticky top-0 z-50">

      <div className="flex items-center justify-between px-4 md:px-12 py-4">

        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src="/logo1.png" alt="Logo" className="h-12 md:h-16" />
          <h1 className="text-lg md:text-xl font-bold">
            <Link to="/home">Sharma Global</Link>
          </h1>
        </div>

        {/* Hamburger */}
        <button
          onClick={() => setOpen(true)}
          className="md:hidden text-2xl"
        >
          ☰
        </button>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 items-center">
          <Link to="/home"><li>Home</li></Link>
          <Link to="/about"><li>About</li></Link>
          <Link to="/services"><li>Services</li></Link>
          <Link to="/products"><li>Products</li></Link>
          <Link to="/contact"><li>Contact</li></Link>
        </ul>

        {/* Desktop Right */}
        <div className="hidden md:flex items-center gap-4">

          {!token ? (
            <>
              <Link to="/login">
                <button className="border px-4 py-2 rounded hover:bg-white hover:text-black transition">
                  Login
                </button>
              </Link>

              <Link to="/signup">
                <button className="border px-4 py-2 rounded hover:bg-white hover:text-black transition">
                  Signup
                </button>
              </Link>
            </>
          ) : (
            <>
              <span className="text-green-400 font-semibold">
                {user?.name || "User"}
              </span>

              {user?.role === "admin" && (
                <button
                  onClick={() => navigate("/admin-dashboard")}
                  className="bg-green-500 px-4 py-2 rounded"
                >
                  Admin
                </button>
              )}

              <button
                onClick={handleLogout}
                className="border border-red-500 px-4 py-2 rounded hover:bg-red-500 transition"
              >
                Logout
              </button>
            </>
          )}

        </div>

      </div>

      {/* 🔥 BACKDROP (blur + dark) */}
      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity duration-300 ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setOpen(false)}
      />

      {/* 🔥 SLIDE MENU (RIGHT SIDE) */}
      <div
        className={`fixed top-0 right-0 h-full w-72 bg-gray-900 z-50 transform transition-transform duration-300 ease-in-out ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >

        {/* Close Button */}
        <div className="flex justify-end p-4">
          <button onClick={() => setOpen(false)} className="text-2xl">
            ✕
          </button>
        </div>

        {/* Menu Items */}
        <div className="flex flex-col px-6 gap-6 text-lg">

          <Link to="/home" onClick={() => setOpen(false)}>Home</Link>
          <Link to="/about" onClick={() => setOpen(false)}>About</Link>
          <Link to="/services" onClick={() => setOpen(false)}>Services</Link>
          <Link to="/products" onClick={() => setOpen(false)}>Products</Link>
          <Link to="/contact" onClick={() => setOpen(false)}>Contact</Link>

          <div className="mt-6 border-t border-gray-700 pt-6">

            {!token ? (
              <>
                <Link to="/login" onClick={() => setOpen(false)}>
                  <button className="w-full border px-4 py-2 rounded mb-3">
                    Login
                  </button>
                </Link>

                <Link to="/signup" onClick={() => setOpen(false)}>
                  <button className="w-full border px-4 py-2 rounded">
                    Signup
                  </button>
                </Link>
              </>
            ) : (
              <>
                <p className="text-green-400 mb-3">
                  {user?.name || "User"}
                </p>

                {user?.role === "admin" && (
                  <button
                    onClick={() => {
                      navigate("/admin-dashboard");
                      setOpen(false);
                    }}
                    className="w-full bg-green-500 px-4 py-2 rounded mb-3"
                  >
                    Admin Panel
                  </button>
                )}

                <button
                  onClick={handleLogout}
                  className="w-full border border-red-500 px-4 py-2 rounded"
                >
                  Logout
                </button>
              </>
            )}

          </div>

        </div>

      </div>

    </nav>
  );
}