import { memo, useMemo } from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
const Education = () => {
  const educationData = useMemo(
    () => [
      {
        institution: "CMR College of Engineering & Technology, Medchal",
        degree: "B.Tech — Computer Science and Engineering",
        period: "Graduated 2022",
        grade: "CGPA: 6.38",
        description:
          "Focused on software development, data structures, and web technologies while building real-world applications.",
      },
    ],
    []
  );
  return (
    <section id="education" className="py-20 section-fade-in w-full">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold font-['Orbitron'] mb-6 text-gradient">
            Education
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          {educationData.map((edu, index) => (
            <motion.div
              key={edu.institution}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card className="skill-card h-full">
                <CardHeader>
                  <CardTitle className="text-xl font-['Orbitron'] text-primary">
                    {edu.degree}
                  </CardTitle>
                  <CardDescription className="text-accent">
                    {edu.institution}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {edu.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">{edu.period}</span>
                    <Badge variant="outline" className="neon-border">
                      {edu.grade}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default memo(Education);
