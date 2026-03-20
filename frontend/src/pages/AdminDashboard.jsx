import { useEffect, useState } from "react";
// import { API } from "../config/config"; // ✅ IMPORTANT

export default function AdminDashboard() {

  const [requests, setRequests] = useState([]);
  const [activeTab, setActiveTab] = useState("requests");

  const token = localStorage.getItem("token");

  // ================= FETCH REQUESTS =================
  const fetchRequests = async () => {
    try {
      const res = await fetch(`${API}/requests`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      if (!res.ok) {
        const data = await res.json();
        alert(data.message);
        return;
      }

      const data = await res.json();
      setRequests(Array.isArray(data) ? data : []);

    } catch (err) {
      console.log(err);
      setRequests([]);
    }
  };

  useEffect(() => {
    fetchRequests();
  }, []);

  // ================= UPDATE STATUS =================
  const updateStatus = async (id, status) => {
    try {
      const res = await fetch(`${API}/requests/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({ status })
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.message);
        return;
      }

      fetchRequests();

    } catch (err) {
      console.log(err);
    }
  };

  const handleLogout = () => {
    localStorage.clear();
    window.location.href = "/login";
  };

  // ================= STATS =================
  const total = requests.length;
  const pending = requests.filter(r => r.status === "pending").length;
  const approved = requests.filter(r => r.status === "approved").length;
  const rejected = requests.filter(r => r.status === "rejected").length;

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white">

      {/* SIDEBAR */}
      <div className="w-64 bg-gray-950 p-6 space-y-6 border-r border-gray-800">

        <h1 className="text-2xl font-bold text-green-400">
          Admin Panel
        </h1>

        <button
          onClick={() => setActiveTab("requests")}
          className={`block w-full text-left px-3 py-2 rounded ${
            activeTab === "requests"
              ? "bg-green-500 text-black"
              : "hover:bg-gray-800"
          }`}
        >
          📦 Requests
        </button>

        <button
          onClick={() => setActiveTab("products")}
          className={`block w-full text-left px-3 py-2 rounded ${
            activeTab === "products"
              ? "bg-green-500 text-black"
              : "hover:bg-gray-800"
          }`}
        >
          🛒 Products
        </button>

        <button
          onClick={handleLogout}
          className="block w-full text-left text-red-400 hover:text-red-500 mt-10"
        >
          🚪 Logout
        </button>
      </div>

      {/* MAIN */}
      <div className="flex-1 p-10">

        <h1 className="text-4xl font-bold mb-8">
          Dashboard
        </h1>

        {/* STATS */}
        {activeTab === "requests" && (
          <div className="grid md:grid-cols-4 gap-6 mb-10">

            <div className="bg-gray-900 p-6 rounded-xl border border-gray-800">
              <p>Total</p>
              <h2 className="text-2xl">{total}</h2>
            </div>

            <div className="bg-yellow-500/10 p-6 rounded-xl border border-yellow-500">
              <p>Pending</p>
              <h2>{pending}</h2>
            </div>

            <div className="bg-green-500/10 p-6 rounded-xl border border-green-500">
              <p>Approved</p>
              <h2>{approved}</h2>
            </div>

            <div className="bg-red-500/10 p-6 rounded-xl border border-red-500">
              <p>Rejected</p>
              <h2>{rejected}</h2>
            </div>

          </div>
        )}

        {/* REQUESTS */}
        {activeTab === "requests" && (
          <div className="grid gap-6">

            {requests.map((req) => (
              <div key={req.id} className="bg-gray-900 p-6 rounded-xl">

                <h2 className="text-xl font-bold">
                  {req.product_name}
                </h2>

                <p>{req.email}</p>
                <p>Qty: {req.quantity}</p>
                <p>Status: {req.status}</p>

                <div className="flex gap-3 mt-3">
                  <button
                    onClick={() => updateStatus(req.id, "approved")}
                    className="bg-green-500 px-3 py-1 rounded"
                  >
                    Approve
                  </button>

                  <button
                    onClick={() => updateStatus(req.id, "rejected")}
                    className="bg-red-500 px-3 py-1 rounded"
                  >
                    Reject
                  </button>
                </div>

              </div>
            ))}

          </div>
        )}

        {/* PRODUCTS */}
        {activeTab === "products" && (
          <ProductManager token={token} />
        )}

      </div>
    </div>
  );
}


// ================= PRODUCT MANAGER =================
function ProductManager({ token }) {

  const [form, setForm] = useState({
    name: "",
    description: "",
    price: "",
    category: "",
    image: ""
  });

  const [products, setProducts] = useState([]);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  // ADD PRODUCT
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.name || !form.price) {
      alert("Name and price required");
      return;
    }

    const res = await fetch(`${API}/products`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify({
        ...form,
        price: Number(form.price)
      })
    });

    const data = await res.json();

    if (!res.ok) {
      alert(data.message);
      return;
    }

    alert("Product added ✅");

    setForm({
      name: "",
      description: "",
      price: "",
      category: "",
      image: ""
    });

    fetchProducts();
  };

  // FETCH PRODUCTS (FIXED)
  const fetchProducts = async () => {
    const res = await fetch(`${API}/products`);
    const data = await res.json();
    setProducts(data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="grid md:grid-cols-2 gap-10">

      <form onSubmit={handleSubmit} className="bg-gray-900 p-6 rounded-xl space-y-4">
        <h2 className="text-2xl font-bold">Add Product</h2>

        <input name="name" placeholder="Product Name" value={form.name} onChange={handleChange} className="w-full p-3 bg-gray-800 rounded" />
        <input name="price" placeholder="Price" value={form.price} onChange={handleChange} className="w-full p-3 bg-gray-800 rounded" />
        <input name="category" placeholder="Category" value={form.category} onChange={handleChange} className="w-full p-3 bg-gray-800 rounded" />
        <input name="image" placeholder="Image URL" value={form.image} onChange={handleChange} className="w-full p-3 bg-gray-800 rounded" />
        <textarea name="description" placeholder="Description" value={form.description} onChange={handleChange} className="w-full p-3 bg-gray-800 rounded" />

        <button className="bg-green-500 w-full py-3 rounded">
          Add Product
        </button>
      </form>

      <div>
        <h2 className="text-2xl mb-4">All Products</h2>

        {products.map((p) => (
          <div key={p.id} className="bg-gray-900 p-4 mb-3 rounded">
            <h3>{p.name}</h3>
            <p>₹ {p.price}</p>
          </div>
        ))}
      </div>

    </div>
  );
}