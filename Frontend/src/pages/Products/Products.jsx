import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
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
    intro:
      "Lightweight daily treatments that sit close to the skin and target specific concerns.",
    howToUse:
      "Use in the morning and/or evening after cleansing. Apply a few drops to clean skin before moisturizer.",
    skinTypes: "Normal, dry, combination, oily, and dull or uneven tone.",
    focus:
      "Delivers concentrated actives to help with hydration, brightness, texture, comfort, and firmness.",
  },
  {
    id: "face-wash",
    label: "Face Wash",
    image: FaceWash,
    intro:
      "Everyday cleansers that remove buildup while keeping the skin feeling comfortable.",
    howToUse:
      "Massage onto damp skin for 30-60 seconds, then rinse with lukewarm water. Use morning and night.",
    skinTypes: "All skin types, including sensitive.",
    focus:
      "Lifts away sunscreen, light makeup, and daily impurities without leaving the skin tight or squeaky.",
  },
  {
    id: "soap",
    label: "Soap Bars",
    image: Soap,
    intro:
      "Solid cleansing bars designed for hands and body, with a creamy, low-residue lather.",
    howToUse:
      "Work into a lather on wet hands or body, cleanse the skin, then rinse well and pat dry.",
    skinTypes: "Normal and combination body skin.",
    focus:
      "Cleanses without the harsh, stripped feeling of traditional bar soaps so skin feels clean but comfortable.",
  },
  {
    id: "body-lotion",
    label: "Body Lotions",
    image: BodyLotion,
    intro:
      "Lotions for arms, legs, and body that absorb quickly and leave a soft, non-greasy finish.",
    howToUse:
      "Smooth onto clean, dry skin after showering or whenever skin feels dry or tight.",
    skinTypes: "Normal to dry body skin.",
    focus:
      "Helps maintain soft, comfortable skin throughout the day and supports the skin's moisture barrier.",
  },
  {
    id: "face-lotion",
    label: "Face Lotions",
    image: FaceLotion,
    intro:
      "Daily moisturizers that lock in your routine and keep the skin cushioned with hydration.",
    howToUse:
      "Use after serums, morning and evening. In the daytime, follow with sunscreen.",
    skinTypes: "Normal, combination, and slightly dry skin.",
    focus:
      "Seals in hydration, supports a calm, balanced-looking complexion, and layers well under sunscreen or makeup.",
  },
];

export default function Products() {
  return (
    <>
      <Navbar />
      <section className="bg-[#336699] pt-30 pb-5">
        <div className="mx-auto max-w-6xl px-4">
          <div className="flex items-center justify-center gap-4 text-[12px] font-semibold uppercase text-white">
            <span className="h-px w-10 bg-white" />
            <span>Browse through our products</span>
            <span className="h-px w-10 bg-white" />
          </div>
        </div>
      </section>

      {/* Grey area with product cards */}
      <main className="bg-[#fafafa] py-16">
        <div className="mx-auto max-w-6xl px-4">
          <div className="space-y-12">
            {productTypes.map((p, index) => (
              <section
                key={p.id}
                id={p.id}
                className="grid items-center gap-8 md:grid-cols-2"
              >
                {/* Image */}
                <div className={index % 2 === 1 ? "md:order-2" : ""}>
                  <div className="flex justify-center">
                    <div className="relative w-full max-w-md overflow-hidden rounded-2xl bg-[#f5f7fb]">
                      <img
                        src={p.image}
                        alt={p.label}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </div>
                </div>

                {/* Description */}
                <div className={index % 2 === 1 ? "md:order-1" : ""}>
                  <div className="mb-2 text-[14px] font-semibold uppercase text-[#336699]">
                    {p.label}
                  </div>
                  <p className="mb-4 text-sm text-black/75">{p.intro}</p>

                  <div className="grid grid-cols-3 gap-4 text-sm text-black/75">
                    <div>
                      <h3 className="mb-1 text-xs font-semibold uppercase text-[#336699]">
                        How to use
                      </h3>
                      <p>{p.howToUse}</p>
                    </div>
                    <div>
                      <h3 className="mb-1 text-xs font-semibold uppercase text-[#336699]">
                        Skin types
                      </h3>
                      <p>{p.skinTypes}</p>
                    </div>
                    <div>
                      <h3 className="mb-1 text-xs font-semibold uppercase text-[#336699]">
                        What it focuses on
                      </h3>
                      <p>{p.focus}</p>
                    </div>
                  </div>
                </div>
              </section>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
