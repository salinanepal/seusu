import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "../assets/Images/Logo.png";

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

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const linkBase =
    "text-[11px] font-bold uppercase tracking-[0.15em] transition-colors duration-200";

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 py-3 shadow-[0_1px_24px_rgba(0,0,0,0.07)] backdrop-blur-md"
            : "bg-white py-4"
        }`}
      >
        <nav className="relative mx-auto flex max-w-6xl items-center justify-between px-5 sm:px-8">
          {/* Logo image */}
          <button
            onClick={() => {
              navigate("/");
              setOpen(false);
            }}
            className="flex items-center"
            aria-label="Go to home"
          >
            <img src={Logo} alt="Seusu Skin" className="h-10 w-auto" />
          </button>

          <button
            onClick={() => {
              navigate("/");
              setOpen(false);
            }}
            className="absolute left-1/3 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[15px] font-black tracking-[0.28em] text-[#336699] uppercase"
          >
            SEUSU SKIN
          </button>

          {/* Desktop links */}
          <div className="hidden items-center gap-5 md:flex">
            {/* Products with dropdown */}

            <NavLink
              to="/products"
              className={({ isActive }) =>
                `${linkBase} ${isActive ? "text-[#336699]" : "text-black/60 hover:text-[#336699]"}`
              }
            >
              Products
            </NavLink>
            {/* Dropdown */}
            <div className="invisible absolute left-0 top-full mt-3 w-44 origin-top-left scale-95 rounded-xl border border-black/[0.07] bg-white py-2 opacity-0 shadow-[0_8px_32px_rgba(0,0,0,0.1)] transition-all duration-200 group-hover:visible group-hover:scale-100 group-hover:opacity-100">
              {productDropdown.map((item) => (
                <a
                  key={item.to}
                  href={item.to}
                  className="flex items-center gap-2 px-4 py-2.5 text-[11px] font-semibold uppercase tracking-widest text-black/60 transition hover:bg-[#f3f7fb] hover:text-[#336699]"
                >
                  <span className="h-1 w-1 rounded-full bg-[#336699]/30" />
                  {item.label}
                </a>
              ))}
            </div>

            <NavLink
              to="/bundles"
              className={({ isActive }) =>
                `${linkBase} ${isActive ? "text-[#336699]" : "text-black/60 hover:text-[#336699]"}`
              }
            >
              Bundles
            </NavLink>

            <NavLink
              to="/sciencetab"
              className={({ isActive }) =>
                `${linkBase} ${isActive ? "text-[#336699]" : "text-black/60 hover:text-[#336699]"}`
              }
            >
              Science
            </NavLink>

            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `${linkBase} ${isActive ? "text-[#336699]" : "text-black/60 hover:text-[#336699]"}`
              }
            >
              Contact
            </NavLink>

            <NavLink
              to="/shop"
              className="rounded-full bg-[#336699] px-5 py-2.5 text-[11px] font-bold uppercase tracking-[0.15em] text-white transition-all hover:bg-[#274c73] hover:shadow-md"
            >
              Shop Now
            </NavLink>

            {/* <NavLink
              to="/login"
              className="rounded-full bg-[#336699] px-5 py-2.5 text-[11px] font-bold uppercase tracking-[0.15em] text-white transition-all hover:bg-[#274c73] hover:shadow-md"
            >
              Login
            </NavLink> */}
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setOpen((p) => !p)}
            className="text-2xl text-[#336699] md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
          >
            ☰
          </button>
        </nav>
      </header>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-x-0 top-16 z-40 border-b border-black/[0.07] bg-white shadow-[0_8px_32px_rgba(0,0,0,0.08)] md:hidden"
          >
            <div className="mx-auto flex max-w-6xl flex-col px-5 py-6 gap-1">
              {/* Product sub-links */}
              <div className="mb-2">
                <NavLink
                  to="/products"
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `flex rounded-xl px-3 py-3.5 text-[12px] font-bold uppercase tracking-[0.15em] transition ${
                      isActive
                        ? "text-[#336699]"
                        : "text-black/70 hover:bg-[#f3f7fb] hover:text-[#336699]"
                    }`
                  }
                >
                  Products
                </NavLink>

                {productDropdown.map((item) => (
                  <a
                    key={item.to}
                    href={item.to}
                    onClick={() => setOpen(false)}
                    className="flex items-center gap-3 rounded-xl px-3 py-3 text-[12px] font-semibold uppercase tracking-widest text-black/70 transition hover:bg-[#f3f7fb] hover:text-[#336699]"
                  >
                    <span className="h-1 w-1 shrink-0 rounded-full bg-[#336699]/40" />
                    {item.label}
                  </a>
                ))}
              </div>

              <div className="h-px bg-black/6 mx-2 my-1" />
              <NavLink
                to="/bundles"
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `rounded-xl px-3 py-3.5 text-[12px] font-bold uppercase tracking-[0.15em] transition ${
                    isActive
                      ? "text-[#336699]"
                      : "text-black/70 hover:bg-[#f3f7fb] hover:text-[#336699]"
                  }`
                }
              >
                Bundles
              </NavLink>

              <NavLink
                to="/sciencetab"
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `rounded-xl px-3 py-3.5 text-[12px] font-bold uppercase tracking-[0.15em] transition ${
                    isActive
                      ? "text-[#336699]"
                      : "text-black/70 hover:bg-[#f3f7fb] hover:text-[#336699]"
                  }`
                }
              >
                Science
              </NavLink>

              <NavLink
                to="/contact"
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `rounded-xl px-3 py-3.5 text-[12px] font-bold uppercase tracking-[0.15em] transition ${
                    isActive
                      ? "text-[#336699]"
                      : "text-black/70 hover:bg-[#f3f7fb] hover:text-[#336699]"
                  }`
                }
              >
                Contact
              </NavLink>

              <NavLink
                to="/shop"
                onClick={() => setOpen(false)}
                className="mt-3 rounded-xl bg-[#336699] py-4 text-center text-[11px] font-bold uppercase tracking-[0.18em] text-white transition hover:bg-[#274c73]"
              >
                Shop Now
              </NavLink>
              {/* <NavLink
                to="/login"
                onClick={() => setOpen(false)}
                className="mt-3 rounded-xl bg-[#336699] py-4 text-center text-[11px] font-bold uppercase tracking-[0.18em] text-white transition hover:bg-[#274c73]"
              >
                Login
              </NavLink> */}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
