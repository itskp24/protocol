import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

const content = [
  {
    role: "Frontend Developer",
    description: "Experienced Frontend Developer with 3+ years of expertise in building modern, dynamic web applications. Skilled in using React.js, Next.js, and Redux to create engaging user interfaces and optimize application performance."
  },
  {
    role: "React Specialist",
    description: "Passionate React expert crafting seamless user experiences with modern React patterns. Proficient in React hooks, context API, and state management solutions like Redux and Zustand."
  },
  {
    role: "Next.js Developer",
    description: "Building blazing-fast web applications with Next.js. Experienced in server-side rendering, static site generation, and creating optimized, SEO-friendly web applications."
  },
  {
    role: "UI/UX Enthusiast",
    description: "Creating beautiful and intuitive user interfaces with a focus on user experience. Skilled in responsive design, animation, and accessibility best practices."
  }
];

export default function HeroSection() {
  const [contentIndex, setContentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setContentIndex((prev) => (prev + 1) % content.length);
        setIsAnimating(false);
      }, 500); // Wait for fade out before changing content
    }, 4000); // Change every 4 seconds

    return () => clearInterval(interval);
  }, []);

  const currentContent = content[contentIndex];

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
            key={`title-${contentIndex}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            {currentContent.role}
          </motion.h1>

          <motion.p
            key={`desc-${contentIndex}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-xl text-muted-foreground mb-8"
          >
            {currentContent.description}
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