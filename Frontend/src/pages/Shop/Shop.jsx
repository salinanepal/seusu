import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
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
      "Lightweight serums that target hydration, brightness, repair, calmness, and firmness.",
    price: "Rs. 1,800",
    image: Serum,
    badge: "Best for targeted care",
  },
  {
    id: "face-wash",
    name: "Gentle Face Wash",
    description:
      "Everyday cleanser that removes buildup without leaving the skin tight.",
    price: "Rs. 1,200",
    image: FaceWash,
    badge: "Daily essential",
  },
  {
    id: "soap",
    name: "Comfort Skin Soap Bar",
    description:
      "Creamy bar soap for hands and body that rinses clean but feels soft.",
    price: "Rs. 450",
    image: Soap,
    badge: "For hands & body",
  },
  {
    id: "body-lotion",
    name: "Daily Body Lotion",
    description:
      "Fast-absorbing body lotion that keeps skin comfortable all day.",
    price: "Rs. 1,400",
    image: BodyLotion,
    badge: "All-over hydration",
  },
  {
    id: "face-lotion",
    name: "Balancing Face Lotion",
    description:
      "Everyday facial moisturizer that cushions the skin with hydration.",
    price: "Rs. 1,600",
    image: FaceLotion,
    badge: "Everyday face cream",
  },
];

export default function Shop() {
  return (
    <>
      <Navbar />

      <section className="bg-[#336699] pt-30 pb-6">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mb-3 flex items-center justify-center gap-4 text-[12px] font-semibold uppercase text-white">
            <span className="h-px w-10 bg-white" />
            <span>Bring the system home</span>
            <span className="h-px w-10 bg-white" />
          </div>
          <div className="flex items-center justify-center gap-4 text-[12px] font-semibold text-white">
            
            <span>Choose the pieces that fit your routine today. Add on as your skin
              and lifestyle change.</span>
            
          </div>
        </div>
      </section>

      <main className="bg-[#fafafa] py-16">
        <div className="mx-auto max-w-6xl px-4">

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {shopProducts.map((p) => (
              <article
                key={p.id}
                className="flex flex-col overflow-hidden rounded-2xl border border-[#E3E3E3] bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <div className="relative h-52 w-full overflow-hidden bg-[#f5f7fb]">
                  <img
                    src={p.image}
                    alt={p.name}
                    className="h-full w-full object-cover"
                  />
                </div>

                <div className="flex flex-1 flex-col p-5">
                  {p.badge && (
                    <div className="mb-2 inline-flex items-center rounded-full bg-[#f0f3fb] px-3 py-1 text-[12px] font-semibold uppercase text-[#336699]">
                      {p.badge}
                    </div>
                  )}

                  <h2 className="mb-2 text-[1.1rem] font-semibold text-black">
                    {p.name}
                  </h2>
                  <p className="mb-4 text-sm text-black/75">
                    {p.description}
                  </p>

                  <div className="mt-auto flex items-center justify-between">
                    <span className="text-[0.95rem] font-semibold text-black">
                      {p.price}
                    </span>
                    <button className="rounded-full bg-[#336699] px-5 py-2 text-[12px] font-semibold uppercase text-white transition hover:bg-[#274c73]">
                      Buy now
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
