"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";

export function SkillsSection() {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["JavaScript", "TypeScript", "Python", "Java", "Swift", "C++", "Go"],
    },
    {
      title: "Frontend Development",
      skills: ["React", "Angular", "Next.js", "HTML", "CSS", "Tailwind CSS", "React Native"],
    },
    {
      title: "Backend Development",
      skills: ["Node.js", "Express", "Django", "MongoDB", "MySQL", "RESTful APIs"],
    },
    {
      title: "Mobile Development",
      skills: ["iOS (Swift, UIKit)", "Android (Java, Kotlin)", "React Native"],
    },
    {
      title: "DevOps & Tools",
      skills: ["Git", "AWS", "Docker", "CI/CD", "Postman", "VS Code"],
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container px-4 md:px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Skills</h2>
          <p className="mx-auto mt-2 max-w-2xl text-muted-foreground md:text-lg">
            A collection of my technical expertise and tools I work with.
          </p>
        </div>
        
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <Card className="shadow-md transition-all hover:shadow-lg">
                <CardHeader>
                  <CardTitle className="text-lg font-semibold">{category.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge 
                        key={skillIndex} 
                        variant="secondary" 
                        className="px-3 py-1 text-sm font-medium transition hover:scale-105"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
