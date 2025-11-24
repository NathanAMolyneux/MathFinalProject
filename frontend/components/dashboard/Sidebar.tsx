"use client";

import {
  LayoutDashboard,
  LogOut,
  Package,
  Wrench,
  X,
} from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { setAuthToken } from "@/lib/api";

interface SidebarProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const navItems = [
  { icon: LayoutDashboard, label: "Dashboard", href: "/dashboard" },
  { icon: Wrench, label: "Service Requests", href: "/new-request" },
  { icon: Package, label: "All Tickets", href: "/tickets" },
];

export default function Sidebar({ open, setOpen }: SidebarProps) {
  const pathname = usePathname();
  const router = useRouter();

  const handleLogout = () => {
    setAuthToken(null);
    setOpen(false);
    router.push("/");
  };

  return (
    <>
      {open && (
        <div
          className="fixed inset-0 z-30 bg-black/40"
          onClick={() => setOpen(false)}
        />
      )}

      <aside
        className={`fixed left-0 top-0 z-40 h-full w-72 transform bg-red-900 text-white shadow-2xl transition-transform duration-300 ease-in-out ${open ? "translate-x-0" : "-translate-x-full"
          }`}
      >
        <div className="flex h-full flex-col">
          <div className="flex items-center justify-between border-b border-white/10 p-6">
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/20">
                <Wrench className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-wide">
                  SRMS
                </p>
                <p className="text-xs text-white/70">Access level: Admin</p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="text-white hover:bg-white/10"
              onClick={() => setOpen(false)}
            >
              <X className="h-5 w-5" />
            </Button>
          </div>

          <nav className="flex-1 space-y-1 px-4 py-6">
            {navItems.map((item) => {
              const isActive =
                item.href !== "#" && pathname?.startsWith(item.href);

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`flex w-full items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium transition ${isActive ? "bg-white text-red-900" : "text-white/80 hover:bg-white/10"
                    }`}
                >
                  <item.icon className="h-5 w-5" />
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="border-t border-white/10 px-4 py-4">
            <button
              onClick={handleLogout}
              className="flex w-full items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium text-white/80 transition hover:bg-white/10"
            >
              <LogOut className="h-5 w-5" />
              Logout
            </button>
          </div>

        </div>
      </aside>
    </>
  );
}
