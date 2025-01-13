"use client";

import { Button } from "@/components/ui/button";
import { H1, Lead } from "@/components/ui/typography";
import Image from "next/image";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100 },
  },
};

const buttonHoverVariants = {
  hover: { scale: 1.05 },
  tap: { scale: 0.95 },
};

const floatingAnimation = {
  y: ["-5%", "5%"],
  transition: {
    y: {
      duration: 2,
      yoyo: Infinity,
      ease: "easeInOut",
    },
  },
};

export function Hero() {
  return (
    <div className="relative overflow-hidden pt-20">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <Image
          src="/Ellipse.svg"
          alt="ellipse"
          height={600}
          width={700}
          className="absolute top-0 right-2"
        />
      </motion.div>
      <div className="container mx-auto px-6 pt-16 pb-24 relative z-[1]">
        <div className="flex max-md:flex-col max-md:gap-10 justify-between items-center">
          <motion.div
            className="space-y-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants}>
              <H1 className="text-white max-w-2xl">
                Save time by building fast with Boldo Template
              </H1>
            </motion.div>
            <motion.div variants={itemVariants}>
              <Lead className="text-gray-300 max-w-2xl">
                Funding handshake buyer business-to-business metrics iPad
                partnership.
                <br /> First mover advantage innovator success deployment
                non-disclosure.
              </Lead>
            </motion.div>
            <motion.div
              className="flex flex-wrap gap-4"
              variants={itemVariants}
            >
              <motion.div
                variants={buttonHoverVariants}
                whileHover="hover"
                whileTap="tap"
              >
                <Button className="font-bold" size="xl" variant="secondary">
                  Buy template
                </Button>
              </motion.div>
              <motion.div
                variants={buttonHoverVariants}
                whileHover="hover"
                whileTap="tap"
              >
                <Button
                  variant="outline"
                  size="xl"
                  className="hover:bg-white/10"
                >
                  Explore
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <motion.div animate={floatingAnimation}>
              <Image
                src="/hero-graphics.svg"
                height={500}
                width={500}
                alt="hero-graphics"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
