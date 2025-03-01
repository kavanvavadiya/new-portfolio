import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase } from "lucide-react";

export function ExperienceSection() {
  return (
    <section id="experience" className="py-16 md:py-24">
      <div className="container  mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Professional Experience</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              My journey in the tech industry so far.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12">
          <Card>
            <CardHeader className="flex flex-row items-start gap-4 pb-2">
              <Briefcase className="mt-1 h-5 w-5 text-primary" />
              <div className="grid gap-1">
                <CardTitle>iOS Developer Intern | Blinkit</CardTitle>
                <CardDescription>May 2024 - Jul 2024</CardDescription>
              </div>
              {/* <Badge className="ml-auto">Received Pre-Placement Offer</Badge> */}
            </CardHeader>
            <CardContent>
              <ul className="ml-6 list-disc text-muted-foreground">
                <li>Worked on a Save for Later feature using Swift and UIKit, optimizing TableView and CollectionView to efficiently handle large data sets, enhancing app performance and driving increased user engagement and repeat orders</li>
                <li>Designed intuitive animations for instant item removal and addition, creating a smoother and more engaging user experience</li>
                <li>Enhanced multi-screen navigation by implementing custom delegates, leading to smoother and more efficient transitions</li>
                <li>Used Go language to generate accurate output responses, ensuring distinct handling for Android and iOS platforms</li>
              </ul>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-start gap-4 pb-2">
              <Briefcase className="mt-1 h-5 w-5 text-primary" />
              <div className="grid gap-1">
                <CardTitle>Software Developer Intern | Codesis Technologies Pvt Ltd</CardTitle>
                <CardDescription>Jul 2023 - Aug 2023</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <p className="mb-2 text-sm text-muted-foreground">A creative company specializing in unique, scalable products with a focus on user experience and branding</p>
              <ul className="ml-6 list-disc text-muted-foreground">
                <li>Built custom admin panel in Django for efficient management and monitoring of Flivery app, a grocery delivery platform</li>
                <li>Implemented comprehensive Order form with CRUD features, enhancing user experience and order management</li>
                <li>Used prefetch functionality in views.js with APIs for faster asynchronous data retrieval for order-related actions</li>
              </ul>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-start gap-4 pb-2">
              <Briefcase className="mt-1 h-5 w-5 text-primary" />
              <div className="grid gap-1">
                <CardTitle>Android/C++ Developer Intern | MapIT.ai</CardTitle>
                <CardDescription>Jun 2023 - Jul 2023</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <p className="mb-2 text-sm text-muted-foreground">MapIT.ai is an entrepreneurial initiative by the students of IIT Bombay</p>
              <ul className="ml-6 list-disc text-muted-foreground">
                <li>Implemented Data Binding to improve code readability and connecting UI components and data models seamlessly</li>
                <li>Integrated Google Maps API into the application, enabling users to visualize and interact with maps, geolocation services</li>
                <li>Implemented RecyclerView for efficient handling of large datasets with minimal memory usage and smooth scrolling</li>
                <li>Actively participated in the app deployment process, working with the Play Store Console to prepare the application for release, including configuring release builds, managing app signing, and uploading app bundles or APKs</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}