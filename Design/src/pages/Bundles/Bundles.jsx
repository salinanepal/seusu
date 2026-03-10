import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { motion, AnimatePresence } from "framer-motion";

const ScrollStyle = () => (
  <style>{`
    .bun-no-scroll::-webkit-scrollbar { display: none; }
    .bun-no-scroll { -ms-overflow-style: none; scrollbar-width: none; }
    @keyframes shimmer {
      0% { background-position: -400px 0; }
      100% { background-position: 400px 0; }
    }
    .shimmer-line {
      background: linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.15) 50%, transparent 100%);
      background-size: 400px 100%;
      animation: shimmer 2.5s infinite;
    }
  `}</style>
);

const bundles = [
  {
    id: "hydration",
    name: "Hydration Core",
    subtitle: "Deep Hydration Bundle",
    tagline: "The foundation of every healthy routine.",
    accent: "#A8D1E7",
    accentDark: "#5BA8CC",
    dark: "#0D2035",
    pale: "#EEF6FA",
    mid: "#7bbdd8",
    scienceId: "hydro-lock",
    items: [
      { type: "Serum", name: "Hydration Core Serum", volume: "30ml", format: "Frosted Glass Dropper" },
      { type: "Soap", name: "Hydration Core Soap", volume: "3.5oz", format: "White Kraft Paperboard" },
      { type: "Face Wash", name: "Hydration Core Cleanser", volume: "150ml", format: "Soft-Touch Tube" },
      { type: "Facial Lotion", name: "Hydration Core Facial Lotion", volume: "200ml", format: "Heavy Frosted Glass" },
      { type: "Body Lotion", name: "Hydration Core Body Lotion", volume: "200ml", format: "Frosted PETG Pump" },
    ],
    price: "NPR 12,500",
    saving: "Save 20%",
  },
  {
    id: "vitamin-c",
    name: "Vitamin C Glow",
    subtitle: "Brightening Bundle",
    tagline: "Morning radiance. All day long.",
    accent: "#E88B4D",
    accentDark: "#C4612A",
    dark: "#3D1E08",
    pale: "#FDF2EA",
    mid: "#F5C49A",
    scienceId: "vitamin-c",
    items: [
      { type: "Serum", name: "Vitamin C Glow Serum", volume: "30ml", format: "Frosted Glass Dropper" },
      { type: "Soap", name: "Vitamin C Soap", volume: "3.5oz", format: "White Kraft Paperboard" },
      { type: "Face Wash", name: "Vitamin C Glow Cleanser", volume: "150ml", format: "Soft-Touch Tube" },
      { type: "Facial Lotion", name: "Vitamin C Glow Facial Lotion", volume: "200ml", format: "Heavy Frosted Glass" },
      { type: "Body Lotion", name: "Vitamin C Glow Body Lotion", volume: "200ml", format: "Frosted PETG Pump" },
    ],
    price: "NPR 12,500",
    saving: "Save 20%",
  },
  {
    id: "night-repair",
    name: "Night Repair",
    subtitle: "Retinol Complex Bundle",
    tagline: "Sleep. Resurface. Wake renewed.",
    accent: "#8E7CC3",
    accentDark: "#5C4A9E",
    dark: "#2A1F42",
    pale: "#F3F0FA",
    mid: "#C4B8E8",
    scienceId: "retinol",
    items: [
      { type: "Serum", name: "Night Repair Retinol Serum", volume: "30ml", format: "Frosted Glass Dropper" },
      { type: "Soap", name: "Night Repair Soap", volume: "3.5oz", format: "White Kraft Paperboard" },
      { type: "Face Wash", name: "Night Repair Cleanser", volume: "150ml", format: "Soft-Touch Tube" },
      { type: "Facial Lotion", name: "Night Repair Facial Lotion", volume: "200ml", format: "Heavy Frosted Glass" },
      { type: "Body Lotion", name: "Night Repair Body Lotion", volume: "200ml", format: "Frosted PETG Pump" },
    ],
    price: "NPR 12,500",
    saving: "Save 20%",
  },
  {
    id: "calming-cica",
    name: "Calming Cica",
    subtitle: "Barrier Soothing Bundle",
    tagline: "Quiet the skin. Rebuild the barrier.",
    accent: "#5A9B6A",
    accentDark: "#3A7248",
    dark: "#0F2B1A",
    pale: "#EDF6EF",
    mid: "#A0CBA8",
    scienceId: "cica",
    items: [
      { type: "Serum", name: "Calming Cica Serum", volume: "30ml", format: "Frosted Glass Dropper" },
      { type: "Soap", name: "Calming Cica Soap", volume: "3.5oz", format: "White Kraft Paperboard" },
      { type: "Face Wash", name: "Calming Cica Cleanser", volume: "150ml", format: "Soft-Touch Tube" },
      { type: "Facial Lotion", name: "Calming Cica Facial Lotion", volume: "200ml", format: "Heavy Frosted Glass" },
      { type: "Body Lotion", name: "Calming Cica Body Lotion", volume: "200ml", format: "Frosted PETG Pump" },
    ],
    price: "NPR 12,500",
    saving: "Save 20%",
  },
  {
    id: "peptide-firm",
    name: "Peptide Firm",
    subtitle: "Firming Complex Bundle",
    tagline: "Structure you can feel. Results you can see.",
    accent: "#8A8A9A",
    accentDark: "#5A5A6A",
    dark: "#1E1F2A",
    pale: "#F2F2F5",
    mid: "#C0C0CC",
    scienceId: "peptides",
    items: [
      { type: "Serum", name: "Peptide Firm Serum", volume: "30ml", format: "Frosted Glass Dropper" },
      { type: "Soap", name: "Peptide Firm Soap", volume: "3.5oz", format: "White Kraft Paperboard" },
      { type: "Face Wash", name: "Peptide Firm Cleanser", volume: "150ml", format: "Soft-Touch Tube" },
      { type: "Facial Lotion", name: "Peptide Firm Facial Lotion", volume: "200ml", format: "Heavy Frosted Glass" },
      { type: "Body Lotion", name: "Peptide Firm Lotion", volume: "200ml", format: "Frosted PETG Pump" },
    ],
    price: "NPR 12,500",
    saving: "Save 20%",
  },
];

