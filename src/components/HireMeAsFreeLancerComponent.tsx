"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { MessageSquareCode, Send } from "lucide-react"; // Updated to matching premium lucide icon sets

export default function HireMeAsFreeLancerComponent() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "success">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus("sending");
    console.log("Captured Freelance Inquiry for Email:", email);

    // Simulated short delay for dynamic UI state confirmation feedback
    setTimeout(() => {
      setStatus("success");
      setEmail("");
      setTimeout(() => setStatus("idle"), 3000);
    }, 800);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="w-full bg-gradient-to-br from-neutral-50/50 to-transparent dark:from-neutral-950/30 dark:to-transparent border border-neutral-200/80 dark:border-neutral-800/60 rounded-2xl p-6 sm:p-8 mt-4 mx-auto shadow-3xs"
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8 items-start">
        {/* Left Column: Context Branding Headlines */}
        <div className="md:col-span-7 space-y-2 text-left">
          <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-[10px] font-mono font-bold uppercase tracking-wider bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 dark:bg-emerald-400/10">
            Availability: Active Channels Open
          </span>
          <h2 className="text-xl font-bold tracking-tight text-neutral-900 dark:text-neutral-50">
            Want to hire me as a freelancer? Let&apos;s discuss.
          </h2>
          <p className="text-sm leading-relaxed text-neutral-500 dark:text-neutral-400 font-normal max-w-md">
            Drop your details, structural requirements, or timeline updates
            below. I specialize in developing performant SaaS models and
            scalable frontend systems.
          </p>
        </div>

        {/* Right Column: Interactive Inbound Fields Block */}
        <div className="md:col-span-5 flex flex-col gap-4.5 w-full md:pt-1.5">
          {/* Action 1: Instant WhatsApp Sync Anchor Pipeline */}
          <a
            href="https://wa.me/+919832968001"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full px-4 py-2.5 rounded-xl font-bold text-xs tracking-wide bg-emerald-600 hover:bg-emerald-700 active:scale-[0.99] text-white transition-all duration-200 shadow-2xs text-center select-none outline-none"
          >
            <MessageSquareCode size={14} />
            <span>Chat on WhatsApp</span>
          </a>

          {/* Minimalist Visual Split Divider Rule */}
          <div className="flex items-center gap-3 w-full select-none">
            <div className="flex-1 h-[1px] bg-neutral-200/60 dark:bg-neutral-800/50" />
            <span className="text-[9px] font-mono font-bold tracking-widest text-neutral-400 dark:text-neutral-600 uppercase">
              OR
            </span>
            <div className="flex-1 h-[1px] bg-neutral-200/60 dark:bg-neutral-800/50" />
          </div>

          {/* Action 2: Asynchronous Input Processing Field */}
          <div className="w-full flex flex-col gap-1.5 text-left">
            <label
              htmlFor="client-email"
              className="text-[10px] font-mono font-bold tracking-wide text-neutral-400 dark:text-neutral-500"
            >
              Async Mail Queue Drop
            </label>

            <form
              onSubmit={handleSubmit}
              className="flex items-center gap-2 w-full"
            >
              <input
                id="client-email"
                type="email"
                placeholder="official.gopi@outlook.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={status === "sending" || status === "success"}
                className="flex-1 min-w-0 bg-neutral-50 dark:bg-neutral-900/40 text-neutral-900 dark:text-neutral-100 placeholder-neutral-400 dark:placeholder-neutral-600 rounded-xl px-3 py-2 text-xs border border-neutral-200/80 dark:border-neutral-800/80 focus:outline-none focus:ring-1 focus:ring-neutral-950 dark:focus:ring-white focus:border-neutral-950 dark:focus:border-white transition-all duration-200 disabled:opacity-50 outline-none"
                required
              />
              <button
                type="submit"
                disabled={status === "sending" || status === "success"}
                className="h-[34px] px-3.5 rounded-xl border border-neutral-200 dark:border-neutral-800 text-xs font-bold bg-white dark:bg-[#0c0c0d] text-neutral-800 dark:text-neutral-200 hover:bg-neutral-50 dark:hover:bg-neutral-900 focus:outline-none transition-all duration-200 flex items-center justify-center gap-1.5 shrink-0 disabled:opacity-50 outline-none cursor-pointer"
              >
                {status === "idle" && (
                  <>
                    <span>Send</span>
                    <Send size={11} className="text-neutral-400" />
                  </>
                )}
                {status === "sending" && (
                  <span className="animate-pulse">Routing...</span>
                )}
                {status === "success" && (
                  <span className="text-emerald-600 dark:text-emerald-400 font-bold">
                    Queued!
                  </span>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
