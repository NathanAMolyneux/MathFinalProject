"use client";

import { useState } from "react";
import Sidebar from "@/components/dashboard/Sidebar";
import Header from "@/components/layout/Header";
import { cn } from "@/lib/utils";

interface AppShellProps {
  title: string;
  children: React.ReactNode;
  searchPlaceholder?: string;
  mainClassName?: string;
}

export default function AppShell({
  title,
  children,
  searchPlaceholder,
  mainClassName,
}: AppShellProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-slate-100">
      <Sidebar open={sidebarOpen} setOpen={setSidebarOpen} />
      <div className="flex flex-1 flex-col">
        <Header
          title={title}
          onMenuClick={() => setSidebarOpen(true)}
          searchPlaceholder={searchPlaceholder}
        />
        <main
          className={cn(
            "flex-1 overflow-y-auto bg-slate-100",
            mainClassName ?? "p-4 lg:p-6"
          )}
        >
          {children}
        </main>
      </div>
    </div>
  );
}
