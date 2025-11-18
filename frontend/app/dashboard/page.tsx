import DashboardLayout from "@/components/dashboard/DashboardLayout";
import AppShell from "@/components/layout/AppShell";

export const metadata = {
  title: "SRMS Dashboard",
};

export default function DashboardPage() {
  return (
    <AppShell title="Dashboard">
      <DashboardLayout />
    </AppShell>
  );
}

