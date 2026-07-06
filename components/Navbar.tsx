"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import ContactModal from "./ContactModal";

// ── CSS variable shortcuts (must match globals.css) ──
const V = {
  bg:          "var(--bg)",
  bgCard:      "var(--bg-card)",
  bgHover:     "var(--bg-hover)",
  textHigh:    "var(--text-high)",
  textMid:     "var(--text-mid)",
  textLow:     "var(--text-low)",
  indigo:      "#6366f1;",
  emerald:     "#10b981",
  border:      "var(--border)",
  borderFocus: "var(--border-focus)",
  shadow:      "var(--shadow)",
  glowIndigo:  "var(--glow-indigo)",
};

const NAV_LINKS = [
  { label: "Home",           href: "/" },
  { label: "Services",       href: "/services" },
  { label: "AI Solutions",   href: "/ai-solutions" },
  { label: "Web Dev",        href: "/web-development" },
  { label: "Cloud & DevOps", href: "/cloud-devops" },
  { label: "Case Studies",   href: "/case-studies" },
  { label: "Pricing",        href: "/pricing" },
  { label: "Blog",           href: "/blog" },
  { label: "About",          href: "/about" },
];

// ── Theme toggle button ──
function ThemeToggle({ theme, toggle }: { theme: string; toggle: () => void }) {
  return (
    <button
      onClick={toggle}
      aria-label="Toggle theme"
      style={{
        width: "42px",
        height: "42px",
        borderRadius: "12px",
        border: `1px solid ${V.border}`,
        background: V.bgCard,
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "18px",
        transition: "all 0.25s",
        flexShrink: 0,
      }}
      onMouseEnter={e => {
        e.currentTarget.style.borderColor = V.borderFocus;
        e.currentTarget.style.transform = "scale(1.08)";
      }}
      onMouseLeave={e => {
        e.currentTarget.style.borderColor = V.border;
        e.currentTarget.style.transform = "scale(1)";
      }}
    >
      {theme === "dark" ? "☀️" : "🌙"}
    </button>
  );
}

// ── Hamburger icon ──
function Hamburger({ open, onClick }: { open: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      aria-label="Toggle menu"
      style={{
        display: "none",  // shown via media-query class
        width: "42px",
        height: "42px",
        borderRadius: "12px",
        border: `1px solid ${V.border}`,
        background: V.bgCard,
        cursor: "pointer",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "20px",
        transition: "all 0.25s",
        flexShrink: 0,
      }}
      className="nav-hamburger"
      onMouseEnter={e => {
        e.currentTarget.style.borderColor = V.borderFocus;
        e.currentTarget.style.transform = "scale(1.08)";
      }}
      onMouseLeave={e => {
        e.currentTarget.style.borderColor = V.border;
        e.currentTarget.style.transform = "scale(1)";
      }}
    >
      {open ? "✕" : "☰"}
    </button>
  );
}

// ── "Get Started" CTA button ──
// Used for both the desktop nav and the mobile menu.
// It no longer links to /contact — it opens the ContactModal instead.
function GetStartedButton({
  onClick,
  fullWidth = false,
}: {
  onClick: () => void;
  fullWidth?: boolean;
}) {
  return (
    <button
      onClick={onClick}
      style={{
        width: fullWidth ? "100%" : "auto",
        background: V.indigo,
        border: "none",
        borderRadius: "10px",
        color: "#fff",
        padding: fullWidth ? "12px 22px" : "10px 22px",
        fontSize: fullWidth ? "14px" : "13px",
        fontWeight: "600",
        cursor: "pointer",
        letterSpacing: "0.2px",
        transition: "transform 0.2s, box-shadow 0.2s, opacity 0.2s",
      }}
      onMouseEnter={e => {
        e.currentTarget.style.transform = "scale(1.04)";
        e.currentTarget.style.boxShadow = `0 8px 28px ${V.glowIndigo}`;
      }}
      onMouseLeave={e => {
        e.currentTarget.style.transform = "scale(1)";
        e.currentTarget.style.boxShadow = "none";
      }}
    >
      Get Started →
    </button>
  );
}

