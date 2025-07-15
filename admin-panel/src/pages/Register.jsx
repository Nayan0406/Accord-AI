import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Register = () => {
    const [form, setForm] = useState({ username: "", email: "", password: "" });
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");

    const handleChange = (e) =>
        setForm({ ...form, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setMessage("");
        try {
            const res = await axios.post(
                "https://vaipali-website-backend.vercel.app/api/auth/register",
                form
            );
            setMessage("✅ Registered successfully! Now you can log in.");
            setForm({ username: "", email: "", password: "" });
        } catch (err) {
            setMessage(
                "❌ Registration failed: " +
                (err.response?.data?.message || "Something went wrong")
            );
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
            <form
                onSubmit={handleSubmit}
                className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8 space-y-6"
            >
                <h2 className="text-3xl font-extrabold text-center text-gray-800">
                    Admin Registration
                </h2>

                {message && (
                    <div className="text-sm text-center text-red-600 bg-red-50 p-2 rounded">
                        {message}
                    </div>
                )}

                <div>
                    <label className="block mb-1 font-medium text-gray-700">
                        Username
                    </label>
                    <input
                        type="text"
                        name="username"
                        value={form.username}
                        onChange={handleChange}
                        required
                        placeholder="e.g. vaipali_admin"
                        className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                </div>

                <div>
                    <label className="block mb-1 font-medium text-gray-700">Email</label>
                    <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        placeholder="e.g. admin@vaipali.com"
                        className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                </div>

                <div>
                    <label className="block mb-1 font-medium text-gray-700">
                        Password
                    </label>
                    <input
                        type="password"
                        name="password"
                        value={form.password}
                        onChange={handleChange}
                        required
                        placeholder="********"
                        className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                </div>

                <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300"
                >
                    {loading ? "Registering..." : "Register"}
                </button>

                <p className="text-center text-sm text-gray-500">
                    Already have an account?{" "}
                    <Link to="/login" className="text-blue-600 hover:underline font-medium">
                        Login here
                    </Link>
                </p>
            </form>
        </div>
    );
};

export default Register;
