"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Code, Cpu, Globe, Smartphone } from "lucide-react";
import { motion } from "framer-motion";

export function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-28 bg-gradient-to-b from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-950 cursor-default">
      <div className="container px-6 md:px-12">
        <div className="flex flex-col items-center justify-center text-center space-y-6">
          <motion.div 
            className="space-y-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl text-primary">
              About Me
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground md:text-xl">
            I'm a B.Tech graduate from IIT Bombay with a passion for building innovative software solutions across multiple platforms.
            </p>
          </motion.div>
        </div>

        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 py-16 md:grid-cols-2 lg:grid-cols-4">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
            >
              <Card className="bg-white/60 dark:bg-black/40 backdrop-blur-lg shadow-xl rounded-2xl border border-white/10 hover:shadow-2xl transition-shadow">
                <CardContent className="flex flex-col items-center justify-center p-8 space-y-4">
                  <skill.icon className="h-14 w-14 text-primary" />
                  <h3 className="text-xl font-semibold">{skill.title}</h3>
                  <p className="text-center text-sm text-muted-foreground">{skill.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="mx-auto max-w-3xl text-center space-y-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-muted-foreground text-lg">

            I'm currently working as an iOS & Android Developer and Software Development Engineer at Blinkit, passionate about building smooth, high-performance mobile experiences. I love turning ideas into real, functional apps that people enjoy using.
          </p>
          <p className="text-muted-foreground text-lg">
          I work with Swift and UIKit for iOS development and Kotlin for Android. I also have experience across the full stack with React, Angular, Node.js, and more. For me, coding isn’t just about writing lines of code—it’s about solving real problems, making apps intuitive, and ensuring everything runs efficiently.
          </p>
          <p className="text-muted-foreground text-lg">
          I’m always learning, improving workflows, and exploring new ways to build better and smarter applications. At the end of the day, I just love creating things that make an impact.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

const skills = [
  {
    title: "Web Development",
    description: "MEAN & MERN Stack, React, Angular, Node.js, Express",
    icon: Globe,
  },
  {
    title: "iOS Development",
    description: "Swift, UIKit, TableView, CollectionView, Animations",
    icon: Smartphone,
  },
  {
    title: "Android Development",
    description: "Java, Kotlin, RecyclerView, Data Binding, Google Maps API",
    icon: Smartphone,
  },
  {
    title: "Backend Development",
    description: "Node.js, Express, Django, MongoDB, AWS",
    icon: Code,
  },
];
