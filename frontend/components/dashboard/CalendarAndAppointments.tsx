"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Clock } from "lucide-react";

export default function CalendarAndAppointments() {
  const [currentDate, setCurrentDate] = useState(new Date(2025, 3, 1));

  const daysInMonth = (date: Date) =>
    new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  const firstDayOfMonth = (date: Date) =>
    new Date(date.getFullYear(), date.getMonth(), 1).getDay();

  const monthName = currentDate.toLocaleString("default", {
    month: "long",
    year: "numeric",
  });
  const totalDays = daysInMonth(currentDate);
  const firstDay = firstDayOfMonth(currentDate);

  const days = Array(firstDay)
    .fill(null)
    .concat(Array.from({ length: totalDays }, (_, i) => i + 1));

  const appointments = [
    {
      id: "REQ-0000",
      title: "Issue Title",
      time: "Mon, Apr 21 • 10:00 AM",
      technician: "Staff Name",
    },
  ];

  return (
    <div className="space-y-4">
      <Card className="border-2 border-slate-900 p-4">
        <div className="mb-4 flex items-center justify-between">
          <h3 className="font-bold text-slate-900">{monthName}</h3>
          <div className="flex gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() =>
                setCurrentDate(
                  new Date(
                    currentDate.getFullYear(),
                    currentDate.getMonth() - 1
                  )
                )
              }
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() =>
                setCurrentDate(
                  new Date(
                    currentDate.getFullYear(),
                    currentDate.getMonth() + 1
                  )
                )
              }
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="space-y-2">
          <div className="grid grid-cols-7 gap-1 text-center text-xs font-semibold text-slate-500">
            {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
              <div key={day}>{day}</div>
            ))}
          </div>

          <div className="grid grid-cols-7 gap-1">
            {days.map((day, index) => (
              <div
                key={index}
                className={`flex h-8 items-center justify-center rounded text-xs font-medium ${day === null
                    ? ""
                    : day === 20
                      ? "bg-slate-900 text-white"
                      : "text-slate-700 hover:bg-slate-100"
                  }`}
              >
                {day}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-4 border-t border-slate-200 pt-3">
          <p className="text-xs text-slate-500">Local time</p>
          <p className="font-mono text-sm font-semibold text-slate-900">
            9:41 AM
          </p>
        </div>
      </Card>

      <Card className="p-4">
        <h3 className="mb-4 font-bold text-slate-900">Upcoming Appointments</h3>
        <div className="space-y-3">
          {appointments.map((appointment, index) => (
            <div
              key={index}
              className="space-y-2 rounded-lg bg-slate-50 p-3 text-xs text-slate-600"
            >
              <div className="flex items-start gap-2">
                <Clock className="mt-0.5 h-4 w-4 text-slate-900" />
                <div className="flex-1">
                  <p className="font-medium text-slate-900">
                    {appointment.title}
                  </p>
                  <p className="mt-1 text-slate-500">{appointment.time}</p>
                </div>
              </div>
              <p>Technician: {appointment.technician}</p>
              <div className="flex gap-2 pt-2">
                <Button variant="outline" size="sm" className="flex-1">
                  Details
                </Button>
                <Button variant="outline" size="sm" className="flex-1">
                  Reschedule
                </Button>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
