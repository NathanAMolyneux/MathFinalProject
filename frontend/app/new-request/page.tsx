import AppShell from "@/components/layout/AppShell";
import Link from "next/link";
import { redirect } from "next/navigation";

const categories = ["IT Support", "Facilities", "Classroom Support"];
const priorities = ["P1", "P2", "P3", "P4"];

const inputClasses =
  "w-full rounded-full border border-slate-200 bg-slate-100 px-5 py-3 text-sm text-slate-700 placeholder:text-slate-400 focus:border-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-200";
const textAreaClasses =
  "w-full rounded-3xl border border-slate-200 bg-slate-100 px-5 py-3 text-sm text-slate-700 placeholder:text-slate-400 focus:border-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-200";

export const metadata = {
  title: "SRMS | New Request",
};

export default function NewRequestPage() {
  async function createRequestAction(formData: FormData) {
    "use server";
    const payload = {
      title: formData.get("title"),
      description: formData.get("description"),
      category: formData.get("category"),
      priority: formData.get("priority"),
      location: formData.get("location"),
      contactPreference: formData.get("contact"),
    };

    const ticketId = (Math.floor(Math.random() * 9000) + 1000).toString();

    // TODO: Replace the mock logic with an API call.
    redirect(
      `/success/${ticketId}?title=${encodeURIComponent(
        String(payload.title ?? "")
      )}`
    );
  }

  return (
    <AppShell title="New Request" mainClassName="px-6 py-8">
      <section className="rounded-[36px] border border-white bg-white p-8 shadow-[0_30px_90px_rgba(15,23,42,0.12)]">
        <form className="space-y-6" action={createRequestAction}>
          <FormField label="Request Title *">
            <input
              type="text"
              name="title"
              placeholder="Eg. Printer not working"
              className={inputClasses}
              required
            />
          </FormField>

          <FormField label="Description *">
            <textarea
              name="description"
              placeholder="Describe the issue"
              className={`${textAreaClasses} h-28 resize-none`}
              required
            />
          </FormField>

          <div className="grid gap-6 md:grid-cols-2">
            <FormField label="Category *">
              <select
                className={`${inputClasses} capitalize`}
                name="category"
                required
              >
                {categories.map((category) => (
                  <option key={category}>{category}</option>
                ))}
              </select>
            </FormField>
            <FormField label="Priority *">
              <select
                className={`${inputClasses} uppercase`}
                name="priority"
                required
              >
                {priorities.map((priority) => (
                  <option key={priority}>{priority}</option>
                ))}
              </select>
            </FormField>
          </div>

          <FormField label="Location *">
            <input
              type="text"
              name="location"
              placeholder="Eg. AH 110"
              className={inputClasses}
              required
            />
          </FormField>

          <FormField label="Attachment">
            <label
              className={`${inputClasses} flex cursor-pointer items-center justify-between text-sm text-slate-500`}
            >
              <span>Drag & Drop or Browse</span>
              <span className="text-slate-400">Upload</span>
              <input type="file" className="hidden" />
            </label>
          </FormField>

          <FormField label="Contact Preference *">
            <input
              type="text"
              name="contact"
              placeholder="Eg. Email, Phone"
              className={inputClasses}
              required
            />
          </FormField>

          <div className="flex flex-wrap gap-4 pt-2">
            <button
              type="submit"
              className="rounded-full bg-green-500 px-8 py-3 font-semibold text-white shadow-lg shadow-green-500/40 transition hover:brightness-110"
            >
              Submit
            </button>
            <button
              type="reset"
              className="rounded-full bg-red-500 px-8 py-3 font-semibold text-white shadow-lg shadow-red-500/40 transition hover:brightness-110"
            >
              Remove
            </button>
          </div>
        </form>
      </section>

      <footer className="pb-6 text-center text-xs font-semibold text-slate-500">
        © 2025 • Smart Service Request Management System • MNSU IT Support
      </footer>
      <p className="text-center text-xs text-slate-500">
        Return to{" "}
        <Link href="/dashboard" className="font-semibold text-slate-900">
          dashboard
        </Link>
      </p>
    </AppShell>
  );
}

function FormField({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label className="flex flex-col gap-2 text-sm font-semibold text-slate-600">
      {label}
      {children}
    </label>
  );
}