// ============================================================
//  NAVBAR COMPONENT
//  Place this in your layout.tsx so it appears on every page.
//
//  It manages its own theme state and applies [data-theme]
//  to <html> so all pages share the same CSS variables.
// ============================================================
export default function Navbar() {
  const [theme, setTheme] = useState<"dark" | "light">("light");
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false); // controls the popup form

  // Apply theme to <html>
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = useCallback(() => {
    setTheme(t => (t === "dark" ? "light" : "dark"));
  }, []);

  // Scroll detection for frosted glass effect
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  // Close mobile menu on route change / resize
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 900) setMobileOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // Opens the contact form and makes sure the mobile menu closes first
  const openContactForm = useCallback(() => {
    setMobileOpen(false);
    setContactOpen(true);
  }, []);

  return (
    <>
      {/* ── Scoped styles ── */}
      <style>{`
        /* Hide desktop nav on mobile, show hamburger */
        @media (max-width: 900px) {
          .nav-links-desktop { display: none !important; }
          .nav-hamburger      { display: flex !important; }
        }

        /* Mobile slide-down menu */
        .nav-mobile-menu {
          position: fixed;
          top: 68px;
          left: 0; right: 0;
          z-index: 199;
          background: var(--bg-card);
          border-bottom: 1px solid var(--border);
          padding: 16px 24px 24px;
          display: flex;
          flex-direction: column;
          gap: 4px;
          transform-origin: top;
          transition: transform 0.28s cubic-bezier(0.22,1,0.36,1), opacity 0.28s;
        }
        .nav-mobile-menu.closed {
          transform: scaleY(0);
          opacity: 0;
          pointer-events: none;
        }
        .nav-mobile-menu.open {
          transform: scaleY(1);
          opacity: 1;
        }

        /* Nav link hover — applied via JS inline styles for full theme support */
      `}</style>

      {/* ── Main nav bar ── */}
      <nav
        style={{
          position: "fixed",
          top: 0, left: 0, right: 0,
          zIndex: 200,
          padding: "0 40px",
          height: "68px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          backdropFilter: "blur(24px) saturate(1.6)",
          WebkitBackdropFilter: "blur(24px) saturate(1.6)",
          background: scrolled ? "var(--bg-card)" : "transparent",
          borderBottom: `1px solid ${scrolled ? V.border : "transparent"}`,
          boxShadow: scrolled ? V.shadow : "none",
          transition: "background 0.4s, border-color 0.4s, box-shadow 0.4s",
        }}
      >
        {/* ── Logo ── */}
        <Link href="/" style={{ textDecoration: "none", flexShrink: 0 }}>
          <span
            style={{
              fontFamily: "'Space Grotesk', ui-sans-serif",
              fontSize: "21px",
              fontWeight: "800",
              letterSpacing: "-0.5px",
              background: "linear-gradient(135deg, #6366f1, #10b981)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            SEMSER
          </span>
        </Link>

        {/* ── Desktop nav links ── */}
        <ul
          className="nav-links-desktop"
          style={{
            display: "flex",
            gap: "4px",
            listStyle: "none",
            margin: 0,
            padding: 0,
          }}
        >
          {NAV_LINKS.map(link => (
            <li key={link.label}>
              <Link
                href={link.href}
                style={{
                  display: "block",
                  padding: "6px 12px",
                  fontSize: "13px",
                  fontWeight: "500",
                  color: V.textMid,
                  textDecoration: "none",
                  borderRadius: "8px",
                  transition: "color 0.25s, background 0.25s",
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.color = V.textHigh;
                  e.currentTarget.style.background = V.bgHover;
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.color = V.textMid;
                  e.currentTarget.style.background = "transparent";
                }}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* ── Right side: theme toggle + CTA + hamburger ── */}
        <div style={{ display: "flex", alignItems: "center", gap: "12px", flexShrink: 0 }}>
          <ThemeToggle theme={theme} toggle={toggleTheme} />

          {/* CTA — opens the contact form popup */}
          <GetStartedButton onClick={openContactForm} />

          <Hamburger open={mobileOpen} onClick={() => setMobileOpen(o => !o)} />
        </div>
      </nav>

      {/* ── Mobile slide-down menu ── */}
      <div className={`nav-mobile-menu ${mobileOpen ? "open" : "closed"}`}>
        {NAV_LINKS.map(link => (
          <Link
            key={link.label}
            href={link.href}
            onClick={() => setMobileOpen(false)}
            style={{
              display: "block",
              padding: "10px 14px",
              fontSize: "14px",
              fontWeight: "500",
              color: V.textMid,
              textDecoration: "none",
              borderRadius: "10px",
              transition: "color 0.25s, background 0.25s",
            }}
            onMouseEnter={e => {
              e.currentTarget.style.color = V.textHigh;
              e.currentTarget.style.background = V.bgHover;
            }}
            onMouseLeave={e => {
              e.currentTarget.style.color = V.textMid;
              e.currentTarget.style.background = "transparent";
            }}
          >
            {link.label}
          </Link>
        ))}

        {/* Mobile CTA — same popup, full width */}
        <div style={{ marginTop: "8px" }}>
          <GetStartedButton onClick={openContactForm} fullWidth />
        </div>
      </div>

      {/* ── Contact / lead-capture popup ── */}
      <ContactModal open={contactOpen} onClose={() => setContactOpen(false)} />
    </>
  );
}