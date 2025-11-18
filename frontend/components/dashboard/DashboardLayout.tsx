import KpiCards from "./KpiCards";
import CalendarAndAppointments from "./CalendarAndAppointments";
import MyTasks from "./MyTasks";
import RequestsOverview from "./RequestsOverview";

export default function DashboardLayout() {
  return (
    <div className="mx-auto max-w-7xl space-y-6">
      <KpiCards />
      <div className="grid gap-6 lg:grid-cols-3">
        <div className="space-y-6">
          <CalendarAndAppointments />
          <MyTasks />
        </div>
        <div className="lg:col-span-2">
          <RequestsOverview />
        </div>
      </div>
    </div>
  );
}

