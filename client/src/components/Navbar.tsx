import { Link } from "wouter";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b"
    >
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/">
          <a className="text-xl font-bold">Parth Khandla</a>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <a href="#about" className="hover:text-primary transition-colors">
            <span className="text-shimmer">About</span>
          </a>
          <a href="#skills" className="hover:text-primary transition-colors">
            <span className="text-shimmer">Skills</span>
          </a>
          <a href="#projects" className="hover:text-primary transition-colors">
            <span className="text-shimmer">Projects</span>
          </a>
          <a href="#experience" className="hover:text-primary transition-colors">
            <span className="text-shimmer">Experience</span>
          </a>
          <a href="#contact">
            <Button className="shimmer">Contact</Button>
          </a>
        </div>
      </nav>
    </motion.header>
  );
}