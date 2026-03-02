import { motion } from "framer-motion";
import ScienceImage from "../../assets/Images/Science.png";

export default function Science() {
  return (
    <section className="bg-white py-16">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="mx-auto max-w-6xl px-4 md:grid md:grid-cols-2 md:items-center md:gap-10">
          {/* Image */}
          <div className="mb-6 flex justify-center md:mb-0">
            <div className="relative w-full max-w-sm overflow-hidden rounded-2xl bg-[#f5f7fb]">
              <img
                src={ScienceImage}
                alt="SEUSU science"
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          {/* Text */}
          <div className="space-y-6 md:space-y-8">
            <h2 className="text-3xl font-semibold text-black md:text-4xl">
              Solving the{" "}
              <span className="text-[#336699]">Evaporation Gap</span>
            </h2>
            <p className="max-w-3xl text-sm leading-relaxed">
              Most topical skincare is lost to evaporation before it can cross
              the skin&apos;s natural barrier. SEUSU SKIN was created to close
              this “Evaporation Gap”.
            </p>
            <p className="max-w-3xl text-sm leading-relaxed">
              Our proprietary Hydro-Lock Molecule changes its physical tension
              upon contact with the skin, allowing actives to move from the
              surface into the deeper layers of the stratum corneum in under 30
              seconds—without triggering inflammation.
            </p>
            <p className="max-w-3xl text-sm leading-relaxed">
              It is not just moisture; it is a more permanent structural
              replenishment of the skin barrier.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
