export default function AdminLogin() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-black text-white">

      <form className="bg-gray-900 p-10 rounded-lg w-96 border-2 border-red-500">

        <h1 className="text-3xl font-bold mb-6 text-center text-red-500">
          Admin Login
        </h1>

        <input
          type="email"
          placeholder="Admin Email"
          className="w-full mb-4 p-3 bg-black rounded border border-gray-700"
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full mb-6 p-3 bg-black rounded border border-gray-700"
        />

        <button className="w-full bg-red-500 hover:bg-red-600 py-3 rounded">
          Login as Admin
        </button>

      </form>

    </section>
  );
}