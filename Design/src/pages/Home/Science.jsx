import { motion } from "framer-motion";
import ScienceImage from "../../assets/Images/Science.png";

const highlights = [
  { label: "Evaporation Gap", desc: "The problem every other brand ignores." },
  { label: "30-Second Delivery", desc: "Actives in the stratum corneum, fast." },
  { label: "Zero Inflammation", desc: "Barrier-safe by molecular design." },
];

export default function Science() {
  return (
    <section className="relative overflow-hidden bg-[#f7f9fb] py-20 md:py-28">
      
      <div className="pointer-events-none absolute right-0 top-0 h-[60%] w-[40%] bg-linear-to-bl from-[#A8D1E7]/10 to-transparent" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="flex flex-col gap-12 md:flex-row md:items-center md:gap-16">

            {/* Image */}
            <div className="md:w-5/12">
              <div className="relative overflow-hidden rounded-3xl bg-[#e8eff6] shadow-[0_20px_60px_rgba(51,102,153,0.12)]">
                <img
                  src={ScienceImage}
                  alt="SEUSU science"
                  className="h-full w-full object-cover"
                />
                
                <div className="absolute bottom-5 left-5 rounded-xl border border-white/30 bg-white/80 px-4 py-3 backdrop-blur-md">
                  <div className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#336699]">Hydro-Lock™</div>
                  <div className="text-[11px] text-black/60">Proprietary molecule</div>
                </div>
              </div>
            </div>

            {/* Text */}
            <div className="md:w-7/12">
              <div className="mb-3 flex items-center gap-3">
                <span className="block h-px w-6 bg-[#336699]/40" />
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#336699]/70">The Science</span>
              </div>

              <h2 className="mb-6 text-[clamp(1.75rem,4vw,3rem)] font-bold leading-tight text-black">
                Solving the{" "}
                <span className="text-[#336699]">Evaporation Gap</span>
              </h2>

              <div className="mb-8 space-y-4 text-[13px] leading-[1.9] text-black/60 sm:text-sm">
                <p>
                  Most topical skincare is lost to evaporation before it can cross the skin's
                  natural barrier. SEUSU was created to close this gap.
                </p>
                <p>
                  Our Hydro-Lock Molecule™ changes its physical tension upon contact, allowing
                  actives to move from the surface into the deeper layers of the stratum corneum
                  in under 30 seconds — without triggering inflammation.
                </p>
              </div>

              {/* Highlight pills */}
              <div className="space-y-3">
                {highlights.map((h) => (
                  <div
                    key={h.label}
                    className="flex items-center gap-4 rounded-xl border border-[#336699]/10 bg-white px-5 py-4 shadow-sm"
                  >
                    <div className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#336699]" />
                    <div>
                      <div className="text-[12px] font-bold text-black">{h.label}</div>
                      <div className="text-[11px] text-black/50">{h.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
