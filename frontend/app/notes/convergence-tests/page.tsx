"use client";

import Link from "next/link";
import TopicsSidebar from "@/components/TopicsSidebar";

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

      {/* Layout: Sidebar + Main Content */}
      <div className="pt-16 flex min-h-[calc(100vh-4rem)]">
        {/* 🔴 Dashboard-style sidebar with topics */}
        <TopicsSidebar />

        {/* Main Page Content */}
        <main className="flex-1 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-red-50/40 via-white to-white">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <header className="mb-10 mt-6">
              <p className="text-xs font-semibold uppercase tracking-wider text-red-600 mb-1">
                Series &amp; Convergence
              </p>

              <h1 className="text-3xl md:text-4xl font-bold text-[#1a1f2e] mb-2">
                Convergence Tests Overview
              </h1>

              <p className="text-sm md:text-base text-gray-600">
                A complete summary of all major convergence tests used in Calculus
                2 to determine whether an infinite series converges or diverges.
              </p>
            </header>

            {/* Content Card */}
            <section className="bg-white border border-red-100 rounded-2xl p-6 shadow-sm space-y-8">
              {/* 1. Test for Divergence */}
              <div>
                <h2 className="text-xl font-semibold text-red-700 mb-2">
                  1. Test For Divergence
                </h2>
                <p className="text-gray-700 text-sm leading-relaxed mb-2 text-[16.5px]">
                  Used For Σ aₙ. <br />
                  If Lim<sub>n → ∞</sub> aₙ ≠ 0, the series diverges.
                  <br /> If Lim<sub>n → ∞</sub> aₙ = 0, the test is
                  inconclusive.
                </p>
              </div>

              {/* 2. Geometric Series */}
              <div>
                <h2 className="text-xl font-semibold text-red-700 mb-2">
                  2. Geometric Series Test
                </h2>
                <p className="text-gray-700 text-sm leading-relaxed mb-2 text-[16.5px]">
                  A geometric series has the form Σ a·rⁿ. <br />
                  It <strong>converges if |r| &lt; 1</strong>. <br />
                  It <strong>diverges if |r| ≥ 1</strong>. <br />
                  If it converges and starts at n = 0, the sum is S = a / (1 − r).
                </p>
              </div>

              {/* 3. Telescoping */}
              <div>
                <h2 className="text-xl font-semibold text-red-700 mb-2">
                  3. Telescoping Test
                </h2>
                <p className="text-gray-700 text-sm leading-relaxed mb-2 text-[16.5px]">
                  A telescoping series has terms that cancel when expanded,
                  <br />
                  often written in the form aₙ − aₙ₊₁. <br />
                  It <strong>converges</strong> if the remaining boundary terms
                  <br />
                  approach a finite limit after cancellation. <br />
                  It <strong>diverges</strong> if the leftover expression grows
                  without bound.
                </p>
              </div>

              {/* 4. P-Series */}
              <div>
                <h2 className="text-xl font-semibold text-red-700 mb-2">
                  4. P-Series Test
                </h2>
                <p className="text-gray-700 text-sm leading-relaxed mb-2 text-[16.5px]">
                  A P-series has the form Σ 1 / nᵖ. <br /> It converges if p &gt; 1{" "}
                  <br />
                  and diverges if p ≤ 1.
                </p>
              </div>

              {/* 5. Comparison / Limit Comparison */}
              <div>
                <h2 className="text-xl font-semibold text-red-700 mb-2">
                  5. Comparison &amp; Limit Comparison Tests
                </h2>
                <p className="text-gray-700 text-sm leading-relaxed mb-2 text-[16.5px]">
                  Useful when your series resembles a known p-series or geometric
                  series.
                </p>
                <ul className="text-gray-700 text-sm list-disc list-inside space-y-1 text-[16.5px]">
                  <li>
                    <strong>Direct Comparison:</strong> Compare term-by-term with
                    a known series that you already know converges or diverges.
                  </li>
                  <p>Or</p>
                  <li>
                    <strong>Limit Comparison:</strong> Pick a known series bₙ and
                    compute lim (aₙ / bₙ). <br /> If the limit exists and is
                    positive and finite, then both series either converge together
                    or diverge together.
                  </li>
                </ul>
              </div>

              {/* 6. Ratio & Root */}
              <div>
                <h2 className="text-xl font-semibold text-red-700 mb-2 ">
                  6. Ratio &amp; Root Tests
                </h2>
                <p className="text-gray-700 text-sm leading-relaxed mb-2 text-[16.5px]">
                  These are very powerful when factorials or exponentials appear.
                </p>

                <ul className="text-gray-700 text-sm list-disc list-inside space-y-2 text-[16.5px]">
                  <li>
                    <strong>Ratio Test:</strong> Compute L = lim |aₙ₊₁ / aₙ|.
                    <div className="ml-4 mt-1 text-gray-600 text-[16.5px]">
                      • L &lt; 1 → converges <br />
                      • L &gt; 1 → diverges <br />
                      • L = 1 → test is inconclusive
                    </div>
                  </li>

                  <li>
                    <strong>Root Test:</strong> Compute L = lim ⁿ√|aₙ|.
                    <div className="ml-4 mt-1 text-gray-600">
                      Same conclusions as the Ratio Test.
                    </div>
                  </li>
                </ul>
              </div>

              {/* 7. Alternating Series Test */}
              <div>
                <h2 className="text-xl font-semibold text-red-700 mb-2">
                  7. Alternating Series Test (AST)
                </h2>
                <p className="text-gray-700 text-sm leading-relaxed text-[16.5px]">
                  Used when the series alternates signs (for example, (−1)ⁿ aₙ). It
                  converges if:
                </p>
                <ul className="text-gray-700 text-sm list-disc list-inside space-y-1 ml-4 mt-1 text-[16.5px]">
                  <li>aₙ is eventually decreasing</li>
                  <li>lim aₙ = 0</li>
                </ul>
                <p className="text-gray-600 text-sm mt-1 italic text-[16.5px]">
                  This usually gives conditional convergence unless the series of
                  |aₙ| also converges by another test (then it&apos;s absolutely
                  convergent).
                </p>
              </div>

              {/* 8. Integral Test */}
              <div>
                <h2 className="text-xl font-semibold text-red-700 mb-2">
                  8. Integral Test
                </h2>
                <p className="text-gray-700 text-sm leading-relaxed mb-2">
                  For f(x) positive, continuous, and decreasing on [1, ∞), the
                  series Σ f(n) converges or diverges together with the improper
                  integral ∫₁^∞ f(x) dx.
                </p>
              </div>

              {/* Summary Table */}
              <h2 className="text-xl font-semibold text-red-700 mb-3">
                Convergence / Divergence Summary Table
              </h2>
              <p className="text-gray-700 text-sm mb-3">
                Use this table as a quick reference for which test to try and
                what it tells you about a series.
              </p>

              <div className="overflow-x-auto rounded-xl border border-red-100">
                <table className="min-w-full text-sm">
                  <thead className="bg-red-50">
                    <tr>
                      <th className="px-3 py-2 text-left font-semibold text-gray-700">
                        Test
                      </th>
                      <th className="px-3 py-2 text-left font-semibold text-gray-700">
                        Typical Form
                      </th>
                      <th className="px-3 py-2 text-left font-semibold text-gray-700">
                        Converges When
                      </th>
                      <th className="px-3 py-2 text-left font-semibold text-gray-700">
                        Diverges When
                      </th>
                    </tr>
                  </thead>

                  <tbody className="divide-y divide-red-50">
                    {/* Term Test */}
                    <tr className="hover:bg-red-50/40">
                      <td className="px-3 py-2 font-medium text-gray-800">
                        Term Test (Limit Test)
                      </td>
                      <td className="px-3 py-2 text-gray-700">
                        lim (n → ∞) aₙ
                      </td>
                      <td className="px-3 py-2 text-gray-700">
                        — Does NOT prove convergence
                      </td>
                      <td className="px-3 py-2 text-gray-700">
                        lim aₙ ≠ 0 → series diverges
                      </td>
                    </tr>

                    {/* Geometric */}
                    <tr className="hover:bg-red-50/40">
                      <td className="px-3 py-2 font-medium text-gray-800">
                        Geometric Series
                      </td>
                      <td className="px-3 py-2 text-gray-700">Σ a·rⁿ</td>
                      <td className="px-3 py-2 text-gray-700">|r| &lt; 1</td>
                      <td className="px-3 py-2 text-gray-700">|r| ≥ 1</td>
                    </tr>

                    {/* Telescoping */}
                    <tr className="hover:bg-red-50/40">
                      <td className="px-3 py-2 font-medium text-gray-800">
                        Telescoping Series
                      </td>
                      <td className="px-3 py-2 text-gray-700">
                        Terms cancel out (aₙ − aₙ₊₁)
                      </td>
                      <td className="px-3 py-2 text-gray-700">
                        Sum = lim (aₙ) − lim (aₙ₊ₖ), if both limits exist
                      </td>
                      <td className="px-3 py-2 text-gray-700">
                        Diverges if resulting limit is infinite or undefined
                      </td>
                    </tr>

                    {/* p-Series */}
                    <tr className="hover:bg-red-50/40">
                      <td className="px-3 py-2 font-medium text-gray-800">
                        p-Series
                      </td>
                      <td className="px-3 py-2 text-gray-700">Σ 1 / nᵖ</td>
                      <td className="px-3 py-2 text-gray-700">p &gt; 1</td>
                      <td className="px-3 py-2 text-gray-700">p ≤ 1</td>
                    </tr>

                    {/* Integral Test */}
                    <tr className="hover:bg-red-50/40">
                      <td className="px-3 py-2 font-medium text-gray-800">
                        Integral Test
                      </td>
                      <td className="px-3 py-2 text-gray-700">
                        Σ f(n), f positive, continuous, decreasing
                      </td>
                      <td className="px-3 py-2 text-gray-700">
                        ∫₁^∞ f(x) dx converges
                      </td>
                      <td className="px-3 py-2 text-gray-700">
                        ∫₁^∞ f(x) dx diverges
                      </td>
                    </tr>

                    {/* Comparison */}
                    <tr className="hover:bg-red-50/40">
                      <td className="px-3 py-2 font-medium text-gray-800">
                        Comparison / Limit Comparison
                      </td>
                      <td className="px-3 py-2 text-gray-700">
                        Σ aₙ compared to Σ bₙ
                      </td>
                      <td className="px-3 py-2 text-gray-700">
                        Compare with known convergent series
                      </td>
                      <td className="px-3 py-2 text-gray-700">
                        Compare with known divergent series
                      </td>
                    </tr>

                    {/* Ratio */}
                    <tr className="hover:bg-red-50/40">
                      <td className="px-3 py-2 font-medium text-gray-800">
                        Ratio Test
                      </td>
                      <td className="px-3 py-2 text-gray-700">
                        L = lim |aₙ₊₁ / aₙ|
                      </td>
                      <td className="px-3 py-2 text-gray-700">L &lt; 1</td>
                      <td className="px-3 py-2 text-gray-700">
                        L &gt; 1 (or L = ∞)
                      </td>
                    </tr>

                    {/* Root */}
                    <tr className="hover:bg-red-50/40">
                      <td className="px-3 py-2 font-medium text-gray-800">
                        Root Test
                      </td>
                      <td className="px-3 py-2 text-gray-700">
                        L = lim ⁿ√|aₙ|
                      </td>
                      <td className="px-3 py-2 text-gray-700">L &lt; 1</td>
                      <td className="px-3 py-2 text-gray-700">
                        L &gt; 1 (or L = ∞)
                      </td>
                    </tr>

                    {/* AST */}
                    <tr className="hover:bg-red-50/40">
                      <td className="px-3 py-2 font-medium text-gray-800">
                        Alternating Series Test (AST)
                      </td>
                      <td className="px-3 py-2 text-gray-700">
                        Σ (−1)ⁿ aₙ or (−1)ⁿ⁺¹ aₙ
                      </td>
                      <td className="px-3 py-2 text-gray-700">
                        aₙ decreasing, and lim aₙ = 0
                      </td>
                      <td className="px-3 py-2 text-gray-700">
                        If aₙ not decreasing or lim aₙ ≠ 0 → diverges
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Summary Strategy */}
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

            {/* Examples (unchanged) */}
            {/* Direct Comparison Example */}
            {/* ... all your example blocks stay exactly as you had them ... */}
 {/* Example: Using Direct Comparison */}
