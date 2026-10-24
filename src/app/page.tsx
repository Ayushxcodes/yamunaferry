"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  Ship,
  Sun,
  BatteryCharging,
  LifeBuoy,
  Volume2,
  Anchor,
  Compass,
  Waves,
  MapPin,
  Clock,
  Users,
  ShieldCheck,
  Droplets,
  Building2,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  Play,
  Pause,
  X,
  ShoppingBag,
  Utensils,
  Gamepad2,
  Phone,
  Mail,
  Navigation,
  CheckCircle2,
  Camera,
  Gift,
} from "lucide-react";

// Fixed Video Background of Waves (bg_waves.mp4) with subtle white backdrop blur
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
      <div className="absolute inset-0 bg-white/50 backdrop-blur-[3px]" />
    </div>
  );
}

export default function Home() {
  // Full-width hero slideshow images of the ferry on the river
  const ferryGallery = [
    {
      id: "sunrise",
      image: "/ferry/sunrise.jpg",
      caption: "Sunrise on the Yamuna",
    },
    {
      id: "panoramic",
      image: "/ferry/panoramic.jpg",
      caption: "Daylight Cruise on NW-110",
    },
    {
      id: "sunset",
      image: "/ferry/sunset.jpg",
      caption: "Sunset & Golden Hour",
    },
    {
      id: "jetty",
      image: "/ferry/jetty.jpg",
      caption: "Floating Jetty at Yamuna Ghat",
    },
  ];

  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const [showWatchModal, setShowWatchModal] = useState(false);

  // The 7 "What you will see" items (no emojis, sleek hollow text + modern icon)
  const whatYouWillSeeItems = [
    {
      title: "Sunset Cruise",
      hollow: "SUNSET",
      icon: Ship,
      tag: "River Voyage",
      desc: "Golden hour cruise gliding on the calm waters of river Yamuna with evening breeze and twilight skies.",
      image: "/ferry/sunset.jpg",
    },
    {
      title: "Photo & Video Spot",
      hollow: "STUDIO",
      icon: Camera,
      tag: "Memories",
      desc: "Dedicated photo & video zones, Snap Box retro photo booth, and scenic riverside selfie corners.",
      image: "/stock/WhatsApp Image 2026-10-20 at 12.09.00.jpeg",
    },
    {
      title: "Riverfront Food",
      hollow: "DINING",
      icon: Utensils,
      tag: "Alfresco Cafe",
      desc: "Riverside outdoor food cafe with umbrella seating serving hot snacks, fresh beverages, and chai.",
      image: "/stock/WhatsApp Image 2026-10-20 at 12.09.01 (1).jpeg",
    },
    {
      title: "Kids’ Zone",
      hollow: "PLAYGROUND",
      icon: Sparkles,
      tag: "Family Park",
      desc: "Lush green lawn play area with tire swings, climbing frames, rainbow arches, and open spaces for kids.",
      image: "/stock/WhatsApp Image 2026-10-20 at 12.09.02 (1).jpeg",
    },
    {
      title: "Light & Sound Show",
      hollow: "SPECTACLE",
      icon: Volume2,
      tag: "Night Amphitheater",
      desc: "Spectacular evening illuminated water fountain display with musical rhythms and cultural storytelling.",
      image: "/stock/WhatsApp Image 2026-10-20 at 12.09.03.jpeg",
    },
    {
      title: "Souvenirs Store",
      hollow: "SHOPPING",
      icon: ShoppingBag,
      tag: "Handicrafts",
      desc: "Coastal Treasures gift kiosk featuring river handicrafts, keepsakes, and curated Delhi artisan products.",
      image: "/stock/WhatsApp Image 2026-10-20 at 12.09.00.jpeg",
    },
    {
      title: "Ghat Games & Arcade",
      hollow: "GAMING",
      icon: Gamepad2,
      tag: "Entertainment",
      desc: "Interactive fun activities, retro snapshots, lawn games, and family entertainment on the ghat.",
      image: "/stock/WhatsApp Image 2026-10-20 at 12.09.02 (1).jpeg",
    },
  ];

  // Six steps - Start to finish
  const sixStepsData = [
    {
      step: 1,
      num: "1",
      title: "Arrive",
      subtitle: "Yamuna Ghat entry",
      icon: MapPin,
      image: "/stock/WhatsApp Image 2026-10-20 at 12.08.57.jpeg",
      desc: "Begin your journey at the newly developed Yamuna Ghat river terminal.",
    },
    {
      step: 2,
      num: "2",
      title: "Eat",
      subtitle: "Food court",
      icon: Utensils,
      image: "/stock/WhatsApp Image 2026-10-20 at 12.09.01 (1).jpeg",
      desc: "Enjoy riverside dining, hot street snacks, fresh beverages, and tea.",
    },
    {
      step: 3,
      num: "3",
      title: "Shop",
      subtitle: "Souvenir shops",
      icon: ShoppingBag,
      image: "/stock/WhatsApp Image 2026-10-20 at 12.09.00.jpeg",
      desc: "Browse authentic Delhi mementos, maritime keepsakes, and handicrafts.",
    },
    {
      step: 4,
      num: "4",
      title: "Play",
      subtitle: "Kids’ and gaming zones",
      icon: Gamepad2,
      image: "/stock/WhatsApp Image 2026-10-20 at 12.09.02 (1).jpeg",
      desc: "Open lawn play zones, swings, and interactive arcade games for families.",
    },
    {
      step: 5,
      num: "5",
      title: "Sail",
      subtitle: "Sunset cruise",
      icon: Ship,
      image: "/ferry/sunset.jpg",
      desc: "Board the electric catamaran for a scenic cruise along National Waterway 110.",
    },
    {
      step: 6,
      num: "6",
      title: "Watch",
      subtitle: "Light and sound show",
      icon: Sparkles,
      image: "/stock/WhatsApp Image 2026-10-20 at 12.09.03.jpeg",
      desc: "Spectacular laser projections and illuminated fountain show across the ghat.",
    },
  ];

  // On the ghat - Zones
  const ghatZonesData = [
    {
      num: "01",
      title: "Food and dining",
      subtitle: "Restaurants and food stalls",
      hollow: "DINING",
      category: "Culinary Zone",
      icon: Utensils,
      image: "/stock/WhatsApp Image 2026-10-20 at 12.09.01 (1).jpeg",
      desc: "Riverside open-air cafes, regional delicacies, hot tea, and food stalls under breezy shade umbrellas overlooking the Yamuna.",
    },
    {
      num: "02",
      title: "Souvenir shops",
      subtitle: "Gifts and local products",
      hollow: "SOUVENIR",
      category: "Retail Hub",
      icon: Gift,
      image: "/stock/WhatsApp Image 2026-10-20 at 12.09.00.jpeg",
      desc: "Curated river merchandise, handmade Delhi handicrafts, authentic cultural artifacts, and memorable mementos of your cruise.",
    },
    {
      num: "03",
      title: "Kids’ and gaming zones",
      subtitle: "Play area and games",
      hollow: "PLAYGROUND",
      category: "Family & Play",
      icon: Gamepad2,
      image: "/stock/WhatsApp Image 2026-10-20 at 12.09.02 (1).jpeg",
      desc: "Lush green lawn play area with tire swings, rainbow arches, interactive digital games, and fun physical activities for children.",
    },
    {
      num: "04",
      title: "Light and sound show",
      subtitle: "Evening show on the ghat",
      hollow: "SPECTACLE",
      category: "Night Showcase",
      icon: Sparkles,
      image: "/stock/WhatsApp Image 2026-10-20 at 12.09.03.jpeg",
      desc: "Tiered illuminated water fountains, multi-color laser projections, and historic storytelling along the river ghat at twilight.",
    },
  ];

  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const [isStepPaused, setIsStepPaused] = useState(false);

  // Auto-play hero slideshow every 6.5s
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlideIndex((prev) => (prev + 1) % ferryGallery.length);
    }, 6500);
    return () => clearInterval(timer);
  }, [ferryGallery.length]);

  // Auto-play "What you will see" big cards every 4s
  useEffect(() => {
    const cardTimer = setInterval(() => {
      setActiveCardIndex((prev) => (prev + 1) % whatYouWillSeeItems.length);
    }, 4000);
    return () => clearInterval(cardTimer);
  }, [whatYouWillSeeItems.length]);

  // Auto-advance the ship through the 6 steps every 3.5s
  useEffect(() => {
    if (isStepPaused) return;
    const stepTimer = setInterval(() => {
      setActiveStepIndex((prev) => (prev + 1) % sixStepsData.length);
    }, 3500);
    return () => clearInterval(stepTimer);
  }, [isStepPaused, sixStepsData.length]);

  const whatYouGetItems = [
    {
      icon: Ship,
      title: "Electric-Solar River Cruise",
      desc: "30+2 passenger silent catamaran glide over 6–7 km of Yamuna's scenic upstream waters.",
      badge: "The Cruise",
      image: "/ferry/panoramic.jpg",
    },
    {
      icon: Utensils,
      title: "Riverfront Food & Dining",
      desc: "Alfresco food cafe with umbrella seating, fresh snacks, beverages, and riverside breezes.",
      badge: "Food",
      image: "/stock/WhatsApp Image 2026-10-20 at 12.09.01 (1).jpeg",
    },
    {
      icon: ShoppingBag,
      title: "Shopping & Souvenirs",
      desc: "Browse local handicrafts, River Yamuna mementos, and Coastal Treasures merchandise.",
      badge: "Shopping",
      image: "/stock/WhatsApp Image 2026-10-20 at 12.09.00.jpeg",
    },
    {
      icon: Gamepad2,
      title: "Games & Retro Photo Booth",
      desc: "Snap Box retro photo booth, kids swing & climbing zone, and lawn activities on the ghat.",
      badge: "Games",
      image: "/stock/WhatsApp Image 2026-10-20 at 12.09.02 (1).jpeg",
    },
    {
      icon: Sparkles,
      title: "Light & Sound Show on the Ghat",
      desc: "Spectacular evening illuminated water fountain, music, and cultural storytelling on the riverfront.",
      badge: "Entertainment",
      image: "/stock/WhatsApp Image 2026-10-20 at 12.09.03.jpeg",
    },
  ];

  const partnersData = [
    {
      id: "shipping",
      name: "Ministry of Shipping",
      short: "MoPSW",
      subtitle: "Ministry of Ports, Shipping and Waterways",
      caption: "Government of India",
      role: "National Waterway 110 Policy & River Cruise Fairway Development",
      logo: "/ANI-20240131154644.jpg",
    },
    {
      id: "iwai",
      name: "Inland Waterways Authority",
      short: "IWAI",
      subtitle: "Inland Waterways Authority of India",
      caption: "Statutory Authority, MoPSW",
      role: "Fairway Dredging, Navigation Markers & Floating Jetty Infrastructure",
      logo: "/inland-waterways-authority.png",
    },
    {
      id: "delhitourism",
      name: "Delhi Tourism",
      short: "DTTDC",
      subtitle: "Delhi Tourism & Transportation Development Corp.",
      caption: "Govt. of NCT of Delhi",
      role: "Riverfront Hospitality, Eco-Tourism Operations & Cultural Heritage",
      logo: "/delhi_tourism.jpg",
    },
    {
      id: "dda",
      name: "Delhi Development Authority",
      short: "DDA",
      subtitle: "Delhi Development Authority",
      caption: "Ministry of Housing and Urban Affairs",
      role: "Ghat Public Amenities, Yamuna Riverfront Rejuvenation & Green Buffers",
      logo: "/dda.png",
    },
  ];

  return (
    <div className="min-h-screen bg-transparent text-slate-800 flex flex-col font-sans selection:bg-sky-200 selection:text-sky-950 overflow-x-hidden relative">
      {/* FIXED BACKGROUND VIDEO OF WAVES (Persists fixed during scroll) */}
      <FixedVideoBackground />

      {/* TRANSPARENT NAVBAR (Floating on top of full-width Hero) */}
      <header className="absolute top-0 left-0 right-0 z-50 bg-gradient-to-b from-black/80 via-black/40 to-transparent">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 h-20 sm:h-24 flex items-center justify-between">
          {/* Logo */}
          <a href="#hero" className="flex items-center gap-3 sm:gap-4 group shrink-0">
            <div className="relative w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full shadow-2xl group-hover:scale-105 transition overflow-hidden shrink-0 drop-shadow-xl">
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
                <span className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight text-white drop-shadow-lg">
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
          </a>

          {/* EXACTLY 4 TABS: Home, Cruise, Map, Contact */}
          <nav className="flex items-center gap-3 sm:gap-6 md:gap-10 text-xs sm:text-sm md:text-base font-bold text-white/90">
            <a
              href="#hero"
              className="hover:text-sky-300 transition-colors drop-shadow-sm py-1 border-b-2 border-transparent hover:border-sky-300"
            >
              Home
            </a>
            <a
              href="#map"
              className="hover:text-sky-300 transition-colors drop-shadow-sm py-1 border-b-2 border-transparent hover:border-sky-300"
            >
              Map
            </a>
            <a
              href="/contact"
              className="hover:text-sky-300 transition-colors drop-shadow-sm py-1 border-b-2 border-transparent hover:border-sky-300"
            >
              Contact
            </a>
          </nav>
        </div>
      </header>

      {/* SECTION 1: Full-Width, Hero-Height Slideshow with ONLY the Specified Text */}
      <section
        id="hero"
        className="relative z-10 w-full h-screen min-h-[100dvh] bg-[#001726] overflow-hidden flex flex-col justify-between"
      >
        {/* Full-Bleed Background Slideshow Images */}
        <div className="absolute inset-0 w-full h-full">
          <Image
            src={ferryGallery[activeSlideIndex].image}
            alt="Yamuna Ghat Ferry on River"
            fill
            priority
            className="object-cover transition-all duration-1000 scale-100 transform"
          />

          {/* Deep Maritime Blue Scrim Overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#001424] via-[#001f35]/50 to-[#002845]/60"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#001424]/95 via-[#001f35]/70 to-transparent"></div>
        </div>

        {/* HERO CONTENT: ONLY the Exact Text Specified by User */}
        <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex-1 flex flex-col justify-between pt-20 sm:pt-28 pb-6 sm:pb-12">
          {/* Top Pill / Tags */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-2.5">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full text-[11px] sm:text-sm font-bold bg-white/95 text-[#002b49] shadow-md backdrop-blur-md">
              ⚓ Yamuna Ghat Cruise
            </span>
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-full text-[11px] sm:text-sm font-semibold bg-[#002b49]/80 text-sky-200 border border-sky-400/30 backdrop-blur-md">
              Delhi
            </span>
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-full text-[11px] sm:text-sm font-extrabold bg-[#38bdf8] text-[#002b49] shadow-sm">
              New in Delhi
            </span>
          </div>

          {/* Main Headline & Description */}
          <div className="max-w-3xl my-auto py-4 sm:py-6 space-y-4 sm:space-y-5">
            <h1 className="text-4xl xs:text-5xl sm:text-7xl lg:text-8xl font-black text-white tracking-tight leading-[1.05] sm:leading-[1.02] drop-shadow-xl">
              Delhi’s<br />
              <span className="text-sky-300">First River-side</span><br />
              Experience
            </h1>

            <p className="text-sm sm:text-xl lg:text-2xl text-sky-100 font-normal leading-relaxed max-w-2xl drop-shadow-md">
              A short cruise starting at Yamuna Ghat. Food, shopping, games, entertainment and a light and sound show on the ghat.
            </p>

            {/* Two CTAs - Responsive full width on mobile */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-2 sm:pt-4">
              <a
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl sm:rounded-2xl font-black text-sm text-[#002b49] bg-white hover:bg-sky-50 shadow-xl shadow-sky-950/40 transition-all transform hover:-translate-y-0.5"
              >
                Book a plan
                <ArrowRight className="w-4 h-4 text-[#0284c7]" />
              </a>

              <button
                onClick={() => setShowWatchModal(true)}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl sm:rounded-2xl font-bold text-sm text-white bg-[#0284c7]/90 hover:bg-[#0284c7] backdrop-blur-md border border-sky-300/40 shadow-xl transition-all transform hover:-translate-y-0.5 cursor-pointer"
              >
                <Play className="w-4 h-4 fill-white text-white" />
                Watch what you get
              </button>
            </div>
          </div>

          {/* Bottom Slideshow Navigation Pill Dots & Arrows */}
          <div className="pt-4 sm:pt-6 border-t border-white/15 flex items-center justify-between">
            {/* Thumbnail dots */}
            <div className="flex items-center gap-1.5 sm:gap-2">
              {ferryGallery.map((slide, idx) => (
                <button
                  key={slide.id}
                  onClick={() => setActiveSlideIndex(idx)}
                  className={`h-2 sm:h-2.5 rounded-full transition-all ${
                    activeSlideIndex === idx
                      ? "w-7 sm:w-8 bg-[#38bdf8]"
                      : "w-2 sm:w-2.5 bg-white/40 hover:bg-white/70"
                  }`}
                  aria-label={`Slide ${idx + 1}`}
                />
              ))}
              <span className="text-xs text-sky-200/80 font-medium ml-2 hidden md:inline">
                {ferryGallery[activeSlideIndex].caption}
              </span>
            </div>

            {/* Prev / Next Arrows */}
            <div className="flex items-center gap-1.5 sm:gap-2">
              <button
                onClick={() =>
                  setActiveSlideIndex((prev) =>
                    prev === 0 ? ferryGallery.length - 1 : prev - 1
                  )
                }
                className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/20 hover:bg-white text-white hover:text-[#002b49] backdrop-blur-md border border-white/20 flex items-center justify-center transition focus:outline-none"
                aria-label="Previous Slide"
              >
                <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
              <button
                onClick={() =>
                  setActiveSlideIndex((prev) => (prev + 1) % ferryGallery.length)
                }
                className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/20 hover:bg-white text-white hover:text-[#002b49] backdrop-blur-md border border-white/20 flex items-center justify-center transition focus:outline-none"
                aria-label="Next Slide"
              >
                <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: WHAT YOU WILL SEE */}
      <section id="cruise" className="py-20 sm:py-24 bg-transparent scroll-mt-20 overflow-hidden relative z-10">

        {/* Header */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center mb-10 sm:mb-14 space-y-2">
          <h2 className="text-4xl sm:text-6xl font-black text-[#002b49] tracking-tight">
            What you will Experience
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Key experiences waiting for you on Delhi’s Yamuna Ghat.
          </p>
        </div>

        {/* Ultra-Wide Showcase Card - Minimal Margins on Sides & Sharp Non-Rounded Corners */}
        <div className="relative z-10 w-full px-2 sm:px-4 md:px-6 lg:px-8 max-w-[1850px] mx-auto">
          <div className="relative rounded-none overflow-hidden bg-[#001726] border-2 border-sky-200/80 shadow-2xl h-[580px] sm:h-[700px] lg:h-[800px] w-full group">
            <Image
              src={whatYouWillSeeItems[activeCardIndex].image}
              alt={whatYouWillSeeItems[activeCardIndex].title}
              fill
              priority
              className="object-cover transition-all duration-1000 group-hover:scale-105"
            />

            {/* Scrim Overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#001220] via-[#001220]/45 to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-[#001220]/85 via-[#001220]/30 to-transparent"></div>

            {/* Giant Hollow Watermark Text */}
            <div className="absolute top-8 left-4 sm:top-14 sm:left-14 pointer-events-none select-none z-10 overflow-hidden pr-6">
              <span
                className="text-5xl xs:text-6xl sm:text-[130px] md:text-[180px] lg:text-[220px] font-black uppercase tracking-widest text-transparent block leading-none opacity-30 sm:opacity-40 transition-all duration-700 truncate"
                style={{ WebkitTextStroke: "2.5px rgba(255, 255, 255, 0.7)" }}
              >
                {whatYouWillSeeItems[activeCardIndex].hollow}
              </span>
            </div>

            {/* Card Foreground Content */}
            <div className="relative z-20 h-full flex flex-col justify-between p-5 sm:p-12 md:p-16">
              {/* Top Counter */}
              <div className="flex items-center justify-end">
                <span className="px-4 py-2 rounded-none text-xs font-black bg-[#0284c7] text-white shadow-md tracking-wider">
                  0{activeCardIndex + 1} / 0{whatYouWillSeeItems.length}
                </span>
              </div>

              {/* Bottom Content */}
              <div className="space-y-4 max-w-2xl">
                <div className="w-20 h-1.5 bg-[#38bdf8] rounded-none"></div>
                <h3 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight drop-shadow-lg">
                  {whatYouWillSeeItems[activeCardIndex].title}
                </h3>
                <p className="text-sm sm:text-lg text-sky-100 font-normal leading-relaxed drop-shadow max-w-xl">
                  {whatYouWillSeeItems[activeCardIndex].desc}
                </p>

                {/* Indicator Pills for all 7 attractions */}
                <div className="pt-4 flex items-center gap-2">
                  {whatYouWillSeeItems.map((item, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveCardIndex(idx)}
                      className={`h-2 transition-all duration-500 rounded-none ${
                        activeCardIndex === idx
                          ? "w-10 bg-[#38bdf8] shadow-md shadow-sky-400/50"
                          : "w-3 bg-white/40 hover:bg-white/80"
                      }`}
                      aria-label={`Go to slide ${idx + 1}: ${item.title}`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Navigation Arrows - Sharp Architectural */}
            <button
              onClick={() =>
                setActiveCardIndex((prev) =>
                  prev === 0 ? whatYouWillSeeItems.length - 1 : prev - 1
                )
              }
              className="absolute left-2 sm:left-6 md:left-8 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-none bg-white/90 hover:bg-white text-[#002b49] shadow-2xl flex items-center justify-center transition hover:scale-105 focus:outline-none"
              aria-label="Previous Attraction"
            >
              <ChevronLeft className="w-5 h-5 sm:w-7 sm:h-7 md:w-8 md:h-8" />
            </button>
            <button
              onClick={() =>
                setActiveCardIndex((prev) => (prev + 1) % whatYouWillSeeItems.length)
              }
              className="absolute right-2 sm:right-6 md:right-8 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-none bg-white/90 hover:bg-white text-[#002b49] shadow-2xl flex items-center justify-center transition hover:scale-105 focus:outline-none"
              aria-label="Next Attraction"
            >
              <ChevronRight className="w-5 h-5 sm:w-7 sm:h-7 md:w-8 md:h-8" />
            </button>
          </div>
        </div>
      </section>

      {/* SECTION 3: SIX STEPS (Start to finish) */}
      <section id="steps" className="py-24 bg-transparent scroll-mt-20 overflow-hidden relative z-10">

        <div className="max-w-[1850px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-2">
            <h2 className="text-4xl sm:text-6xl font-black text-[#002b49] tracking-tight">
              Six steps
            </h2>
            <p className="text-2xl sm:text-3xl font-extrabold text-[#0284c7] tracking-tight">
              Start to finish.
            </p>
          </div>

          {/* Animated Waterway Track with Moving Ship Indicator */}
          <div className="mb-14 bg-gradient-to-r from-sky-50 via-sky-100/70 to-blue-50 border-2 border-sky-200 rounded-3xl p-4 sm:p-8 shadow-lg relative overflow-hidden">
            {/* Water track background lines & waves */}
            <div className="absolute inset-0 opacity-20 bg-[repeating-linear-gradient(45deg,#0284c7_0,#0284c7_1px,transparent_0,transparent_16px)]"></div>

            {/* River Channel Progress Bar */}
            <div className="relative h-3.5 sm:h-5 bg-sky-200/80 rounded-full overflow-hidden shadow-inner mb-8 sm:mb-10">
              <div
                className="h-full bg-gradient-to-r from-[#0284c7] via-[#38bdf8] to-[#0284c7] rounded-full transition-all duration-700 ease-out shadow-md"
                style={{ width: `${((activeStepIndex * 2 + 1) / 12) * 100}%` }}
              ></div>
            </div>

            {/* 6 Harbor Stations across the track */}
            <div className="grid grid-cols-6 gap-1 sm:gap-2 relative">
              {sixStepsData.map((item, idx) => {
                const isActive = activeStepIndex === idx;
                const isPassed = activeStepIndex > idx;
                return (
                  <button
                    key={idx}
                    onClick={() => setActiveStepIndex(idx)}
                    className="flex flex-col items-center group focus:outline-none transition-all"
                  >
                    {/* Station Marker */}
                    <div
                      className={`w-9 h-9 sm:w-12 sm:h-12 rounded-2xl flex items-center justify-center font-black text-xs sm:text-sm transition-all duration-300 shadow-md ${
                        isActive
                          ? "bg-[#002b49] text-sky-300 ring-4 ring-sky-300 scale-110 shadow-sky-300/50"
                          : isPassed
                          ? "bg-[#0284c7] text-white"
                          : "bg-white text-slate-500 hover:bg-sky-100 hover:text-[#002b49]"
                      }`}
                    >
                      {item.num}
                    </div>

                    {/* Step Title Label */}
                    <span
                      className={`mt-2 text-[11px] sm:text-sm font-black transition-colors text-center hidden xs:block truncate max-w-full ${
                        isActive ? "text-[#002b49]" : "text-slate-500 group-hover:text-[#0284c7]"
                      }`}
                    >
                      {item.title}
                    </span>
                  </button>
                );
              })}

              {/* The Moving Ship Indicator */}
              <div
                className="absolute -top-10 sm:-top-12 z-30 transition-all duration-700 ease-out pointer-events-none flex flex-col items-center -translate-x-1/2"
                style={{
                  left: `${((activeStepIndex * 2 + 1) / 12) * 100}%`,
                }}
              >
                {/* Ship Avatar with water spray aura */}
                <div className="relative">
                  <div className="absolute -inset-1 rounded-2xl bg-sky-400/50 blur animate-pulse"></div>
                  <div className="relative w-11 h-11 sm:w-14 sm:h-14 rounded-2xl bg-[#002b49] border-2 border-sky-300 text-white shadow-2xl flex items-center justify-center -rotate-6">
                    <Ship className="w-5 h-5 sm:w-7 sm:h-7 text-sky-200 animate-bounce" />
                  </div>
                </div>

                {/* Floating Sailing Badge */}
                <div className="mt-1.5 px-2 py-0.5 rounded-full text-[9px] sm:text-[10px] font-black uppercase tracking-wider bg-[#0284c7] text-white shadow-md whitespace-nowrap">
                  Ferry at Step {activeStepIndex + 1}
                </div>
              </div>
            </div>

            {/* Play / Pause / Step Controls */}
            <div className="mt-6 pt-4 border-t border-sky-200/60 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setIsStepPaused((prev) => !prev)}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white hover:bg-sky-50 text-[#002b49] border border-sky-200 text-xs font-bold shadow-xs transition"
                >
                  {isStepPaused ? <Play className="w-3.5 h-3.5 fill-current" /> : <Pause className="w-3.5 h-3.5 fill-current" />}
                  <span>{isStepPaused ? "Resume Cruise" : "Pause Progression"}</span>
                </button>
                <span className="text-xs text-slate-500 font-medium hidden sm:inline">
                  Step {activeStepIndex + 1} of 6: <strong className="text-[#002b49]">{sixStepsData[activeStepIndex].title} — {sixStepsData[activeStepIndex].subtitle}</strong>
                </span>
              </div>

              <div className="flex items-center gap-1.5">
                <button
                  onClick={() => setActiveStepIndex((prev) => (prev === 0 ? 5 : prev - 1))}
                  className="w-8 h-8 rounded-lg bg-white hover:bg-sky-50 border border-sky-200 text-[#002b49] flex items-center justify-center transition shadow-xs"
                  aria-label="Previous step"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setActiveStepIndex((prev) => (prev + 1) % 6)}
                  className="w-8 h-8 rounded-lg bg-white hover:bg-sky-50 border border-sky-200 text-[#002b49] flex items-center justify-center transition shadow-xs"
                  aria-label="Next step"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* 6 Step Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {sixStepsData.map((item, idx) => {
              const isActive = activeStepIndex === idx;
              const IconComp = item.icon;
              return (
                <div
                  key={idx}
                  onClick={() => setActiveStepIndex(idx)}
                  className={`cursor-pointer rounded-[28px] overflow-hidden border-2 transition-all duration-500 flex flex-col justify-between group ${
                    isActive
                      ? "bg-white border-[#0284c7] shadow-2xl ring-4 ring-sky-200 scale-[1.02]"
                      : "bg-slate-50 border-slate-200 hover:border-sky-300 hover:bg-white hover:shadow-lg"
                  }`}
                >
                  {/* Step Image with Overlay */}
                  <div className="relative h-52 sm:h-56 w-full overflow-hidden bg-slate-900">
                    <Image
                      src={item.image}
                      alt={`${item.title} - ${item.subtitle}`}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#001726]/85 via-[#001726]/30 to-transparent"></div>

                    {/* Step Number Badge */}
                    <div className="absolute top-4 left-4 flex items-center gap-2">
                      <span className="w-9 h-9 rounded-xl bg-white/95 backdrop-blur-md text-[#002b49] font-black text-sm flex items-center justify-center shadow-md">
                        {item.num}
                      </span>
                      {isActive && (
                        <span className="px-3 py-1 rounded-full text-xs font-black bg-[#0284c7] text-white shadow-md flex items-center gap-1.5 animate-pulse">
                          <Ship className="w-3 h-3" />
                          Current Stop
                        </span>
                      )}
                    </div>

                    {/* Huge Hollow Step Number in top right */}
                    <div className="absolute top-2 right-4 pointer-events-none select-none">
                      <span
                        className="text-6xl sm:text-7xl font-black text-transparent leading-none opacity-30"
                        style={{ WebkitTextStroke: "1.5px rgba(255, 255, 255, 0.7)" }}
                      >
                        0{item.num}
                      </span>
                    </div>

                    {/* Bottom Title on Image */}
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex items-center gap-2 text-sky-300 text-xs font-bold uppercase tracking-wider mb-1">
                        <IconComp className="w-3.5 h-3.5" />
                        <span>Step 0{item.num}</span>
                      </div>
                      <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight leading-none">
                        {item.title}
                      </h3>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                    <div>
                      <div className="text-sm font-black text-[#0284c7] tracking-wider uppercase mb-1">
                        {item.subtitle}
                      </div>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                        {item.desc}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-extrabold text-[#002b49]">
                      <span className="text-slate-400 font-semibold">Stage 0{item.num} of 06</span>
                      <span className="flex items-center gap-1 text-[#0284c7] group-hover:translate-x-1 transition-transform">
                        Explore <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 4: ON THE GHAT - ZONES */}
      <section id="zones" className="py-24 bg-transparent scroll-mt-20 overflow-hidden relative z-10">
        <div className="w-full px-2 sm:px-4 md:px-6 lg:px-8 max-w-[1850px] mx-auto relative z-10">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-2">
            <h2 className="text-4xl sm:text-6xl font-black text-[#002b49] tracking-tight">
              On the ghat
            </h2>
            <p className="text-2xl sm:text-3xl font-extrabold text-[#0284c7] tracking-tight">
              Zones
            </p>
          </div>

          {/* 4 Big Zone Cards (2x2 Grid) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {ghatZonesData.map((zone, idx) => {
              return (
                <div
                  key={idx}
                  className="relative rounded-[32px] sm:rounded-[44px] overflow-hidden bg-[#001726] border-2 border-sky-200/80 shadow-2xl h-[440px] sm:h-[500px] lg:h-[560px] w-full group transition-all duration-500 hover:shadow-sky-200/50 hover:border-sky-300"
                >
                  <Image
                    src={zone.image}
                    alt={`${zone.title} - ${zone.subtitle}`}
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-105"
                  />

                  {/* Scrim Overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#001220] via-[#001220]/45 to-transparent"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-[#001220]/80 via-transparent to-transparent"></div>

                  {/* Giant Hollow Watermark Text */}
                  <div className="absolute top-8 left-6 sm:top-10 sm:left-10 pointer-events-none select-none z-10 overflow-hidden pr-6">
                    <span
                      className="text-6xl sm:text-7xl lg:text-8xl xl:text-9xl font-black uppercase tracking-widest text-transparent block leading-none opacity-25 group-hover:opacity-40 transition-opacity duration-700"
                      style={{ WebkitTextStroke: "2.5px rgba(255, 255, 255, 0.7)" }}
                    >
                      {zone.hollow}
                    </span>
                  </div>

                  {/* Card Content Foreground */}
                  <div className="relative z-20 h-full flex flex-col justify-between p-6 sm:p-10 md:p-12">
                    {/* Top Row: Zone Number */}
                    <div className="flex items-center justify-end">
                      <span className="px-3.5 py-1.5 rounded-full text-xs font-black bg-[#0284c7] text-white shadow-md tracking-wider">
                        ZONE {zone.num}
                      </span>
                    </div>

                    {/* Bottom Row: Text and Descriptions */}
                    <div className="space-y-3 max-w-xl">
                      <div className="w-16 h-1.5 bg-[#38bdf8] rounded-full"></div>
                      <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight drop-shadow-lg">
                        {zone.title}
                      </h3>
                      <div className="text-sky-200 text-lg sm:text-xl font-extrabold tracking-wide drop-shadow">
                        {zone.subtitle}
                      </div>
                      <p className="text-sm sm:text-base text-sky-100 font-normal leading-relaxed drop-shadow max-w-lg">
                        {zone.desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 5: FAIRWAY ROUTE, DISTANCE, CAPACITY & SPECS */}
      <section id="map" className="py-24 bg-transparent scroll-mt-20 overflow-hidden relative z-10">
        <div className="w-full px-4 sm:px-6 lg:px-8 max-w-[1850px] mx-auto relative z-10">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-2">
            <h2 className="text-4xl sm:text-6xl font-black text-[#002b49] tracking-tight">
              Fairway &amp; Route
            </h2>
            <p className="text-slate-600 text-sm sm:text-base font-medium">
              Route, passenger capacity and eco-vessel details on National Waterway 110.
            </p>
          </div>

          {/* 3 Key Metric Cards - Centered */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-12 max-w-6xl mx-auto">
            {/* 1. Fairway Corridor */}
            <div className="bg-white rounded-[28px] p-6 sm:p-8 border-2 border-sky-100 shadow-lg hover:shadow-xl hover:border-sky-300 transition-all group">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-2xl bg-sky-50 text-[#0284c7] flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Waves className="w-6 h-6" />
                </div>
                <span className="text-xs font-black px-3 py-1 rounded-full bg-sky-100 text-[#0284c7]">
                  NW-110
                </span>
              </div>
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
                Waterway Fairway
              </span>
              <div className="text-2xl sm:text-3xl font-black text-[#002b49] tracking-tight mt-1">
                River Yamuna
              </div>
              <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                Regulated upstream water pool above Wazirabad Barrage with zero commercial cross-traffic.
              </p>
            </div>

            {/* 2. Route Corridor */}
            <div className="bg-white rounded-[28px] p-6 sm:p-8 border-2 border-sky-100 shadow-lg hover:shadow-xl hover:border-sky-300 transition-all group">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-2xl bg-sky-50 text-[#0284c7] flex items-center justify-center group-hover:scale-110 transition-transform">
                  <MapPin className="w-6 h-6" />
                </div>
                <span className="text-xs font-black px-3 py-1 rounded-full bg-sky-100 text-[#0284c7]">
                  Corridor
                </span>
              </div>
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
                Sailing Route
              </span>
              <div className="text-xl sm:text-2xl font-black text-[#002b49] tracking-tight mt-1">
                Sonia Vihar ⇄ Jagatpur
              </div>
              <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                Passing beneath Signature Bridge, through tranquil migratory bird habitats to the turnaround ghat.
              </p>
            </div>

            {/* 3. Passenger Capacity */}
            <div className="bg-white rounded-[28px] p-6 sm:p-8 border-2 border-sky-100 shadow-lg hover:shadow-xl hover:border-sky-300 transition-all group">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-2xl bg-sky-50 text-[#0284c7] flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Users className="w-6 h-6" />
                </div>
                <span className="text-xs font-black px-3 py-1 rounded-full bg-emerald-100 text-emerald-700">
                  Certified Safe
                </span>
              </div>
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
                Vessel Capacity
              </span>
              <div className="text-3xl sm:text-4xl font-black text-[#002b49] tracking-tight mt-1">
                30 + 2 Seats
              </div>
              <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                Spacious shaded observation cabin with ergonomic seating, UV-tinted glass, and safety gear.
              </p>
            </div>
          </div>

          {/* Panoramic Route Showcase Banner & Interactive Spec Grid */}
          <div className="relative rounded-[36px] sm:rounded-[44px] overflow-hidden bg-[#001726] border-2 border-sky-200/80 shadow-2xl p-8 sm:p-12 lg:p-16 text-white">
            {/* Background Image of the River with Gradient Overlay */}
            <div className="absolute inset-0">
              <Image
                src="/ferry/panoramic.jpg"
                alt="Yamuna Fairway Corridor"
                fill
                className="object-cover opacity-25"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#001220] via-[#001220]/80 to-[#001220]/60"></div>
            </div>

            {/* Giant Hollow Watermark */}
            <div className="absolute top-6 right-8 pointer-events-none select-none z-0 overflow-hidden pr-6">
              <span
                className="text-7xl sm:text-9xl md:text-[140px] font-black uppercase tracking-widest text-transparent block leading-none opacity-20"
                style={{ WebkitTextStroke: "2px rgba(255, 255, 255, 0.5)" }}
              >
                NW-110
              </span>
            </div>

            <div className="relative z-10 space-y-10">
              {/* Top Banner Row */}
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-white/15">
                <div className="space-y-2">
                  <span className="text-xs font-black uppercase tracking-widest text-sky-400">
                    River Navigation Blueprint
                  </span>
                  <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white">
                    Sonia Vihar ⇄ Jagatpur Fairway
                  </h3>
                  <p className="text-sm sm:text-base text-sky-100/90 max-w-2xl font-normal leading-relaxed">
                    Designed by the Inland Waterways Authority of India (IWAI) under National Waterway 110, featuring shallow-draft electric catamarans and automated floating pontoon jetties.
                  </p>
                </div>

                <div className="shrink-0 flex items-center gap-3">
                  <span className="px-4 py-2 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-xs font-black text-sky-200">
                    IRS Certified Vessel
                  </span>
                  <span className="px-4 py-2 rounded-2xl bg-[#0284c7] text-white text-xs font-black shadow-lg">
                    100% Zero Emission
                  </span>
                </div>
              </div>

              {/* Visual 3-Stage Corridor Roadmap */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
                {/* Stage 1 */}
                <div className="p-6 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full text-xs font-black bg-sky-400/20 text-sky-300 border border-sky-400/30">
                      KM 0.0 &bull; Departure
                    </span>
                    <span className="w-8 h-8 rounded-xl bg-white/10 flex items-center justify-center font-black text-xs text-white">
                      01
                    </span>
                  </div>
                  <h4 className="text-xl font-black text-white">Sonia Vihar Jetty</h4>
                  <p className="text-xs text-sky-100/80 leading-relaxed font-normal">
                    Modern floating pontoon terminal, passenger boarding plaza, car parking, riverside food stalls, and ticket lounge.
                  </p>
                </div>

                {/* Stage 2 */}
                <div className="p-6 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full text-xs font-black bg-sky-400/20 text-sky-300 border border-sky-400/30">
                      KM 2.5 &bull; Fairway Pass
                    </span>
                    <span className="w-8 h-8 rounded-xl bg-white/10 flex items-center justify-center font-black text-xs text-white">
                      02
                    </span>
                  </div>
                  <h4 className="text-xl font-black text-white">Signature Bridge</h4>
                  <p className="text-xs text-sky-100/80 leading-relaxed font-normal">
                    Panoramic sailing pass directly beneath Delhi&apos;s 154-meter landmark with open water skyline photography.
                  </p>
                </div>

                {/* Stage 3 */}
                <div className="p-6 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full text-xs font-black bg-sky-400/20 text-sky-300 border border-sky-400/30">
                      KM 6.5 &bull; Return
                    </span>
                    <span className="w-8 h-8 rounded-xl bg-white/10 flex items-center justify-center font-black text-xs text-white">
                      03
                    </span>
                  </div>
                  <h4 className="text-xl font-black text-white">Jagatpur Turnaround</h4>
                  <p className="text-xs text-sky-100/80 leading-relaxed font-normal">
                    Scenic turnaround loop near the historic temple ghat, gliding smoothly back to Sonia Vihar for the evening show.
                  </p>
                </div>
              </div>

              {/* Bottom Quick Vessel Specifications Strip */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-white/15 text-xs text-sky-200">
                <div className="space-y-1">
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                    Operating Draft
                  </span>
                  <div className="text-lg font-black text-white">0.60 Meters</div>
                  <p className="text-[11px] text-sky-100/70">Shallow-draft catamaran profile</p>
                </div>
                <div className="space-y-1">
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                    Propulsion
                  </span>
                  <div className="text-lg font-black text-white">Electric + Solar</div>
                  <p className="text-[11px] text-sky-100/70">Twin silent electric thrusters</p>
                </div>
                <div className="space-y-1">
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                    Acoustic Noise
                  </span>
                  <div className="text-lg font-black text-white">&lt; 42 dB</div>
                  <p className="text-[11px] text-sky-100/70">Ultra-quiet birdwatching glide</p>
                </div>
                <div className="space-y-1">
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                    Marine Safety
                  </span>
                  <div className="text-lg font-black text-white">100% Certified</div>
                  <p className="text-[11px] text-sky-100/70">Life jackets &amp; automatic bilge</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6 (LAST SECTION): PARTNERS & SAIL THE YAMUNA ANNOUNCEMENT */}
      <section id="partners" className="py-24 bg-transparent scroll-mt-20 overflow-hidden relative z-10">
        <div id="contact" className="scroll-mt-28"></div>
        <div className="w-full px-4 sm:px-6 lg:px-8 max-w-[1850px] mx-auto relative z-10">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <h2 className="text-4xl sm:text-6xl font-black text-[#002b49] tracking-tight">
              Partners
            </h2>
            <p className="text-2xl sm:text-3xl font-extrabold text-[#0284c7] tracking-tight">
              In association with
            </p>
          </div>

          {/* 3 Partner Cards - Architectural, Zero Rounded Corners */}
          {/* 4 Partner Cards - Architectural, Zero Rounded Corners */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 max-w-7xl mx-auto">
            {partnersData.map((partner, idx) => (
              <div
                key={partner.id}
                className="rounded-none bg-white border border-slate-200 border-t-4 border-t-[#0284c7] p-6 sm:p-8 flex flex-col justify-between shadow-lg hover:shadow-2xl hover:border-slate-300 hover:border-t-[#38bdf8] transition-all duration-300 group"
              >
                <div>
                  {/* Top Header: Code badge & Index */}
                  <div className="flex items-center justify-between pb-5 border-b border-slate-100">
                    <span className="text-[11px] font-black uppercase tracking-widest px-2.5 py-1 bg-slate-100 text-[#002b49] border border-slate-200 rounded-none">
                      {partner.short}
                    </span>
                    <span className="text-xs font-mono font-bold text-slate-400">
                      0{idx + 1} / 0{partnersData.length}
                    </span>
                  </div>

                  {/* Logo Display Area - Clean seamless white background */}
                  <div className="relative w-full h-36 sm:h-40 my-6 flex items-center justify-center p-2">
                    <div className="relative w-full h-full">
                      <Image
                        src={partner.logo}
                        alt={partner.name}
                        fill
                        className="object-contain transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                  </div>

                  {/* Partner Identity */}
                  <div className="space-y-1.5 text-center sm:text-left">
                    <div className="w-12 h-1 bg-[#0284c7] rounded-none mb-3"></div>
                    <h3 className="text-xl sm:text-2xl font-black text-[#002b49] tracking-tight leading-tight">
                      {partner.name}
                    </h3>
                    <div className="text-xs font-black text-[#0284c7] uppercase tracking-wider">
                      {partner.subtitle}
                    </div>
                    <div className="text-xs font-semibold text-slate-500">
                      {partner.caption}
                    </div>
                  </div>
                </div>

                {/* Role Description */}
                <div className="mt-6 pt-4 border-t border-slate-100 text-xs text-slate-600 font-medium leading-relaxed">
                  {partner.role}
                </div>
              </div>
            ))}
          </div>

          {/* Sail the Yamuna Announcement & Notify Me Banner - Sharp & Architectural */}
          <div
            id="launch"
            className="mt-16 sm:mt-20 relative rounded-none overflow-hidden bg-[#001424] border-2 border-sky-300/40 shadow-2xl p-8 sm:p-14 lg:p-20 text-center text-white"
          >
            {/* Scrim and background glow */}
            <div className="absolute inset-0 bg-radial-gradient from-sky-500/15 via-transparent to-transparent pointer-events-none"></div>

            {/* Giant Hollow Watermark */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none z-0">
              <span
                className="text-7xl sm:text-9xl md:text-[140px] lg:text-[180px] font-black uppercase tracking-widest text-transparent block leading-none opacity-10 whitespace-nowrap"
                style={{ WebkitTextStroke: "2px rgba(255, 255, 255, 0.4)" }}
              >
                BOOK TICKETS
              </span>
            </div>

            <div className="relative z-10 max-w-3xl mx-auto space-y-6">
              <h3 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight leading-tight drop-shadow-xl">
                Book your ticket now
              </h3>

              {/* Direct Contact Information Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl mx-auto pt-2">
                <a
                  href="tel:8910608502"
                  className="flex items-center justify-center gap-3 p-4 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-md transition group text-white"
                >
                  <Phone className="w-5 h-5 text-sky-300 group-hover:scale-110 transition" />
                  <div className="text-left">
                    <span className="text-[10px] text-sky-200 font-extrabold uppercase block">Call to Book</span>
                    <span className="text-base sm:text-lg font-black tracking-tight">891 060 8502</span>
                  </div>
                </a>
                <a
                  href="mailto:sounak@papertheorynet.com"
                  className="flex items-center justify-center gap-3 p-4 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-md transition group text-white"
                >
                  <Mail className="w-5 h-5 text-sky-300 group-hover:scale-110 transition" />
                  <div className="text-left">
                    <span className="text-[10px] text-sky-200 font-extrabold uppercase block">Email Booking</span>
                    <span className="text-xs sm:text-sm font-bold truncate max-w-[170px] block">sounak@papertheorynet.com</span>
                  </div>
                </a>
              </div>

              {/* Primary CTA Button (Redirects to /contact page) */}
              <div className="pt-2 flex justify-center">
                <a
                  href="/contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-12 py-5 rounded-none bg-white hover:bg-sky-50 text-[#002b49] font-black text-base sm:text-lg uppercase tracking-wider shadow-2xl shadow-sky-950/50 hover:shadow-sky-400/50 transition-all transform hover:-translate-y-0.5 cursor-pointer"
                >
                  <span>Book Your Ticket Now</span>
                  <ArrowRight className="w-5 h-5 text-[#0284c7]" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FLOATING INDIVIDUAL SIDE BADGES (Bottom-Right, rounded, compact size) */}
      <aside
        aria-label="Official Partner Floating Badges"
        className="fixed right-3 sm:right-5 bottom-4 sm:bottom-5 z-40 flex flex-col items-end gap-1.5 sm:gap-2 pointer-events-auto select-none"
      >
        {partnersData.map((partner) => (
          <a
            key={partner.id}
            href="#partners"
            className="group flex items-center bg-white/95 backdrop-blur-md border border-slate-200 hover:border-[#0284c7] shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 rounded-xl p-1 sm:p-1.5 cursor-pointer overflow-hidden"
            title={`${partner.name} - ${partner.subtitle}`}
          >
            {/* Logo - Compact & clear */}
            <div className="relative w-11 h-8 sm:w-16 sm:h-11 bg-white rounded-lg flex items-center justify-center shrink-0 overflow-hidden">
              <Image
                src={partner.logo}
                alt={partner.name}
                fill
                sizes="64px"
                className="object-contain group-hover:scale-105 transition-transform"
              />
            </div>

            {/* Slide-out name label on hover */}
            <div className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 ease-in-out whitespace-nowrap pl-0 group-hover:pl-2.5 flex flex-col text-left">
              <span className="text-[10px] sm:text-xs font-black text-[#002b49] leading-tight">
                {partner.name}
              </span>
              <span className="text-[8px] sm:text-[9px] text-[#0284c7] font-bold uppercase tracking-wider">
                {partner.short}
              </span>
            </div>
          </a>
        ))}
      </aside>

      {/* Modal: "Watch What You Get" (Triggered by Hero CTA) */}
      {showWatchModal && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-fadeIn">
          <div className="relative bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border-2 border-sky-200 shadow-2xl p-6 sm:p-8">
            <button
              onClick={() => setShowWatchModal(false)}
              className="absolute top-5 right-5 w-10 h-10 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center transition"
              aria-label="Close Modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-6">
              <div>
                <span className="text-xs font-extrabold uppercase tracking-wider text-sky-700">
                  Yamuna Ghat Cruise Experience
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-[#002b49] mt-1">
                  Everything You Get on the Ghat
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-1">
                  A short cruise starting at Yamuna Ghat with food, shopping, games, entertainment, and the evening light &amp; sound show.
                </p>
              </div>

              {/* Visual Showcase Gallery inside Modal */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {whatYouGetItems.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-slate-50 border border-sky-100"
                  >
                    <div className="relative w-16 h-16 rounded-xl overflow-hidden shrink-0 border border-sky-200">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <span className="text-[10px] font-extrabold text-[#0284c7] uppercase">
                        {item.badge}
                      </span>
                      <h4 className="text-sm font-bold text-[#002b49]">{item.title}</h4>
                      <p className="text-xs text-slate-500 line-clamp-1">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs text-slate-500">
                  Ready to experience it?
                </span>
                <a
                  href="/contact"
                  onClick={() => setShowWatchModal(false)}
                  className="px-6 py-2.5 rounded-xl font-bold text-xs text-white bg-[#002b49] hover:bg-[#0284c7] transition"
                >
                  Book Tickets &rarr;
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
