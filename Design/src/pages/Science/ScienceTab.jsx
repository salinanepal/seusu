import { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { motion, AnimatePresence } from "framer-motion";

const ScrollStyle = () => (
  <style>{`
    .sci-no-scroll::-webkit-scrollbar { display: none; }
    .sci-no-scroll { -ms-overflow-style: none; scrollbar-width: none; }
  `}</style>
);

const actives = [
  {
    id: "hydro-lock",
    number: "00",
    name: "Hydro-Lock\nMolecule™",
    nameShort: "Hydro-Lock™",
    label: "Proprietary Technology",
    accent: "#336699",
    pale: "#EEF4FA",
    mid: "#A8D1E7",
    dark: "#0D2035",
    icon: "💧",
    photo: "https://images.pexels.com/photos/236968/pexels-photo-236968.jpeg",
    photoAlt: "Water droplet macro",
    tagline: "The bridge between surface and depth.",
    short: "A proprietary carrier that collapses surface tension on skin contact — driving actives past the barrier in under 30 seconds, not hours.",
    more: "Conventional formulas lose up to 80% of their actives to evaporation before real penetration occurs. The Hydro-Lock Molecule™ undergoes a phase-change at skin temperature (~33°C), shifting to a low-resistance penetration state. The result is structural replenishment — not surface hydration.",
    stats: [{ v: "< 30s", l: "Absorption" }, { v: "80%", l: "Lost in others" }],
  },
  {
    id: "retinol",
    number: "01",
    name: "Retinol",
    nameShort: "Retinol",
    label: "Vitamin A Derivative",
    accent: "#8E7CC3",
    pale: "#F3F0FA",
    mid: "#C4B8E8",
    dark: "#2A1F42",
    icon: "🌙",
    photo: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=800&q=85",
    photoAlt: "Night repair serum",
    tagline: "The most clinically validated anti-aging active.",
    short: "Converts to retinoic acid inside skin cells, accelerating turnover from ~28 to ~14 days. Smooths texture, stimulates collagen, reduces fine lines.",
    more: "Traditional retinol causes the infamous purge — redness and peeling that makes most people quit. SEUSU's encapsulated retinol releases only at the deeper epidermal layers, dramatically reducing irritation while keeping full efficacy.",
    stats: [{ v: "0.3%", l: "Concentration" }, { v: "14d", l: "Cell cycle" }],
  },
  {
    id: "vitamin-c",
    number: "02",
    name: "Vitamin C",
    nameShort: "Vitamin C",
    label: "L-Ascorbic Acid",
    accent: "#E88B4D",
    pale: "#FDF2EA",
    mid: "#F5C49A",
    dark: "#3D1E08",
    icon: "☀️",
    photo: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=800&q=85",
    photoAlt: "Vitamin C serum",
    tagline: "Brightening — only if it stays stable.",
    short: "Inhibits melanin production, neutralises UV free radicals, and drives collagen synthesis. The most powerful brightening active when delivered correctly.",
    more: "L-Ascorbic Acid oxidises within minutes in most formulas, turning brown and inactive before it penetrates. SEUSU stabilises it with Ferulic Acid at pH 2.5–3.0 — clinically proven to double antioxidant efficacy — then delivers it before degradation occurs.",
    stats: [{ v: "15%", l: "L-Ascorbic Acid" }, { v: "2×", l: "With Ferulic Acid" }],
  },
  {
    id: "peptides",
    number: "03",
    name: "Peptides",
    nameShort: "Peptides",
    label: "Signal Peptides",
    accent: "#7A7A8A",
    pale: "#F2F2F5",
    mid: "#C0C0CC",
    dark: "#1E1F2A",
    icon: "⚗️",
    photo: "https://images.unsplash.com/photo-1576086213369-97a306d36557?w=800&q=85",
    photoAlt: "Clinical peptides lab",
    tagline: "Amino acid chains that tell skin to rebuild.",
    short: "Matrixyl 3000 signals fibroblasts to produce collagen. Argireline relaxes contractions that deepen expression lines. Both require depth delivery to work.",
    more: "Peptides are hydrophilic — they cannot cross the lipid-based skin barrier unaided. Surface application is largely ineffective. The Hydro-Lock Molecule™ acts as a lipophilic shuttle, carrying them to the dermal layer where fibroblasts live.",
    stats: [{ v: "2", l: "Actives" }, { v: "Dermal", l: "Target layer" }],
  },
  {
    id: "cica",
    number: "04",
    name: "Centella\nAsiatica",
    nameShort: "Cica",
    label: "Cica / Tiger Grass",
    accent: "#4A8A5A",
    pale: "#EDF6EF",
    mid: "#A0CBA8",
    dark: "#0F2B1A",
    icon: "🌿",
    photo: "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=800&q=85",
    photoAlt: "Centella Asiatica leaf",
    tagline: "Ancient healing. Clinically validated.",
    short: "Madecassoside and Asiaticoside suppress inflammatory cytokines, rebuild the lipid barrier, and accelerate repair — at the dermal level, not just the surface.",
    more: "Surface anti-inflammatories only mask visible redness. Cica's triterpenoids, delivered deep via Hydro-Lock™, suppress IL-1β and TNF-α signalling at the source — addressing chronic inflammation rather than hiding it.",
    stats: [{ v: "4", l: "Triterpenoids" }, { v: "Dermal", l: "Depth" }],
  },
];

/*  Tab button  */
function TabBtn({ a, isSelected, onClick }) {
  return (
    <button
      onClick={onClick}
      className="relative flex shrink-0 flex-col gap-1.5 pb-4 pt-0 text-left transition-all duration-300"
      style={{ minWidth: "80px" }}
    >
      <div
        className="h-0.5 w-full rounded-full transition-all duration-300"
        style={{
          background: isSelected
            ? `linear-gradient(90deg, ${a.accent}, ${a.mid})`
            : "rgba(0,0,0,0.08)",
        }}
      />
      <span
        className="text-[9px] font-semibold uppercase tracking-[0.2em] transition-colors duration-200"
        style={{ color: isSelected ? a.accent : "rgba(0,0,0,0.3)" }}
      >
        {a.label}
      </span>
      <span
        className="whitespace-pre-line leading-[1.15] transition-all duration-200"
        style={{
          fontSize: "clamp(0.88rem, 2vw, 1.05rem)",
          fontWeight: isSelected ? 700 : 400,
          color: isSelected ? "#0d1117" : "rgba(0,0,0,0.38)",
        }}
      >
        {a.name}
      </span>
    </button>
  );
}

function Panel({ a }) {
  const [expanded, setExpanded] = useState(false);

  // Reset expanded when ingredient changes
  useEffect(() => { setExpanded(false); }, [a.id]);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={a.id}
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        className="grid grid-cols-1 gap-5 md:grid-cols-[1.1fr_1fr] md:gap-8 lg:gap-12"
      >
        {/*Photo card*/}
        <div
          className="relative overflow-hidden rounded-3xl"
          style={{ minHeight: "clamp(340px, 50vw, 520px)", background: a.dark }}
        >
          <img
            src={a.photo}
            alt={a.photoAlt}
            className="absolute inset-0 h-full w-full object-cover"
            style={{ mixBlendMode: "luminosity", opacity: 0.48 }}
          />
          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(150deg, ${a.accent}68 0%, ${a.dark}B0 45%, ${a.dark}F2 100%)`,
            }}
          />

          <div className="relative z-10 flex h-full flex-col justify-between p-7 sm:p-9">
            <div className="flex items-start justify-between">
              <span
                className="leading-none"
                style={{
                  fontSize: "clamp(4rem, 11vw, 6.5rem)",
                  fontWeight: 300,
                  color: "rgba(255,255,255,0.09)",
                  lineHeight: 1,
                }}
              >
                {a.number}
              </span>
              <div
                className="flex items-center gap-2 rounded-full px-3.5 py-1.5"
                style={{
                  background: "rgba(255,255,255,0.09)",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(255,255,255,0.14)",
                }}
              >
                <span className="text-sm font-light text-white/60">💧</span>
                <span className="text-[9px] font-semibold uppercase tracking-[0.18em] text-white/55">
                  Hydro-Lock™
                </span>
              </div>
            </div>

            <div>
              <div
                className="mb-3 inline-block rounded-full px-3 py-1 text-[9px] font-semibold uppercase tracking-[0.2em]"
                style={{
                  background: `${a.mid}28`,
                  border: `1px solid ${a.mid}45`,
                  color: a.mid,
                }}
              >
                {a.label}
              </div>

              <h2
                className="mb-5 whitespace-pre-line leading-[1.07] text-white"
                style={{ fontSize: "clamp(2rem, 5.5vw, 3rem)", fontWeight: 600 }}
              >
                {a.name}
              </h2>

              <div className="flex flex-wrap gap-2.5">
                {a.stats.map((s) => (
                  <div
                    key={s.l}
                    className="rounded-2xl px-4 py-2.5 text-center"
                    style={{
                      background: "rgba(255,255,255,0.09)",
                      backdropFilter: "blur(12px)",
                      border: "1px solid rgba(255,255,255,0.16)",
                    }}
                  >
                    <div
                      className="leading-none text-white"
                      style={{ fontSize: "clamp(1.1rem, 3vw, 1.6rem)", fontWeight: 700 }}
                    >
                      {s.v}
                    </div>
                    <div className="mt-0.5 text-[8px] font-semibold uppercase tracking-[0.15em] text-white/40">
                      {s.l}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ── Text panel ── */}
        <div className="flex flex-col justify-center px-1 py-3 md:py-6">
          <p
            className="mb-5 italic leading-snug"
            style={{ fontSize: "clamp(1.05rem, 2.5vw, 1.3rem)", fontWeight: 300, color: a.accent }}
          >
            "{a.tagline}"
          </p>

          <div
            className="mb-6 h-px"
            style={{ background: `linear-gradient(90deg, ${a.mid}90, transparent)` }}
          />

          <p className="mb-5 text-[14px] font-medium leading-[1.8] text-black/70">
            {a.short}
          </p>

          <AnimatePresence>
            {expanded && (
              <motion.p
                initial={{ opacity: 0, height: 0, marginBottom: 0 }}
                animate={{ opacity: 1, height: "auto", marginBottom: "20px" }}
                exit={{ opacity: 0, height: 0, marginBottom: 0 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="overflow-hidden text-[13px] leading-[1.9] text-black/45 sm:text-[13.5px]"
              >
                {a.more}
              </motion.p>
            )}
          </AnimatePresence>

          <button
            onClick={() => setExpanded((p) => !p)}
            className="mb-8 flex items-center gap-2.5 self-start transition-all duration-200"
            style={{ color: a.accent }}
          >
            <span className="text-[10px] font-semibold uppercase tracking-[0.2em]">
              {expanded ? "Show less" : "Read the science"}
            </span>
            <motion.div
              animate={{ rotate: expanded ? 45 : 0 }}
              transition={{ duration: 0.25 }}
              className="flex h-5 w-5 items-center justify-center rounded-full border text-sm leading-none"
              style={{ borderColor: `${a.accent}55`, color: a.accent }}
            >
              +
            </motion.div>
          </button>

          <div
            className="mt-auto flex items-end justify-between border-t pt-5"
            style={{ borderColor: "rgba(0,0,0,0.06)" }}
          >
            <span
              className="leading-none"
              style={{
                fontSize: "clamp(2.5rem, 7vw, 3.8rem)",
                fontWeight: 300,
                color: a.accent,
                opacity: 0.1,
              }}
            >
              {a.number}
            </span>
            <span className="text-[10px] font-medium text-black/25">{a.nameShort}</span>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

export default function ScienceTab() {
  const [searchParams] = useSearchParams();

  const [selected, setSelected] = useState(() => {
    const tab = searchParams.get("tab");
    return actives.find((a) => a.id === tab) ? tab : actives[0].id;
  });

  useEffect(() => {
    const tab = searchParams.get("tab");
    if (tab && actives.find((a) => a.id === tab)) {
      setSelected(tab);
      setTimeout(() => {
        document.getElementById("science-lookbook")?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 120);
    }
  }, [searchParams]);

  const current = actives.find((a) => a.id === selected);

  return (
    <>
      <ScrollStyle />
      <Navbar />

      {/*Hero*/}
      <section className="relative overflow-hidden bg-[#0d2035] pb-16 pt-28 sm:pb-20 sm:pt-32">
        <div
          className="pointer-events-none absolute -top-32 left-1/2 h-125 w-175 -translate-x-1/2 rounded-full opacity-20"
          style={{ background: "radial-gradient(ellipse, #336699 0%, transparent 70%)" }}
        />

        <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-8 bg-[#A8D1E7]/40" />
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#A8D1E7]/60">
                The Science
              </span>
            </div>

            <h1 className="max-w-2xl text-[clamp(2.2rem,6vw,3.8rem)] font-black leading-[1.05] tracking-tight text-white">
              What's inside —
              <br />
              <span
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: "linear-gradient(90deg, #A8D1E7 0%, #7bbdd8 100%)" }}
              >
                and why it works.
              </span>
            </h1>

            <p className="mt-5 max-w-lg text-[13px] leading-relaxed text-white/40 sm:text-sm">
              Every active in SEUSU was chosen for a specific reason and delivered
              differently than conventional skincare. This is the full explanation —
              the mechanism, the problem most brands ignore, and what we do instead.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="mt-12 grid grid-cols-3 gap-0 border-t border-white/[0.07] pt-8 sm:mt-14"
          >
            {[
              { v: "5", l: "Active ingredients" },
              { v: "< 30s", l: "Absorption time" },
              { v: "0%", l: "Inflammation risk" },
            ].map((s) => (
              <div key={s.l} className="pr-4 sm:pr-8">
                <div className="text-[clamp(1.4rem,4vw,2rem)] font-black text-white">{s.v}</div>
                <div className="mt-1 text-[10px] font-bold uppercase tracking-[0.15em] text-white/30">
                  {s.l}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Hydro-Lock banner ── */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="border-b border-[#336699]/10 bg-linear-to-r from-[#EEF4FA] to-[#f5f9fd]"
      >
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 py-4">
            <span className="hidden h-3 w-px bg-[#336699]/20 sm:block" />
            <p className="text-[12px] text-black/45">
              Every active below is carried by the{" "}
              <span className="font-bold text-[#336699]">Hydro-Lock Molecule™</span>{" "}
              — past the surface barrier in under 30 seconds. Tap any ingredient to read the full science.
            </p>
          </div>
        </div>
      </motion.div>

      {/* ── Lookbook tabs ── */}
      <main id="science-lookbook" className="scroll-mt-20 bg-[#f8f9fb] py-10 sm:py-14">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">

          <div className="sci-no-scroll -mx-5 mb-10 overflow-x-auto px-5 sm:mx-0 sm:px-0">
            <div
              className="flex gap-5 border-t sm:gap-8"
              style={{ borderColor: "rgba(0,0,0,0.07)", paddingBottom: "2px" }}
            >
              {actives.map((a) => (
                <TabBtn
                  key={a.id}
                  a={a}
                  isSelected={selected === a.id}
                  onClick={() => setSelected(a.id)}
                />
              ))}
            </div>
          </div>

          <Panel a={current} />
        </div>
      </main>

      {/* ── CTA ── */}
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
                <div className="mb-1 text-[10px] font-black uppercase tracking-[0.2em] text-white/40">
                  Next step
                </div>
                <h3 className="text-lg font-black text-white sm:text-xl">
                  See the actives in action.
                </h3>
                <p className="mt-1 text-[12px] text-white/45 sm:text-[13px]">
                  Each formula combines these ingredients around a specific skin need.
                </p>
              </div>
              <Link
                to="/products"
                className="shrink-0 rounded-full bg-white px-6 py-3 text-[11px] font-black uppercase tracking-[0.18em] text-[#336699] transition hover:bg-[#A8D1E7] hover:text-[#0d2035]"
              >
                Browse products
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      <Footer />
    </>
  );
}