<div className="mt-4 p-4 rounded-xl border border-red-100 bg-red-50/40">
  <h3 className="text-md font-semibold text-red-700 mb-2">
    Example: Determine whether the series Σ
    <div className="inline-flex flex-col items-center ml-1">
      <span>1</span>
      <span className="border-t border-gray-700 w-full"></span>
      <span>n<sup>2</sup> + 1</span>
    </div>
    converges
  </h3>

  <p className="text-sm text-gray-700 leading-relaxed mb-2">
    We can also evaluate this series using the <strong>Direct Comparison Test</strong>.
    Notice that the denominator <strong>n² + 1</strong> is always larger than <strong>n²</strong>
    for every n ≥ 1. A larger denominator makes the whole fraction smaller.
  </p>

  <p className="text-sm text-gray-700 leading-relaxed mb-2">
    We compare the series directly with the known p-series Σ 1/n².
  </p>

  {/* Inequality */}
  <p className="text-sm font-mono text-gray-800 bg-white p-2 rounded-lg border border-red-100">
    For all n ≥ 1:
    <br />
    <div className="inline-flex flex-col items-center mt-1">
      <span>1</span>
      <span className="border-t border-gray-700 w-full"></span>
      <span>n<sup>2</sup> + 1</span>
    </div>
    <span className="mx-2">≤</span>
    <div className="inline-flex flex-col items-center">
      <span>1</span>
      <span className="border-t border-gray-700 w-full"></span>
      <span>n<sup>2</sup></span>
    </div>
  </p>

  <p className="text-sm text-gray-700 leading-relaxed mt-2">
    This inequality is true because adding 1 to the denominator makes the value smaller.
  </p>

  <p className="text-sm text-gray-700 leading-relaxed mt-1">
    Since Σ 1/n² is a known <strong>convergent</strong> p-series (p = 2 &gt; 1),
    and our terms are <em>always smaller</em> than the terms of a convergent series,
    the Direct Comparison Test applies.
  </p>

  <p className="text-sm text-gray-800 font-semibold mt-2">
    ✅ Therefore, the series Σ 1/(n² + 1) <span className="text-red-700">converges</span>.
  </p>
