"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import AppShell from "@/components/layout/AppShell";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ticketsAPI } from "@/lib/api";
import { ArrowLeft, Calendar, MapPin, User, Mail, Phone } from "lucide-react";
import Link from "next/link";

const statusColors: Record<string, string> = {
  new: "bg-slate-500",
  open: "bg-blue-500",
  in_progress: "bg-amber-500",
  resolved: "bg-green-500",
  closed: "bg-gray-500",
};

const priorityColors: Record<string, string> = {
  low: "border-blue-500 text-blue-600 bg-blue-50",
  medium: "border-yellow-500 text-yellow-600 bg-yellow-50",
  high: "border-orange-500 text-orange-600 bg-orange-50",
  critical: "border-red-500 text-red-600 bg-red-50",
};

export default function TicketDetailPage() {
  const params = useParams<{ id: string }>();
  const router = useRouter();
  const [ticket, setTicket] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchTicket() {
      if (!params.id) return;

      try {
        setLoading(true);
        const data = await ticketsAPI.getById(params.id);
        setTicket(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to load ticket");
        console.error("Failed to fetch ticket:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchTicket();
  }, [params.id]);

  const formatDate = (dateString: string) => {
    if (!dateString) return "N/A";
    const date = new Date(dateString);
    return date.toLocaleString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
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

  if (loading) {
    return (
      <AppShell title="Ticket Details" mainClassName="px-6 py-8">
        <Card className="p-6">
          <div className="py-12 text-center text-slate-500">
            Loading ticket details...
          </div>
        </Card>
      </AppShell>
    );
  }

  if (error || !ticket) {
    return (
      <AppShell title="Ticket Details" mainClassName="px-6 py-8">
        <Card className="p-6">
          <div className="py-12 text-center">
            <p className="text-red-600 mb-4">{error || "Ticket not found"}</p>
            <Link href="/tickets">
              <Button variant="outline">Back to Tickets</Button>
            </Link>
          </div>
        </Card>
      </AppShell>
    );
  }

  return (
    <AppShell title="Ticket Details" mainClassName="px-6 py-8">
      <div className="space-y-6">
        {/* Back Button */}
        <Link href="/tickets">
          <Button variant="outline" className="mb-4">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Tickets
          </Button>
        </Link>

        {/* Main Ticket Card */}
        <Card className="p-6">
          <div className="mb-6 flex items-start justify-between">
            <div>
              <h1 className="text-2xl font-bold text-slate-900 mb-2">
                {ticket.title || "Untitled Ticket"}
              </h1>
              <p className="text-sm text-slate-500 font-mono">
                Ticket ID: {ticket.id}
              </p>
            </div>
            <div className="flex gap-2">
              <Badge
                className={`${
                  priorityColors[ticket.priority?.toLowerCase() || ""] ||
                  "border-slate-500 text-slate-600 bg-slate-50"
                } border-2 px-3 py-1`}
              >
                {formatPriority(ticket.priority)}
              </Badge>
              <Badge
                className={`${
                  statusColors[ticket.status?.toLowerCase() || ""] || "bg-slate-500"
                } text-white px-3 py-1`}
              >
                {formatStatus(ticket.status)}
              </Badge>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {/* Left Column - Main Info */}
            <div className="space-y-6">
              <div>
                <h2 className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-3">
                  Description
                </h2>
                <p className="text-slate-700 whitespace-pre-wrap">
                  {ticket.description || "No description provided."}
                </p>
              </div>

              <div>
                <h2 className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-3">
                  Category
                </h2>
                <p className="text-slate-900 font-medium">
                  {ticket.category || "N/A"}
                </p>
              </div>
            </div>

            {/* Right Column - Details */}
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-slate-400 mt-0.5" />
                <div>
                  <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide">
                    Location
                  </p>
                  <p className="text-slate-900">
                    {ticket.location || "Not specified"}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <User className="h-5 w-5 text-slate-400 mt-0.5" />
                <div>
                  <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide">
                    Created By
                  </p>
                  <p className="text-slate-900">
                    {ticket.created_by?.name ||
                      ticket.created_by?.email ||
                      ticket.created_by ||
                      "Unknown"}
                  </p>
                </div>
              </div>

              {ticket.assigned_to && (
                <div className="flex items-start gap-3">
                  <User className="h-5 w-5 text-slate-400 mt-0.5" />
                  <div>
                    <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide">
                      Assigned To
                    </p>
                    <p className="text-slate-900">
                      {ticket.assigned_to?.name ||
                        ticket.assigned_to?.email ||
                        ticket.assigned_to ||
                        "Unassigned"}
                    </p>
                  </div>
                </div>
              )}

              {ticket.contact_preference && (
                <div className="flex items-start gap-3">
                  {ticket.contact_preference.toLowerCase().includes("email") ? (
                    <Mail className="h-5 w-5 text-slate-400 mt-0.5" />
                  ) : (
                    <Phone className="h-5 w-5 text-slate-400 mt-0.5" />
                  )}
                  <div>
                    <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide">
                      Contact Preference
                    </p>
                    <p className="text-slate-900">{ticket.contact_preference}</p>
                  </div>
                </div>
              )}

              <div className="flex items-start gap-3">
                <Calendar className="h-5 w-5 text-slate-400 mt-0.5" />
                <div>
                  <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide">
                    Created At
                  </p>
                  <p className="text-slate-900">
                    {formatDate(ticket.created_at || ticket.createdAt)}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Calendar className="h-5 w-5 text-slate-400 mt-0.5" />
                <div>
                  <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide">
                    Last Updated
                  </p>
                  <p className="text-slate-900">
                    {formatDate(ticket.updated_at || ticket.updatedAt)}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Actions Card */}
        <Card className="p-6">
          <h2 className="text-lg font-bold text-slate-900 mb-4">Actions</h2>
          <div className="flex gap-3">
            <Link href="/tickets">
              <Button variant="outline">View All Tickets</Button>
            </Link>
            <Link href="/new-request">
              <Button className="bg-green-500 hover:bg-green-600">
                Create New Ticket
              </Button>
            </Link>
          </div>
        </Card>
      </div>
    </AppShell>
  );
}

