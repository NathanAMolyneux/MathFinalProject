"use client";

import { Bell, Search, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

/**
 * Shared header for all SRMS pages.
 * Always import and reuse this component instead of building
 * page-specific headers so the menu + top bar stay consistent.
 */
interface HeaderProps {
  title: string;
  onMenuClick: () => void;
  searchPlaceholder?: string;
}

export default function Header({
  title,
  onMenuClick,
  searchPlaceholder = "Search requests…",
}: HeaderProps) {
  return (
    <header className="border-b border-slate-200 bg-white">
      <div className="flex items-center justify-between px-4 py-4 lg:px-6">
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            className="text-slate-700"
            aria-label="Open navigation menu"
            onClick={onMenuClick}
          >
            <svg
              viewBox="0 0 24 24"
              className="h-5 w-5"
              aria-hidden="true"
              focusable="false"
            >
              <path
                d="M4 6h16M4 12h16M4 18h16"
                stroke="currentColor"
                strokeWidth={1.8}
                strokeLinecap="round"
              />
            </svg>
          </Button>
          <h1 className="text-2xl font-semibold text-slate-900">{title}</h1>
        </div>

        <div className="hidden flex-1 px-6 md:flex">
          <div className="relative w-full max-w-md">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
            <Input placeholder={searchPlaceholder} className="pl-10" />
          </div>
        </div>

        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon">
            <Bell className="h-5 w-5 text-slate-600" />
          </Button>
          <div className="flex items-center gap-3 border-l border-slate-200 pl-4">
            <div className="text-right">
              <p className="text-sm font-medium text-slate-900">Hi, Admin</p>
              <p className="text-xs text-slate-500">Admin User</p>
            </div>
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-900 text-white">
              <User className="h-5 w-5" />
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-200 px-4 py-3 md:hidden">
        <div className="relative">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
          <Input placeholder={searchPlaceholder} className="pl-10" />
        </div>
      </div>
    </header>
  );
}
