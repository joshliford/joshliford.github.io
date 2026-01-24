import NavBar from "./NavBar";
import { motion } from "motion/react";

export default function Header() {
  return (
    <div>
      <div className="flex flex-row justify-between px-16 py-8">
        <h2 className="text-2xl italic hover:text-orange-400 transition-colors">
          <a href="#">JL</a>
        </h2>
        <NavBar />
      </div>
    </div>
  );
}
