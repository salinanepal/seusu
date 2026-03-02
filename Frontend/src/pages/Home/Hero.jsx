import { motion } from "framer-motion";

const stats = [
  { value: "30s", label: "Absorption time" },
  { value: "72hr", label: "Lasting hydration" },
  { value: "0%", label: "Inflammation risk" },
  { value: "100%", label: "Barrier safe" },
];

export default function Hero() {
  return (
    <section
      className="relative flex min-h-screen items-center overflow-hidden text-white"
      style={{
        background:
          "radial-gradient(circle at top, #336699 0%, #1a3f5c 55%, #0d2435 100%)",
      }}
    >
      {/* Soft circles */}
      <div className="pointer-events-none absolute -right-32 -top-40 h-[55vw] w-[55vw] max-h-175 max-w-175 rounded-full border border-[rgba(168,209,231,0.2)] bg-[rgba(168,209,231,0.12)]" />
      <div className="pointer-events-none absolute -bottom-40 -left-24 h-[40vw] w-[40vw] max-h-125 max-w-125 rounded-full border border-[rgba(142,124,195,0.2)] bg-[rgba(142,124,195,0.12)]" />

      <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-10 px-4 pb-16 pt-32 md:flex-row md:items-center">
        {/* Left side */}

        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <div className="max-w-xl space-y-6">
            <div className="flex items-center gap-4 text-[12px] font-semibold uppercase text-[#A8D1E7]">
              <span>SEUSU SKIN</span>
            </div>

            <div>
              <h1 className="text-4xl font-bold md:text-6xl">
                DEPTH
              </h1>
              <h2 className="text-4xl font-light md:text-6xl">
                REDEFINED
              </h2>
            </div>

            <p className="max-w-md text-sm leading-relaxed text-white/75 md:text-base">
              Most skincare evaporates before it works. Our proprietary{" "}
              <span className="font-semibold text-[#A8D1E7]">
                Hydro-Lock Molecule
              </span>{" "}
              changes physical tension on contact, carrying actives into the
              stratum corneum in under 30 seconds.
            </p>

            <div className="flex flex-wrap gap-3">
              <a
                href="/products"
                className="inline-block rounded-sm bg-white px-7 py-3 text-[12px] font-bold uppercase text-[#336699] transition hover:bg-[#A8D1E7]"
              >
                Explore Products
              </a>
            </div>
          </div>
        </motion.div>

        {/* Right side */}
        <div className="mt-8 flex-1 md:mt-0">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <div className="grid grid-cols-2 gap-6 border-t border-white/15 pt-8 text-xs uppercase text-white/70 md:grid-cols-4">
              {stats.map((item) => (
                <div key={item.label} className="space-y-1">
                  <div className="text-2xl font-bold md:text-3xl">
                    {item.value}
                  </div>
                  <div className="text-[12px]">{item.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
