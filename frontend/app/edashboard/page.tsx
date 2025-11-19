import EDashboardLayout from "@/components/dashboard/eDashboardLayout";
import AppShell from "@/components/layout/AppShell";

export const metadata = {
  title: "SRMS Dashboard",
};

export default function eDashboardPage() {
  return (
    <AppShell title="eDashboard">
      <EDashboardLayout />
    </AppShell>
  );
}

