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
          <Link href="#about">
            <a className="hover:text-primary transition-colors">About</a>
          </Link>
          <Link href="#skills">
            <a className="hover:text-primary transition-colors">Skills</a>  
          </Link>
          <Link href="#projects">
            <a className="hover:text-primary transition-colors">Projects</a>
          </Link>
          <Link href="#experience">
            <a className="hover:text-primary transition-colors">Experience</a>
          </Link>
          <Link href="#contact">
            <Button>Contact</Button>
          </Link>
        </div>
      </nav>
    </motion.header>
  );
}
