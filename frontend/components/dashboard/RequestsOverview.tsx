"use client";

import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";


type ServiceRequest = {
  _id: string;
  requestId?: string;   // if you store a human-readable ID, use this
  title: string;
  location: string;
  description: string; 
  priority: string;     // e.g. "Q1", "Low", "High", "Critical"
  status: string;       // "New" | "In Progress" | "Completed" | "Overdue" | etc.
  assignedTo?: string;
  updatedAt?: string;
  createdAt?: string;
};

const statusColors: Record<string, string> = {
  "In Progress": "bg-amber-500",
  Completed: "bg-green-500",
  New: "bg-slate-500",
  Overdue: "bg-red-500",
};

const tabs = ["All", "Open", "In Progress", "Completed", "Overdue"];

export default function RequestsOverview() {
  const [activeTab, setActiveTab] = useState("all");
  const [requests, setRequests] = useState<ServiceRequest[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

useEffect(() => {
  const fetchRequests = async () => {
    try {
      setLoading(true);
      setError(null);

      const res = await fetch("http://localhost:5000/api/requests");

      if (!res.ok) {
        throw new Error(`Failed to fetch requests (${res.status})`);
      }

      const raw = await res.json();
      console.log("Raw requests response:", raw);

      // Normalize into an array no matter how the backend wraps it
      let normalized: ServiceRequest[] = [];

      if (Array.isArray(raw)) {
        normalized = raw;
      } else if (Array.isArray(raw.requests)) {
        normalized = raw.requests;
      } else if (Array.isArray(raw.data)) {
        normalized = raw.data;
      }

      setRequests(normalized);
    } catch (err: any) {
      console.error(err);
      setError(err.message || "Error fetching requests");
    } finally {
      setLoading(false);
    }
  };

  fetchRequests();
}, []);


  const filterByTab = (req: ServiceRequest) => {
    const status = req.status;

    switch (activeTab) {
      case "all":
        return true;
      case "open":
        // Treat "open" as anything not completed
        return status !== "Completed";
      case "in progress":
        return status === "In Progress";
      case "completed":
        return status === "Completed";
      case "overdue":
        return status === "Overdue";
      default:
        return true;
    }
  };

  const filteredRequests = requests.filter(filterByTab);

  const formatDateTime = (value?: string) => {
    if (!value) return "—";
    const date = new Date(value);
    return isNaN(date.getTime()) ? "—" : date.toLocaleString();
  };

  return (
    <Card className="p-6">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-lg font-bold text-slate-900">Requests Overview</h2>
      </div>

      <div className="mb-6 flex gap-2 border-b border-slate-200">
        {tabs.map((tab) => {
          const key = tab.toLowerCase();
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

      {/* Loading / error states */}
      {loading ? (
        <div className="py-8 text-center text-sm text-slate-500">
          Loading requests…
        </div>
      ) : error ? (
        <div className="py-8 text-center text-sm text-red-500">
          {error}
        </div>
      ) : (
        <>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-200 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
                  <th className="px-4 py-3">Request ID</th>
                  <th className="px-4 py-3">Title</th>
                  <th className="px-4 py-3">Location</th>
                  <th className="px-4 py-3">Priority</th>
                  <th className="px-4 py-3">Status</th>
                  <th className="px-4 py-3">Assigned To</th>
                  <th className="px-4 py-3">Last Updated</th>
                  <th className="px-4 py-3 text-center">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredRequests.length === 0 ? (
                  <tr>
                    <td
                      colSpan={8}
                      className="px-4 py-6 text-center text-slate-500"
                    >
                      No requests found for this filter.
                    </td>
                  </tr>
                ) : (
                  filteredRequests.map((request) => (
                    <tr
                      key={request._id}
                      className="border-b border-slate-100 text-slate-700 transition hover:bg-slate-50"
                    >
                      <td className="px-4 py-3 font-mono text-xs">
                        {request.requestId ||
                          `REQ-${request._id.slice(-4).toUpperCase()}`}
                      </td>
                      <td className="px-4 py-3">{request.title}</td>
                      <td className="px-4 py-3 text-slate-500">
                        {request.location}
                      </td>
                      <td className="px-4 py-3">
                        <Badge
                          variant="outline"
                          className={
                            request.priority === "Critical"
                              ? "border-red-500 text-red-600"
                              : undefined
                          }
                        >
                          {request.priority}
                        </Badge>
                      </td>
                      <td className="px-4 py-3">
                        <Badge
                          className={`${
                            statusColors[request.status] || "bg-slate-400"
                          } text-white`}
                        >
                          {request.status}
                        </Badge>
                      </td>
                      <td className="px-4 py-3 text-slate-500">
                        {request.assignedTo || "Unassigned"}
                      </td>
                      <td className="px-4 py-3 text-slate-500">
                        {formatDateTime(request.updatedAt || request.createdAt)}
                      </td>
                      <td className="px-4 py-3 text-center">
                        <Button variant="outline" size="sm">
                          View
                        </Button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>

          <div className="mt-6 flex flex-col gap-4 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
            <p>
              Showing {filteredRequests.length} of {requests.length} total
              requests
            </p>
            <div className="flex gap-2">
              {/* Real pagination can go here later */}
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
  );
}
