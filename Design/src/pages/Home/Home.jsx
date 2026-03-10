import Navbar from "../../components/Navbar.jsx";
import Footer from "../../components/Footer.jsx";
import Hero from "./Hero.jsx";
import Science from "./Science.jsx";
import ProductsPreview from "./ProductsPreview.jsx";
import Story from "./Story.jsx";

export default function Home() {
  return (
    <div className="bg-[#fafafa] text-black">
      <Navbar />
      <main className="pt-20">
        <Hero />
        <Science />
        <ProductsPreview />
        <Story />
      </main>
      <Footer />
    </div>
  );
}
