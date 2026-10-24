"use client";

import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, MapPin, Clock, ArrowLeft, ShieldCheck, Sparkles } from "lucide-react";

// Fixed Video Background of Waves (matching main page)
function FixedVideoBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden select-none z-0">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover"
      >
        <source src="/bg_waves.mp4" type="video/mp4" />
      </video>
      {/* Subtle white backdrop blur layer */}
      <div className="absolute inset-0 bg-white/15 backdrop-blur-[3px]" />
    </div>
  );
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-transparent text-slate-800 flex flex-col font-sans selection:bg-sky-200 selection:text-sky-950 overflow-x-hidden relative">
      {/* FIXED BACKGROUND VIDEO OF WAVES */}
      <FixedVideoBackground />

      {/* NAVBAR */}
      <header className="relative z-50 bg-gradient-to-b from-[#001726]/95 via-[#001726]/80 to-transparent border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 sm:h-24 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 sm:gap-4 group shrink-0">
            <div className="relative w-12 h-12 sm:w-16 sm:h-16 rounded-full shadow-2xl group-hover:scale-105 transition overflow-hidden shrink-0 drop-shadow-xl">
              <Image
                src="/logo.png"
                alt="YRE - Yamuna River Experience"
                fill
                priority
                className="object-cover"
              />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-2xl sm:text-3xl font-black tracking-tight text-white drop-shadow-lg">
                  Y<span className="text-[#38bdf8]">RE</span>
                </span>
                <span className="text-[10px] sm:text-xs uppercase font-extrabold tracking-wider px-2 py-0.5 rounded-md bg-sky-400/25 text-sky-200 border border-sky-300/40 backdrop-blur-md hidden xs:inline-block shadow-sm">
                  NW-110
                </span>
              </div>
              <p className="text-xs sm:text-sm text-sky-200/90 font-medium hidden xs:block tracking-wide drop-shadow">
                Yamuna River Experience &bull; Delhi
              </p>
            </div>
          </Link>

          {/* Nav Links */}
          <nav className="flex items-center gap-4 sm:gap-8 text-sm sm:text-base font-bold text-white/90">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 hover:text-sky-300 transition-colors py-1"
            >
              <ArrowLeft className="w-4 h-4 text-sky-400" />
              <span>Back to Home</span>
            </Link>
          </nav>
        </div>
      </header>

      {/* MAIN CONTENT AREA */}
      <main className="relative z-10 flex-1 py-10 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto w-full flex flex-col justify-center">
        {/* ONE LARGE UNIFIED CONTAINER CARD */}
        <div className="relative rounded-[32px] sm:rounded-[44px] overflow-hidden bg-white/95 backdrop-blur-xl border-2 border-sky-200/90 shadow-2xl p-6 sm:p-12 lg:p-16 space-y-10 sm:space-y-12">
          {/* Container Header */}
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-50 text-[#0284c7] text-xs sm:text-sm font-black border border-sky-200">
              <Sparkles className="w-4 h-4 text-[#0284c7]" />
              <span>Ticket Booking &amp; Passenger Assistance</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-black text-[#002b49] tracking-tight leading-tight">
              Contact &amp; Reservations
            </h1>

            <p className="text-base sm:text-lg text-slate-600 font-medium leading-relaxed max-w-2xl mx-auto">
              Get in touch directly with our team to reserve tickets, arrange private group charters, or inquire about cruise timings.
            </p>
          </div>

          {/* PRIMARY CONTACT SECTION: PHONE & EMAIL */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {/* PHONE SECTION */}
            <div className="rounded-3xl bg-slate-50 border border-sky-100 p-6 sm:p-8 flex flex-col justify-between space-y-6 hover:border-[#0284c7] transition group">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-sky-500/10 border border-sky-300/40 flex items-center justify-center text-[#0284c7]">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[11px] font-black uppercase tracking-wider text-[#0284c7]">
                    Booking Hotline
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black text-[#002b49] mt-0.5">
                    Phone Assistance
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-500 mt-1">
                    Direct desk for instant seat confirmations and boarding queries.
                  </p>
                </div>

                {/* Big Phone Number */}
                <div className="pt-2">
                  <a
                    href="tel:8910608502"
                    className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#002b49] group-hover:text-[#0284c7] tracking-tight transition-colors block"
                  >
                    891 060 8502
                  </a>
                  <span className="text-[11px] text-slate-400 font-medium block mt-0.5">
                    Click to dial directly
                  </span>
                </div>
              </div>

              <a
                href="tel:8910608502"
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-[#002b49] hover:bg-[#0284c7] text-white font-black text-xs sm:text-sm uppercase tracking-wider shadow-md transition"
              >
                <Phone className="w-4 h-4" />
                <span>Call 891 060 8502</span>
              </a>
            </div>

            {/* EMAIL SECTION */}
            <div className="rounded-3xl bg-slate-50 border border-sky-100 p-6 sm:p-8 flex flex-col justify-between space-y-6 hover:border-[#0284c7] transition group">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-sky-500/10 border border-sky-300/40 flex items-center justify-center text-[#0284c7]">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[11px] font-black uppercase tracking-wider text-[#0284c7]">
                    Inquiries &amp; Charters
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black text-[#002b49] mt-0.5">
                    Official Email
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-500 mt-1">
                    Send queries for group passes, school tours, and events.
                  </p>
                </div>

                {/* Big Email */}
                <div className="pt-2">
                  <a
                    href="mailto:sounak@papertheorynet.com"
                    className="text-lg sm:text-xl lg:text-2xl font-black text-[#002b49] group-hover:text-[#0284c7] tracking-tight transition-colors block break-words"
                  >
                    sounak@papertheorynet.com
                  </a>
                  <span className="text-[11px] text-slate-400 font-medium block mt-0.5">
                    Click to compose email
                  </span>
                </div>
              </div>

              <a
                href="mailto:sounak@papertheorynet.com"
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-[#002b49] hover:bg-[#0284c7] text-white font-black text-xs sm:text-sm uppercase tracking-wider shadow-md transition"
              >
                <Mail className="w-4 h-4" />
                <span>Email Us Directly</span>
              </a>
            </div>
          </div>

          {/* CRUISE DETAILS BAR (Inside the large container) */}
          <div className="pt-8 border-t border-slate-200/80 grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Terminal */}
            <div className="flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-sky-100 text-[#0284c7] flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-sm font-black text-[#002b49]">Boarding Terminals</h3>
                <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">
                  Yamuna Ghat, Sonia Vihar &amp; Jagatpur, Delhi NW-110
                </p>
              </div>
            </div>

            {/* Timings */}
            <div className="flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-sky-100 text-[#0284c7] flex items-center justify-center shrink-0">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-sm font-black text-[#002b49]">Cruise Timings</h3>
                <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">
                  Morning Sunrise &amp; Golden Hour Sunset Departures
                </p>
              </div>
            </div>

            {/* Safety */}
            <div className="flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-sky-100 text-[#0284c7] flex items-center justify-center shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-sm font-black text-[#002b49]">Certified Eco-Vessels</h3>
                <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">
                  Fully certified catamarans under Inland Vessels Rules
                </p>
              </div>
            </div>
          </div>

          {/* BACK BUTTON (Bottom of container) */}
          <div className="pt-4 border-t border-slate-100 text-center">
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-[#002b49] font-black text-xs uppercase tracking-wider transition"
            >
              <ArrowLeft className="w-4 h-4 text-[#0284c7]" />
              <span>Back to Cruise Overview</span>
            </Link>
          </div>
        </div>
      </main>

      {/* FOOTER */}
      <footer className="relative z-10 bg-[#001726] border-t border-white/10 py-8 px-4 text-center text-xs text-sky-200/70">
        <p>&copy; 2026 YRE &bull; Yamuna River Experience. National Waterway 110 (NW-110), Delhi.</p>
      </footer>
    </div>
  );
}
