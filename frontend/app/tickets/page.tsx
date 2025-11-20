"use client";

import { useState, useEffect } from "react";
import AppShell from "@/components/layout/AppShell";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { ticketsAPI } from "@/lib/api";

const statusColors: Record<string, string> = {
  new: "bg-slate-500",
  open: "bg-blue-500",
  in_progress: "bg-amber-500",
  resolved: "bg-green-500",
  closed: "bg-gray-500",
};

const priorityColors: Record<string, string> = {
  low: "border-blue-500 text-blue-600",
  medium: "border-yellow-500 text-yellow-600",
  high: "border-orange-500 text-orange-600",
  critical: "border-red-500 text-red-600",
};

const tabs = ["All", "Open", "In Progress", "Completed", "Overdue"];

export default function TicketsPage() {
  const [activeTab, setActiveTab] = useState("all");
  const [tickets, setTickets] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchTickets() {
      try {
        setLoading(true);
        const data = await ticketsAPI.getAll();
        setTickets(Array.isArray(data) ? data : []);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to load tickets");
        console.error("Failed to fetch tickets:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchTickets();
  }, []);

  const filteredTickets = tickets.filter((ticket) => {
    const status = ticket.status?.toLowerCase() || "";
    if (activeTab === "all") return true;
    if (activeTab === "open") return status === "new" || status === "open";
    if (activeTab === "in progress") return status === "in_progress";
    if (activeTab === "completed") return status === "resolved" || status === "closed";
    if (activeTab === "overdue") return false; // TODO: Implement overdue logic
    return true;
  });

  const formatDate = (dateString: string) => {
    if (!dateString) return "N/A";
    const date = new Date(dateString);
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMs / 3600000);
    const diffDays = Math.floor(diffMs / 86400000);

    if (diffMins < 1) return "Just now";
    if (diffMins < 60) return `${diffMins}m ago`;
    if (diffHours < 24) return `${diffHours}h ago`;
    if (diffDays < 7) return `${diffDays}d ago`;
    return date.toLocaleDateString();
  };

  const formatStatus = (status: string) => {
    if (!status) return "Unknown";
    return status
      .split("_")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  const formatPriority = (priority: string) => {
    if (!priority) return "N/A";
    return priority.charAt(0).toUpperCase() + priority.slice(1);
  };

  return (
    <AppShell title="All Tickets" mainClassName="px-6 py-8">
      <Card className="p-6">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-lg font-bold text-slate-900">All Tickets</h2>
          <Link href="/new-request">
            <Button className="bg-green-500 hover:bg-green-600">
              Create New Ticket
            </Button>
          </Link>
        </div>

        {error && (
          <div className="mb-4 rounded-lg bg-red-50 p-3 text-sm text-red-600">
            {error}
          </div>
        )}

        <div className="mb-6 flex gap-2 border-b border-slate-200">
          {tabs.map((tab) => {
            const key = tab.toLowerCase().replace(" ", "");
            return (
              <button
                key={tab}
                onClick={() => setActiveTab(key)}
                className={`px-4 py-2 text-sm font-medium transition ${
                  activeTab === key
                    ? "border-b-2 border-slate-900 text-slate-900"
                    : "text-slate-500 hover:text-slate-900"
                }`}
              >
                {tab}
              </button>
            );
          })}
        </div>

        {loading ? (
          <div className="py-12 text-center text-slate-500">
            Loading tickets...
          </div>
        ) : filteredTickets.length === 0 ? (
          <div className="py-12 text-center text-slate-500">
            No tickets found
          </div>
        ) : (
          <>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-slate-200 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
                    <th className="px-4 py-3">Ticket ID</th>
                    <th className="px-4 py-3">Title</th>
                    <th className="px-4 py-3">Category</th>
                    <th className="px-4 py-3">Location</th>
                    <th className="px-4 py-3">Priority</th>
                    <th className="px-4 py-3">Status</th>
                    <th className="px-4 py-3">Assigned To</th>
                    <th className="px-4 py-3">Last Updated</th>
                    <th className="px-4 py-3 text-center">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredTickets.map((ticket) => (
                    <tr
                      key={ticket.id}
                      className="border-b border-slate-100 text-slate-700 transition hover:bg-slate-50"
                    >
                      <td className="px-4 py-3 font-mono text-xs">
                        {ticket.id?.toString().slice(0, 8) || "N/A"}
                      </td>
                      <td className="px-4 py-3 font-medium">{ticket.title || "N/A"}</td>
                      <td className="px-4 py-3 text-slate-500">
                        {ticket.category || "N/A"}
                      </td>
                      <td className="px-4 py-3 text-slate-500">
                        {ticket.location || "N/A"}
                      </td>
                      <td className="px-4 py-3">
                        <Badge
                          variant="outline"
                          className={
                            priorityColors[ticket.priority?.toLowerCase() || ""] ||
                            "border-slate-500 text-slate-600"
                          }
                        >
                          {formatPriority(ticket.priority)}
                        </Badge>
                      </td>
                      <td className="px-4 py-3">
                        <Badge
                          className={`${
                            statusColors[ticket.status?.toLowerCase() || ""] ||
                            "bg-slate-500"
                          } text-white`}
                        >
                          {formatStatus(ticket.status)}
                        </Badge>
                      </td>
                      <td className="px-4 py-3 text-slate-500">
                        {ticket.assigned_to?.name ||
                          ticket.assigned_to?.email ||
                          ticket.assigned_to ||
                          "Unassigned"}
                      </td>
                      <td className="px-4 py-3 text-slate-500">
                        {formatDate(ticket.updated_at || ticket.updatedAt)}
                      </td>
                      <td className="px-4 py-3 text-center">
                        <Link href={`/requests/${ticket.id}`}>
                          <Button variant="outline" size="sm">
                            View
                          </Button>
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-6 flex flex-col gap-4 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
              <p>
                Showing {filteredTickets.length} of {tickets.length} tickets
              </p>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" disabled>
                  Previous
                </Button>
                <Button variant="outline" size="sm" disabled>
                  Next
                </Button>
              </div>
            </div>
          </>
        )}
      </Card>
    </AppShell>
  );
}

