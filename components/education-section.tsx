import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap } from "lucide-react";

export function EducationSection() {
  return (
    <section id="education" className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Education</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              My academic background and qualifications.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-3xl grid-cols-1 gap-6 py-12">
          <Card>
            <CardHeader className="flex flex-row items-start gap-4 pb-2">
              <GraduationCap className="mt-1 h-5 w-5 text-primary" />
              <div className="grid gap-1">
                <CardTitle>Bachelor of Technology in Mechanical Engineering</CardTitle>
                <p className="text-sm text-muted-foreground">Indian Institute of Technology Bombay</p>
              </div>
              <div className="ml-auto text-right">
                <p className="text-sm font-medium">2021 - 2025</p>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Pursuing B.Tech in Mechanical Engineering with a focus on software development and programming.
                Actively involved in various technical projects and extracurricular activities.
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-start gap-4 pb-2">
              <GraduationCap className="mt-1 h-5 w-5 text-primary" />
              <div className="grid gap-1">
                <CardTitle>Higher Secondary Education (12th)</CardTitle>
                <p className="text-sm text-muted-foreground">Vidyamandir Trust, GSEB</p>
              </div>
              <div className="ml-auto text-right">
                <p className="text-sm font-medium">2021</p>
                <p className="text-sm text-muted-foreground">Percentage: 90.46%</p>
              </div>
            </CardHeader>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-start gap-4 pb-2">
              <GraduationCap className="mt-1 h-5 w-5 text-primary" />
              <div className="grid gap-1">
                <CardTitle>Secondary Education (10th)</CardTitle>
                <p className="text-sm text-muted-foreground">Vidyamandir Trust, GSEB</p>
              </div>
              <div className="ml-auto text-right">
                <p className="text-sm font-medium">2019</p>
                <p className="text-sm text-muted-foreground">Percentage: 91.50%</p>
              </div>
            </CardHeader>
          </Card>
        </div>
      </div>
    </section>
  );
}