"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

// TODO: Replace mock data with API response from /api/tasks
const mockTasks = Array.from({ length: 4 }).map(() => ({
  id: "REQ-0000",
  title: "Issue Title",
  status: "Assigned",
  dueTime: "2025-01-10, 08:00 AM",
  priority: "Q1",
}));

const statusBadgeColors: Record<string, string> = {
  Assigned: "bg-green-500 text-white",
  "In Progress": "bg-blue-500 text-white",
  "Waiting on User": "bg-amber-500 text-white",
  Completed: "bg-green-600 text-white",
};

export default function MyTasks() {
  const [activeTab, setActiveTab] = useState<"assigned" | "history">(
    "assigned"
  );

  const filteredTasks =
    activeTab === "assigned"
      ? mockTasks.filter((task) => task.status !== "Completed")
      : mockTasks;

  return (
    <Card className="p-6">
      <h2 className="mb-4 text-lg font-bold text-slate-900">My Tasks</h2>

      <div className="mb-6 flex gap-4 border-b border-slate-200 text-sm font-medium">
        <button
          onClick={() => setActiveTab("assigned")}
          className={`px-4 py-2 ${activeTab === "assigned"
              ? "border-b-2 border-slate-900 text-slate-900"
              : "text-slate-500 hover:text-slate-900"
            }`}
        >
          Assigned
        </button>
        <button
          onClick={() => setActiveTab("history")}
          className={`px-4 py-2 ${activeTab === "history"
              ? "border-b-2 border-slate-900 text-slate-900"
              : "text-slate-500 hover:text-slate-900"
            }`}
        >
          History
        </button>
      </div>

      <div className="space-y-3">
        {filteredTasks.map((task) => (
          <div
            key={task.id}
            className="flex flex-col gap-3 rounded-2xl bg-slate-50 p-4 transition hover:bg-slate-100"
          >
            <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-center gap-2">
                  <p className="font-mono text-xs font-semibold text-slate-900">
                    {task.id}
                  </p>
                  <span className="text-sm text-slate-500">- {task.title}</span>
                </div>
                <p className="mt-1 text-xs text-slate-500">{task.dueTime}</p>
              </div>
              <div className="flex flex-wrap items-center gap-2">
                <Badge className={statusBadgeColors[task.status]}>
                  {task.status}
                </Badge>
                <Button variant="outline" size="sm" className="whitespace-nowrap">
                  View
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="whitespace-nowrap text-red-600 hover:text-red-600"
                >
                  Remove
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Button variant="link" className="mt-4 w-full text-slate-900">
        View all
      </Button>
    </Card>
  );
}
