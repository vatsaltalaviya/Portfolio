import React, { useState } from "react";
import { motion } from "framer-motion";
import FlipAnimation from "./FlipAnimation";

const Contact = () => {
  const [copiedField, setCopiedField] = useState(null);

  const copyToClipboard = (text, field) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  return (
    <section id="contact" className="py-24 md:py-36 bg-[#EFEDE7]/60">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-10 border-b border-[#DAD7D0] gap-4">
          <div>
            <div className="text-xs uppercase tracking-[0.25em] text-[#873D42] font-semibold mb-2">
               05 — DIRECT INQUIRIES
            </div>
            <h2 className="font-serif text-5xl sm:text-6xl md:text-8xl text-[#202020] tracking-tight">
              Contact
            </h2>
          </div>
          <div className="text-xs uppercase tracking-widest text-[#77746E] max-w-xs md:text-right">
            Get in touch for React &amp; MERN opportunities, roles, or collaborations
          </div>
        </div>

        {/* Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pt-14 items-start">
          {/* Left Column: Narrative & Prompt */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="space-y-4">
              <span className="text-xs font-mono uppercase tracking-widest text-[#873D42]">
                 Communication
              </span>
              <h3 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#202020] leading-tight font-normal">
                Open for conversations, roles, and creative projects.
              </h3>
              <p className="font-sans text-base text-[#77746E] font-light leading-relaxed pt-2">
                Whether you have an upcoming project, a full-time position, or
                simply want to discuss frontend web development and modern React architecture,
                feel free to reach out directly.
              </p>
            </div>

            <div className="pt-6">
              <a
                href="mailto:vatsaltalaviyaa@gmail.com"
                className="inline-flex items-center gap-3 px-7 py-4 bg-[#202020] text-[#F7F6F2] hover:bg-[#873D42] text-xs uppercase tracking-widest font-medium transition-all duration-300"
              >
                <FlipAnimation>Send an Email</FlipAnimation>
                <i className="ri-mail-send-line text-sm"></i>
              </a>
            </div>
          </motion.div>

          {/* Right Column: Contact Details Ledger */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-7 bg-[#F7F6F2] border border-[#DAD7D0] shadow-sm divide-y divide-[#DAD7D0]"
          >
            {/* Phone */}
            <div className="p-6 md:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 group hover:bg-[#EFEDE7] transition-colors duration-200">
              <div>
                <span className="text-xs uppercase tracking-widest text-[#77746E] block font-medium mb-1">
                  Phone no
                </span>
                <a
                  href="tel:+919265969034"
                  className="font-serif text-2xl sm:text-3xl text-[#202020] hover:text-[#873D42] transition-colors"
                >
                  +91 9265969034
                </a>
              </div>
              <button
                onClick={() => copyToClipboard("+919265969034", "phone")}
                className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-[#77746E] hover:text-[#202020] self-start sm:self-auto py-1 px-3 border border-[#DAD7D0] bg-[#F7F6F2]"
              >
                <i className={copiedField === "phone" ? "ri-check-line text-emerald-600" : "ri-file-copy-line"}></i>
                <span>{copiedField === "phone" ? "Copied" : "Copy"}</span>
              </button>
            </div>

            {/* Email */}
            <div className="p-6 md:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 group hover:bg-[#EFEDE7] transition-colors duration-200">
              <div>
                <span className="text-xs uppercase tracking-widest text-[#77746E] block font-medium mb-1">
                  Email
                </span>
                <a
                  href="mailto:vatsaltalaviyaa@gmail.com"
                  className="font-serif text-2xl sm:text-3xl text-[#202020] hover:text-[#873D42] transition-colors break-all"
                >
                  vatsaltalaviyaa@gmail.com
                </a>
              </div>
              <button
                onClick={() => copyToClipboard("vatsaltalaviyaa@gmail.com", "email")}
                className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-[#77746E] hover:text-[#202020] self-start sm:self-auto py-1 px-3 border border-[#DAD7D0] bg-[#F7F6F2]"
              >
                <i className={copiedField === "email" ? "ri-check-line text-emerald-600" : "ri-file-copy-line"}></i>
                <span>{copiedField === "email" ? "Copied" : "Copy"}</span>
              </button>
            </div>

            {/* Location */}
            <div className="p-6 md:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 group hover:bg-[#EFEDE7] transition-colors duration-200">
              <div>
                <span className="text-xs uppercase tracking-widest text-[#77746E] block font-medium mb-1">
                  Location
                </span>
                <span className="font-serif text-2xl sm:text-3xl text-[#202020]">
                  Gondal , India
                </span>
              </div>
              <div className="text-xs font-mono text-[#77746E] uppercase tracking-wider">
                Gujarat // IST (UTC+5:30)
              </div>
            </div>

            {/* Social / Profiles */}
            <div className="p-6 md:p-8">
              <span className="text-xs uppercase tracking-widest text-[#77746E] block font-medium mb-4">
                Verified Online Profiles
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <a
                  href="https://linkedin.com/in/vatsal-talaviya-028954299"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 border border-[#DAD7D0] bg-[#F7F6F2] hover:bg-[#202020] hover:text-[#F7F6F2] hover:border-[#202020] transition-all duration-300 flex items-center justify-between group"
                >
                  <span className="text-xs uppercase tracking-wider font-medium">LinkedIn</span>
                  <i className="ri-linkedin-box-line text-lg text-[#873D42] group-hover:text-[#F7F6F2]"></i>
                </a>

                <a
                  href="https://github.com/vatsaltalaviya"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 border border-[#DAD7D0] bg-[#F7F6F2] hover:bg-[#202020] hover:text-[#F7F6F2] hover:border-[#202020] transition-all duration-300 flex items-center justify-between group"
                >
                  <span className="text-xs uppercase tracking-wider font-medium">GitHub</span>
                  <i className="ri-github-line text-lg text-[#873D42] group-hover:text-[#F7F6F2]"></i>
                </a>

                <a
                  href="https://www.instagram.com/vatsaltalaviyaaa/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 border border-[#DAD7D0] bg-[#F7F6F2] hover:bg-[#202020] hover:text-[#F7F6F2] hover:border-[#202020] transition-all duration-300 flex items-center justify-between group"
                >
                  <span className="text-xs uppercase tracking-wider font-medium">Instagram</span>
                  <i className="ri-instagram-line text-lg text-[#873D42] group-hover:text-[#F7F6F2]"></i>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
