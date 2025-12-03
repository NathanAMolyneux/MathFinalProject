"use client";

import Link from "next/link";
import { BookOpen, ChevronRight } from "lucide-react";

// Static list of topics that link to actual pages like /notes/convergence-tests
type Topic = {
  id: string;
  title: string;
  href: string; // direct link to the page
};

const topics: Topic[] = [
  {
    id: "1",
    title: "Convergence Tests Overview",
    href: "/notes/convergence-tests",
  },
  // Add more topics as you create pages, for example:
  // { id: "2", title: "Power Series", href: "/notes/power-series" },
  // { id: "3", title: "Taylor & Maclaurin Series", href: "/notes/taylor-series" },
];

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-white text-[#1a1f2e] font-sans selection:bg-red-100 selection:text-red-900">
      {/* Top Navigation (matches home page style) */}
      <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center group cursor-pointer">
              <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-red-800 group-hover:from-red-500 group-hover:to-red-700 transition-all duration-300">
                Calculus 2 Notes App
              </span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link
                href="/"
                className="text-gray-600 hover:text-red-600 transition-colors font-medium"
              >
                Home
              </Link>
              <Link
                href="/login"
                className="px-6 py-2 rounded-full bg-red-600 text-white font-medium hover:bg-red-700 hover:shadow-lg hover:shadow-red-600/30 transition-all transform hover:-translate-y-0.5"
              >
                Sign Out
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Dashboard Layout */}
      <div className="pt-16 flex h-[calc(100vh-4rem)]">
        {/* Sidebar */}
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

        {/* Main Content */}
        <main className="flex-1 bg-white">
          <div className="max-w-5xl mx-auto h-full flex flex-col">
            {/* Header / Breadcrumb-style */}
            <header className="px-6 lg:px-8 py-6 border-b border-gray-100 bg-white/80 backdrop-blur-sm">
              <p className="text-xs font-semibold uppercase tracking-wider text-red-600 mb-1">
                Dashboard
              </p>
              <h1 className="text-2xl md:text-3xl font-bold text-[#1a1f2e] mb-2">
                Your Calculus 2 Study Hub
              </h1>
              <p className="text-sm md:text-base text-gray-600 max-w-2xl">
                Use the sidebar to jump into any topic. Each page focuses on one
                concept with clear explanations, visual intuition, and practice
                examples.
              </p>
            </header>

            {/* Content body */}
            <section className="flex-1 overflow-y-auto px-6 lg:px-8 py-6 bg-gradient-to-b from-red-50/40 via-white to-white">
              {/* Quick stats / intro cards */}
              <div className="grid gap-4 md:grid-cols-3 mb-8">
                <div className="bg-white border border-red-100 rounded-2xl p-4 shadow-sm">
                  <p className="text-xs font-semibold text-red-600 uppercase mb-1">
                    Topics Available
                  </p>
                  <p className="text-3xl font-bold text-[#1a1f2e]">
                    {topics.length}
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    Each topic is crafted to match common Calc 2 exam sections.
                  </p>
                </div>

                <div className="bg-white border border-gray-100 rounded-2xl p-4 shadow-sm">
                  <p className="text-xs font-semibold text-gray-500 uppercase mb-1">
                    Study Tip
                  </p>
                  <p className="text-sm text-gray-700">
                    Start with a high-level overview topic, then move into
                    specific tests like Ratio, Root, and Comparison.
                  </p>
                </div>

                <div className="bg-white border border-gray-100 rounded-2xl p-4 shadow-sm">
                  <p className="text-xs font-semibold text-gray-500 uppercase mb-1">
                    How to Use
                  </p>
                  <p className="text-sm text-gray-700">
                    Pick a topic on the left, read the examples, then try solving
                    similar problems from your textbook or homework.
                  </p>
                </div>
              </div>

              {/* Topic grid (main area shortcuts) */}
              <div>
                <h2 className="text-lg font-semibold text-[#1a1f2e] mb-4">
                  Jump into a topic
                </h2>
                {topics.length === 0 && (
                  <p className="text-sm text-gray-500">
                    Once topics are added, they&apos;ll appear here as quick
                    shortcuts.
                  </p>
                )}

                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {topics.map((topic) => (
                    <Link
                      key={topic.id}
                      href={topic.href}
                      className="group block bg-white border border-gray-100 rounded-2xl p-4 shadow-sm hover:shadow-md hover:border-red-200 transition-all"
                    >
                      <div className="flex items-start justify-between gap-3 mb-2">
                        <h3 className="text-sm font-semibold text-[#1a1f2e] group-hover:text-red-700">
                          {topic.title}
                        </h3>
                        <span className="inline-flex items-center rounded-full bg-red-50 text-red-700 text-[10px] font-semibold px-2 py-0.5">
                          View Notes
                        </span>
                      </div>
                      <p className="text-xs text-gray-500">
                        Click to open a focused page of notes for this topic.
                      </p>
                    </Link>
                  ))}
                </div>
              </div>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}
