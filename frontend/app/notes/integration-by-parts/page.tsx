"use client";

import Link from "next/link";
import TopicsSidebar from "@/components/TopicsSidebar";

export default function IntegrationByPartsPage() {
  return (
    <div className="min-h-screen bg-white text-[#1a1f2e] font-sans selection:bg-red-100 selection:text-red-900">
      {/* Top Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-red-800">
              Calculus 2 Notes App
            </span>

            <div className="hidden md:flex items-center space-x-8">
              <Link
                href="/dashboard"
                className="text-gray-600 hover:text-red-600 transition-colors font-medium"
              >
                Dashboard
              </Link>

              <Link
                href="/"
                className="text-gray-600 hover:text-red-600 transition-colors font-medium"
              >
                Home
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Layout: Sidebar + Main Content */}
      <div className="pt-16 flex min-h-[calc(100vh-4rem)]">
        {/* Shared Topics Sidebar */}
        <TopicsSidebar />

        {/* Main Page Content */}
        <main className="flex-1 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-red-50/40 via-white to-white">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <header className="mb-10 mt-6">
              <p className="text-xs font-semibold uppercase tracking-wider text-red-600 mb-1">
                Section 6.1 · Integration by Parts
              </p>

              <h1 className="text-3xl md:text-4xl font-bold text-[#1a1f2e] mb-2">
                Integration by Parts
              </h1>

              <p className="text-sm md:text-base text-gray-600">
                Learn a new technique to evaluate integrals of products like ∫ x
                sin(x) dx, ∫ ln(x) dx, and ∫ t² eᵗ dt that basic substitution
                can&apos;t handle.
              </p>
            </header>

            {/* Content Card */}
            <section className="bg-white border border-red-100 rounded-2xl p-6 shadow-sm space-y-8">
              {/* Learning Outcomes */}
              <div>
                <h2 className="text-xl font-semibold text-red-700 mb-2">
                  Learning Outcomes
                </h2>
                <p className="text-gray-700 text-sm leading-relaxed text-[16.5px] mb-2">
                  By the end of this section, you should be able to:
                </p>
                <ul className="text-gray-700 text-sm leading-relaxed list-disc list-inside space-y-1 text-[16.5px]">
                  <li>
                    Derive and state the Integration by Parts formula from the
                    product rule. :contentReference
                  </li>
                  <li>Choose appropriate u and dv for a given product integrand.</li>
                  <li>
                    Evaluate integrals like ∫ x sin(x) dx and ∫ ln(x) dx using
                    integration by parts.
                  </li>
                </ul>
              </div>

              {/* From Product Rule to IBP */}
              <div>
                <h2 className="text-xl font-semibold text-red-700 mb-2">
                  From the Product Rule to Integration by Parts
                </h2>
                <p className="text-gray-700 text-sm leading-relaxed text-[16.5px] mb-2">
                  Recall the product rule for differentiation:
                </p>
                <p className="text-sm font-mono text-gray-800 bg-white p-2 rounded-lg border border-red-100">
                  d/dx (u·v) = u&apos;·v + u·v&apos;
                </p>

                <p className="text-gray-700 text-sm leading-relaxed text-[16.5px] mt-2 mb-1">
                  If we integrate both sides with respect to x, we get:
                </p>

                <p className="text-sm font-mono text-gray-800 bg-white p-2 rounded-lg border border-red-100">
                  ∫ d/dx (u·v) dx = ∫ u&apos;·v dx + ∫ u·v&apos; dx{"\n"}
                  u·v = ∫ u&apos;·v dx + ∫ u·v&apos; dx
                </p>

                <p className="text-gray-700 text-sm leading-relaxed text-[16.5px] mt-2 mb-1">
                  Rearranging to solve for one of the integrals gives the{" "}
                  <strong>Integration by Parts</strong> formula:
                </p>

                <p className="text-sm font-mono text-gray-800 bg-white p-2 rounded-lg border border-red-100">
                  ∫ u · dv = u·v − ∫ v · du
                </p>

                <p className="text-xs text-gray-600 mt-2">
                  Here u and v are functions of x, du = u&apos; dx, and dv = v&apos; dx.
                  This is exactly the formula shown on the derivation slide.
                </p>
              </div>

              {/* Example 1: ∫ x sin(x) dx */}
              <div className="mt-2 p-4 rounded-xl border border-red-100 bg-red-50/40">
                <h3 className="text-md font-semibold text-red-700 mb-2">
                  Example 1: Evaluate ∫ x sin(x) dx
                </h3>

                <p className="text-sm text-gray-700 leading-relaxed mb-2 text-[16px]">
                  This is the classic example where integration by parts helps:
                  the integrand x sin(x) is a product of a polynomial and a trig
                  function.
                </p>

                {/* Step 1: Choose u and dv */}
                <div className="mb-3">
                  <p className="text-sm text-gray-800 font-semibold mb-1">
                    Step 1: Choose u and dv
                  </p>

                  <p className="text-sm font-mono text-gray-800 bg-white p-2 rounded-lg border border-red-100">
                    u = x{"\n"}
                    dv = sin(x) dx{"\n"}
                    {"\n"}
                    du = dx{"\n"}
                    v = ∫ sin(x) dx = −cos(x)
                  </p>

                  <p className="text-sm text-gray-700 leading-relaxed mt-1">
                    We choose u = x so that its derivative du = dx becomes
                    simpler, and we choose dv = sin(x) dx because we know its
                    antiderivative v = −cos(x).
                  </p>
                </div>

                {/* Step 2: Apply IBP */}
                <div className="mb-3">
                  <p className="text-sm text-gray-800 font-semibold mb-1">
                    Step 2: Apply the formula ∫ u dv = u·v − ∫ v du
                  </p>

                  <p className="text-sm font-mono text-gray-800 bg-white p-2 rounded-lg border border-red-100">
                    ∫ x sin(x) dx = u·v − ∫ v du{"\n"}
                    {"\n"}
                    = x(−cos x) − ∫ (−cos x) · 1 dx{"\n"}
                    = −x cos x + ∫ cos x dx
                  </p>

                  <p className="text-sm text-gray-700 leading-relaxed mt-1">
                    After one use of integration by parts, the remaining integral
                    is simpler: ∫ cos x dx.
                  </p>
                </div>

                {/* Step 3: Integrate and simplify */}
                <div>
                  <p className="text-sm text-gray-800 font-semibold mb-1">
                    Step 3: Integrate the remaining term and simplify
                  </p>

                  <p className="text-sm font-mono text-gray-800 bg-white p-2 rounded-lg border border-red-100">
                    ∫ cos x dx = sin x + C{"\n"}
                    {"\n"}
                    So{"\n"}
                    ∫ x sin(x) dx = −x cos x + sin x + C
                  </p>

                  <p className="text-sm text-gray-700 leading-relaxed mt-1">
                    This matches the final answer on the example slide:{" "}
                    <strong>∫ x sin(x) dx = −x cos x + sin x + C</strong>.
                  </p>
                </div>
              </div>

              {/* Quick Recap */}
              <div className="border-t border-red-100 pt-4">
                <h2 className="text-lg font-semibold text-[#1a1f2e] mb-2">
                  Quick Recap
                </h2>
                <ul className="text-gray-700 text-sm list-disc list-inside space-y-1 mt-2">
                  <li>
                    Integration by parts comes from integrating the product rule:
                    ∫ u dv = u·v − ∫ v du.
                  </li>
                  <li>
                    Choose u so that du is simpler, and dv so that you can easily
                    integrate it to get v.
                  </li>
                  <li>
                    For ∫ x sin(x) dx, picking u = x and dv = sin(x) dx gives the
                    result −x cos x + sin x + C.
                  </li>
                </ul>
              </div>
            </section>

            {/* Back Link */}
            <div className="mt-8 mb-8">
              <Link
                href="/dashboard"
                className="inline-flex items-center text-sm font-medium text-red-700 hover:text-red-800"
              >
                ← Back to Dashboard
              </Link>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
