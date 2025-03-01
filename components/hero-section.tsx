"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Github, Linkedin } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      <div className="container px-4 md:px-6">
        <div className="grid gap-8 lg:grid-cols-[1fr_450px] xl:grid-cols-[1fr_600px]">
          <motion.div
            className="flex flex-col justify-center space-y-5"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="space-y-3">
              <h1 className="text-4xl font-extrabold tracking-tighter sm:text-5xl xl:text-6xl">
                Hi, I'm <span className="text-primary">Kavan Vavadiya</span>
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-lg">
                Software Developer specializing in iOS, Android, and Web Development
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button asChild className="group">
                <Link href="#contact">
                  Contact Me
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button variant="outline" asChild className="group">
                <a href="/resume.pdf">
                  Download Resume
                  <Download className="ml-2 h-4 w-4 transition-transform group-hover:translate-y-1" />
                </a>
              </Button>
            </div>
            <div className="flex gap-4">
              <Button variant="ghost" size="icon" asChild>
                <a href="https://github.com/kavanvavadiya" target="_blank" rel="noopener noreferrer">
                  <Github className="h-6 w-6 text-gray-600 hover:text-black transition-colors" />
                  <span className="sr-only">GitHub</span>
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="https://linkedin.com/in/kavanvavadiya" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-6 w-6 text-gray-600 hover:text-blue-600 transition-colors" />
                  <span className="sr-only">LinkedIn</span>
                </a>
              </Button>
            </div>
          </motion.div>
          <motion.div
            className="flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative aspect-square overflow-hidden rounded-full border-4 border-primary/10 bg-muted shadow-lg">
              <img
                src="https://media.licdn.com/dms/image/v2/D4D03AQEqqpqFZJt9eA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1718953913659?e=1746057600&v=beta&t=IZhO3-Im4vIm3gGFR4C98Wix90nDpcob7dnup9Fx9yw"
                alt="Kavan Vavadiya"
                width={500}
                height={500}
                className="object-cover rounded-full"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