</div>


          {/* Example: Using the Strategy */}
<div className="mt-4 p-4 rounded-xl border border-red-100 bg-red-50/40">
  <h3 className="text-md font-semibold text-red-700 mb-2">
    Example: Determine whether the series Σ<div className="inline-flex flex-col items-center">
  <span>1</span>
  <span className="border-t border-gray-700 w-full"></span>
  <span>n<sup>2</sup> + 1</span>
</div>
 converges
  </h3>

  <p className="text-sm text-gray-700 leading-relaxed mb-2">
    You can also use the limit comparison test on this example for a strong converging case. The terms look similar to a p-series, because for large n, the “+1” becomes
    insignificant compared to n². So we compare it to the known p-series Σ 1/n².
  </p>

  <p className="text-sm text-gray-700 leading-relaxed mb-2">
    We use the <strong>Limit Comparison Test</strong> with bₙ = 1/n².
  </p>

  <p className="text-sm font-mono text-gray-800 bg-white p-2 rounded-lg border border-red-100">
    Lim<sub>n → ∞</sub>  <div className="inline-flex flex-col items-center mx-1">
  <div className="inline-flex flex-col items-center">
    <span className="inline-flex flex-col items-center">
      <span>1</span>
      <span className="border-t border-gray-700 w-full"></span>
      <span>n<sup>2</sup> + 1</span>
    </span>
    <span className="border-t border-gray-700 w-full my-1"></span>
    <span className="inline-flex flex-col items-center">
      <span>1</span>
      <span className="border-t border-gray-700 w-full"></span>
      <span>n<sup>2</sup></span>
    </span>
  </div>
