import { useState } from "react";
import { Link } from "react-router-dom";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { motion } from "framer-motion";
import Serum from "../../assets/Images/Serum.png";
import BodyLotion from "../../assets/Images/BodyLotion.png";
import FaceLotion from "../../assets/Images/FaceLotion.png";
import FaceWash from "../../assets/Images/FaceWash.png";
import Soap from "../../assets/Images/Soap.png";

const productTypes = [
  {
    id: "serum",
    label: "Serums",
    image: Serum,
    color: "#A8D1E7",
    bg: "#EEF6FA",
    intro:
      "Lightweight daily treatments that sit close to the skin and target specific concerns.",
    howToUse:
      "Apply a few drops to clean skin morning and/or evening, before moisturizer.",
    skinTypes: "Normal, dry, combination, oily, and dull or uneven tone.",
    focus:
      "Concentrated actives for hydration, brightness, texture, comfort, and firmness.",
  },
  {
    id: "face-wash",
    label: "Face Wash",
    image: FaceWash,
    color: "#7BC4A0",
    bg: "#EDF7F2",
    intro:
      "Everyday cleansers that remove buildup while keeping the skin feeling comfortable.",
    howToUse:
      "Massage onto damp skin for 30-60 seconds, then rinse. Morning and night.",
    skinTypes: "All skin types, including sensitive.",
    focus:
      "Lifts away sunscreen, light makeup, and impurities without tightness.",
  },
  {
    id: "soap",
    label: "Soap Bars",
    image: Soap,
    color: "#C9B8A8",
    bg: "#F7F4F1",
    intro:
      "Solid cleansing bars for hands and body, with a creamy, low-residue lather.",
    howToUse:
      "Work into a lather on wet skin, cleanse, then rinse well and pat dry.",
    skinTypes: "Normal and combination body skin.",
    focus: "Cleanses without the stripped feeling of traditional bar soaps.",
  },
  {
    id: "body-lotion",
    label: "Body Lotions",
    image: BodyLotion,
    color: "#E88B4D",
    bg: "#FDF2EA",
    intro:
      "Lotions for arms, legs, and body that absorb quickly with a soft, non-greasy finish.",
    howToUse:
      "Smooth onto clean, dry skin after showering or whenever skin feels dry.",
    skinTypes: "Normal to dry body skin.",
    focus:
      "Maintains soft, comfortable skin and supports the skin's moisture barrier.",
  },
  {
    id: "face-lotion",
    label: "Face Lotions",
    image: FaceLotion,
    color: "#8E7CC3",
    bg: "#F3F0FA",
    intro:
      "Daily moisturizers that lock in your routine and keep skin cushioned with hydration.",
    howToUse:
      "Use after serums, morning and evening. Follow with sunscreen in the daytime.",
    skinTypes: "Normal, combination, and slightly dry skin.",
    focus: "Seals in hydration and layers well under sunscreen or makeup.",
  },
];

const detailLabels = [
  { key: "howToUse", title: "How to use" },
  { key: "skinTypes", title: "Skin types" },
  { key: "focus", title: "What it targets" },

];

export default function Products() {
  return (
    <>
      <Navbar />

      {/* Hero banner */}
      <section className="bg-[#0d2035] pt-28 pb-10">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="flex items-center gap-3">
            <span className="h-px w-6 bg-white/30" />
            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-white/50">
              Our Products
            </span>
          </div>
          <h1 className="mt-4 text-[clamp(2rem,5vw,3.5rem)] font-bold text-white leading-tight">
            Every formula, <span className="text-[#A8D1E7]">explained.</span>
          </h1>
          <p className="mt-3 max-w-lg text-sm text-white/40">
            Five product types, each engineered around a specific skin need and
            our Hydro-Lock Molecule™.
          </p>
        </div>
      </section>

      {/* Nav */}
      <div className="sticky top-15 z-30 border-b border-black/[0.07] bg-white/90 backdrop-blur-md">
        <div className="mx-auto max-w-6xl overflow-x-auto px-5 sm:px-8">
          <div className="flex gap-1 py-2">
            {productTypes.map((p) => (
              <a
                key={p.id}
                href={`#${p.id}`}
                className="shrink-0 rounded-full px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.12em] text-black/50 transition hover:bg-[#336699]/10 hover:text-[#336699]"
              >
                {p.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Product section*/}
      <main className="relative bg-[#fafafa] py-12">
        <div className="pointer-events-none mx-auto max-w-4xl px-10 ">
          <div className="space-y-10">
            {productTypes.map((p, index) => (
              <motion.section
                key={p.id}
                id={p.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration:0.7, ease: [0.22, 1, 0.36, 1] }}
                className="overflow-hidden rounded-3xl border border-black/6 bg-white shadow-sm scroll-mt-32"
              >
                
                <div className="flex flex-col md:flex-row">
                  
                  {/* Image panel */}
                  <div
                    className="flex items-center justify-center p-8 md:w-2/5 md:p-12"
                    style={{ backgroundColor: p.bg }}
                  >
                    <img
                      src={p.image}
                      alt={p.label}
                      className="h-48 w-auto object-contain drop-shadow-lg md:h-56"
                    />
                    
                  </div>

                  {/* Content panel */}
                  <div className="flex-1 p-7 md:p-10">
                    {/* Label */}
                    <div
                      className="mb-1 text-[10px] font-bold uppercase tracking-[0.2em]"
                      style={{ color: p.color }}
                    >
                      {p.label}
                    </div>

                    {/* Color accent bar */}
                    <div
                      className="mb-4 h-0.5 w-10 rounded-full"
                      style={{ backgroundColor: p.color }}
                    />

                    <p className="mb-7 text-[13px] leading-relaxed text-black/60 sm:text-sm">
                      {p.intro}
                    </p>

                    {/* Details grid */}
                    <div className="grid gap-5 sm:grid-cols-3">
                      {detailLabels.map(({ key, title }) => (
                        <div key={key}>
                          <div
                            className="mb-1.5 text-[10px] font-bold uppercase tracking-[0.15em]"
                            style={{ color: p.color }}
                          >
                            {title}
                          </div>
                          <p className="text-[12px] leading-relaxed text-black/55">
                            {p[key]}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.section>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
