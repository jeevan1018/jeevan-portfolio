import { memo, useMemo } from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ExternalLink } from "lucide-react";

const Projects = () => {
  const projectsData = useMemo(
    () => [
      {
        title: "DHIORYA",
        description:
          "An AI-enabled school management system with attendance, exam tracking, fee management, and parent-teacher communication features.",
        tech: ["React.js", "Node.js", "MongoDB", "Tailwind CSS"],
        impact: "Streamlined school workflows and simplified academic operations.",
        link: "https://github.com/jeevan1018/dhiorya",
      },
      {
        title: "Instagram Clone",
        description:
          "A polished Instagram-style app with responsive feed browsing, post creation, likes, comments, and profile interactions.",
        tech: ["React.js", "Firebase", "Tailwind CSS", "JavaScript"],
        impact: "Built a clean social media experience focused on media sharing and engagement.",
        link: "https://github.com/jeevan1018/insta-app",
      },
      {
        title: "Cricbuzz",
        description:
          "A cricket score and news dashboard presenting match updates, team stats, and live commentary in a sleek interface.",
        tech: ["React.js", "API Integration", "CSS"],
        impact: "Delivered a user-friendly cricket follow-along experience with real-time updates.",
        link: "https://github.com/jeevan1018/cricbuzz",
      },
    ],
    []
  );
  return (
    <section id="projects" className="py-20 section-fade-in w-full">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold font-['Orbitron'] mb-6 text-gradient">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projectsData.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="project-card h-full">
                <CardHeader>
                  <CardTitle className="text-2xl font-['Orbitron'] text-primary">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-accent font-semibold">
                    {project.impact}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <Badge
                        key={tech}
                        variant="outline"
                        className="neon-border"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <a
                    href={project?.link}
                    target="_blank"
                    rel="noopener noreferer"
                    className="w-full"
                  >
                    <Button
                      variant="outline"
                      className="w-full neon-border cursor-pointer"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View Project
                    </Button>
                  </a>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default memo(Projects);
