import { motion} from "framer-motion";
import StoryImage from "../../assets/Images/Story.png"; 

export default function Story() {
  return (
    <section className="bg-white py-16 text-black">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
      <div className="mx-auto max-w-6xl px-4 md:grid md:grid-cols-2 md:items-center md:gap-10">
        {/* Text left */}
        <div className="space-y-6">
          <div className="flex items-center gap-4 text-[12px] font-semibold uppercase text-[#A8D1E7]">
            <span className="text-[#336699] text-xl">Brand story</span>
          </div>
          
          <p className="max-w-3xl text-sm leading-relaxed">
            SEUSU SKIN was founded around a simple frustration: most skincare
            evaporates before it reaches where it needs to work. We call this
            the “Evaporation Gap”.
          </p>
          <p className="max-w-3xl text-sm leading-relaxed">
            Our Hydro-Lock Molecule is designed to cross the barrier calmly,
            carrying actives into the deeper layers of the stratum corneum
            without inflaming or overwhelming your skin.
          </p>
          <p className="max-w-3xl text-sm leading-relaxed">
            From frosted glass to soft-touch finishes and airless pumps, every
            detail is built for a modern, K-Beauty-inspired, science-first
            ritual.
          </p>
        </div>

        {/* Image right */}
        <div className="mt-8 flex justify-center md:mt-0">
          <div className="relative w-full max-w-sm overflow-hidden rounded-2xl bg-[#f5f7fb]">
            <img
              src={StoryImage}
              alt="SEUSU story"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
      </motion.div>
    </section>
  );
}
