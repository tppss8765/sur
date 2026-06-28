"use client";

import { motion } from "framer-motion";
import { whatsappLink } from "@/lib/site";

export default function WhatsAppFloat() {
  return (
    <motion.a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.1, type: "spring", stiffness: 260, damping: 18 }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.94 }}
      className="fixed z-40 bottom-24 sm:bottom-7 right-5 sm:right-7 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-xl shadow-black/20"
    >
      <span className="absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-60 animate-ping" />
      <svg
        viewBox="0 0 32 32"
        className="relative h-7 w-7 fill-white"
        aria-hidden="true"
      >
        <path d="M16.004 3C9.376 3 4 8.373 4 15c0 2.39.7 4.617 1.91 6.49L4 29l7.694-1.875A11.93 11.93 0 0 0 16.004 27C22.63 27 28 21.627 28 15S22.63 3 16.004 3Zm0 21.818a9.78 9.78 0 0 1-4.99-1.367l-.358-.213-4.566 1.113 1.222-4.448-.234-.367A9.77 9.77 0 0 1 5.27 15c0-5.367 4.367-9.727 9.734-9.727 5.367 0 9.727 4.36 9.727 9.727 0 5.367-4.36 9.818-9.727 9.818Zm5.337-7.273c-.293-.146-1.732-.853-2-.951-.268-.098-.464-.146-.659.147-.196.293-.756.951-.927 1.146-.171.196-.342.22-.635.073-.293-.146-1.236-.456-2.355-1.454-.87-.776-1.459-1.735-1.63-2.028-.171-.293-.018-.451.128-.597.132-.131.293-.342.44-.513.146-.171.195-.293.293-.488.098-.196.049-.367-.024-.513-.073-.146-.659-1.589-.903-2.175-.238-.572-.48-.494-.659-.503l-.561-.01c-.196 0-.513.073-.781.367-.268.293-1.025 1.002-1.025 2.444 0 1.442 1.05 2.835 1.196 3.03.146.196 2.066 3.156 5.007 4.426.7.302 1.246.483 1.672.618.703.224 1.342.192 1.848.117.564-.084 1.732-.708 1.977-1.392.244-.684.244-1.27.171-1.392-.073-.122-.268-.196-.561-.342Z" />
      </svg>
    </motion.a>
  );
}
