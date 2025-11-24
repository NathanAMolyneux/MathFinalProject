"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

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
  const router = useRouter();

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    dob: "",
    phone: "",
    password: "",
    confirmPassword: "",
    // role is removed from state because it's always 'student'
  });

  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // --- ID GENERATION LOGIC ---
  const generateEnumber = (fullName: string) => {
    const parts = fullName.trim().split(" ");
    const firstName = parts[0] || "XX";
    const lastName = parts.length > 1 ? parts[parts.length - 1] : firstName;

    const lastNameLetter = lastName.charAt(0).toUpperCase();
    const firstNameTwoLetters = firstName.substring(0, 2).toUpperCase();
    const randomDigits = Math.floor(1000 + Math.random() * 9000);

    return `TF-E${lastNameLetter}${randomDigits}${firstNameTwoLetters}`;
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");
    setIsLoading(true);

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      setIsLoading(false);
      return;
    }

    const generatedEnumber = generateEnumber(formData.username);

    try {
      const res = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: formData.username,
          email: formData.email,
          password: formData.password,
          dob: formData.dob,
          phone: formData.phone,
          enumber: generatedEnumber,
          role: "student" // <--- SECURITY: Always forced to "student"
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Registration failed");
      }

      alert(`Account created successfully!\nYour E-Number is: ${generatedEnumber}\nPlease login.`);
      router.push("/login");

    } catch (err: any) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  // Field configuration
  const fields = [
    { label: "Full Name (Username)", name: "username", type: "text", placeholder: "John Doe" },
    { label: "Email", name: "email", type: "email", placeholder: "example@mnsu.edu" },
    { label: "Phone Number", name: "phone", type: "tel", placeholder: "123-456-7890" },
    { label: "Date of Birth", name: "dob", type: "date", placeholder: "MM/DD/YYYY" },
    { label: "Password", name: "password", type: "password", placeholder: "Create a password" },
    { label: "Confirm Password", name: "confirmPassword", type: "password", placeholder: "Confirm your password" },
  ];

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

      <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col items-center justify-center px-4 py-10 md:px-8">
        <section className="w-full rounded-2xl border border-gray-100 bg-white p-8 shadow-lg md:p-12">
          <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">

            <div className="space-y-8">
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-red-600">
                  JOIN TASKFLOW
                </p>
                <h2 className="mt-3 text-3xl font-bold text-gray-900 tracking-tight">
                  Create Your Account
                </h2>
                <p className="mt-2 text-base text-gray-500 leading-relaxed">
                  Join the platform to start managing your service requests efficiently. We will assign you a unique Student ID automatically.
                </p>
              </div>

              <form className="space-y-5" onSubmit={handleSubmit}>
                {error && (
                  <div className="p-4 rounded-lg bg-red-50 border border-red-100 text-red-600 text-sm font-medium flex items-center">
                    <span className="mr-2">⚠️</span> {error}
                  </div>
                )}

                <div className="grid gap-5 md:grid-cols-2">
                  {fields.map((field) => (
                    <div key={field.name} className="space-y-1.5">
                      <label className="text-sm font-semibold text-gray-700" htmlFor={field.name}>
                        {field.label}
                      </label>
                      <input
                        id={field.name}
                        name={field.name}
                        type={field.type}
                        placeholder={field.placeholder}
                        value={(formData as Record<string, string>)[field.name]}
                        onChange={handleChange}
                        className="h-12 w-full rounded-lg border border-gray-300 bg-white px-4 text-base text-gray-900 shadow-sm focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-500/20 transition-all placeholder:text-gray-400"
                        required
                      />
                    </div>
                  ))}
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full rounded-lg bg-red-600 py-3.5 text-base font-semibold text-white shadow-md hover:bg-red-700 hover:shadow-lg transition-all disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isLoading ? "Creating Account..." : "Create Account"}
                  </button>
                </div>

                <p className="text-center text-sm text-gray-500">
                  Already have an account?{" "}
                  <Link href="/login" className="font-semibold text-red-600 hover:underline hover:text-red-700">
                    Sign in here
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