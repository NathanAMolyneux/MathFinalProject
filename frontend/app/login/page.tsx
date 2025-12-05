"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation"; // Import router for redirection

const helpItems = [
  {
    title: "Forgot your password?",
    detail: 'Click "Forgot password" below the password field.',
  },
  {
    title: "New user?",
    detail: 'Select "Sign Up" to create your account.',
  },
  {
    title: "Trouble logging in?",
    detail: "Ensure your username matches your university email.",
  },
  {
    title: "For technical issues, contact:",
    detail: "support@mnsu.edu",
  },
  {
    title: "Office Hours",
    detail: "Monday to Friday, 8:00 AM to 5:00 PM",
  },
];

export default function LoginPage() {
  const router = useRouter(); // Initialize router
  const [username, setUsername] = useState(""); // This captures the input
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(""); // New state for error messages

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    setError(""); // Clear previous errors

    try {
      // 1. Send data to Backend
      // Note: We are sending 'username' as 'email' because your backend currently expects an email.
      const res = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: username, // Mapping the input to backend 'email' field
          password: password
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Login failed");
      }

      // 2. Success!
      // Optional: Save the user data/token to localStorage if needed
      // localStorage.setItem("user", JSON.stringify(data.user));

      alert("Login Successful! Welcome " + data.user.username);

      // 3. Redirect to Dashboard
      // router.push("/dashboard");
      if (data.user.role === 'admin' || data.user.role === 'faculty') {
        router.push("/dashboard"); // <--- Admins go here
      } else {
        router.push("/edashboard"); // <--- Students go here
      }

    } catch (err: any) {
      setError(err.message); // Display the error from backend
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <header className="border-b border-gray-100 bg-white/90 backdrop-blur">
        <div className="mx-auto max-w-7xl px-4 py-6 md:px-8">
          <Link href="/" className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-red-800 hover:from-red-500 hover:to-red-700 transition-colors">
            Calculus 2 Notes App
          </Link>
          <p className="mt-1 text-sm text-gray-500">(MATH 122)</p>
        </div>
      </header>

      <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col items-center justify-center px-4 py-10 md:px-8">
        <section className="w-full rounded-2xl border border-gray-100 bg-white p-8 shadow-lg md:p-12">
          <div className="grid items-center gap-12 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="space-y-8">
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-red-600">
                  SECURE ACCESS
                </p>
                <h2 className="mt-3 text-3xl font-bold text-gray-900 tracking-tight">
                  Welcome Back
                </h2>
                <p className="mt-2 text-base text-gray-500 leading-relaxed">
                  Please enter your credentials to access the Calculus 2 Notes App.
                </p>
              </div>

              <form
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                {/* Error Message Display */}
                {error && (
                  <div className="p-4 rounded-lg bg-red-50 border border-red-100 text-red-600 text-sm font-medium flex items-center">
                    <span className="mr-2">⚠️</span> {error}
                  </div>
                )}

                <div className="space-y-2">
                  <label
                    htmlFor="username"
                    className="text-sm font-semibold text-gray-700"
                  >
                    Username (Email)
                  </label>
                  <input
                    id="username"
                    type="text"
                    placeholder="Enter your registered email"
                    value={username}
                    onChange={(event) => setUsername(event.target.value)}
                    className="h-12 w-full rounded-lg border border-gray-300 bg-white px-4 text-base text-gray-900 shadow-sm focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-500/20 transition-all placeholder:text-gray-400"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="password"
                    className="text-sm font-semibold text-gray-700"
                  >
                    Password
                  </label>
                  <input
                    id="password"
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    className="h-12 w-full rounded-lg border border-gray-300 bg-white px-4 text-base text-gray-900 shadow-sm focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-500/20 transition-all placeholder:text-gray-400"
                    required
                  />
                  <div className="flex justify-end">
                    <Link
                      href="/forgot-password"
                      className="text-sm font-medium text-red-600 hover:text-red-700 hover:underline"
                    >
                      Forgot password?
                    </Link>
                  </div>
                </div>

                        {/* 🚀 Bypass / Guest Button */}
        <button
          onClick={() => router.push("/dashboard")}
          className="w-full mt-4 py-3 bg-gray-300 text-gray-900 rounded-lg hover:bg-gray-400 transition"
        >
          Continue Without Logging In
        </button>

                <div className="flex flex-col gap-4 sm:flex-row pt-2">
                  <button
                    type="submit"
                    className="flex-1 rounded-lg bg-red-600 py-3.5 text-base font-semibold text-white shadow-md hover:bg-red-700 hover:shadow-lg transition-all disabled:opacity-70 disabled:cursor-not-allowed"
                    disabled={isLoading}
                  >
                    {isLoading ? "Signing in..." : "Sign In"}
                  </button>
                  <Link
                    href="/signup"
                    className="flex-1 rounded-lg border border-gray-200 bg-white py-3.5 text-center text-base font-semibold text-gray-700 shadow-sm hover:bg-gray-50 hover:text-red-600 hover:border-red-100 transition-all"
                  >
                    Create Account
                  </Link>
                </div>
              </form>
            </div>

            <aside className="h-fit w-full rounded-2xl border border-gray-100 bg-gray-50/50 p-8">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Need Assistance?</h3>
              <ul className="space-y-4">
                {helpItems.map((item) => (
                  <li key={item.title} className="text-sm">
                    <p className="font-semibold text-gray-900 mb-1">{item.title}</p>
                    <p className="text-gray-500 leading-relaxed">{item.detail}</p>
                  </li>
                ))}
              </ul>
            </aside>
          </div>
        </section>
      </main>

      <footer className="mt-auto border-t border-gray-100 bg-white px-4 py-6 text-center text-sm font-medium text-gray-500">
        © 2025 Calculus 2 Notes App • MNSU Math 122
      </footer>
    </div>
  );
}
