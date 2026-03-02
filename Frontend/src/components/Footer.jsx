export default function Footer() {
  return (
    <footer className="border-t border-[#e3e3e3] bg-[#336699] text-white/75">
      <div className="mx-auto max-w-6xl px-4 py-10 md:py-12">
        
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          
          <div className="max-w-sm space-y-3">
            <span className="text-sm font-semibold uppercase">
              SEUSU SKIN
            </span>
            <p className="text-sm">
              Skincare that respects your barrier while still delivering what
              your skin actually needs, day after day.
            </p>
          </div>

          
          <div className="grid gap-8 text-sm  sm:grid-cols-2 md:grid-cols-[1fr_1.4fr]">
            
            <div>
              <h3 className="mb-3 text-[12px] font-semibold uppercase">
                Explore
              </h3>
              <ul className="space-y-2">
                <li>
                  <a href="/">
                    Home
                  </a>
                </li>
                <li>
                  
                  <a href="/products">
                    Products
                  </a>
                </li>
                <li>
                  <a href="/shop">
                    Shop
                  </a>
                </li>
                <li>
                  <a href="/contact">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="mb-3 text-[12px] font-semibold uppercase ">
                Stay in touch
              </h3>
              <p className="mb-3 text-sm ">
                Get quiet, useful updates—new launches, routines, and skin tips
                without the noise.
              </p>
              <form
                onSubmit={(e) => e.preventDefault()}
                className="flex max-w-xs gap-2"
              >
                <input
                  type="email"
                  placeholder="Email address"
                  className="w-full rounded-full border border-[#d5d5d5] px-3 py-2 text-sm outline-none text-black bg-white"
                />
                <button
                  type="submit"
                  className="rounded-full px-4 py-2 text-[12px] font-semibold uppercase text-white hover:bg-white hover:text-black"
                >
                  Join
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-[#eaeaea] pt-4 text-[12px]  md:flex-row">
          <p>&copy; {new Date().getFullYear()} SEUSU SKIN. All rights reserved.</p>
          <div className="flex gap-4">
            <button>Privacy</button>
            <button>Terms</button>
            <button>Cookies</button>
          </div>
        </div>
      </div>
    </footer>
  );
}
