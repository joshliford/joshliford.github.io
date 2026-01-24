import { motion } from "motion/react";

export default function Hero() {
  return (
    <motion.div 
      className="flex flex-col"
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 2, ease: "easeOut" }}
    >
    <div className="flex flex-col justify-center">
      <div className="flex flex-col text-left space-y-2 mb-6">
        <h1 className="text-5xl text-slate-100">Josh Liford</h1>
        <h2 className="text-2xl text-slate-100">Jr. Full Stack Developer</h2>
        <p className="text-slate-300">
          From emergency department nurse to applications developer.
          <br></br>Bringing critical thinking and creativity to software development.
        </p>
      </div>
    </div>
    </motion.div>
  );
}
