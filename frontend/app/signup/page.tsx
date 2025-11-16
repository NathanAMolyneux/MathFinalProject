"use client";

import Link from "next/link";
import { useState } from "react";

const helpItems = [
  {
    title: "Having trouble creating your account?",
    detail: "Make sure all required fields are filled out correctly.",
  },
  {
    title: "Email not accepted?",
    detail: "Use your official university email address (example@mnsu.edu).",
  },
  {
    title: "Password issues?",
    detail: "Ensure your password has at least 8 characters, including a number or symbol.",
  },
  {
    title: "Forgot your login info?",
    detail: "Go back to the sign-in page and click “Forgot password”.",
  },
  {
    title: "Still need assistance?",
    detail: "Contact support@mnsu.edu • Office Hours: Mon–Fri, 8:00 AM – 5:00 PM",
  },
];

export default function SignUpPage() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    dob: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await new Promise((resolve) => setTimeout(resolve, 400));
    alert("Account created (demo only)");
  };

  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-[#f1f3f7] to-[#d8dce5]">
      <header className="border-b border-[#d1d5e0] bg-white/80 backdrop-blur">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-1 px-4 py-6 text-center text-[#1f2433]">
          <p className="text-sm font-semibold uppercase tracking-[0.4em] text-[#8b92a1]">
            SMRS
          </p>
          <h1 className="text-2xl font-bold">
            Welcome to the Smart Service Request Management System
          </h1>
          <p className="text-sm text-[#6b7385]">
            Create your account! You'll be able to manage your service requests seamlessly.
          </p>
        </div>
      </header>

      <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col items-center justify-center px-4 py-10">
        <section className="grid w-full gap-8 rounded-[32px] border border-[#e1e4ed] bg-white/90 p-6 shadow-[0_26px_90px_rgba(15,23,42,0.25)] backdrop-blur md:p-10 lg:grid-cols-[1.35fr_0.65fr]">
          <form className="space-y-5 text-sm text-[#1f2433]" onSubmit={handleSubmit}>
            {[
              { label: "Username", name: "username", type: "text", placeholder: "Username" },
              { label: "Email", name: "email", type: "email", placeholder: "example@mnsu.edu" },
              { label: "Date of Birth", name: "dob", type: "date", placeholder: "MM/DD/YYYY" },
              { label: "Password", name: "password", type: "password", placeholder: "Password" },
              { label: "Confirm Password", name: "confirmPassword", type: "password", placeholder: "Re-enter Password" },
            ].map((field) => (
              <div key={field.name} className="space-y-1.5">
                <label className="text-sm font-semibold text-[#3a4251]" htmlFor={field.name}>
                  {field.label}
                </label>
                <input
                  id={field.name}
                  name={field.name}
                  type={field.type}
                  placeholder={field.placeholder}
                  value={(formData as Record<string, string>)[field.name]}
                  onChange={handleChange}
                  className="h-12 w-full rounded-full border border-[#d2d7e1] bg-white px-5 text-sm text-[#1f2433] shadow-inner focus:border-[#20d1be] focus:outline-none focus:ring-2 focus:ring-[#20d1be]/40"
                  required
                />
              </div>
            ))}

            <button
              type="submit"
              className="mt-4 w-full rounded-full bg-gradient-to-r from-[#00d0a6] to-[#00a86b] py-3 text-base font-semibold text-white shadow-lg shadow-[#00a86b]/35 transition hover:brightness-110"
            >
              Create Account
            </button>

            <p className="text-center text-xs text-[#6b7385]">
              Already have an account?{" "}
              <Link href="/" className="font-semibold text-[#00a0de] hover:underline">
                Go to Login
              </Link>
            </p>
          </form>

          <aside className="h-fit w-full max-w-sm self-center rounded-[24px] border border-[#cfd7e6] bg-white/95 p-6 shadow-[0_12px_34px_rgba(15,23,42,0.12)] backdrop-blur">
            <p className="text-xl font-semibold text-[#00a0de]">Need help?</p>
            <ul className="mt-5 space-y-4 text-sm text-[#4c5465]">
              {helpItems.map((item) => (
                <li key={item.title}>
                  <span className="font-semibold text-[#2f3747]">{item.title}</span>
                  <br />
                  <span>{item.detail}</span>
                </li>
              ))}
            </ul>
          </aside>
        </section>
      </main>

      <footer className="border-t border-[#d8dde7] bg-[#f8fafc] px-4 py-4 text-center text-xs font-semibold text-[#70778a]">
        ©2025 • Smart Service Request Management System • MNSU IT Support
      </footer>
    </div>
  );
}

