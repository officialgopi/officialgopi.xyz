"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsWhatsapp } from "react-icons/bs";

export default function HireMeAsFreeLancerComponent() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Email submitted:", email);
    // You can add your API call here
  };

  return (
    <motion.div
      initial={{ opacity: 0, filter: "blur(50px)" }}
      whileInView={{ opacity: 1, filter: "blur(0px)" }}
      transition={{ duration: 0.3 }}
      className=" border w-full border-neutral-800/50 rounded-xl p-6 mt-5 mx-auto shadow-inner"
    >
      <h2 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100 mb-1">
        Want to hire me as a freelancer? Let&apos;s discuss.
      </h2>
      <p className="text-neutral-600 dark:text-neutral-400 text-sm mb-4">
        Drop your message and let&apos;s discuss about your project.
      </p>

      <Link
        href="https://wa.me/+919832968001"
        target="_blank"
        className="inline-block mb-4"
      >
        <button className="bg-green-700 flex items-center gap-2 font-bold hover:bg-green-800 transition-colors    p-3 rounded-lg text-neutral-200 cursor-pointer text-sm">
          <BsWhatsapp width={20} />
          <span>Chat on WhatsApp</span>
        </button>
      </Link>

      <div className="border-t border-neutral-800 my-4" />

      <p className="text-neutral-600 dark:text-neutral-400 text-sm mb-2">
        Drop in your email ID and I will get back to you.
      </p>

      <form onSubmit={handleSubmit} className="flex items-center gap-2">
        <input
          type="email"
          placeholder="official.gopi@outlook.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="flex-1 bg-neutral-200 dark:bg-neutral-800 text-neutral-800 dark:text-white placeholder-neutral-500 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
          required
        />
        <button
          type="submit"
          className=" border-neutral-800/50 hover:bg-neutral-100 dark:hover:bg-neutral-900 border px-3 py-2 rounded-md cursor-pointer transition-colors text-sm"
        >
          Send
        </button>
      </form>
    </motion.div>
  );
}
