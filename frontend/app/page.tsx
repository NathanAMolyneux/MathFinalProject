"use client";

import Link from "next/link";
import { ArrowRight, CheckCircle, Users, Target, Shield, Linkedin, Globe, Github } from "lucide-react";

export default function LandingPage() {
  const teamMembers = [
    {
      name: "Abishek Lwagun",
      role: "Team Lead & Fullstack Developer",
      extraRole: "Designer",
      bio: "Spearheading the architectural vision and full-stack implementation, ensuring scalable and robust solutions.",
      initials: "AL",
    },
    {
      name: "Nathan M.",
      role: "Scrum Master",
      extraRole: "Designer & Developer",
      bio: "Driving agile methodologies to ensure timely delivery while contributing to high-fidelity design and core development.",
      initials: "NM",
    },
    {
      name: "Sanju",
      role: "UI/UX Designer",
      extraRole: "Frontend Developer",
      bio: "Crafting intuitive, user-centric interfaces and translating design concepts into responsive, high-performance frontend code.",
      initials: "S",
    },
    {
      name: "Rikin Shrestha",
      role: "Designer & Developer",
      extraRole: "Fullstack Contributor",
      bio: "Bridging the gap between aesthetic excellence and functional reliability through comprehensive design and development.",
      initials: "RS",
    }
  ];

  return (
    <div className="min-h-screen bg-white text-[#1a1f2e] font-sans selection:bg-red-100 selection:text-red-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center group cursor-pointer">
              <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-red-800 group-hover:from-red-500 group-hover:to-red-700 transition-all duration-300">
                TaskFlow
              </span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="#about" className="text-gray-600 hover:text-red-600 transition-colors font-medium">
                About Us
              </Link>
              <Link href="#team" className="text-gray-600 hover:text-red-600 transition-colors font-medium">
                Team
              </Link>
              <Link
                href="/login"
                className="px-6 py-2 rounded-full bg-red-600 text-white font-medium hover:bg-red-700 hover:shadow-lg hover:shadow-red-600/30 transition-all transform hover:-translate-y-0.5"
              >
                Sign In
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-red-50 via-white to-white opacity-70" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-red-50 border border-red-100 text-red-600 text-sm font-medium mb-8 animate-fade-in-up shadow-sm">
              <span className="flex h-2 w-2 rounded-full bg-red-600 mr-2 animate-pulse"></span>
              Revolutionizing Service Management
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-tight">
              Manage Requests with <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-800">
                Precision & Speed
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-10 leading-relaxed max-w-2xl mx-auto">
              TaskFlow (CIS-SRMS) is the ultimate solution for managing service requests efficiently.
              Designed for modern teams to track, prioritize, and resolve tasks seamlessly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/login"
                className="px-8 py-4 rounded-full bg-red-600 text-white font-semibold text-lg hover:bg-red-700 transition-all shadow-xl shadow-red-600/30 flex items-center justify-center gap-2 transform hover:-translate-y-1"
              >
                Get Started <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="#about"
                className="px-8 py-4 rounded-full bg-white border border-gray-200 text-gray-700 font-semibold text-lg hover:border-red-200 hover:bg-red-50 hover:text-red-700 transition-all flex items-center justify-center transform hover:-translate-y-1"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About / Goals Section */}
      <section id="about" className="py-24 bg-gray-50 relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-red-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
          <div className="absolute top-1/2 -right-24 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Mission & Vision</h2>
            <div className="max-w-4xl mx-auto bg-white p-10 rounded-2xl shadow-sm border border-gray-100">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                We are a team of forward-thinking developers and designers working under the expert mentorship of <span className="font-semibold text-gray-900">Professor Suboh</span>.
                Our mission is to engineer a transformative Service Request Management System (SRMS) that redefines organizational efficiency.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                This platform serves as a strategic showcase for the <span className="font-semibold text-red-700">Federal Insurance Company</span>, demonstrating a future-ready infrastructure.
                By integrating advanced workflow automation with intuitive design, we aim to provide a scalable solution that ensures transparency, accountability, and operational excellence.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Target className="w-8 h-8 text-red-600" />,
                title: "Strategic Efficiency",
                description: "Optimizing the request lifecycle through intelligent routing and automated prioritization to minimize latency."
              },
              {
                icon: <Shield className="w-8 h-8 text-red-600" />,
                title: "Enterprise Reliability",
                description: "Ensuring data integrity and system availability with a robust, secure, and scalable architectural foundation."
              },
              {
                icon: <Users className="w-8 h-8 text-red-600" />,
                title: "Seamless Collaboration",
                description: "Facilitating real-time cross-functional synergy to accelerate decision-making and task resolution."
              }
            ].map((item, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:shadow-gray-200/50 transition-all duration-300 transform hover:-translate-y-1">
                <div className="bg-red-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet the Team</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              The innovative minds behind TaskFlow, simulating a professional enterprise team to deliver excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="group relative bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="p-8 flex flex-col items-center">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-red-50 to-red-100 flex items-center justify-center text-2xl font-bold text-red-600 mb-6 group-hover:scale-110 transition-transform duration-300">
                    {member.initials}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 text-center">{member.name}</h3>
                  <p className="text-red-600 font-medium text-sm uppercase tracking-wider text-center mb-1">{member.role}</p>
                  <p className="text-gray-400 text-xs font-medium mb-4">{member.extraRole}</p>

                  {/* Social Links - Always visible but subtle */}
                  <div className="flex space-x-3 mb-4 opacity-50 group-hover:opacity-100 transition-opacity duration-300">
                    <a href="#" className="text-gray-400 hover:text-red-600 transition-colors"><Linkedin className="w-4 h-4" /></a>
                    <a href="#" className="text-gray-400 hover:text-red-600 transition-colors"><Github className="w-4 h-4" /></a>
                    <a href="#" className="text-gray-400 hover:text-red-600 transition-colors"><Globe className="w-4 h-4" /></a>
                  </div>
                </div>

                {/* Hover Overlay for Bio */}
                <div className="absolute inset-0 bg-white/95 backdrop-blur-sm p-6 flex flex-col justify-center items-center text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
                  <p className="text-gray-700 text-sm leading-relaxed font-medium">
                    "{member.bio}"
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1a1f2e] text-white py-12 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0 text-center md:text-left">
              <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">TaskFlow</span>
              <p className="text-gray-400 text-sm mt-2">Smart Service Request Management System</p>
              <p className="text-gray-600 text-xs mt-1">Developed by Students of MNSU</p>
            </div>
            <div className="flex space-x-8">
              <a href="#" className="text-gray-400 hover:text-red-500 transition-colors text-sm font-medium">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-red-500 transition-colors text-sm font-medium">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-red-500 transition-colors text-sm font-medium">Contact Support</a>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-10 pt-8 text-center text-gray-600 text-sm">
            © 2025 TaskFlow. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}