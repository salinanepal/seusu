import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const products = [
  {
    name: "Hydration Core",
    category: "Deep Hydration",
    tag: "Hydration",
    desc: "Water-lock technology that delivers lasting moisture to every layer.",
    icon: "💧",
    accent: "#A8D1E7",
    bg: "#EEF6FA",
    scienceId: "hydro-lock",
  },
  {
    name: "Vitamin C Glow",
    category: "Brightening",
    tag: "Glow",
    desc: "Stabilized Vitamin C for calm, even radiance without irritation.",
    icon: "☀️",
    accent: "#E88B4D",
    bg: "#FDF2EA",
    scienceId: "vitamin-c",
  },
  {
    name: "Night Repair",
    category: "Retinol Complex",
    tag: "Repair",
    desc: "Gentle overnight resurfacing — effective without harshness.",
    icon: "🌙",
    accent: "#8E7CC3",
    bg: "#F3F0FA",
    scienceId: "retinol",
  },
  {
    name: "Calming Cica",
    category: "Barrier Soothing",
    tag: "Calm",
    desc: "Barrier-safe relief for redness, sensitivity, and irritation.",
    icon: "🌿",
    accent: "#5A9B6A",
    bg: "#EDF6EF",
    scienceId: "cica",
  },
  {
    name: "Peptide Firm",
    category: "Firming Complex",
    tag: "Firm",
    desc: "Peptide science that supports visible firmness over time.",
    icon: "⚗️",
    accent: "#8A8A9A",
    bg: "#F2F2F5",
    scienceId: "peptides",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};
const card = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function ProductsPreview() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        {/* Header */}
        <motion.div
          className="mb-14 flex flex-col gap-4 md:flex-row md:items-end md:justify-between"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <div>
            <div className="mb-3 flex items-center gap-3">
              <span className="block h-px w-6 bg-[#336699]/40" />
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#336699]/70">
                The System
              </span>
            </div>
            <h2 className="text-[clamp(1.75rem,4vw,3rem)] font-bold leading-tight text-black">
              Five formulas. <span className="text-[#336699]">One system.</span>
            </h2>
          </div>
          <p className="max-w-xs text-[13px] leading-relaxed text-black/50 md:text-right">
            Each product targets a specific skin need — stack them or use them solo.
          </p>
        </motion.div>

        {/* Cards grid */}
        <motion.div
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          {products.map((p) => (
            <motion.article
              key={p.name}
              variants={card}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-black/6 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_48px_rgba(0,0,0,0.08)]"
            >
              {/* Colored top bar */}
              <div className="h-2 w-full" style={{ backgroundColor: p.accent }} />

              <div className="flex flex-1 flex-col p-6">
                {/* Icon + tag */}
                <div className="mb-5 flex items-center justify-between">
                  <div
                    className="flex h-12 w-12 items-center justify-center rounded-xl text-2xl"
                    style={{ backgroundColor: p.bg }}
                  >
                    {p.icon}
                  </div>
                  <span
                    className="rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-[0.15em]"
                    style={{ backgroundColor: p.bg, color: p.accent }}
                  >
                    {p.tag}
                  </span>
                </div>

                <div
                  className="mb-1 text-[10px] font-bold uppercase tracking-[0.15em]"
                  style={{ color: p.accent }}
                >
                  {p.category}
                </div>
                <h3 className="mb-3 text-[1.2rem] font-bold leading-tight text-black">
                  {p.name}
                </h3>
                <p className="text-[13px] leading-relaxed text-black/55">{p.desc}</p>

                <Link
                  to={`/sciencetab?tab=${p.scienceId}`}
                  className="mt-auto flex items-center gap-1.5 pt-5 text-[11px] font-semibold uppercase tracking-[0.12em] transition-all duration-300 group-hover:gap-2.5"
                  style={{ color: p.accent }}
                >
                  Learn more <span>→</span>
                </Link>
              </div>
            </motion.article>
          ))}

          {/* CTA card */}
          <motion.div
            variants={card}
            className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-[#336699]/20 bg-[#f5f9fd] p-8 text-center"
          >
            <div className="mb-4 text-3xl">✦</div>
            <p className="mb-5 text-sm font-medium text-black/60 leading-relaxed">
              Build a routine around your skin's real needs.
            </p>
            <Link
              to="/sciencetab"
              className="inline-flex items-center gap-2 rounded-full bg-[#336699] px-6 py-3 text-[11px] font-bold uppercase tracking-[0.15em] text-white transition hover:bg-[#274c73]"
            >
              Browse all
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
