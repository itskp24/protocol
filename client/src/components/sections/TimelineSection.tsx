import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

const timeline = [
  {
    year: "2024",
    title: "Software Engineer",
    company: "Current Position"
  },
  {
    year: "2023",
    title: "Jr. Software Engineer",
    company: "Previous Role"
  },
  {
    year: "2022",
    title: "Intern/Trainee Developer",
    company: "First Role"
  }
];

export default function TimelineSection() {
  return (
    <section className="py-20" id="experience">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-12">Work Experience</h2>

          <div className="relative border-l-2 border-primary/20 pl-8 space-y-8">
            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 relative">
                  <div 
                    className="absolute w-4 h-4 bg-primary rounded-full -left-[42px]"
                    style={{ top: "calc(50% - 8px)" }}
                  />
                  <span className="text-sm text-muted-foreground">{item.year}</span>
                  <h3 className="text-xl font-semibold mt-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.company}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
