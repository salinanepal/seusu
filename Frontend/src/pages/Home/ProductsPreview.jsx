const products = [
  {
    name: "Hydration Core",
    category: "Hydration",
    tag: "HYDRATION",
    desc: "Deep water-lock technology for long-lasting hydration.",
    icon: "💧",
    color: "#A8D1E7", 
  },
  {
    name: "Vitamin C Glow",
    category: "Brightening",
    tag: "GLOW",
    desc: "Stabilized Vitamin C for calm, even radiance.",
    icon: "☀️",
    color: "#E88B4D", 
  },
  {
    name: "Night Repair",
    category: "Retinol Complex",
    tag: "REPAIR",
    desc: "Gentle overnight resurfacing without harshness.",
    icon: "🌙",
    color: "#8E7CC3",
  },
  {
    name: "Calming Cica",
    category: "Soothing",
    tag: "CALM",
    desc: "Barrier-safe relief for redness and irritation.",
    icon: "🌿",
    color: "#8FBC8F", 
  },
  {
    name: "Peptide Firm",
    category: "Firming Complex",
    tag: "FIRM",
    desc: "Peptide science that supports visible firmness.",
    icon: "⚗️",
    color: "#D3D3D3", 
  },
];

export default function ProductsPreview() {
  return (
    <section className="bg-[#fafafa] py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-semibold text-black md:text-4xl">
            Five formulas. <span className="text-[#336699]">One system.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-md text-sm text-black/70">
            Each product type targets a specific skin need so you can build a simple,
            routine that's based on science.
          </p>
        </div>

        <div className="grid gap-8 xs:grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p) => (
            <article
              key={p.name}
              style={{ "--card-color": p.color }}
              className="group flex min-h-80 flex-col rounded-2xl border border-[#D2D2D2] bg-white p-7 text-left shadow-sm transition duration-200 hover:-translate-y-2 hover:shadow-lg hover:border-(--card-color) hover:bg-(--card-color)"
            >
              <div className="mb-6 flex items-start justify-between">
                <span className="text-4xl">{p.icon}</span>
                <span className="rounded-full bg-(--card-color) px-4 py-1.5 text-[12px] font-semibold text-black group-hover:bg-white">
                  {p.tag}
                </span>
              </div>
              <div className="mb-2 text-[12px] font-semibold uppercase text-black/70 group-hover:text-white/80">
                {p.category}
              </div>
              <h3 className="mb-4 text-2xl font-semibold text-black group-hover:text-white">
                {p.name}
              </h3>
              <p className="text-sm md:text-[15px] leading-relaxed text-black/70 group-hover:text-white">
                {p.desc}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
