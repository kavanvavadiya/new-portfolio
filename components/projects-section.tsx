"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    title: "Inter IIT App",
    description: [
      "Implemented robust email OTP authentication for secure access.",
      "Created Node.js backend with a separate admin panel for streamlined functionality.",
      "Used AWS services like EC2, S3, and CloudWatch for scalable deployment."
    ],
    tech: ["Node.js", "AWS", "EC2", "S3"],
    thumbnail: "projects/interiitapp.jpg",
    // codeLink: "#",
    // demoLink: "#",
  },
  {
    title: "Sports App",
    description: [
      "Developed a fully responsive web app using the MEAN stack.",
      "Launched GC and Inter-IIT components for live score tracking.",
      "Implemented SSO login in Express for seamless authentication."
    ],
    tech: ["MEAN Stack", "Express", "SSO"],
    thumbnail: "projects/sportsapp.png",
    // codeLink: "#",
    // demoLink: "#",
  },
  {
    title: "E-Commerce Site",
    description: [
      "Built a front-end using React Native with reusable UI components.",
      "Implemented React Router for smooth client-side navigation.",
      "Used React functional components and hooks to optimize performance."
    ],
    tech: ["React Native", "React Router", "UI Components"],
    thumbnail: "projects/ecom.jpg",
    // codeLink: "#",
    // demoLink: "#",
  },
  {
    title: "Social Media Website",
    description: [
      "Developed a full-stack social media platform using the MERN stack.",
      "Implemented real-time chat and notifications using Socket.io.",
      "Enhanced security and performance with authentication tokens and error handling."
    ],
    tech: ["MERN Stack", "Socket.io", "Authentication"],
    thumbnail: "projects/socialmedia.png",
    // codeLink: "#",
    // demoLink: "#",
  },
  {
    title: "My Notes Web App",
    description: [
      "Developed a responsive front-end using React with reusable components.",
      "Built Django RESTful APIs for seamless CRUD operations on notes.",
      "Implemented React Hooks for state management and efficient navigation."
    ],
    tech: ["React", "Django", "REST API"],
    thumbnail: "projects/notes.png",
    // codeLink: "#",
    // demoLink: "#",
  },
  {
    title: "Modern Helping Aid",
    description: [
      "Integrated object detection and distance sensors with voice alerts.",
      "Developed a web interface to control a camera frame using LiDAR for distance measurement."
    ],
    tech: ["OpenCV", "NumPy", "LiDAR"],
    thumbnail: "projects/helpingaid.png",
    // codeLink: "#",
    // demoLink: "#",
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="py-16 md:py-24 bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Projects</h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            A showcase of my technical projects and contributions.
          </p>
        </div>
        <div className="mx-auto grid max-w-6xl grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project }) {
  return (
    <Card className="flex flex-col overflow-hidden">
      <div className="w-full h-56 relative">
        <Image
          src={project.thumbnail}
          alt={project.title}
          fill
          style={{ objectFit: "fill" }}
          className="rounded-t-lg"
        />
      </div>
      <CardHeader>
        <CardTitle>{project.title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-1">
        <ul className="text-sm text-muted-foreground list-disc pl-5">
          {project.description.map((point, idx) => (
            <li key={idx}>{point}</li>
          ))}
        </ul>
        <div className="flex flex-wrap gap-1 mt-2">
          {project.tech.map((tech, idx) => (
            <Badge key={idx} variant="outline">
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        {project.codeLink && (
          <Button variant="ghost" size="sm" className="gap-1" asChild>
            <a href={project.codeLink} target="_blank" rel="noopener noreferrer">
              <Github className="h-4 w-4" />
              Code
            </a>
          </Button>
        )}
        {project.demoLink && (
          <Button variant="ghost" size="sm" className="gap-1" asChild>
            <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="h-4 w-4" />
              Demo
            </a>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}