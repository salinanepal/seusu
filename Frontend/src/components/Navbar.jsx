import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Logo from "../assets/Images/Logo.png";

const links = [
  { to: "/products", label: "Products" },
  { to: "/contact", label: "Contact" },
];

const productDropdown = [
  { to: "/products#serum", label: "Serums" },
  { to: "/products#face-wash", label: "Face Wash" },
  { to: "/products#soap", label: "Soap Bars" },
  { to: "/products#body-lotion", label: "Body Lotions" },
  { to: "/products#face-lotion", label: "Face Lotions" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const baseLink = "text-[12px] font-semibold uppercase transition-colors";
  const mainColor = "#336699";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all ${
        scrolled ? "bg-white/95 backdrop-blur shadow-sm py-3" : "bg-white py-5"
      }`}
    >
      <nav className="relative mx-auto flex max-w-6xl items-center justify-between px-4">
        {/* Logo */}
        <button onClick={() => navigate("/")} className="flex items-center">
          <img src={Logo} alt="Seusu Skin" className="h-12 w-15 md:h-12" />
        </button>

        {/* Center brand button */}
        <button
          onClick={() => navigate("/")}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
             text-xl text-[#336699] font-semibold tracking-[0.2em] uppercase"
        >
          SEUSU SKIN
        </button>

        {/* Desktop nav */}
        <div className="hidden items-center gap-8 md:flex">
          {/* Products with dropdown */}
          <div className="relative group">
            <NavLink
              to="/products"
              className={({ isActive }) =>
                `${baseLink} ${
                  isActive ? "text-[#336699]" : "text-black/80"
                } hover:text-[#336699]`
              }
            >
              Products
            </NavLink>

            {/* Dropdown panel */}
            <div
              className="invisible absolute left-0 top-full mt-2 w-48 rounded-md bg-white py-2 shadow-lg
                         opacity-0 transition-all group-hover:visible group-hover:opacity-100"
            >
              {productDropdown.map((item) => (
                <a
                  key={item.to}
                  href={item.to}
                  className="block px-4 py-2 text-[12px] text-black/80 hover:bg-[#f3f6fb] hover:text-[#336699]"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          {/* Contact link */}
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `${baseLink} ${
                isActive ? "text-[#336699]" : "text-black/80"
              } hover:text-[#336699]`
            }
          >
            Contact
          </NavLink>

          {/* Shop Now button */}
          <NavLink
            to="/shop"
            className="rounded-sm px-5 py-2 text-[12px] font-bold uppercase text-white transition hover:opacity-90"
            style={{ backgroundColor: mainColor }}
          >
            Shop Now
          </NavLink>
        </div>

        {/* Mobile  */}
        <button
          onClick={() => setOpen((prev) => !prev)}
          className={`block text-2xl md:hidden ${
            scrolled ? "text-[#336699]" : "text-black"
          }`}
        >
          ☰
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="mt-3 border-t border-gray-200 bg-white md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-4">
            <NavLink
              to="/products"
              onClick={() => setOpen(false)}
              className="text-[13px] font-semibold uppercase text-gray-800"
            >
              Products
            </NavLink>
            <NavLink
              to="/contact"
              onClick={() => setOpen(false)}
              className="text-[13px] font-semibold uppercase text-gray-800"
            >
              Contact
            </NavLink>
            <NavLink
              to="/shop"
              onClick={() => setOpen(false)}
              className="mt-1 rounded-sm px-4 py-2 text-center text-[12px] font-bold uppercase text-white"
              style={{ backgroundColor: mainColor }}
            >
              Shop Now
            </NavLink>
          </div>
        </div>
      )}
    </header>
  );
}
