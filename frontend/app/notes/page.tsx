"use client";

import Link from "next/link";

export default function ConvergenceTestsPage() {
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

      {/* Main Page Content */}
      <main className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-red-50/40 via-white to-white min-h-[calc(100vh-4rem)]">
        <div className="max-w-4xl mx-auto">

          {/* Header */}
          <header className="mb-10">
            <p className="text-xs font-semibold uppercase tracking-wider text-red-600 mb-1">
              Series & Convergence
            </p>

            <h1 className="text-3xl md:text-4xl font-bold text-[#1a1f2e] mb-2">
              Convergence Tests Overview
            </h1>

            <p className="text-sm md:text-base text-gray-600">
              A complete summary of all major convergence tests used in Calculus 2
              to determine whether an infinite series converges or diverges.
            </p>
          </header>

          {/* Content Card */}
          <section className="bg-white border border-red-100 rounded-2xl p-6 shadow-sm space-y-8">

            {/* GEOMETRIC SERIES */}
            <div>
              <h2 className="text-xl font-semibold text-red-700 mb-2">
                1. Geometric Series Test
              </h2>
              <p className="text-gray-700 text-sm leading-relaxed mb-2">
                A geometric series has the form Σ a·rⁿ.  
                It **converges if |r|  1** and **diverges if |r| ≥ 1**.
              </p>
              <p className="text-gray-600 text-sm italic">
                Example: Σ (1/2)ⁿ converges, but Σ 2ⁿ diverges.
              </p>
            </div>

            {/* P SERIES */}
            <div>
              <h2 className="text-xl font-semibold text-red-700 mb-2">
                2. p-Series Test
              </h2>
              <p className="text-gray-700 text-sm leading-relaxed mb-2">
                A p-series has the form Σ 1 / nᵖ.  
                It **converges if p  1** and **diverges if p ≤ 1**.
              </p>
              <p className="text-gray-600 text-sm italic">
                Example: Σ 1/n² converges, but Σ 1/n diverges.
              </p>
            </div>

            {/* COMPARISON */}
            <div>
              <h2 className="text-xl font-semibold text-red-700 mb-2">
                3. Comparison & Limit Comparison Tests
              </h2>
              <p className="text-gray-700 text-sm leading-relaxed mb-2">
                Useful when your series resembles a known p-series or geometric series.
              </p>
              <ul className="text-gray-700 text-sm list-disc list-inside space-y-1">
                <li><strong>Direct Comparison:</strong> Compare term-by-term with a known series.</li>
                <li><strong>Limit Comparison:</strong> Compute lim (aₙ / bₙ); if the limit is positive and finite, both behave the same.</li>
              </ul>
            </div>

            {/* RATIO / ROOT */}
            <div>
              <h2 className="text-xl font-semibold text-red-700 mb-2">
                4. Ratio & Root Tests
              </h2>
              <p className="text-gray-700 text-sm leading-relaxed mb-2">
                These are very powerful when factorials or exponentials appear.
              </p>

              <ul className="text-gray-700 text-sm list-disc list-inside space-y-2">
                <li>
                  <strong>Ratio Test:</strong>  
                  Compute L = lim |aₙ₊₁ / aₙ|.
                  <div className="ml-4 mt-1 text-gray-600">
                    • L &lt; 1 → converges  
                    • L &gt; 1 → diverges  
                    • L = 1 → test is inconclusive  
                  </div>
                </li>

                <li>
                  <strong>Root Test:</strong>  
                  Compute L = lim ⁿ√|aₙ|.
                  <div className="ml-4 mt-1 text-gray-600">
                    Same conclusions as the Ratio Test.
                  </div>
                </li>
              </ul>
            </div>

            {/* ALTERNATING SERIES TEST */}
            <div>
              <h2 className="text-xl font-semibold text-red-700 mb-2">
                5. Alternating Series Test (AST)
              </h2>
              <p className="text-gray-700 text-sm leading-relaxed">
                Used when the series alternates signs (e.g., (−1)ⁿ aₙ).  
                It converges if:
              </p>
              <ul className="text-gray-700 text-sm list-disc list-inside space-y-1 ml-4 mt-1">
                <li>aₙ is decreasing eventually</li>
                <li>lim (aₙ) = 0</li>
              </ul>
              <p className="text-gray-600 text-sm mt-1 italic">
                Gives *conditional* convergence unless |aₙ| also converges using other tests.
              </p>
            </div>

            {/* INTEGRAL TEST */}
            <div>
              <h2 className="text-xl font-semibold text-red-700 mb-2">
                6. Integral Test
              </h2>
              <p className="text-gray-700 text-sm leading-relaxed mb-2">
                For f(x) positive, continuous, and decreasing,  
                Σ f(n) converges or diverges **together** with the improper integral  
                ∫ f(x) dx from 1 to ∞.
              </p>
            </div>

            {/* SUMMARY */}
            <div className="border-t border-red-100 pt-4">
              <h2 className="text-lg font-semibold text-[#1a1f2e] mb-2">
                Summary Strategy
              </h2>

              <p className="text-gray-700 text-sm leading-relaxed">
                Choose the test that fits the structure of your series:
              </p>

              <ul className="text-gray-700 text-sm list-disc list-inside space-y-1 mt-2">
                <li>Powers of n → p-series or comparison</li>
                <li>Factorials or exponentials → ratio or root</li>
                <li>Alternating signs → AST</li>
                <li>Positive decreasing function → integral test</li>
              </ul>
            </div>
          </section>

          {/* Back Link */}
          <div className="mt-8">
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
  );
}