</div>

    <br />
    = <div className="text-sm inline-flex items-center">
  <span className="mr-1">Lim</span>
  <sub className="mr-2">n → ∞</sub>

  {/* Fraction */}
  <span className="inline-flex flex-col items-center">
    <span>n<sup>2</sup></span>
    <span className="border-t border-gray-700 w-full"></span>
    <span>n<sup>2</sup> + 1</span>
  </span>
</div>
                    <br />
    From ratio of leading Terms:
    

    <br />
    = 1
  </p>

  <p className="text-sm text-gray-700 leading-relaxed mt-2">
    Since the limit is a positive finite number (<strong>1</strong>), both
    series behave the same.
  </p>

  <p className="text-sm text-gray-700 leading-relaxed mt-1">
    And we know that Σ 1/n² is a convergent p-series with p = 2 &gt; 1.
  </p>

  <p className="text-sm text-gray-800 font-semibold mt-2">
    ✅ Therefore, the series Σ 1/(n² + 1) <span className="text-red-700">converges</span>.
  </p>
</div>
{/* Example: Geometric Series Convergence */}
<div className="mt-4 p-4 rounded-xl border border-red-200 bg-red-50/40">
  <h3 className="text-md font-semibold text-red-700 mb-2">
    Example: Determine whether the series Σ 7·
    <span className="inline-flex flex-col items-center mx-1">
      <span>−1</span>
      <span className="border-t border-gray-700 w-full"></span>
      <span>7</span>
    </span>
    <sup>n</sup> converges or diverges
  </h3>

  <p className="text-sm text-gray-700 leading-relaxed mb-2">
    This is a geometric series of the form Σ a·r<sup>n</sup>. We identify:
  </p>

  <ul className="text-sm text-gray-700 leading-relaxed list-disc list-inside mb-2">
    <li>First term: a = 7·     <span className="inline-flex flex-col items-center mx-1">
        <span>−1</span>
        <span className="border-t border-gray-700 w-full"></span>
        <span>7</span> 
      </span><sup>0</sup> = 7</li>
    <li>Common ratio: r = 
      <span className="inline-flex flex-col items-center mx-1">
        <span>−1</span>
        <span className="border-t border-gray-700 w-full"></span>
        <span>7</span>
      </span>
    </li>
  </ul>

  <p className="text-sm text-gray-700 leading-relaxed mb-2">
    A geometric series converges when <strong>|r| &lt; 1</strong> and diverges when <strong>|r| ≥ 1</strong>.
  </p>

  {/* |r| check */}
  <p className="text-sm font-mono text-gray-800 bg-white p-2 rounded-lg border border-red-200">
    |r| =  
    <span className="inline-flex flex-col items-center mx-1">
      <span>1</span>
      <span className="border-t border-gray-700 w-full"></span>
      <span>7</span>
    </span>
    &lt; 1  
    → geometric series converges
  </p>

  {/* Sum Formula */}
  <p className="text-sm text-gray-700 leading-relaxed mt-2">
    Since |r| &lt; 1, the series <strong>converges</strong>.  
    For a geometric series starting at n = 0, the sum is:
  </p>

  {/* Fraction for S = a / (1 - r) */}
  <div className="text-sm font-mono text-gray-800 bg-white p-2 rounded-lg border border-red-200">
    <div>S = a / (1 − r)</div>

    <div className="mt-2">
      a = 7, r = 
      <span className="inline-flex flex-col items-center mx-1">
        <span>−1</span>
        <span className="border-t border-gray-700 w-full"></span>
        <span>7</span>
      </span>
    </div>

    {/* Fraction for 1 - r */}
    <div className="mt-1">
      1 − r = 1 − 
      <span className="inline-flex flex-col items-center mx-1">
        <span>−1</span>
        <span className="border-t border-gray-700 w-full"></span>
        <span>7</span>
      </span>
      = 1 + 
      <span className="inline-flex flex-col items-center mx-1">
        <span>1</span>
        <span className="border-t border-gray-700 w-full"></span>
        <span>7</span>
      </span>
    </div>

    {/* Fraction for a/(1 - r) */}
    <div className="mt-2 inline-flex flex-col items-center">
      <span>7</span>
      <span className="border-t border-gray-700 w-full"></span>
      <span>
        1 + 
        <span className="inline-flex flex-col items-center mx-1">
          <span>1</span>
          <span className="border-t border-gray-700 w-full"></span>
          <span>7</span>
        </span>
      </span>
    </div>

    <div className="mt-2">= 
      <span className="inline-flex flex-col items-center mx-1">
        <span>49</span>
        <span className="border-t border-gray-700 w-full"></span>
        <span>8</span>
      </span>
    </div>
  </div>

  <p className="text-sm text-gray-700 leading-relaxed mt-2">
    So the infinite geometric series converges to the value 
    <strong> 49/8</strong>.
  </p>

  <p className="text-sm text-gray-800 font-semibold mt-2">
    ✅ Therefore, the geometric series Σ 7·(−1/7)<sup>n</sup>{" "}
    <span className="text-red-700">converges to 49/8</span>.
  </p>
</div>
</div>

          {/* Back Link */}
          <div className="mt-8">
            <Link
              href="/dashboard"
              className="inline-flex items-center text-sm font-medium text-red-700 hover:text-red-800"
            >
              ← Back to Dashboard
            </Link>

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
