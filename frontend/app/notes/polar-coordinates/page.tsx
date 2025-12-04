"use client";

import Link from "next/link";
import Image from "next/image";
import TopicsSidebar from "@/components/TopicsSidebar";

export default function PolarCoordinatesPage() {
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
                Section 9.3 · Polar Coordinates
              </p>

              <h1 className="text-3xl md:text-4xl font-bold text-[#1a1f2e] mb-2">
                Polar Coordinates: Points &amp; Conversion
              </h1>

              <p className="text-sm md:text-base text-gray-600">
                Learn how to describe points in the plane using polar coordinates
                (r, θ), and convert between Cartesian and polar forms.
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
                    Describe points, curves, and regions in the plane using polar
                    coordinates (r, θ).
                  </li>
                  <li>
                    Use conversion formulas to move between Cartesian (x, y) and
                    polar (r, θ), and combine polar with parametric equations to
                    describe new families of curves.
                  </li>
                  <li>
                    Use polar coordinates to sketch and analyze curves.
                  </li>
                </ul>
              </div>

              {/* Conversion Formulas */}
              <div>
                <h2 className="text-xl font-semibold text-red-700 mb-2">
                  Conversion Formulas
                </h2>

                <div className="grid md:grid-cols-2 gap-4">
                  {/* Cartesian → Polar */}
                  <div className="rounded-xl border border-red-100 bg-red-50/40 p-4">
                    <h3 className="text-md font-semibold text-red-700 mb-2">
                      Cartesian → Polar
                    </h3>
                    <p className="text-gray-700 text-sm leading-relaxed text-[16.5px]">
                      Given a point (x, y), we define:
                    </p>
                    <ul className="mt-2 text-gray-800 text-sm leading-relaxed space-y-2 font-mono text-[15px]">
                      <li>r² = x² + y²</li>
                      <li>r = √(x² + y²)</li>
                      <li className="flex items-center gap-2">
                        tan θ =
                        <span className="inline-flex flex-col items-center">
                          <span>y</span>
                          <span className="border-t border-gray-700 w-full"></span>
                          <span>x</span>
                        </span>
                      </li>
                      <li className="flex items-center gap-2">
                        θ = arctan
                        <span className="inline-flex flex-col items-center">
                          <span>y</span>
                          <span className="border-t border-gray-700 w-full"></span>
                          <span>x</span>
                        </span>
                        <span>(adjusted by quadrant)</span>
                      </li>
                    </ul>
                    <p className="text-xs text-gray-600 mt-2">
                      Remember: θ is an angle measured from the positive x-axis,
                      and you may need to add π or 2π to get the correct quadrant.
                    </p>
                  </div>

                  {/* Polar → Cartesian */}
                  <div className="rounded-xl border border-red-100 bg-red-50/40 p-4">
                    <h3 className="text-md font-semibold text-red-700 mb-2">
                      Polar → Cartesian
                    </h3>
                    <p className="text-gray-700 text-sm leading-relaxed text-[16.5px]">
                      Given a point (r, θ), we find x and y using:
                    </p>
                    <ul className="mt-2 text-gray-800 text-sm leading-relaxed space-y-1 font-mono text-[15px]">
                      <li>x = r cos θ</li>
                      <li>y = r sin θ</li>
                    </ul>
                    <p className="text-xs text-gray-600 mt-2">
                      These are the same parametric equations for a circle of
                      radius r when θ runs from 0 to 2π.
                    </p>
                  </div>
                </div>
              </div>

              {/* Example 1: Find (3,4) in polar coordinates */}
              <div className="mt-2 p-4 rounded-xl border border-red-100 bg-red-50/40">
                <h3 className="text-md font-semibold text-red-700 mb-2">
                  Example 1: Find (3, 4) in polar coordinates
                </h3>

                <p className="text-sm text-gray-700 leading-relaxed mb-2 text-[16px]">
                  We are given the point in Cartesian form: (x, y) = (3, 4). We
                  want to express it in polar form (r, θ).
                </p>

                {/* Step 1: Compute r */}
                <div className="mb-3">
                  <p className="text-sm text-gray-800 font-semibold mb-1">
                    Step 1: Compute r using r² = x² + y²
                  </p>

                  <p className="text-sm font-mono text-gray-800 bg-white p-2 rounded-lg border border-red-100">
                    r² = x² + y² = 3² + 4² = 9 + 16 = 25 <br />
                    r = √25 = 5
                  </p>
                </div>

                {/* Graph Image */}
                <div className="w-full flex justify-center my-6">
                  <Image
                    src="/polargraph1.png"
                    alt="Polar coordinate graph for Example 1"
                    width={875}
                    height={600}
                    priority
                    className="rounded-xl border border-red-200 shadow-md object-contain"
                  />
                </div>

                {/* Step 2: Compute theta */}
                <div className="mb-3">
                  <p className="text-sm text-gray-800 font-semibold mb-1">
                    Step 2: Compute θ using tan θ = y / x
                  </p>

                  <p className="text-sm font-mono text-gray-800 bg-white p-2 rounded-lg border border-red-100">
                    tan θ ={" "}
                    <div className="inline-flex flex-col items-center mt-1">
                      <span>4</span>
                      <span className="border-t border-gray-700 w-full"></span>
                      <span>3</span>
                    </div>
                    <br />
                    θ = arctan
                    <span className="inline-flex flex-col items-center ml-1">
                      <span>4</span>
                      <span className="border-t border-gray-700 w-full"></span>
                      <span>3</span>
                    </span>
                  </p>

                  <p className="text-sm text-gray-700 leading-relaxed mt-1">
                    Since (3, 4) is in Quadrant I (x &gt; 0, y &gt; 0), this
                    angle is already the correct principal angle.
                  </p>
                </div>

                {/* Final Answer */}
                <div className="mt-2">
                  <p className="text-sm text-gray-800 font-semibold mb-1">
                    Final Answer:
                  </p>

                  <p className="text-sm text-gray-700 leading-relaxed">
                    One polar representation is{" "}
                    <strong>
                      (r, θ) = (5, arctan
                      <span className="inline-flex flex-col items-center ml-1">
                        <span>4</span>
                        <span className="border-t border-gray-700 w-full"></span>
                        <span>3</span>
                      </span>
                      )
                    </strong>
                    .
                  </p>

                  <p className="text-sm text-gray-600 leading-relaxed mt-1 italic">
                    Polar coordinates are not unique — another valid form is
                    (5, arctan(4/3) + 2kπ) for any integer k.
                  </p>
                </div>
              </div>

              {/* Notes Section */}
              <div className="mt-8 space-y-4">
                <h2 className="text-xl font-semibold text-red-700">
                  Key Notes Before Moving On
                </h2>

                <p className="text-gray-700 text-sm leading-relaxed text-[16.5px]">
                  Before sketching polar curves, it’s important to reinforce a few
                  ideas about how polar coordinates work and how points and curves
                  behave in the polar plane.
                </p>

                <h3 className="text-lg font-semibold text-red-600 mt-4">
                  1. Polar Coordinates Are Not Unique
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed text-[16.5px]">
                  Any point can be written in infinitely many ways. Adding 2π to
                  the angle or switching to a negative radius gives different
                  representations of the same point: (r, θ), (r, θ + 2πk), or
                  (−r, θ + π).
                </p>

                <h3 className="text-lg font-semibold text-red-600 mt-4">
                  2. Symmetry Helps Predict the Curve
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed text-[16.5px]">
                  Equations using sin θ often have vertical symmetry. Equations
                  using cos θ often have horizontal symmetry. Checking symmetry
                  makes graphs easier to understand before drawing.
                </p>

                <h3 className="text-lg font-semibold text-red-600 mt-4">
                  3. Use Key Angles to Understand Behavior
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed text-[16.5px]">
                  When sketching r = f(θ), plug in important angles such as 0,
                  π/2, π, and 3π/2. These values reveal how the curve grows,
                  shrinks, or crosses the origin.
                </p>

                <h3 className="text-lg font-semibold text-red-600 mt-4">
                  4. Relationship Between (x, y) and (r, θ)
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed text-[16.5px]">
                  Remember that r measures distance from the origin and θ is the
                  angle from the positive x-axis. These relationships help confirm
                  whether points are placed correctly when switching between
                  coordinate systems.
                </p>
              </div>

              {/* Example 2: Sketch r = 1 + sin θ */}
              <div className="mt-4 p-4 rounded-xl border border-red-100 bg-red-50/40">
                <h3 className="text-md font-semibold text-red-700 mb-2">
                  Example 2: Sketch the polar curve r = 1 + sin θ
                </h3>

                <p className="text-sm text-gray-700 leading-relaxed mb-2 text-[16px]">
                  We are given a polar equation r = 1 + sin θ. We want to
                  understand the shape of this curve and how it is traced in the
                  polar plane.
                </p>

                {/* Step 1: Recognize type */}
                <div className="mb-3">
                  <p className="text-sm text-gray-800 font-semibold mb-1">
                    Step 1: Recognize the type of curve
                  </p>
                  <p className="text-sm font-mono text-gray-800 bg-white p-2 rounded-lg border border-red-100">
                    r = 1 + sin θ
                  </p>
                  <p className="text-sm text-gray-700 leading-relaxed mt-1">
                    This has the form r = a + b sin θ, which is a{" "}
                    <strong>limaçon</strong>. Because a and b are both 1, the
                    curve is a special limaçon called a{" "}
                    <strong>cardioid</strong>.
                  </p>
                </div>

                {/* Step 2: Key angles */}
                <div className="mb-3">
                  <p className="text-sm text-gray-800 font-semibold mb-1">
                    Step 2: Evaluate r at key angles
                  </p>
                  <p className="text-sm font-mono text-gray-800 bg-white p-2 rounded-lg border border-red-100">
                    θ = 0:&nbsp;&nbsp;&nbsp;&nbsp;r = 1 + sin 0 = 1 <br />
                    θ = π/2:&nbsp;r = 1 + sin(π/2) = 1 + 1 = 2 <br />
                    θ = π:&nbsp;&nbsp;&nbsp;r = 1 + sin π = 1 + 0 = 1 <br />
                    θ = 3π/2:&nbsp;r = 1 + sin(3π/2) = 1 − 1 = 0
                  </p>
                  <p className="text-sm text-gray-700 leading-relaxed mt-1">
                    The point with largest radius is at θ = π/2 (straight up),
                    and the curve passes through the origin when θ = 3π/2.
                  </p>
                </div>

                {/* Step 3 + graph */}
                <div className="mb-3">
                  <p className="text-sm text-gray-800 font-semibold mb-1">
                    Step 3: Describe symmetry and overall shape
                  </p>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    Because the equation uses sin θ, the graph is symmetric about
                    the vertical (y)-axis. As θ runs from 0 to 2π, the radius
                    grows from 1 up to 2, then shrinks to 0 at the origin, and
                    returns to 1. This produces a{" "}
                    <strong>heart-shaped cardioid</strong> with its “bump”
                    centered above the origin.
                  </p>

                  <div className="my-4 flex justify-center">
                    <Image
                      src="/polargraph2.png"
                      alt="Cardioid graph for r = 1 + sin θ"
                      width={450}
                      height={350}
                      className="rounded-xl border border-red-200 shadow-md object-contain"
                    />
                  </div>
                </div>

                {/* Summary */}
                <div className="mt-2">
                  <p className="text-sm text-gray-800 font-semibold mb-1">
                    Summary:
                  </p>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    The polar curve r = 1 + sin θ is a cardioid, symmetric about
                    the vertical axis, with maximum radius 2 at θ = π/2 and
                    passing through the origin at θ = 3π/2.
                  </p>
                </div>
              </div>

              {/* Small recap */}
              <div className="border-t border-red-100 pt-4">
                <h2 className="text-lg font-semibold text-[#1a1f2e] mb-2">
                  Quick Recap
                </h2>
                <ul className="text-gray-700 text-sm list-disc list-inside space-y-1 mt-2">
                  <li>Use r² = x² + y² to find the distance from the origin.</li>
                  <li>
                    Use tan θ = y / x and quadrant information to find the angle.
                  </li>
                  <li>
                    Cartesian (3, 4) becomes polar (5, arctan(4/3)) plus multiples
                    of 2π.
                  </li>
                  <li>Polar curves can be sketched by evaluating r at key angles.</li>
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
