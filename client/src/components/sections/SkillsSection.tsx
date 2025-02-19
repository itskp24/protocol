import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { SiReact, SiNextdotjs, SiTypescript, SiNodedotjs, SiExpress, SiPostgresql } from "react-icons/si";

const skills = [
  {
    category: "Frontend",
    items: [
      { name: "React.js", icon: SiReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "TypeScript", icon: SiTypescript }
    ]
  },
  {
    category: "Backend", 
    items: [
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Express.js", icon: SiExpress },
      { name: "PostgreSQL", icon: SiPostgresql }
    ]
  }
];

export default function SkillsSection() {
  return (
    <section className="py-20" id="skills">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-12">Skills & Technologies</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((category) => (
              <Card key={category.category} className="p-6">
                <h3 className="text-xl font-semibold mb-6">{category.category}</h3>
                <div className="grid grid-cols-3 gap-6">
                  {category.items.map((skill) => (
                    <motion.div
                      key={skill.name}
                      whileHover={{ scale: 1.05 }}
                      className="flex flex-col items-center gap-2 text-center"
                    >
                      <skill.icon size={40} className="text-primary" />
                      <span>{skill.name}</span>
                    </motion.div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
