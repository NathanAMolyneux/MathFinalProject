"use client";

import Link from "next/link";
import { BookOpen, ChevronRight } from "lucide-react";

// Same Topic type + topics array you already have
type Topic = {
  id: string;
  title: string;
  href: string;
};

const topics: Topic[] = [
  {
    id: "1",
    title: "Convergence Tests Overview",
    href: "/notes/convergence-tests",
  },
  {
    id: "2",
    title: "Polar Coordinates",
    href: "/notes/polar-coordinates",
  },
  {
    id: "3",
    title: "Integration by Parts",
    href: "/notes/integration-by-parts",
  },
];

export default function TopicsSidebar() {
  return (
    <aside className="w-64 lg:w-72 border-r border-gray-100 bg-red-50/60 backdrop-blur-sm">
      <div className="h-full flex flex-col">
        <div className="px-5 py-4 border-b border-red-100 bg-red-50">
          <p className="text-xs font-semibold uppercase tracking-wider text-red-700 mb-1">
            Topics
          </p>
          <h2 className="text-lg font-bold text-[#1a1f2e]">
            Calculus 2 Overview
          </h2>
        </div>

        <div className="flex-1 overflow-y-auto py-3">
          {topics.length === 0 && (
            <p className="px-4 py-2 text-sm text-gray-500">
              No topics yet. Add topics in the code to see them here.
            </p>
          )}

          <nav className="space-y-1 px-2">
            {topics.map((topic) => (
              <Link
                key={topic.id}
                href={topic.href}
                className="flex items-center justify-between px-3 py-2 rounded-lg text-sm font-medium text-gray-700 hover:bg-red-100 hover:text-red-800 transition-colors group"
              >
                <span className="flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-red-500 group-hover:text-red-700" />
                  <span className="truncate">{topic.title}</span>
                </span>
                <ChevronRight className="w-4 h-4 opacity-60 group-hover:opacity-100" />
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </aside>
  );
}
