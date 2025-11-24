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
    <div className="flex min-h-screen flex-col bg-white">
      <header className="border-b border-gray-100 bg-white/90 backdrop-blur">
        <div className="mx-auto max-w-7xl px-4 py-6 md:px-8">
          <Link href="/" className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-red-800 hover:from-red-500 hover:to-red-700 transition-colors">
            TaskFlow
          </Link>
          <p className="mt-1 text-sm text-gray-500">(CIS-SRMS)</p>
        </div>
      </header>

      <main className="mx-auto flex w-full max-w-5xl flex-1 flex-col items-center justify-center px-4 py-10 md:px-8">
        <section className="w-full rounded-2xl border border-gray-100 bg-white p-8 shadow-lg md:p-12">
          <div className="grid items-center gap-12 lg:grid-cols-[1.2fr_0.8fr]">

            <div className="space-y-8">
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-red-600">
                  ACCOUNT RECOVERY
                </p>
                <h2 className="mt-3 text-3xl font-bold text-gray-900 tracking-tight">
                  Reset Password
                </h2>
                <p className="mt-2 text-base text-gray-500 leading-relaxed">
                  Enter your username and registered email address to receive password reset instructions.
                </p>
              </div>

              <form className="space-y-6" onSubmit={handleSubmit}>
                {[
                  {
                    label: "Username",
                    name: "username",
                    type: "text",
                    placeholder: "Enter your username",
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
                      className="text-sm font-semibold text-gray-700"
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
                      className="h-12 w-full rounded-lg border border-gray-300 bg-white px-4 text-base text-gray-900 shadow-sm focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-500/20 transition-all placeholder:text-gray-400"
                    />
                  </div>
                ))}

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full rounded-lg bg-red-600 py-3.5 text-base font-semibold text-white shadow-md hover:bg-red-700 hover:shadow-lg transition-all disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? "Sending Instructions..." : "Send Reset Link"}
                  </button>
                </div>

                <p className="text-center text-sm text-gray-500">
                  Remembered your password?{" "}
                  <Link href="/login" className="font-semibold text-red-600 hover:underline hover:text-red-700">
                    Back to Login
                  </Link>
                </p>
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
        © 2025 TaskFlow • MNSU IT Support
      </footer>
    </div>
  );
}
