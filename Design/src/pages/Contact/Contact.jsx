import { useState } from "react";
import Navbar from "../../components/Navbar.jsx";
import Footer from "../../components/Footer.jsx";
import { motion } from "framer-motion";

const contactInfo = [
  { icon: "✉", label: "Email", value: "hello@seususkin.com" },
  { icon: "📍", label: "Based in", value: "Nepal" },
  { icon: "⏱", label: "Response time", value: "Within 24 hours" },
];

export default function Contact() {
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
              Contact
            </span>
          </div>
          <h1 className="mt-4 text-[clamp(2rem,5vw,3.5rem)] font-bold leading-tight text-white">
            Get in <span className="text-[#A8D1E7]">touch.</span>
          </h1>
          <p className="mt-3 text-[13px] text-white/40">
            Questions about skin, orders, or just want to say hello — we're here.
          </p>
        </div>
      </section>

      <main className="py-14">
        <div className="mx-auto max-w-5xl px-5 sm:px-8">
          <div className="flex flex-col gap-8 md:flex-row md:gap-12">

            {/* Left info */}
            <div className="md:w-2/5">
              <div className="space-y-4">
                {contactInfo.map((c) => (
                  <div
                    key={c.label}
                    className="flex items-start gap-4 rounded-2xl border border-black/6 bg-white p-5 shadow-sm"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#EEF6FA] text-lg">
                      {c.icon}
                    </div>
                    <div>
                      <div className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#336699]">
                        {c.label}
                      </div>
                      <div className="mt-0.5 text-[13px] text-black/70">{c.value}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-2xl border border-[#336699]/10 bg-[#f0f6fb] p-5">
                <p className="text-[12px] leading-relaxed text-black/50">
                  We read every message personally. Whether it's about your skin type,
                  a product question, or an order — we'll get back to you quickly.
                </p>
              </div>
            </div>

            {/* Right form */}
            <div className="flex-1">
              {sent ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.97 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="flex flex-col items-center justify-center rounded-3xl border border-black/6 bg-white py-20 text-center shadow-sm"
                >
                  <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-[#EEF6FA] text-3xl">
                    ✓
                  </div>
                  <h3 className="text-xl font-bold text-[#336699]">Message sent</h3>
                  <p className="mt-2 text-[13px] text-black/50">
                    We'll be in touch within 24 hours.
                  </p>
                  <button
                    onClick={() => { setSent(false); setForm({ name: "", email: "", message: "" }); }}
                    className="mt-6 text-[11px] font-semibold uppercase tracking-[0.15em] text-[#336699] underline underline-offset-4"
                  >
                    Send another
                  </button>
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="rounded-3xl border border-black/6 bg-white p-7 shadow-sm md:p-8"
                >
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid gap-5 sm:grid-cols-2">
                      {[
                        { key: "name", label: "Full name", type: "text", placeholder: "Your name" },
                        { key: "email", label: "Email address", type: "email", placeholder: "you@email.com" },
                      ].map(({ key, label, type, placeholder }) => (
                        <div key={key}>
                          <label className="mb-1.5 block text-[10px] font-bold uppercase tracking-[0.18em] text-black/40">
                            {label}
                          </label>
                          <input
                            required
                            type={type}
                            value={form[key]}
                            onChange={(e) => setForm({ ...form, [key]: e.target.value })}
                            placeholder={placeholder}
                            className="w-full rounded-xl border border-black/10 bg-[#fafafa] px-4 py-3.5 text-sm text-black outline-none transition focus:border-[#336699] focus:ring-2 focus:ring-[#336699]/10 placeholder:text-black/25"
                          />
                        </div>
                      ))}
                    </div>

                    <div>
                      <label className="mb-1.5 block text-[10px] font-bold uppercase tracking-[0.18em] text-black/40">
                        Message
                      </label>
                      <textarea
                        required
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        placeholder="Tell us about your skin concerns or inquiry..."
                        className="min-h-36 w-full resize-none rounded-xl border border-black/10 bg-[#fafafa] px-4 py-3.5 text-sm text-black outline-none transition focus:border-[#336699] focus:ring-2 focus:ring-[#336699]/10 placeholder:text-black/25"
                      />
                    </div>

                    <button
                      type="submit"
                      className="group w-full rounded-xl bg-[#336699] px-6 py-4 text-[11px] font-bold uppercase tracking-[0.18em] text-white transition-all duration-200 hover:bg-[#274c73] active:scale-[0.99]"
                    >
                      Send message{" "}
                      <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
                    </button>
                  </form>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
