"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { X, Check, Loader2, User, Mail, Phone, MessageSquare } from "lucide-react";

// ── CSS variable shortcuts (must match globals.css) ──
const V = {
  bg:          "var(--bg)",
  bgCard:      "var(--bg-card)",
  bgSection:   "var(--bg-section)",
  bgHover:     "var(--bg-hover)",
  textHigh:    "var(--text-high)",
  textMid:     "var(--text-mid)",
  textLow:     "var(--text-low)",
  indigo:      "var(--indigo)",
  emerald:     "var(--emerald)",
  border:      "var(--border)",
  borderFocus: "var(--border-focus)",
  shadow:      "var(--shadow)",
  shadowLg:    "var(--shadow-lg)",
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

// ============================================================
//  CONTACT MODAL  (merged into this file — no separate import)
// ============================================================

const NEEDS = [
  "Website Development",
  "AI Solutions",
  "Cloud & DevOps",
  "Data Engineering",
  "UI / UX Design",
  "Security & Compliance",
  "Something else",
];

type FormState = {
  name: string;
  email: string;
  whatsapp: string;
  need: string;
  details: string;
};

const EMPTY_FORM: FormState = {
  name: "",
  email: "",
  whatsapp: "",
  need: NEEDS[0],
  details: "",
};

type Status = "idle" | "submitting" | "success" | "error";

// ── Reusable field wrapper: label + input, shared focus styling ──
function Field({
  label,
  optional,
  icon,
  children,
}: {
  label: string;
  optional?: boolean;
  icon?: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "7px" }}>
      <label
        style={{
          fontSize: "13px",
          fontWeight: 600,
          color: V.textHigh,
          display: "flex",
          alignItems: "center",
          gap: "6px",
        }}
      >
        {icon}
        {label}
        {optional && (
          <span style={{ fontWeight: 400, color: V.textLow, fontSize: "12px" }}>
            (optional)
          </span>
        )}
      </label>
      {children}
    </div>
  );
}

const inputBase: React.CSSProperties = {
  width: "100%",
  background: V.bgSection,
  border: `1.5px solid ${V.border}`,
  borderRadius: "12px",
  padding: "13px 16px",
  fontSize: "14px",
  fontFamily: "'Plus Jakarta Sans', ui-sans-serif",
  color: V.textHigh,
  outline: "none",
  transition: "border-color 0.2s, box-shadow 0.2s, background 0.2s",
};

function focusOn(e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
  e.currentTarget.style.borderColor = "var(--indigo)";
  e.currentTarget.style.boxShadow = `0 0 0 4px var(--glow-indigo)`;
  e.currentTarget.style.background = "var(--bg-card)";
}
function focusOff(e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
  e.currentTarget.style.borderColor = "var(--border)";
  e.currentTarget.style.boxShadow = "none";
  e.currentTarget.style.background = "var(--bg-section)";
}

function ContactModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [form, setForm] = useState<FormState>(EMPTY_FORM);
  const [status, setStatus] = useState<Status>("idle");
  const [touched, setTouched] = useState(false);
  const nameRef = useRef<HTMLInputElement>(null);

  const nameError = touched && form.name.trim().length === 0;

  // Reset + autofocus whenever the modal opens
  useEffect(() => {
    if (open) {
      setForm(EMPTY_FORM);
      setStatus("idle");
      setTouched(false);
      const t = setTimeout(() => nameRef.current?.focus(), 120);
      return () => clearTimeout(t);
    }
  }, [open]);

  // Close on Escape
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  // Lock body scroll while open
  useEffect(() => {
    if (open) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [open]);

  const update = (key: keyof FormState) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => setForm((f) => ({ ...f, [key]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setTouched(true);
    if (form.name.trim().length === 0) {
      nameRef.current?.focus();
      return;
    }

    setStatus("submitting");
    try {
      // TODO: point this at your real lead-capture endpoint
      await new Promise((res) => setTimeout(res, 900));
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          key="overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) onClose();
          }}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 300,
            background: "rgba(4, 6, 12, 0.66)",
            backdropFilter: "blur(6px)",
            WebkitBackdropFilter: "blur(6px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "24px",
            overflowY: "auto",
          }}
          role="presentation"
        >
          <motion.div
            key="modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="contact-modal-title"
            initial={{ opacity: 0, y: 24, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.97 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            style={{
              width: "100%",
              maxWidth: "540px",
              maxHeight: "calc(100vh - 48px)",
              overflowY: "auto",
              background: V.bgCard,
              border: `1px solid ${V.border}`,
              borderRadius: "24px",
              boxShadow: V.shadowLg,
              position: "relative",
              margin: "auto",
            }}
          >
            {/* Top gradient accent bar */}
            <div
              style={{
                height: "5px",
                borderRadius: "24px 24px 0 0",
                background: `linear-gradient(90deg, ${V.indigo}, ${V.emerald})`,
              }}
            />

            {status === "success" ? (
              // ── Success state ──
              <div
                style={{
                  padding: "64px 40px",
                  textAlign: "center",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "18px",
                }}
              >
                <div
                  style={{
                    width: "64px",
                    height: "64px",
                    borderRadius: "50%",
                    background: "var(--glow-emerald)",
                    border: `1px solid ${V.emerald}`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Check size={28} color={V.emerald} strokeWidth={2.5} />
                </div>
                <h3
                  style={{
                    fontFamily: "'Space Grotesk', ui-sans-serif",
                    fontSize: "22px",
                    fontWeight: 800,
                    color: V.textHigh,
                  }}
                >
                  Message sent
                </h3>
                <p style={{ color: V.textMid, fontSize: "14px", maxWidth: "360px", lineHeight: 1.7 }}>
                  Thanks, {form.name.split(" ")[0] || "there"}. We'll get back to you at{" "}
                  {form.email || "the details you shared"} within one business day.
                </p>
                <button
                  onClick={onClose}
                  style={{
                    marginTop: "8px",
                    padding: "12px 28px",
                    borderRadius: "10px",
                    border: `1px solid ${V.border}`,
                    background: V.bgSection,
                    color: V.textHigh,
                    fontSize: "14px",
                    fontWeight: 600,
                    cursor: "pointer",
                  }}
                >
                  Close
                </button>
              </div>
            ) : (
              // ── Form state ──
              <>
                <div style={{ padding: "32px 32px 8px" }}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      justifyContent: "space-between",
                      gap: "16px",
                    }}
                  >
                    <div>
                      <p
                        style={{
                          fontSize: "11px",
                          letterSpacing: "2.5px",
                          textTransform: "uppercase",
                          color: V.indigo,
                          fontWeight: 700,
                          marginBottom: "10px",
                        }}
                      >
                        Get Started
                      </p>
                      <h2
                        id="contact-modal-title"
                        style={{
                          fontFamily: "'Space Grotesk', ui-sans-serif",
                          fontSize: "26px",
                          fontWeight: 800,
                          letterSpacing: "-0.5px",
                          color: V.textHigh,
                          marginBottom: "8px",
                        }}
                      >
                        Let's build something great
                      </h2>
                      <p style={{ color: V.textMid, fontSize: "14px", lineHeight: 1.6 }}>
                        Tell us a little about your project and we'll get back to you shortly.
                      </p>
                    </div>

                    <button
                      onClick={onClose}
                      aria-label="Close"
                      style={{
                        flexShrink: 0,
                        width: "36px",
                        height: "36px",
                        borderRadius: "10px",
                        border: `1px solid ${V.border}`,
                        background: V.bgSection,
                        color: V.textMid,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        cursor: "pointer",
                        transition: "background 0.2s, color 0.2s, transform 0.2s",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = V.bgHover;
                        e.currentTarget.style.color = V.textHigh;
                        e.currentTarget.style.transform = "rotate(90deg)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = V.bgSection;
                        e.currentTarget.style.color = V.textMid;
                        e.currentTarget.style.transform = "rotate(0deg)";
                      }}
                    >
                      <X size={17} />
                    </button>
                  </div>
                </div>

                <form
                  onSubmit={handleSubmit}
                  style={{
                    padding: "20px 32px 32px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "18px",
                  }}
                >
                  <Field label="Full name" icon={<User size={14} color={V.textLow} />}>
                    <input
                      ref={nameRef}
                      type="text"
                      value={form.name}
                      onChange={update("name")}
                      onFocus={focusOn}
                      onBlur={(e) => {
                        focusOff(e);
                        setTouched(true);
                      }}
                      placeholder="e.g. Priya Sharma"
                      style={{
                        ...inputBase,
                        borderColor: nameError ? "#ef4444" : V.border,
                      }}
                    />
                    {nameError && (
                      <span style={{ fontSize: "12px", color: "#ef4444" }}>
                        Please share your name so we know who to reach out to.
                      </span>
                    )}
                  </Field>

                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
                      gap: "16px",
                    }}
                  >
                    <Field label="Email" optional icon={<Mail size={14} color={V.textLow} />}>
                      <input
                        type="email"
                        value={form.email}
                        onChange={update("email")}
                        onFocus={focusOn}
                        onBlur={focusOff}
                        placeholder="you@company.com"
                        style={inputBase}
                      />
                    </Field>
                    <Field label="WhatsApp" optional icon={<Phone size={14} color={V.textLow} />}>
                      <input
                        type="tel"
                        value={form.whatsapp}
                        onChange={update("whatsapp")}
                        onFocus={focusOn}
                        onBlur={focusOff}
                        placeholder="+91 98765 43210"
                        style={inputBase}
                      />
                    </Field>
                  </div>

                  <Field label="What do you need help with?">
                    <div style={{ position: "relative" }}>
                      <select
                        value={form.need}
                        onChange={update("need")}
                        onFocus={focusOn}
                        onBlur={focusOff}
                        style={{
                          ...inputBase,
                          appearance: "none",
                          cursor: "pointer",
                          paddingRight: "40px",
                        }}
                      >
                        {NEEDS.map((n) => (
                          <option key={n} value={n}>
                            {n}
                          </option>
                        ))}
                      </select>
                      <span
                        style={{
                          position: "absolute",
                          right: "16px",
                          top: "50%",
                          transform: "translateY(-50%)",
                          pointerEvents: "none",
                          color: V.textLow,
                          fontSize: "11px",
                        }}
                      >
                        ▼
                      </span>
                    </div>
                  </Field>

                  <Field
                    label="Project details"
                    optional
                    icon={<MessageSquare size={14} color={V.textLow} />}
                  >
                    <textarea
                      rows={4}
                      value={form.details}
                      onChange={update("details")}
                      onFocus={focusOn}
                      onBlur={focusOff}
                      placeholder="Briefly describe what you're looking to build…"
                      style={{ ...inputBase, resize: "none", lineHeight: 1.6 }}
                    />
                  </Field>

                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    style={{
                      marginTop: "6px",
                      width: "100%",
                      padding: "15px 0",
                      border: "none",
                      borderRadius: "12px",
                      background:
                        status === "submitting"
                          ? V.bgHover
                          : `linear-gradient(110deg, ${V.indigo}, ${V.emerald})`,
                      color: status === "submitting" ? V.textMid : "#fff",
                      fontSize: "15px",
                      fontWeight: 700,
                      cursor: status === "submitting" ? "default" : "pointer",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "8px",
                      transition: "transform 0.2s, box-shadow 0.2s",
                    }}
                    onMouseEnter={(e) => {
                      if (status === "submitting") return;
                      e.currentTarget.style.transform = "translateY(-2px)";
                      e.currentTarget.style.boxShadow = `0 14px 40px var(--glow-indigo)`;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "translateY(0)";
                      e.currentTarget.style.boxShadow = "none";
                    }}
                  >
                    {status === "submitting" ? (
                      <>
                        <Loader2 size={16} className="spin" />
                        Sending…
                      </>
                    ) : (
                      <>Get Started →</>
                    )}
                  </button>

                  {status === "error" && (
                    <p style={{ color: "#ef4444", fontSize: "13px", textAlign: "center", margin: 0 }}>
                      Something went wrong. Please try again.
                    </p>
                  )}

                  <p style={{ fontSize: "12px", color: V.textLow, textAlign: "center", margin: 0 }}>
                    No spam. We&apos;ll only use this to reach out about your project.
                  </p>
                </form>
              </>
            )}
          </motion.div>

          <style>{`
            .spin { animation: modal-spin 0.8s linear infinite; }
            @keyframes modal-spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
            select option { background: var(--bg-card); color: var(--text-high); }
          `}</style>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// ============================================================
//  NAVBAR PIECES
// ============================================================

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
// Opens the ContactModal instead of linking to /contact.
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
  // Default is dark. Lazy-init from localStorage (if the person toggled
  // before) so navigating between pages doesn't silently reset the theme
  // back to the default — Navbar remounts fresh on some routing setups,
  // and without this the toggle would "forget" itself on every page.
  const [theme, setTheme] = useState<"dark" | "light">(() => {
    if (typeof window !== "undefined") {
      const saved = window.localStorage.getItem("theme");
      if (saved === "light" || saved === "dark") return saved;
    }
    return "dark";
  });
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false); // controls the popup form

  // Apply theme to <html> and remember the choice
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    window.localStorage.setItem("theme", theme);
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
      {/* ── Global styles ──
          IMPORTANT: these theme variables used to live only inside the
          Home page component, so any page that doesn't render Home never
          got --indigo, --bg-card, etc. defined at all — that's why the
          "Get Started" button was invisible and the modal looked unstyled
          on other pages. Navbar renders on every page (it lives in
          layout.tsx), so defining the variables here guarantees they're
          always available, everywhere, before anything else paints.
          :root carries the DARK values as the default; [data-theme="light"]
          overrides them. This also means there's no flash of missing
          colors while the toggle effect runs after mount. */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=Space+Grotesk:wght@700;800&display=swap');

        /* ── DARK THEME (default, applies everywhere) ── */
        :root, [data-theme="dark"] {
          --bg:           #0b0f1a;
          --bg-card:      #111827;
          --bg-section:   #0f1626;
          --bg-hover:     #1a2438;
          --text-high:    #f1f5f9;
          --text-mid:     #94a3b8;
          --text-low:     #64748b;
          --indigo:       #6366f1;
          --indigo-light: #818cf8;
          --emerald:      #10b981;
          --amber:        #f59e0b;
          --border:       rgba(255,255,255,0.08);
          --border-focus: rgba(99,102,241,0.5);
          --shadow:       0 1px 3px rgba(0,0,0,0.4);
          --shadow-lg:    0 20px 60px rgba(0,0,0,0.45);
          --glow-indigo:  rgba(99,102,241,0.35);
          --glow-emerald: rgba(16,185,129,0.25);
          --glow-amber:   rgba(245,158,11,0.25);
          --orb1:         rgba(99,102,241,0.18);
          --orb2:         rgba(16,185,129,0.12);
          --orb3:         rgba(245,158,11,0.10);
          --grid-color:   rgba(255,255,255,0.035);
        }

        /* ── LIGHT THEME (opt-in via toggle) ── */
        [data-theme="light"] {
          --bg:           #f8fafc;
          --bg-card:      #ffffff;
          --bg-section:   #f1f5f9;
          --bg-hover:     #e8edf5;
          --text-high:    #0f172a;
          --text-mid:     #475569;
          --text-low:     #94a3b8;
          --indigo:       #4f46e5;
          --indigo-light: #6366f1;
          --emerald:      #059669;
          --amber:        #d97706;
          --border:       rgba(0,0,0,0.09);
          --border-focus: rgba(79,70,229,0.4);
          --shadow:       0 1px 4px rgba(0,0,0,0.06), 0 4px 16px rgba(0,0,0,0.04);
          --shadow-lg:    0 12px 40px rgba(0,0,0,0.12);
          --glow-indigo:  rgba(79,70,229,0.15);
          --glow-emerald: rgba(5,150,105,0.12);
          --glow-amber:   rgba(217,119,6,0.12);
          --orb1:         rgba(79,70,229,0.10);
          --orb2:         rgba(5,150,105,0.08);
          --orb3:         rgba(217,119,6,0.07);
          --grid-color:   rgba(0,0,0,0.04);
        }

        body {
          font-family: 'Plus Jakarta Sans', ui-sans-serif;
          background: var(--bg);
          color: var(--text-high);
          transition: background 0.35s, color 0.35s;
        }

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

      {/* ── Contact / lead-capture popup (defined above in this same file) ── */}
      <ContactModal open={contactOpen} onClose={() => setContactOpen(false)} />
    </>
  );
}