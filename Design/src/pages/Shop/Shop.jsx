import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { motion } from "framer-motion";
import Serum from "../../assets/Images/Serum.png";
import BodyLotion from "../../assets/Images/BodyLotion.png";
import FaceLotion from "../../assets/Images/FaceLotion.png";
import FaceWash from "../../assets/Images/FaceWash.png";
import Soap from "../../assets/Images/Soap.png";

const shopProducts = [
  {
    id: "serum",
    name: "Daily Treatment Serums",
    description:
      "Target hydration, brightness, repair, calmness, and firmness with precision.",
    price: "Rs. 1,800",
    image: Serum,
    badge: "Best Seller",
    bg: "#EEF6FA",
    accent: "#336699",
  },
  {
    id: "face-wash",
    name: "Gentle Face Wash",
    description:
      "Remove buildup every day without leaving the skin tight or stripped.",
    price: "Rs. 1,200",
    image: FaceWash,
    badge: "Daily Essential",
    bg: "#EDF7F2",
    accent: "#5A9B6A",
  },
  {
    id: "soap",
    name: "Comfort Skin Soap Bar",
    description:
      "A creamy bar soap for hands and body that rinses clean but feels soft.",
    price: "Rs. 450",
    image: Soap,
    badge: "For Hands & Body",
    bg: "#F7F4F1",
    accent: "#9B8B7A",
  },
  {
    id: "body-lotion",
    name: "Daily Body Lotion",
    description:
      "Fast-absorbing formula that keeps your skin comfortable all day long.",
    price: "Rs. 1,400",
    image: BodyLotion,
    badge: "All-Over Hydration",
    bg: "#FDF2EA",
    accent: "#C4703D",
  },
  {
    id: "face-lotion",
    name: "Balancing Face Lotion",
    description:
      "Lock in your skincare routine with everyday cushioning hydration.",
    price: "Rs. 1,600",
    image: FaceLotion,
    badge: "Everyday Moisturiser",
    bg: "#F3F0FA",
    accent: "#7060AA",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07 } },
};
const item = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Shop() {
  return (
    <>
      <Navbar />

      {/* Banner */}
      <section className="bg-[#0d2035] pt-28 pb-10">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="flex items-center gap-3">
            <span className="h-px w-6 bg-white/30" />
            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-white/50">
              Shop
            </span>
          </div>
          <h1 className="mt-4 text-[clamp(2rem,5vw,3.5rem)] font-bold leading-tight text-white">
            Bring the system <span className="text-[#A8D1E7]">home.</span>
          </h1>
          <p className="mt-3 max-w-md text-[13px] text-white/40">
            Choose what fits your routine today. Add on as your skin and
            lifestyle evolve.
          </p>
        </div>
      </section>

      {/* Products */}
      <main className="bg-[#fafafa] py-14">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <motion.div
            className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
            variants={container}
            initial="hidden"
            animate="show"
          >
            {shopProducts.map((p) => (
              <motion.article
                key={p.id}
                variants={item}
                className="group flex flex-col overflow-hidden rounded-2xl border border-black/6 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_48px_rgba(0,0,0,0.09)]"
              >
                {/* Image area */}
                <div
                  className="relative flex h-52 items-center justify-center overflow-hidden"
                  style={{ backgroundColor: p.bg }}
                >
                  <img
                    src={p.image}
                    alt={p.name}
                    className="h-36 w-auto object-contain drop-shadow-md transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Badge */}
                  <div
                    className="absolute left-4 top-4 rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-white"
                    style={{ backgroundColor: p.accent }}
                  >
                    {p.badge}
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col p-6">
                  <h2 className="mb-2 text-[1rem] font-bold leading-snug text-black">
                    {p.name}
                  </h2>
                  <p className="mb-5 text-[12px] leading-relaxed text-black/55">
                    {p.description}
                  </p>

                  {/* <div className="mt-auto flex items-center justify-between gap-3">
                    <span className="text-lg font-bold text-black">
                      {p.price}
                    </span>
                    <a href="/login">
                      <button
                        className="rounded-full px-5 py-2.5 text-[11px] font-bold uppercase tracking-[0.12em] text-white transition-all duration-200 hover:opacity-90 active:scale-95"
                        style={{ backgroundColor: p.accent }}
                      >
                        Add to cart
                      </button>
                    </a>
                  </div> */}
                </div>
              </motion.article>
            ))}

            {/* Bundle CTA */}
            <motion.div
              variants={item}
              className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-[#336699]/25 bg-[#f5f9fd] p-8 text-center"
            >
              <div className="mb-3 text-3xl">✦</div>
              <h3 className="mb-2 text-base font-bold text-black">
                Try Our Bundles
              </h3>
              <p className="mb-5 text-[12px] leading-relaxed text-black/50">
                Get the full system at a discount. 
              </p>
              <button className="rounded-full border border-[#336699] px-6 py-2.5 text-[11px] font-bold uppercase tracking-[0.12em] text-[#336699] transition hover:bg-[#336699] hover:text-white">
                View bundles →
              </button>
            </motion.div>
          </motion.div>

          {/* Trust row */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 border-t border-black/6 pt-10 text-[11px] font-semibold uppercase tracking-[0.15em] text-black/35">
            <span>🚚 Free shipping over Rs. 3,000</span>
            <span>🔄 30-day returns</span>
            <span>🔬 Science-backed formulas</span>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
