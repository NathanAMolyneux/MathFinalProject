"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

// TODO: Replace mock data with API response from /api/requests
const mockRequests = Array.from({ length: 4 }).map(() => ({
  id: "REQ-0000",
  title: "Issue Title",
  location: "Location",
  priority: "Q1",
  status: "In Progress",
  assignedTo: "Staff Name",
  lastUpdated: "Just now",
}));

const statusColors: Record<string, string> = {
  "In Progress": "bg-amber-500",
  Completed: "bg-green-500",
  New: "bg-slate-500",
  Overdue: "bg-red-500",
};

const tabs = ["All", "Open", "In Progress", "Completed", "Overdue"];

export default function RequestsOverview() {
  const [activeTab, setActiveTab] = useState("all");

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
            {mockRequests.map((request) => (
              <tr
                key={request.id}
                className="border-b border-slate-100 text-slate-700 transition hover:bg-slate-50"
              >
                <td className="px-4 py-3 font-mono text-xs">{request.id}</td>
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
                  <Badge className={`${statusColors[request.status]} text-white`}>
                    {request.status}
                  </Badge>
                </td>
                <td className="px-4 py-3 text-slate-500">
                  {request.assignedTo}
                </td>
                <td className="px-4 py-3 text-slate-500">
                  {request.lastUpdated}
                </td>
                <td className="px-4 py-3 text-center">
                  <Button variant="outline" size="sm">
                    View
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-6 flex flex-col gap-4 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
        <p>Showing 1 to 4 of 248 requests</p>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" disabled>
            Previous
          </Button>
          <Button variant="outline" size="sm">
            Next
          </Button>
        </div>
      </div>
    </Card>
  );
}

