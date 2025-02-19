import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Jewellery ERP",
    description: "Developed a comprehensive ERP solution for the jewelry industry, managing inventory, orders, and sales through a robust admin panel.",
    tags: ["React", "Node.js", "PostgreSQL"]
  },
  {
    title: "Conversation Tool",
    description: "Created a data mapping tool that seamlessly converts Excel data and integrates with Zoho, Xero, and Odoo.",
    tags: ["React", "Node.js", "API Integration"]
  },
  {
    title: "Storytelling with AI",
    description: "Led the development of an interactive storytelling platform for children using AI to generate personalized stories.",
    tags: ["Next.js", "AI", "TypeScript"]
  },
  {
    title: "TaxFAQ",
    description: "Developed TaxFAQ, a web application providing tax-related information using React.js.",
    tags: ["React", "Node.js", "Express"]
  }
];

export default function ProjectsSection() {
  const [filter, setFilter] = useState<string | null>(null);

  const filteredProjects = filter 
    ? projects.filter(p => p.tags.includes(filter))
    : projects;

  return (
    <section className="py-20" id="projects">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-12">Featured Projects</h2>

          <div className="flex gap-4 mb-8 overflow-x-auto">
            <Button 
              variant={filter === null ? "default" : "outline"}
              onClick={() => setFilter(null)}
            >
              All
            </Button>
            {["React", "Node.js", "Next.js"].map(tag => (
              <Button
                key={tag}
                variant={filter === tag ? "default" : "outline"}
                onClick={() => setFilter(tag)}
              >
                {tag}
              </Button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle>{project.title}</CardTitle>
                    <CardDescription>{project.description}</CardDescription>
                    <div className="flex gap-2 mt-4">
                      {project.tags.map(tag => (
                        <span 
                          key={tag}
                          className="px-2 py-1 bg-primary/10 rounded text-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