function BottleStack({ bundle, isActive }) {
  const shapes = [
    { w: 28, h: 50, r: 8 },
    { w: 44, h: 60, r: 10 },
    { w: 32, h: 62, r: 6 },
    { w: 30, h: 66, r: 6 },
    { w: 34, h: 66, r: 6 },
  ];

  return (
    <div className="relative flex items-end justify-center gap-1.5" style={{ height: "100px" }}>
      {shapes.map((s, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.07, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden shrink-0"
          style={{
            width: s.w, height: s.h, borderRadius: s.r,
            background: isActive
              ? `linear-gradient(160deg, ${bundle.accent}CC 0%, ${bundle.accentDark}99 60%, ${bundle.dark}88 100%)`
              : `linear-gradient(160deg, ${bundle.pale} 0%, ${bundle.mid}44 100%)`,
            border: `1px solid ${isActive ? bundle.accent + "55" : "rgba(0,0,0,0.07)"}`,
            transition: "all 0.4s ease",
          }}
        >
          <div className="absolute inset-0 shimmer-line" style={{ opacity: isActive ? 0.6 : 0.3 }} />
          <div className="absolute bottom-1.5 left-0 right-0 flex justify-center" style={{ opacity: isActive ? 0.7 : 0.25 }}>
            <span style={{ fontSize: 7, fontWeight: 800, letterSpacing: "0.12em", color: isActive ? "#fff" : bundle.accentDark }}>
              SEUSU
            </span>
          </div>
          {i === 0 && (
            <div
              className="absolute -top-1 left-1/2 -translate-x-1/2 rounded-full"
              style={{ width: 10, height: 14, background: isActive ? "rgba(255,255,255,0.5)" : "rgba(0,0,0,0.12)" }}
            />
          )}
        </motion.div>
      ))}
    </div>
  );
}

function ItemRow({ item, accent, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.06, duration: 0.4 }}
      className="flex items-center gap-3 py-2.5 border-b last:border-0"
      style={{ borderColor: "rgba(0,0,0,0.05)" }}
    >
      <div className="flex-1 min-w-0">
        <div className="text-[12px] font-semibold text-black/80 truncate">{item.name}</div>
        <div className="text-[10px] text-black/35 mt-0.5">{item.format} · {item.volume}</div>
      </div>
      <div
        className="shrink-0 rounded-full px-2 py-0.5 text-[9px] font-bold uppercase tracking-[0.15em]"
        style={{ background: accent + "18", color: accent }}
      >
        {item.type}
      </div>
    </motion.div>
  );
}

