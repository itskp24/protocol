import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

const roles = [
  "Frontend Developer",
  "React Specialist",
  "Next.js Developer",
  "UI/UX Enthusiast"
];

export default function HeroSection() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTyping(true);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 4000); // Change every 4 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen pt-16 flex items-center" id="about">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl"
        >
          <motion.h1 
            key={roles[roleIndex]}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            {roles[roleIndex]}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-xl text-muted-foreground mb-8"
          >
            Experienced Frontend Developer with 3+ years of expertise in building modern, dynamic web applications. Skilled in using React.js, Next.js, and Redux to create engaging user interfaces and optimize application performance.
          </motion.p>

          <div className="flex flex-wrap gap-4">
            <Button asChild className="shimmer">
              <a href="#contact">Get in Touch</a>
            </Button>
            <Button variant="outline" asChild className="shimmer">
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                Download Resume
              </a>  
            </Button>
          </div>

          <div className="flex gap-6 mt-8">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
              <FiGithub size={24} />
            </a>
            <a href="https://linkedin.com/in/khandla-parth-790433228" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
              <FiLinkedin size={24} />
            </a>
            <a href="mailto:khandlaparth68@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
              <FiMail size={24} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}