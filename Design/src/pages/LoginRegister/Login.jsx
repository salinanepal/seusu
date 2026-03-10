import { useState } from "react";
import Navbar from "../../components/Navbar.jsx";
import Footer from "../../components/Footer.jsx";
import { motion } from "framer-motion";

export default function Login() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="bg-[#fafafa]">
      <Navbar />

      {/* Banner */}
      <section className="bg-[#0d2035] pt-28 pb-10">
        <div className="mx-auto max-w-5xl px-5 sm:px-8">
          <div className="flex items-center gap-3">
            <span className="h-px w-6 bg-white/30" />
            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-white/50">
              Login
            </span>
          </div>
          <h1 className="mt-4 text-[clamp(2rem,5vw,3.5rem)] font-bold leading-tight text-white">
            Login to shop.
          </h1>
        </div>
      </section>

      <main className="py-14">
        <div className="mx-auto max-w-2xl px-5 sm:px-8">
          <div className="flex flex-col gap-8 md:flex-row md:gap-12">
            {/* form */}
            <div className="flex-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="rounded-3xl border border-black/6 bg-white p-7 shadow-sm md:p-8"
              >
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid gap-5 ">
                    {[
                      {
                        key: "email",
                        label: "Email address",
                        type: "email",
                        placeholder: "you@email.com",
                      },
                      {
                        key: "password",
                        label: "Password",
                        type: "password",
                        placeholder: "Your password",
                      },
                    ].map(({ key, label, type, placeholder }) => (
                      <div key={key}>
                        <label className="mb-1.5 block text-[10px] font-bold uppercase tracking-[0.18em] text-black/40">
                          {label}
                        </label>
                        <input
                          required
                          type={type}
                          value={form[key]}
                          onChange={(e) =>
                            setForm({ ...form, [key]: e.target.value })
                          }
                          placeholder={placeholder}
                          className="w-full rounded-xl border border-black/10 bg-[#fafafa] px-4 py-3.5 text-sm text-black outline-none transition focus:border-[#336699] focus:ring-2 focus:ring-[#336699]/10 placeholder:text-black/25"
                        />
                      </div>
                    ))}
                  </div>

                  <div className="mb-1.5 block text-[10px] font-bold uppercase tracking-[0.18em] text-black/40">
                    Don't have an account?
                    <span className="text-blue-500">
                      {" "}
                      <a href="/register">Register</a>
                    </span>
                  </div>

                  <button
                    type="submit"
                    className="group w-full rounded-xl bg-[#336699] px-6 py-4 text-[11px] font-bold uppercase tracking-[0.18em] text-white transition-all duration-200 hover:bg-[#274c73] active:scale-[0.99]"
                  >
                    Login
                  </button>
                </form>
              </motion.div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
