import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const stats = [
  { value: "30s", label: "Absorption" },
  { value: "72hr", label: "Hydration" },
  { value: "0%", label: "Inflammation" },
  { value: "100%", label: "Barrier safe" },
];

export default function Hero() {
  return (
    <section
      className="relative flex min-h-screen items-center overflow-hidden text-white"
      style={{
        background:
          "radial-gradient(ellipse 120% 80% at 70% 20%, #2d5f8a 0%, #163552 45%, #0b1e2e 100%)",
      }}
    >
      {/* Background texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 80%, rgba(168,209,231,0.15) 0%, transparent 50%), radial-gradient(circle at 80% 10%, rgba(142,124,195,0.1) 0%, transparent 50%)",
        }}
      />

      {/* Decorative rings */}
      <div className="pointer-events-none absolute right-0 top-0 -translate-y-1/4 translate-x-1/4 h-[70vw] w-[70vw] max-h-150 max-w-150 rounded-full border border-white/5" />
      <div className="pointer-events-none absolute right-0 top-0 -translate-y-1/4 translate-x-1/4 h-[50vw] w-[50vw] max-h-105 max-w-105 rounded-full border border-[#A8D1E7]/10 bg-[#A8D1E7]/5" />
      <div className="pointer-events-none absolute -bottom-20 -left-20 h-[45vw] w-[45vw] max-h-87.5 max-w-87.5 rounded-full border border-[#8E7CC3]/10 bg-[#8E7CC3]/5" />

      {/* Horizontal accent line */}
      <div className="pointer-events-none absolute left-0 top-1/2 h-px w-full bg-linear-to-r from-transparent via-white/5 to-transparent" />

      <div className="relative mx-auto w-full max-w-6xl px-5 pb-20 pt-10 sm:px-8">
        <div className="flex flex-col gap-14 md:flex-row md:items-center md:gap-16">

          {/* Left — headline */}
          <motion.div
            className="flex-1"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
        
            <div className="mb-6 flex items-center gap-3">
              <span className="block h-px w-8 bg-[#A8D1E7]/60" />
              <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#A8D1E7]/80">
                Seusu Skin — Science-First Skincare
              </span>
            </div>

            {/* Headline */}
            <div className="mb-6 space-y-0">
              <h1
                className="text-[clamp(3rem,10vw,6.5rem)] font-black uppercase leading-none tracking-tight"
                style={{ fontVariationSettings: "'wght' 900" }}
              >
                Depth
              </h1>
              <h2
                className="text-[clamp(3rem,10vw,6.5rem)] font-thin uppercase leading-none tracking-tight text-white/50"
              >
                Redefined
              </h2>
            </div>

            <p className="mb-8 max-w-sm text-[13px] leading-[1.8] text-white/60 sm:text-sm">
              Most skincare evaporates before it works. Our{" "}
              <span className="font-medium text-[#A8D1E7]">Hydro-Lock Molecule™</span>{" "}
              changes physical tension on contact — delivering actives past the
              barrier in under 30 seconds.
            </p>

            {/* CTA */}
            <div className="flex flex-wrap items-center gap-4">
              <Link
                to="/products"
                className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-white px-7 py-3.5 text-[11px] font-bold uppercase tracking-[0.15em] text-[#163552] transition-all duration-300 hover:bg-[#A8D1E7]"
              >
                Explore Products
              </Link>
            </div>
          </motion.div>

          {/* Right — stats */}
          <motion.div
            className="flex-1"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-4 md:grid-cols-2">
              {stats.map((item, i) => (
                <div
                  key={item.label}
                  className="group flex flex-col gap-1.5 bg-white/4 p-6 backdrop-blur-sm transition hover:bg-white/8"
                >
                  <div className="text-[clamp(1.75rem,4vw,2.5rem)] font-black tabular-nums leading-none tracking-tight text-white">
                    {item.value}
                  </div>
                  <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/40">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Molecule visual hint */}
            <div className="mt-6 flex items-start gap-3 rounded-xl border border-[#A8D1E7]/15 bg-[#A8D1E7]/5 p-4">
              <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-[#A8D1E7]/30 text-sm">
                ⚗
              </div>
              <p className="text-[11px] leading-relaxed text-white/45">
                Hydro-Lock Molecule™ alters surface tension on contact, enabling sub-30s
                transdermal delivery without inflammation.
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="pointer-events-none absolute bottom-0 left-0 h-24 w-full bg-linear-to-t from-[#0b1e2e]/60 to-transparent" />
    </section>
  );
}
