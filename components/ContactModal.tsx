"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

/**
 * ============================================================
 *  CONTACT MODAL
 *  A premium "Get Started" popup form.
 *
 *  Fields:
 *   - Name        (required)
 *   - Email       (optional)
 *   - WhatsApp/Phone (optional)
 *     -> at least ONE of Email / WhatsApp must be filled
 *   - Service     (dropdown: Website, AI, Cloud, Other)
 *   - Message     (optional)
 *
 *  Usage (already wired up in Navbar.tsx):
 *   <ContactModal open={isOpen} onClose={() => setIsOpen(false)} />
 * ============================================================
 */

// Dropdown options — edit this list any time you add/remove a service
const SERVICES = [
  "Website Development",
  "AI Solutions",
  "Cloud & DevOps",
  "Mobile App",
  "Something else",
];

type FormState = {
  name: string;
  email: string;
  whatsapp: string;
  service: string;
  message: string;
};

const EMPTY_FORM: FormState = {
  name: "",
  email: "",
  whatsapp: "",
  service: SERVICES[0],
  message: "",
};

type Props = {
  open: boolean;
  onClose: () => void;
};

export default function ContactModal({ open, onClose }: Props) {
  const [form, setForm] = useState<FormState>(EMPTY_FORM);
  const [error, setError] = useState("");
  // "idle" -> normal form | "loading" -> submitting | "success" -> done
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  // Portals need an actual DOM node, which only exists once we're running
  // in the browser — this flips to true right after the component mounts.
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  // Lock page scroll while the modal is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Close on Escape key
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  // Reset the form a moment after it finishes closing, so it doesn't
  // flash "old" data the next time someone opens it.
  useEffect(() => {
    if (!open) {
      const t = setTimeout(() => {
        setForm(EMPTY_FORM);
        setStatus("idle");
        setError("");
      }, 300);
      return () => clearTimeout(t);
    }
  }, [open]);

  function updateField<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm(prev => ({ ...prev, [key]: value }));
    if (error) setError(""); // clear error as soon as the user starts fixing it
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!form.name.trim()) {
      setError("Please enter your name.");
      return;
    }
    if (!form.email.trim() && !form.whatsapp.trim()) {
      setError("Please share at least your email or WhatsApp number.");
      return;
    }

    setStatus("loading");

    try {
      // ── Hook this up to your backend / email service ──
      // Example: send to your own API route which forwards to email,
      // a Google Sheet, a CRM, or WhatsApp Business API.
      //
      // await fetch("/api/lead", {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify(form),
      // });

      await new Promise(resolve => setTimeout(resolve, 900)); // demo delay only

      setStatus("success");
    } catch {
      setStatus("idle");
      setError("Something went wrong. Please try again.");
    }
  }

  if (!open || !mounted) return null;

  return createPortal(
    <div
      // Backdrop — this scrolls as a whole when the card is taller than the screen,
      // instead of centering-and-clipping an oversized box (that was the bug).
      onClick={onClose}
      className="fixed inset-0 z-[300] overflow-y-auto modal-backdrop"
      style={{ background: "rgba(0,0,0,0.55)", backdropFilter: "blur(6px)" }}
    >
      {/* Keyframes for the entrance animations */}
      <style>{`
        @keyframes modalFadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes modalPopIn {
          from { opacity: 0; transform: translateY(24px) scale(0.96); }
          to   { opacity: 1; transform: translateY(0)    scale(1); }
        }
        @keyframes checkPop {
          0%   { transform: scale(0); opacity: 0; }
          60%  { transform: scale(1.15); opacity: 1; }
          100% { transform: scale(1); }
        }
        .modal-backdrop { animation: modalFadeIn 0.25s ease-out; }
        .modal-card { animation: modalPopIn 0.35s cubic-bezier(0.22,1,0.36,1); }
        .modal-success-icon { animation: checkPop 0.5s cubic-bezier(0.22,1,0.36,1); }

        .modal-input {
          width: 100%;
          padding: 12px 14px;
          border-radius: 12px;
          border: 1.5px solid var(--border);
          background: var(--bg);
          color: var(--text-high);
          font-size: 14px;
          outline: none;
          transition: border-color 0.2s, box-shadow 0.2s;
        }
        .modal-input:hover { border-color: var(--border-focus); }
        .modal-input:focus {
          border-color: #6366f1;
          box-shadow: 0 0 0 4px var(--glow-indigo);
        }
        .modal-input::placeholder { color: var(--text-low); }
      `}</style>

      {/* Centering wrapper — min-h-full lets it center when short, and grow/scroll
          naturally (via the backdrop's own scroll) when the card is tall. Padding
          keeps the card off the screen edges on every side. */}
      <div className="min-h-full flex items-center justify-center p-4 sm:p-6 py-10">
        {/* Card — stopPropagation so clicking inside doesn't close the modal */}
        <div
          onClick={e => e.stopPropagation()}
          className="modal-card relative w-full max-w-md rounded-[28px]"
          style={{
            background: "var(--bg-card)",
            border: "1px solid var(--border)",
            boxShadow: "var(--shadow), 0 24px 70px rgba(0,0,0,0.4)",
          }}
        >
          {/* Gradient accent strip along the top — the one "premium" signature touch */}
          <div
            className="h-[5px] w-full rounded-t-[28px]"
            style={{ background: "linear-gradient(90deg, #6366f1, #8b5cf6, #10b981)" }}
          />

          <div className="p-6 sm:p-9 bg-white text-black dark:bg-gray-900 dark:text-white">
          {/* Close button */}
          <button
            onClick={onClose}
            aria-label="Close"
            className="absolute top-6 right-6 flex h-9 w-9 items-center justify-center rounded-full text-sm transition hover:scale-105"
            style={{ background: "var(--bg-hover)", color: "var(--text-mid)" }}
          >
            ✕
          </button>

          {status === "success" ? (
            // ── Success state ──
            <div className="flex flex-col items-center text-center py-8">
              <div
                className="modal-success-icon flex h-16 w-16 items-center justify-center rounded-full text-2xl mb-5"
                style={{ background: "linear-gradient(135deg, #6366f1, #10b981)", color: "#fff" }}
              >
                ✓
              </div>
              <h3 className="text-xl font-bold mb-2" style={{ color: "var(--text-high)" }}>
                You're all set!
              </h3>
              <p className="text-sm mb-7 max-w-xs" style={{ color: "var(--text-mid)" }}>
                Thanks, {form.name.split(" ")[0]}. Our team will reach out within 24 hours.
              </p>
              <button
                onClick={onClose}
                className="rounded-xl px-7 py-2.5 text-sm font-semibold text-white transition hover:opacity-90"
                style={{ background: "linear-gradient(135deg, #6366f1, #10b981)" }}
              >
                Done
              </button>
            </div>
          ) : (
            // ── Form state ──
            <>
              {/* pr-8 keeps this text clear of the close button */}
              <div className="pr-8 mb-7">
                <div
                  className="inline-block text-[11px] font-bold tracking-wider uppercase mb-2 px-2.5 py-1 rounded-full"
                  style={{ background: "var(--glow-indigo)", color: "#6366f1" }}
                >
                  Get Started
                </div>
                <h3 className="text-2xl font-extrabold leading-tight mb-1.5" style={{ color: "var(--text-high)" }}>
                  Let's build something great
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--text-mid)" }}>
                  Tell us a little about your project and we'll get back to you shortly.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                {/* Name */}
                <div>
                  <label className="block text-xs font-semibold mb-1.5" style={{ color: "var(--text-mid)" }}>
                    Full name
                  </label>
                  <input
                    className="modal-input bg-white !text-black dark:bg-gray-900 dark:!text-white ..."
                    type="text"
                    placeholder="e.g. Priya Sharma"
                    value={form.name}
                    onChange={e => updateField("name", e.target.value)}
                  />
                </div>

                {/* Email + WhatsApp side by side on larger screens, stacked on mobile */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold mb-1.5" style={{ color: "var(--text-mid)" }}>
                      Email <span className="font-normal" style={{ color: "var(--text-low)" }}>(optional)</span>
                    </label>
                    <input
                      className="modal-input"
                      type="email"
                      placeholder="you@company.com"
                      value={form.email}
                      onChange={e => updateField("email", e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold mb-1.5" style={{ color: "var(--text-mid)" }}>
                      WhatsApp <span className="font-normal" style={{ color: "var(--text-low)" }}>(optional)</span>
                    </label>
                    <input
                      className="modal-input"
                      type="tel"
                      placeholder="+91 98765 43210"
                      value={form.whatsapp}
                      onChange={e => updateField("whatsapp", e.target.value)}
                    />
                  </div>
                </div>

                {/* Service */}
                <div>
                  <label className="block text-xs font-semibold mb-1.5" style={{ color: "var(--text-mid)" }}>
                    What do you need help with?
                  </label>
                  <select
                    className="modal-input"
                    value={form.service}
                    onChange={e => updateField("service", e.target.value)}
                  >
                    {SERVICES.map(s => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-semibold mb-1.5" style={{ color: "var(--text-mid)" }}>
                    Project details <span className="font-normal" style={{ color: "var(--text-low)" }}>(optional)</span>
                  </label>
                  <textarea
                    className="modal-input"
                    rows={3}
                    placeholder="Briefly describe what you're looking to build..."
                    value={form.message}
                    onChange={e => updateField("message", e.target.value)}
                    style={{ resize: "none" }}
                  />
                </div>

                {/* Error message */}
                {error && (
                  <p
                    className="text-xs font-medium rounded-lg px-3 py-2"
                    style={{ color: "#ef4444", background: "rgba(239,68,68,0.1)" }}
                  >
                    {error}
                  </p>
                )}

                {/* Submit */}
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="mt-1 w-full rounded-xl py-3.5 text-sm font-semibold text-white transition disabled:opacity-70 hover:opacity-90 hover:shadow-lg"
                  style={{
                    background: "linear-gradient(135deg, #6366f1, #8b5cf6, #10b981)",
                    cursor: status === "loading" ? "wait" : "pointer",
                  }}
                >
                  {status === "loading" ? "Sending..." : "Get Started →"}
                </button>

                <p className="text-center text-xs -mt-2" style={{ color: "var(--text-low)" }}>
                  No spam. We'll only use this to reach out about your project.
                </p>
              </form>
            </>
          )}
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
}