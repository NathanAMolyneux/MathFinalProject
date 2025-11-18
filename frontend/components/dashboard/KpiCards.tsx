"use client";

import { AlertCircle, CheckCircle, Clock, Wrench } from "lucide-react";
import { Card } from "@/components/ui/card";

const kpis = [
  {
    title: "Total Requests",
    value: "10",
    subtitle: "All recorded requests",
    icon: Wrench,
    color: "text-blue-600 bg-blue-100",
    accent: "border-l-4 border-blue-500",
  },
  {
    title: "In Progress",
    value: "10",
    subtitle: "Currently being handled",
    icon: Clock,
    color: "text-amber-600 bg-amber-100",
    accent: "border-l-4 border-amber-500",
  },
  {
    title: "Completed",
    value: "10",
    subtitle: "Finished successfully",
    icon: CheckCircle,
    color: "text-green-600 bg-green-100",
    accent: "border-l-4 border-green-500",
  },
  {
    title: "Overdue",
    value: "10",
    subtitle: "Past due follow-ups",
    icon: AlertCircle,
    color: "text-red-600 bg-red-100",
    accent: "border-l-4 border-red-500",
  },
];

export default function KpiCards() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {kpis.map((kpi) => {
        const Icon = kpi.icon;
        return (
          <Card key={kpi.title} className={`p-6 ${kpi.accent}`}>
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm font-medium text-slate-500">
                  {kpi.title}
                </p>
                <p className="mt-2 text-3xl font-bold text-slate-900">
                  {kpi.value}
                </p>
                <p className="mt-1 text-xs text-slate-500">{kpi.subtitle}</p>
              </div>
              <div className={`rounded-lg p-3 ${kpi.color}`}>
                <Icon className="h-5 w-5" />
              </div>
            </div>
          </Card>
        );
      })}
    </div>
  );
}

