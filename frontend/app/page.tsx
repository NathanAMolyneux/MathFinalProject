"use client";

import Link from "next/link";
import { useState } from "react";

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

export default function Home() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 600));
    setIsLoading(false);
  };

  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-[#e8eaef] to-[#d9dce3]">
      <header className="border-b border-[#d1d5e0] bg-white/70 backdrop-blur">
        <div className="mx-auto max-w-7xl px-4 py-6 md:px-8">
          <h1 className="text-2xl font-bold text-[#1a1f2e]">
            Smart Service Request Management System
          </h1>
          <p className="mt-1 text-sm text-[#7a8293]">(SRMS)</p>
        </div>
      </header>

      <main className="mx-auto flex w-full max-w-7xl flex-1 flex-col items-center justify-center px-4 py-10 md:px-8">
        <section className="w-full rounded-3xl border border-[#e1e4ed] bg-white/80 p-6 shadow-xl shadow-[#0f172a1a] md:p-10">
          <div className="grid items-center gap-10 lg:grid-cols-[1.45fr_0.8fr]">
            <div className="space-y-8 lg:p-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.55em] text-[#8b92a1]">
                  SRMS
                </p>
                <h2 className="mt-2 text-3xl font-semibold text-[#1f2433]">
                  Welcome to the Smart Service Request Management System (SRMS)
                </h2>
                <p className="mt-2 text-sm text-[#5c6373]">
                  Please enter your username and password to login.
                </p>
              </div>

              <form
                onSubmit={handleSubmit}
                className="space-y-6 rounded-2xl border border-[#dadee7] bg-[#f9fafc] p-6"
              >
                <div className="space-y-2">
                  <label
                    htmlFor="username"
                    className="text-sm font-semibold text-[#3a4251]"
                  >
                    Username
                  </label>
                  <input
                    id="username"
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(event) => setUsername(event.target.value)}
                    className="h-12 w-full rounded-full border border-[#d2d7e1] bg-white px-5 text-sm text-[#1f2433] shadow-inner focus:border-[#20d1be] focus:outline-none focus:ring-2 focus:ring-[#20d1be]/40"
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="password"
                    className="text-sm font-semibold text-[#3a4251]"
                  >
                    Password
                  </label>
                  <input
                    id="password"
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    className="h-12 w-full rounded-full border border-[#d2d7e1] bg-white px-5 text-sm text-[#1f2433] shadow-inner focus:border-[#20d1be] focus:outline-none focus:ring-2 focus:ring-[#20d1be]/40"
                  />
                  <div className="flex justify-end">
                    <Link
                      href="/forgot-password"
                      className="text-xs font-bold text-[#ff5c64] hover:underline"
                    >
                      Forgot password?
                    </Link>
                  </div>
                </div>

                <div className="flex flex-col gap-3 sm:flex-row">
                  <button
                    type="submit"
                    className="flex-1 rounded-full bg-gradient-to-r from-[#06d8be] to-[#00b36c] py-3 text-base font-semibold text-white shadow-lg shadow-[#00b36c]/35 transition hover:brightness-110 disabled:opacity-60"
                    disabled={isLoading}
                  >
                    {isLoading ? "Signing in..." : "Login"}
                  </button>
                  <Link
                    href="/signup"
                    className="flex-1 rounded-full bg-gradient-to-r from-[#ff7361] to-[#f0302f] py-3 text-center text-base font-semibold text-white shadow-lg shadow-[#f0302f]/30 transition hover:brightness-110"
                  >
                    Sign up
                  </Link>
                </div>
                <p className="text-center text-xs text-[#6b7385]">
                  Preview the admin experience on the{" "}
                  <Link href="/dashboard" className="font-semibold text-[#00a0de] hover:underline">
                    SRMS dashboard
                  </Link>
                  .
                </p>
              </form>
            </div>

            <aside className="h-fit w-full max-w-sm self-center rounded-[28px] border border-[#cfd7e6] bg-white/95 p-7 shadow-[0_10px_26px_rgba(15,23,42,0.12)] backdrop-blur">
              <p className="text-xl font-semibold text-[#00a0de]">Need help?</p>
              <p className="mt-2 text-sm text-[#5c6373]">
                Quick tips to help you access your SRMS account.
              </p>

              <ul className="mt-5 space-y-3 text-sm text-[#4c5465]">
                {helpItems.map((item) => (
                  <li key={item.title}>
                    <span className="font-semibold text-[#2f3747]">
                      {item.title}
                    </span>{" "}
                    – {item.detail}
                  </li>
                ))}
              </ul>
            </aside>
          </div>
        </section>

      </main>

      <footer className="mt-auto border-t border-[#d8dde7] bg-[#f8fafc] px-4 py-4 text-center text-xs font-semibold text-[#70778a]">
        ©2025 • Smart Service Request Management System • MNSU IT Support
      </footer>
    </div>
  );
}