function BundleCard({ bundle, isActive, onClick }) {
  return (
    <motion.div
      layout
      onClick={onClick}
      className="cursor-pointer rounded-2xl border transition-all duration-300 overflow-hidden h-full"
      style={{
        borderColor: isActive ? bundle.accent + "60" : "rgba(0,0,0,0.07)",
        background: isActive ? bundle.pale : "#ffffff",
        boxShadow: isActive
          ? `0 20px 60px ${bundle.accent}22, 0 2px 8px ${bundle.accent}15`
          : "0 2px 12px rgba(0,0,0,0.04)",
        cursor: isActive ? "default" : "pointer",
      }}
      whileHover={{ y: isActive ? 0 : -2 }}
    >
      <div
        className="h-1 w-full transition-all duration-300"
        style={{ background: isActive ? `linear-gradient(90deg, ${bundle.accent}, ${bundle.mid})` : "rgba(0,0,0,0.06)" }}
      />

      <div className="p-5 sm:p-6">
        {/* Header */}
        <div className="mb-4 flex items-start justify-between gap-2">
          <div>
            <div className="mb-1 text-[9px] font-bold uppercase tracking-[0.22em]" style={{ color: isActive ? bundle.accent : "rgba(0,0,0,0.3)" }}>
              {bundle.subtitle}
            </div>
            <h3 className="text-[1.15rem] font-black leading-tight" style={{ color: isActive ? bundle.dark : "#000" }}>
              {bundle.name}
            </h3>
          </div>
          <div
            className="shrink-0 rounded-full px-2.5 py-1 text-[9px] font-black uppercase tracking-[0.15em]"
            style={{ background: isActive ? bundle.accent : "rgba(0,0,0,0.05)", color: isActive ? "#fff" : "rgba(0,0,0,0.35)" }}
          >
            {bundle.saving}
          </div>
        </div>

        {/* Tagline */}
        <p className="mb-4 text-[12px] italic leading-relaxed" style={{ color: isActive ? bundle.accentDark : "rgba(0,0,0,0.4)" }}>
          "{bundle.tagline}"
        </p>

        {/* Bottle illustration */}
        <div className="mb-4">
          <BottleStack bundle={bundle} isActive={isActive} />
        </div>

        {/* Item type pills — display only, not clickable */}
        <div className="flex flex-wrap items-center gap-1.5 mb-4">
          {["Serum", "Soap", "Face Wash", "Facial Lotion", "Body Lotion"].map((t) => (
            <div
              key={t}
              className="pointer-events-none select-none rounded-full px-2 py-0.5 text-[8px] font-semibold uppercase tracking-widest"
              style={{
                background: isActive ? bundle.accent + "20" : "rgba(0,0,0,0.04)",
                color: isActive ? bundle.accent : "rgba(0,0,0,0.3)",
              }}
            >
              {t}
            </div>
          ))}
        </div>

        {/* Expanded items — only shown on active */}
        <AnimatePresence>
          {isActive && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden"
            >
              <div className="mb-4 rounded-xl p-1" style={{ background: "rgba(255,255,255,0.7)" }}>
                {bundle.items.map((item, i) => (
                  <ItemRow key={item.type} item={item} accent={bundle.accent} index={i} />
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* CTA */}
        <div className="flex items-center gap-3">
          <button
            className="rounded-full px-4 py-2.5 text-[10px] font-black uppercase tracking-[0.18em] transition-all duration-200"
            style={{
              background: isActive ? bundle.accent : "rgba(0,0,0,0.06)",
              color: isActive ? "#fff" : "rgba(0,0,0,0.5)",
            }}
            onClick={(e) => { e.stopPropagation(); }}
          >
            {isActive ? "Add Bundle" : "View"}
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export default function Bundles() {
  const [activeId, setActiveId] = useState(bundles[0].id);
  const active = bundles.find((b) => b.id === activeId);
  const others = bundles.filter((b) => b.id !== activeId);

  return (
    <>
      <ScrollStyle />
      <Navbar />

      {/* Hero */}
      <section
        className="relative overflow-hidden pb-16 pt-28 sm:pb-20 sm:pt-32"
        style={{ background: `linear-gradient(160deg, ${active.dark} 0%, #0d1520 100%)` }}
      >
        <div
          className="pointer-events-none absolute -top-20 left-1/2 h-[400px] w-[600px] -translate-x-1/2 rounded-full opacity-25 transition-all duration-700"
          style={{ background: `radial-gradient(ellipse, ${active.accent} 0%, transparent 70%)` }}
        />

        <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-8 transition-all duration-500" style={{ background: active.accent + "60" }} />
              <span className="text-[10px] font-black uppercase tracking-[0.3em] transition-colors duration-500" style={{ color: active.accent + "90" }}>
                The Bundles
              </span>
            </div>

            <h1 className="max-w-2xl text-[clamp(2rem,6vw,3.5rem)] font-black leading-[1.05] tracking-tight text-white">
              Complete routines.
              <br />
              <span
                className="bg-clip-text text-transparent transition-all duration-500"
                style={{ backgroundImage: `linear-gradient(90deg, ${active.accent} 0%, ${active.mid} 100%)` }}
              >
                One formula. Five forms.
              </span>
            </h1>

            <p className="mt-5 max-w-lg text-[13px] leading-relaxed text-white/40 sm:text-sm">
              Each bundle pairs the same active formula across every step of your routine — serum,
              cleanser, soap, facial lotion, and body lotion — so the same science works on every layer of your skin.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-12 grid grid-cols-3 gap-0 border-t border-white/[0.07] pt-8 sm:mt-14"
          >
            {[
              { v: "5", l: "Products per bundle" },
              { v: "5", l: "Bundles available" },
              { v: "20%", l: "Bundle saving" },
            ].map((s) => (
              <div key={s.l} className="pr-4 sm:pr-8">
                <div className="text-[clamp(1.4rem,4vw,2rem)] font-black transition-colors duration-500" style={{ color: active.accent }}>{s.v}</div>
                <div className="mt-1 text-[10px] font-bold uppercase tracking-[0.15em] text-white/30">{s.l}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Bundle layout */}
      <main className="bg-[#f8f9fb] py-10 sm:py-14">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="mb-8">
            <h2 className="text-[clamp(1.1rem,3vw,1.5rem)] font-black text-black">Choose your formula</h2>
            <p className="mt-1 text-[13px] text-black/40">Tap any bundle to see what's inside.</p>
          </div>

          {/* Split layout: active card left, others right */}
          <div className="flex flex-col gap-4 lg:flex-row lg:items-start">

            {/* Active card — left */}
            <div className="w-full lg:w-[45%] shrink-0" id="active-bundle">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeId}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                >
                  <BundleCard bundle={active} isActive={true} onClick={() => {}} />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Others — right, 2-col grid */}
            <div className="flex-1 grid grid-cols-2 gap-4 content-start">
              {others.map((bundle) => (
                <motion.div
                  key={bundle.id}
                  layout
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                >
                  <BundleCard bundle={bundle} isActive={false} 
                  onClick={() => {
  setActiveId(bundle.id);
  document.getElementById("active-bundle")?.scrollIntoView({ behavior: "smooth", block: "start" });
}} />
                </motion.div>
              ))}

              {/* Mix & Match CTA */}
              <motion.div
                layout
                className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-[#336699]/20 bg-white p-6 text-center"
              >
                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full text-xl" style={{ background: "#EEF4FA" }}>
                  ✦
                </div>
                <h3 className="mb-1.5 text-sm font-black text-black">Mix & Match</h3>
                <p className="mb-4 text-[11px] leading-relaxed text-black/45">
                  Browse individual products and build your own routine.
                </p>
                <Link
                  to="/products"
                  className="inline-flex items-center gap-1.5 rounded-full bg-[#336699] px-4 py-2 text-[10px] font-black uppercase tracking-[0.18em] text-white transition hover:bg-[#274c73]"
                >
                  Browse products
                </Link>
              </motion.div>
            </div>

          </div>
        </div>
      </main>

      {/* Science CTA */}
      <div className="bg-[#f8f9fb] pb-10 sm:pb-14">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="overflow-hidden rounded-2xl"
            style={{ background: "linear-gradient(135deg, #0d2035 0%, #1a4060 50%, #336699 100%)" }}
          >
            <div className="flex flex-col items-start gap-4 px-6 py-7 sm:flex-row sm:items-center sm:justify-between sm:px-8 sm:py-8">
              <div>
                <div className="mb-1 text-[10px] font-black uppercase tracking-[0.2em] text-white/40">Understand what's inside</div>
                <h3 className="text-lg font-black text-white sm:text-xl">Why does one formula work across five formats?</h3>
                <p className="mt-1 text-[12px] text-white/45 sm:text-[13px]">
                  The Hydro-Lock Molecule™ delivers the same active at depth — regardless of format.
                </p>
              </div>
              <Link
                to="/sciencetab"
                className="shrink-0 rounded-full bg-white px-6 py-3 text-[11px] font-black uppercase tracking-[0.18em] text-[#336699] transition hover:bg-[#A8D1E7] hover:text-[#0d2035]"
              >
                Read the science
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      <Footer />
    </>
  );
}
