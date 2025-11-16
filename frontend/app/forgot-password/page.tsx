"use client";

import Link from "next/link";
import { useState } from "react";

const helpItems = [
  {
    title: "Didn’t receive a reset email?",
    detail:
      "Check your spam folder or try again after a few minutes.",
  },
  {
    title: "Email mismatch?",
    detail:
      "Make sure the email you entered matches your registered university address.",
  },
  {
    title: "Account inactive or username forgotten?",
    detail:
      "Contact support to verify your identity and update your login details.",
  },
  {
    title: "Need additional assistance?",
    detail:
      "Email support@mnsu.edu • Office Hours: Mon–Fri, 8:00 AM – 5:00 PM",
  },
];

export default function ForgotPasswordPage() {
  const [formData, setFormData] = useState({ username: "", email: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 500));
    alert("Password reset instructions sent (demo).");
    setIsSubmitting(false);
  };

  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-[#f4f6fb] to-[#dcdfe8]">
      <header className="border-b border-[#d1d5e0] bg-white/80 backdrop-blur">
        <div className="mx-auto flex w-full max-w-5xl flex-col gap-2 px-4 py-6 text-center text-[#1f2433]">
          <h1 className="text-2xl font-bold">
            Enter your username and email to reset your password
          </h1>
          <p className="text-sm text-[#6b7385]">
            We’ll send reset instructions to the registered email address.
          </p>
        </div>
      </header>

      <main className="mx-auto flex w-full max-w-5xl flex-1 flex-col items-center justify-center px-4 py-10">
        <section className="flex w-full flex-col items-center gap-8 rounded-[32px] border border-[#dfdfe3] bg-white/90 p-6 text-sm text-[#1f2433] shadow-[0_22px_70px_rgba(15,23,42,0.23)] backdrop-blur md:p-10 lg:flex-row">
          <form className="w-full max-w-xl flex-1 space-y-5" onSubmit={handleSubmit}>
            {[
              {
                label: "Username",
                name: "username",
                type: "text",
                placeholder: "Username",
              },
              {
                label: "Email",
                name: "email",
                type: "email",
                placeholder: "example@mnsu.edu",
              },
            ].map((field) => (
              <div key={field.name} className="space-y-1.5">
                <label
                  className="text-sm font-semibold text-[#3a4251]"
                  htmlFor={field.name}
                >
                  {field.label}
                </label>
                <input
                  id={field.name}
                  name={field.name}
                  type={field.type}
                  placeholder={field.placeholder}
                  value={(formData as Record<string, string>)[field.name]}
                  onChange={handleChange}
                  required
                  className="h-12 w-full rounded-full border border-[#d2d7e1] bg-white px-5 text-sm text-[#1f2433] shadow-inner focus:border-[#1fccce] focus:outline-none focus:ring-2 focus:ring-[#1fccce]/40"
                />
              </div>
            ))}

            <button
              type="submit"
              disabled={isSubmitting}
              className="mt-2 w-full rounded-full bg-gradient-to-r from-[#24c1dd] to-[#00a86b] py-3 text-base font-semibold text-white shadow-lg shadow-[#00a86b]/30 transition hover:brightness-110 disabled:opacity-60"
            >
              {isSubmitting ? "Sending..." : "Send reset link"}
            </button>

            <p className="text-center text-xs text-[#6b7385]">
              Remembered your password?{" "}
              <Link href="/" className="font-semibold text-[#00a0de] hover:underline">
                Go back to Login
              </Link>
            </p>
          </form>

          <aside className="h-fit w-full max-w-sm self-center rounded-[24px] border border-[#cfd7e6] bg-white/95 p-6 shadow-[0_12px_34px_rgba(15,23,42,0.12)] backdrop-blur">
            <p className="text-xl font-semibold text-[#00a0de]">Need help?</p>
            <ul className="mt-5 space-y-3 text-sm text-[#4c5465]">
              {helpItems.map((item) => (
                <li key={item.title}>
                  <span className="font-semibold text-[#2f3747]">
                    {item.title}
                  </span>
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

