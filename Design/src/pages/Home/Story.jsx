import { motion } from "framer-motion";
import StoryImage from "../../assets/Images/Story.png";

const pillars = [
  { icon: "🔬", label: "Science-first formulas" },
  { icon: "🌿", label: "K-Beauty inspired ritual" },
  { icon: "✦", label: "Airless pump packaging" },
];

export default function Story() {
  return (
    <section className="relative overflow-hidden bg-[#0d2035] py-20 text-white md:py-28">
      {/* Ambient glow */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-1/2 bg-linear-to-r from-[#336699]/10 to-transparent" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-64 w-64 rounded-full bg-[#8E7CC3]/10 blur-3xl" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
          <div className="flex flex-col gap-12 md:flex-row md:items-center md:gap-16">

            {/* Text */}
            <div className="md:w-7/12">
              <div className="mb-3 flex items-center gap-3">
                <span className="block h-px w-6 bg-[#A8D1E7]/40" />
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#A8D1E7]/60">
                  Brand Story
                </span>
              </div>

              <h2 className="mb-6 text-[clamp(1.75rem,4vw,3rem)] font-bold leading-tight">
                Built around a{" "}
                <span className="text-[#A8D1E7]">frustration</span>
              </h2>

              <div className="mb-8 space-y-4 text-[13px] leading-[1.9] text-white/55 sm:text-sm">
                <p>
                  SEUSU SKIN was founded around a simple frustration: most skincare evaporates
                  before it reaches where it needs to work. We call this the "Evaporation Gap".
                </p>
                <p>
                  Our Hydro-Lock Molecule™ is designed to cross the barrier calmly, carrying
                  actives into the deeper layers of the stratum corneum without inflaming or
                  overwhelming your skin.
                </p>
                <p>
                  From frosted glass to soft-touch finishes and airless pumps, every detail
                  reflects a modern, K-Beauty-inspired, science-first ritual.
                </p>
              </div>

              {/* Pillars */}
              <div className="flex flex-wrap gap-3">
                {pillars.map((p) => (
                  <div
                    key={p.label}
                    className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2.5 text-[11px] font-semibold backdrop-blur-sm"
                  >
                    <span>{p.icon}</span>
                    <span className="text-white/70">{p.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Image */}
            <div className="md:w-5/12">
              <div className="relative overflow-hidden rounded-3xl shadow-[0_24px_80px_rgba(0,0,0,0.4)]">
                <img
                  src={StoryImage}
                  alt="SEUSU story"
                  className="h-full w-full object-cover"
                />
                {/* Corner accent */}
                <div className="absolute right-4 top-4 flex items-center gap-2 rounded-xl bg-black/40 px-3 py-2 backdrop-blur-md">
                  <div className="h-1.5 w-1.5 rounded-full bg-[#A8D1E7]" />
                  <span className="text-[10px] font-bold uppercase tracking-wider text-white/80">Est. 2024</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
