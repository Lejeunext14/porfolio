"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const curtainRef = useRef<HTMLDivElement>(null);
  const loaderTextRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLElement>(null);
  const heroTextRef = useRef<HTMLDivElement>(null);
  const heroImageRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // ── Particle background ──────────────────────────────────
      const container = particlesRef.current;
      if (container) {
        for (let i = 0; i < 60; i++) {
          const p = document.createElement("div");
          p.style.cssText = `
            position:absolute;
            width:${Math.random() * 3 + 1}px;
            height:${Math.random() * 3 + 1}px;
            border-radius:50%;
            background:rgba(${Math.random() > 0.5 ? "96,165,250" : "168,85,247"},${Math.random() * 0.6 + 0.2});
            left:${Math.random() * 100}%;
            top:${Math.random() * 100}%;
          `;
          container.appendChild(p);
          gsap.to(p, {
            y: `${(Math.random() - 0.5) * 200}`,
            x: `${(Math.random() - 0.5) * 200}`,
            opacity: Math.random() * 0.8 + 0.1,
            duration: Math.random() * 6 + 4,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
            delay: Math.random() * 4,
          });
        }
      }

      // ── Intro curtain ─────────────────────────────────────────
      const tl = gsap.timeline();

      tl.from(loaderTextRef.current, {
        opacity: 0,
        scale: 0.5,
        duration: 0.8,
        ease: "back.out(1.7)",
      })
        .to(loaderTextRef.current, {
          opacity: 0,
          scale: 1.3,
          duration: 0.5,
          delay: 0.6,
          ease: "power2.in",
        })
        .to(curtainRef.current, {
          scaleY: 0,
          transformOrigin: "top",
          duration: 1,
          ease: "power4.inOut",
        })
        .set(curtainRef.current, { display: "none" });

      // ── Nav slide in ──────────────────────────────────────────
      tl.from(navRef.current, {
        y: -80,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      }, "-=0.3");

      // ── Hero stagger ──────────────────────────────────────────
      tl.from(".hero-word", {
        y: 80,
        opacity: 0,
        rotateX: -40,
        stagger: 0.08,
        duration: 0.8,
        ease: "power3.out",
      }, "-=0.5");

      tl.from(".hero-sub", {
        y: 30,
        opacity: 0,
        duration: 0.7,
        ease: "power2.out",
      }, "-=0.4");

      tl.from(".hero-desc", {
        y: 20,
        opacity: 0,
        duration: 0.6,
        ease: "power2.out",
      }, "-=0.4");

      tl.from(".hero-btn", {
        scale: 0,
        opacity: 0,
        stagger: 0.15,
        duration: 0.6,
        ease: "back.out(2)",
      }, "-=0.3");

      // ── Hero image cinematic entrance ─────────────────────────
      tl.from(heroImageRef.current, {
        scale: 0,
        opacity: 0,
        rotateZ: -15,
        duration: 1.2,
        ease: "elastic.out(1, 0.6)",
      }, "-=1.2");

      // ── Floating image loop ───────────────────────────────────
      gsap.to(heroImageRef.current, {
        y: -18,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 2.5,
      });

      // ── Glow pulse on image ───────────────────────────────────
      gsap.to(".img-glow", {
        boxShadow: "0 0 60px 20px rgba(96,165,250,0.5), 0 0 120px 40px rgba(168,85,247,0.3)",
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 2.5,
      });

      // ── Scroll: section headings ──────────────────────────────
      gsap.utils.toArray<Element>(".section-heading").forEach((el) => {
        gsap.from(el, {
          scrollTrigger: { trigger: el, start: "top 85%", toggleActions: "play none none reverse" },
          x: -80,
          opacity: 0,
          duration: 0.9,
          ease: "power3.out",
        });
      });

      // ── Scroll: cards / panels ────────────────────────────────
      gsap.utils.toArray<Element>(".reveal-up").forEach((el, i) => {
        gsap.from(el, {
          scrollTrigger: { trigger: el, start: "top 88%", toggleActions: "play none none reverse" },
          y: 60,
          opacity: 0,
          duration: 0.8,
          delay: i * 0.1,
          ease: "power2.out",
        });
      });

      // ── Scroll: reveal-left / reveal-right ───────────────────
      gsap.utils.toArray<Element>(".reveal-left").forEach((el) => {
        gsap.from(el, {
          scrollTrigger: { trigger: el, start: "top 85%", toggleActions: "play none none reverse" },
          x: -80,
          opacity: 0,
          duration: 0.9,
          ease: "power3.out",
        });
      });

      gsap.utils.toArray<Element>(".reveal-right").forEach((el) => {
        gsap.from(el, {
          scrollTrigger: { trigger: el, start: "top 85%", toggleActions: "play none none reverse" },
          x: 80,
          opacity: 0,
          duration: 0.9,
          ease: "power3.out",
        });
      });

      // ── Scroll: skill icons bounce ────────────────────────────
      gsap.utils.toArray<Element>(".skill-icon").forEach((el, i) => {
        gsap.from(el, {
          scrollTrigger: { trigger: el, start: "top 90%", toggleActions: "play none none reverse" },
          scale: 0,
          opacity: 0,
          duration: 0.6,
          delay: i * 0.12,
          ease: "back.out(2)",
        });
      });



      // ── Parallax on hero section ──────────────────────────────
      gsap.to(".hero-parallax", {
        scrollTrigger: {
          trigger: ".hero-parallax",
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
        y: 120,
        opacity: 0.3,
      });

    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-900 to-black text-white overflow-x-hidden">
      <style>{`
        @keyframes glow {
          0%, 100% { text-shadow: 0 0 10px rgba(96,165,250,0.5); }
          50% { text-shadow: 0 0 25px rgba(168,85,247,0.9); }
        }
        @keyframes borderRotate {
          0% { background-position: 0% 50%; }
          100% { background-position: 200% 50%; }
        }
        .nav-logo { animation: glow 3s ease-in-out infinite; }
        .nav-link { position: relative; overflow: hidden; }
        .nav-link::before {
          content: '';
          position: absolute;
          bottom: -2px;
          left: -100%;
          width: 100%;
          height: 2px;
          background: linear-gradient(90deg, transparent, #60a5fa, transparent);
          transition: left 0.3s ease;
        }
        .nav-link:hover::before { left: 100%; }
        .hero-title-wrap { overflow: hidden; }
        .animated-border {
          background: linear-gradient(90deg, #60a5fa, #a855f7, #60a5fa);
          background-size: 200%;
          animation: borderRotate 3s linear infinite;
        }
        .curtain { transform-origin: bottom; }
      `}</style>

      {/* ── Intro Curtain ── */}
      <div
        ref={curtainRef}
        className="curtain fixed inset-0 z-[9999] bg-black flex items-center justify-center"
      >
        <div ref={loaderTextRef} className="text-center">
          <div className="text-5xl font-black bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-2">
            Lejeune
          </div>
          <div className="text-zinc-400 text-lg tracking-[0.4em] uppercase">Portfolio</div>
          <div className="mt-6 w-48 h-1 mx-auto rounded-full animated-border" />
        </div>
      </div>

      {/* ── Particles ── */}
      <div ref={particlesRef} className="fixed inset-0 pointer-events-none z-0 overflow-hidden" />

      {/* ── Navigation ── */}
      <nav
        ref={navRef}
        className="fixed top-0 w-full bg-gradient-to-r from-black/90 via-black/80 to-black/90 backdrop-blur-md border-b border-blue-500/30 shadow-lg shadow-blue-500/20 z-50"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4 flex justify-between items-center">
          <h1 className="text-lg sm:text-xl lg:text-2xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent nav-logo">
            My Portfolio
          </h1>
          <div className="flex gap-3 sm:gap-6 lg:gap-8 text-xs sm:text-sm lg:text-base">
            <a href="#projects" className="nav-link hover:text-blue-400 transition duration-300">Projects</a>
            <a href="#about" className="nav-link hover:text-blue-400 transition duration-300">About</a>
            <a href="#contact" className="nav-link hover:text-blue-400 transition duration-300">Contact</a>
          </div>
        </div>
      </nav>

      {/* ── Hero Section ── */}
      <section className="hero-parallax min-h-screen flex items-center justify-center pt-16 sm:pt-20 lg:pt-24 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">

            {/* Text */}
            <div ref={heroTextRef} className="order-last md:order-first text-center md:text-left">
              <h2 className="text-3xl xs:text-4xl sm:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4 lg:mb-6 leading-tight">
                {"Hi, I'm ".split(" ").map((w, i) => (
                  <span key={i} className="hero-title-wrap inline-block mr-3">
                    <span className="hero-word inline-block">{w}</span>
                  </span>
                ))}
                <br />
                {"Lejeune A Daseco".split(" ").map((w, i) => (
                  <span key={i} className="hero-title-wrap inline-block mr-3">
                    <span className="hero-word inline-block bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">{w}</span>
                  </span>
                ))}
              </h2>
              <p className="hero-sub text-base sm:text-lg lg:text-2xl text-zinc-400 mb-4 sm:mb-6 lg:mb-8">
                Aspiring Full-Stack Web Developer
              </p>
              <p className="hero-desc text-sm sm:text-base lg:text-lg text-zinc-300 mb-6 sm:mb-8 lg:mb-10 leading-relaxed">
                I'm passionate about creating beautiful and functional web experiences.
                Explore my work, learn more about me, and let's build something amazing together.
              </p>
              <div className="flex flex-col xs:flex-row justify-center md:justify-start gap-3 sm:gap-4 lg:gap-6">
                <a href="#projects" className="hero-btn px-5 sm:px-6 lg:px-8 py-2 sm:py-2.5 lg:py-3 bg-blue-600 hover:bg-blue-700 hover:scale-105 rounded-lg font-semibold transition-all duration-200 text-center text-xs sm:text-sm lg:text-base shadow-lg shadow-blue-500/30">
                  View My Work
                </a>
                <a href="#contact" className="hero-btn px-5 sm:px-6 lg:px-8 py-2 sm:py-2.5 lg:py-3 border border-zinc-500 hover:border-blue-400 hover:scale-105 rounded-lg font-semibold transition-all duration-200 text-center text-xs sm:text-sm lg:text-base">
                  Get In Touch
                </a>
              </div>
            </div>

            {/* Image */}
            <div ref={heroImageRef} className="order-first md:order-last flex justify-center md:justify-end items-center">
              <div className="relative">
                {/* Orbiting ring */}
                <div className="absolute inset-[-12px] rounded-full border-2 border-blue-400/30 animate-spin" style={{ animationDuration: "8s" }} />
                <div className="absolute inset-[-24px] rounded-full border border-purple-500/20 animate-spin" style={{ animationDuration: "14s", animationDirection: "reverse" }} />
                <Image
                  src="/profilepic.jpg"
                  alt="Lejeune A Daseco"
                  width={300}
                  height={300}
                  className="img-glow rounded-full border-4 border-blue-400 shadow-lg shadow-blue-500/30 w-36 h-36 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-80 lg:h-80 object-cover relative z-10"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── Projects Section ── */}
      <section id="projects" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-zinc-900/50 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h3 className="section-heading text-2xl sm:text-3xl lg:text-4xl font-bold mb-8 sm:mb-10 lg:mb-12">Featured Projects</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 lg:gap-12 items-center">
            <div className="reveal-left">
              <h4 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4 sm:mb-5 lg:mb-6">Agrivail</h4>
              <p className="text-xs sm:text-sm lg:text-base text-zinc-300 mb-6 sm:mb-7 lg:mb-8 leading-relaxed">
                An agriculture-focused web application designed to help farmers and agricultural professionals manage their operations efficiently. Built with modern technologies to provide a seamless user experience, Technologies used Laravel, and MySQL.
              </p>
              <a href="https://agrivail.free.nf/?i=1" target="_blank" rel="noopener noreferrer"
                className="inline-block px-5 sm:px-6 lg:px-8 py-2 sm:py-2.5 lg:py-3 bg-blue-600 hover:bg-blue-700 hover:scale-105 rounded-lg font-semibold transition-all duration-200 text-xs sm:text-sm lg:text-base shadow-lg shadow-blue-500/20">
                View Project →
              </a>
            </div>
            <div className="reveal-right bg-zinc-800 rounded-lg p-5 sm:p-6 lg:p-8 hover:bg-zinc-700 hover:scale-[1.02] transition-all duration-300 border border-zinc-700 hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-500/10">
              <div className="h-32 sm:h-36 lg:h-40 rounded mb-4 sm:mb-5 lg:mb-6 flex items-center justify-center bg-white/5 overflow-hidden">
                <Image
                  src="/AppLogo/agrivaillogo.png"
                  alt="Agrivail Logo"
                  width={160}
                  height={160}
                  className="object-contain w-full h-full p-3"
                />
              </div>
              <h4 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">Live Demo</h4>
              <p className="text-xs sm:text-sm lg:text-base text-zinc-400 mb-4 sm:mb-5 lg:mb-6">Click the button to explore the Agrivail application.</p>
              <a href="https://agrivail.free.nf/?i=1" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 font-semibold text-xs sm:text-sm lg:text-base">
                Visit Website →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── About Section ── */}
      <section id="about" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h3 className="section-heading text-2xl sm:text-3xl lg:text-4xl font-bold mb-8 sm:mb-10 lg:mb-12">About Me</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 lg:gap-12">
            <div className="reveal-left space-y-4">
              <p className="text-xs sm:text-sm lg:text-base text-zinc-300 leading-relaxed">
                I'm an aspiring full-stack web developer with a passion for building modern web applications.
                I specialize in front-end technologies like React and Next.js, combined with backend expertise
                in Laravel and MySQL databases. My goal is to create seamless, scalable web solutions.
              </p>
              <p className="text-xs sm:text-sm lg:text-base text-zinc-300 leading-relaxed">
                I'm constantly learning and staying updated with the latest web development trends.
                When I'm not coding, you'll find me exploring new technologies, working on personal projects,
                or contributing to the developer community.
              </p>
            </div>
            <div className="reveal-right bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg p-5 sm:p-6 lg:p-8 border border-zinc-700 hover:border-blue-500/40 transition-all duration-300">
              <h4 className="text-base sm:text-lg lg:text-xl font-bold mb-5 sm:mb-6 lg:mb-8">Skills & Technologies</h4>
              <div className="grid grid-cols-2 gap-4 sm:gap-5 lg:gap-6">
                {[
                  { icon: "⚛️", label: "React" },
                  { icon: "▲", label: "Next.js" },
                  { icon: "🔴", label: "Laravel" },
                  { icon: "🗄️", label: "MySQL" },
                ].map((s, i) => (
                  <div key={i} className="skill-icon flex flex-col items-center gap-2 p-3 rounded-lg bg-white/5 hover:bg-white/10 hover:scale-110 transition-all duration-200 cursor-default">
                    <div className="text-2xl sm:text-3xl lg:text-4xl">{s.icon}</div>
                    <span className="text-xs sm:text-xs lg:text-sm font-semibold text-center">{s.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* ── Contact Section ── */}
      <section id="contact" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-zinc-900/50 relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="section-heading text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 sm:mb-7 lg:mb-8">Let's Work Together</h3>
          <p className="reveal-up text-xs sm:text-sm lg:text-lg text-zinc-300 mb-6 sm:mb-7 lg:mb-8 max-w-2xl mx-auto">
            I'm always interested in hearing about new projects, opportunities, and learning experiences.
          </p>
          <a
            href="https://mail.google.com/mail/?view=cm&to=Lejeunedaseco064@gmail.com&su=Portfolio%20Inquiry&body=Hi%20Lejeune%2C%0A%0AI%20came%20across%20your%20portfolio%20and%20would%20love%20to%20connect!"
            target="_blank"
            rel="noopener noreferrer"
            className="reveal-up inline-block px-5 sm:px-6 lg:px-8 py-2 sm:py-2.5 lg:py-3 bg-blue-600 hover:bg-blue-700 hover:scale-105 rounded-lg font-semibold transition-all duration-200 text-xs sm:text-sm lg:text-base shadow-lg shadow-blue-500/30"
          >
            ✉️ Send Me an Email
          </a>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="border-t border-zinc-800 py-6 sm:py-7 lg:py-8 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto text-center text-zinc-400 text-xs sm:text-sm">
          <p>© 2026 My Portfolio. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
