// src/pages/Contact/Contact.jsx
import { useState } from "react";
import Navbar from "../../components/Navbar.jsx";
import Footer from "../../components/Footer.jsx";

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div>
      <Navbar />

      <section className="bg-[#336699] pt-30 pb-5">
        <div className="mx-auto max-w-3xl px-4">
          <div className="flex items-center justify-center gap-4 text-[12px] font-semibold uppercase text-white">
            <span className="h-px w-10 bg-white" />
            <span>Get in touch</span>
            <span className="h-px w-10 bg-white" />
          </div>
        </div>
      </section>

      <main className="bg-[#fafafa] py-16">
        <section>
          <div className="mx-auto max-w-3xl px-4">
            {sent ? (
              <div className="rounded-md border border-[#336699]/20 bg-white py-10 text-center">
                <div className="mb-3 text-3xl">✓</div>
                <h3 className="text-lg font-semibold text-[#336699]">
                  Message sent
                </h3>
                <p className="mt-2 text-sm text-black/70">
                  We will be in touch shortly.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="space-y-4 rounded-md border border-black/10 bg-white p-6"
              >
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <label className="mb-1 block text-[11px] font-semibold uppercase text-black/60">
                      Full name
                    </label>
                    <input
                      required
                      value={form.name}
                      onChange={(e) =>
                        setForm({ ...form, name: e.target.value })
                      }
                      className="w-full rounded-sm border border-[#D2D2D2] bg-[#fafafa] px-4 py-3 text-sm text-black outline-none focus:border-[#336699]"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="mb-1 block text-[11px] font-semibold uppercase text-black/60">
                      Email
                    </label>
                    <input
                      required
                      type="email"
                      value={form.email}
                      onChange={(e) =>
                        setForm({ ...form, email: e.target.value })
                      }
                      className="w-full rounded-sm border border-[#D2D2D2] bg-[#fafafa] px-4 py-3 text-sm text-black outline-none focus:border-[#336699]"
                      placeholder="you@email.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="mb-1 block text-[11px] font-semibold uppercase text-black/60">
                    Message
                  </label>
                  <textarea
                    required
                    value={form.message}
                    onChange={(e) =>
                      setForm({ ...form, message: e.target.value })
                    }
                    className="min-h-35 w-full rounded-sm border border-[#D2D2D2] bg-[#fafafa] px-4 py-3 text-sm text-black outline-none focus:border-[#336699]"
                    placeholder="Tell us about your skin concerns or inquiry..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full rounded-sm bg-[#336699] px-4 py-3 text-[12px] font-bold uppercase text-white transition hover:bg-[#28517a]"
                >
                  Send message
                </button>
              </form>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
