import { useState } from "react";
import { Link } from "react-router-dom";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/products", label: "Products" },
  { to: "/shop", label: "Shop" },
  { to: "/contact", label: "Contact" },
];

const highlights = [
  { icon: "⚗", text: "Hydro-Lock Molecule™" },
  { icon: "🌿", text: "Zero inflammation" },
  { icon: "✦", text: "K-Beauty inspired" },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [joined, setJoined] = useState(false);

  const handleJoin = (e) => {
    e.preventDefault();
    if (email) setJoined(true);
  };

  return (
    <footer className="bg-[#0d2035] text-white">
      {/* Top band */}
      <div className="border-b border-white/[0.07]">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-10 gap-y-3 px-5 py-5 sm:px-8">
          {highlights.map((h) => (
            <div
              key={h.text}
              className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.15em] text-white/35"
            >
              <span className="text-base">{h.icon}</span>
              {h.text}
            </div>
          ))}
        </div>
      </div>

      {/* Main content */}
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1.6fr]">

          {/* Brand col */}
          <div>
            <div className="mb-4 text-[15px] font-black tracking-[0.28em] uppercase text-white">
              SEUSU SKIN
            </div>
            <p className="mb-6 text-[13px] leading-relaxed text-white/40">
              Skincare that respects your barrier while delivering what your skin
              actually needs — day after day.
            </p>
            <div className="flex gap-3">
              {["IG", "TK", "FB"].map((s) => (
                <button
                  key={s}
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 text-[10px] font-bold text-white/40 transition hover:border-[#A8D1E7]/40 hover:text-[#A8D1E7]"
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          {/* Nav col */}
          <div>
            <h3 className="mb-5 text-[10px] font-bold uppercase tracking-[0.22em] text-white/30">
              Explore
            </h3>
            <ul className="space-y-3">
              {navLinks.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="text-[13px] font-medium text-white/55 transition hover:text-white"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter col */}
          <div>
            <h3 className="mb-2 text-[10px] font-bold uppercase tracking-[0.22em] text-white/30">
              Stay in touch
            </h3>
            <p className="mb-5 text-[13px] leading-relaxed text-white/40">
              Quiet, useful updates — new launches, routines, and skin tips without the noise.
            </p>

            {joined ? (
              <div className="flex items-center gap-3 rounded-xl border border-[#A8D1E7]/20 bg-[#A8D1E7]/10 px-4 py-3.5">
                <span className="text-lg">✓</span>
                <span className="text-[12px] font-semibold text-[#A8D1E7]">
                  You're in. We'll be in touch.
                </span>
              </div>
            ) : (
              <form onSubmit={handleJoin} className="flex gap-2">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="min-w-0 flex-1 rounded-xl border border-white/10 bg-white/6 px-4 py-3 text-[13px] text-white outline-none transition placeholder:text-white/25 focus:border-[#A8D1E7]/40 focus:ring-2 focus:ring-[#A8D1E7]/10"
                />
                <button
                  type="submit"
                  className="shrink-0 rounded-xl bg-[#336699] px-5 py-3 text-[11px] font-bold uppercase tracking-[0.12em] text-white transition hover:bg-[#4a85bb]"
                >
                  Join
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/6">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-5 py-5 text-[11px] font-medium text-white/25 sm:flex-row sm:px-8">
          <p>&copy; {new Date().getFullYear()} SEUSU SKIN. All rights reserved.</p>
          <div className="flex gap-5">
            {["Privacy", "Terms", "Cookies"].map((l) => (
              <button key={l} className="transition hover:text-white/60">
                {l}
              </button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
