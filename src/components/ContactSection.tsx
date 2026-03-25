import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle, AlertCircle } from "lucide-react";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.email.trim()) e.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Invalid email";
    if (!form.message.trim()) e.message = "Message is required";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus("sending");
    // Simulate sending — replace with actual endpoint
    await new Promise((r) => setTimeout(r, 1500));
    setStatus("sent");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card to-background" />

      <div className="container relative z-10">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <p className="text-primary font-medium tracking-widest uppercase text-sm mb-3">Let's Connect</p>
            <h2 className="text-4xl md:text-5xl text-foreground font-display font-bold mb-4">
              Have a project <span className="gradient-text italic">in mind?</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              I'm always open to discussing new projects, creative ideas, or opportunities.
            </p>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">Name</label>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all"
                  placeholder="Your name"
                />
                {errors.name && <p className="text-destructive text-xs mt-1">{errors.name}</p>}
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">Email</label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all"
                  placeholder="you@email.com"
                />
                {errors.email && <p className="text-destructive text-xs mt-1">{errors.email}</p>}
              </div>
            </div>
            <div>
              <label className="text-sm font-medium text-foreground mb-2 block">Message</label>
              <textarea
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                rows={5}
                className="w-full px-4 py-3 rounded-xl bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all resize-none"
                placeholder="Tell me about your project..."
              />
              {errors.message && <p className="text-destructive text-xs mt-1">{errors.message}</p>}
            </div>
            <button
              type="submit"
              disabled={status === "sending" || status === "sent"}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-3.5 rounded-full font-medium hover:shadow-[0_0_30px_hsl(var(--primary)/0.4)] transition-all disabled:opacity-60"
            >
              {status === "sending" ? (
                "Sending..."
              ) : status === "sent" ? (
                <>
                  <CheckCircle className="w-4 h-4" /> Sent!
                </>
              ) : status === "error" ? (
                <>
                  <AlertCircle className="w-4 h-4" /> Try Again
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" /> Send Message
                </>
              )}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
