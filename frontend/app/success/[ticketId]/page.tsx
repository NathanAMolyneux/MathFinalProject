"use client";

import AppShell from "@/components/layout/AppShell";
import Link from "next/link";
import { useParams, useSearchParams } from "next/navigation";

export default function SuccessPage() {
  const params = useParams<{ ticketId: string }>();
  const search = useSearchParams();
  const title = search.get("title");

  const ticketId = params.ticketId ?? "0000";

  return (
    <AppShell title="Request Submitted" mainClassName="px-6 py-12">
      <div className="mx-auto max-w-2xl rounded-3xl border border-white bg-white p-10 text-center shadow-[0_30px_90px_rgba(15,23,42,0.12)]">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">
          Success
        </p>
        <h1 className="mt-2 text-3xl font-bold text-slate-900">
          Your request has been submitted!
        </h1>
        {title && (
          <p className="mt-2 text-base text-slate-600">
            <span className="font-semibold text-slate-900">Subject:</span>{" "}
            {title}
          </p>
        )}
        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
          <Link
            href={`/requests/${ticketId}`}
            className="inline-flex flex-1 items-center justify-center rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-900/40 transition hover:brightness-110"
          >
            View the ticket you created
          </Link>
          <Link
            href="/new-request"
            className="inline-flex flex-1 items-center justify-center rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-900/40 transition hover:brightness-110"
          >
            Create a new ticket
          </Link>
          <Link
            href="/dashboard"
            className="inline-flex flex-1 items-center justify-center rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-900/40 transition hover:brightness-110"
          >
            Return to dashboard
          </Link>
        </div>
      </div>
    </AppShell>
  );
}

