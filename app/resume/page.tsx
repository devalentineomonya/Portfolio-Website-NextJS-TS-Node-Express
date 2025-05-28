import Link from "next/link"
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Download, FileText } from "lucide-react";
import PageHeader from "@/components/shared/page-header";

export default function ResumePage() {
  return (
    <div className=" bg-background my-16 px-4">
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <PageHeader
            title="Experience"
            description="A detailed overview of my professional journey, showcasing my roles, responsibilities, and achievements across various positions."
          />
          <Button className="flex items-center gap-2">
            <Link  className="flex items-center gap-x-2 justify-center" target="_black" href="https://v1.devalentine.me/resume.pdf">
            <Download className="h-4 w-4" />
            <span>Download Resume</span>
</Link>
          </Button>
        </div>

        <Card>
          <CardHeader>
            <div className="flex flex-col md:flex-row justify-between md:items-center gap-2">
              <div className="space-y-1">
                <CardTitle>Teach2Give</CardTitle>
                <CardDescription>
                  Software Engineering Attache . May 2025 - Present
                </CardDescription>
              </div>
              <Badge variant="outline" className="w-fit">
                Current
              </Badge>
            </div>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
            <p>
              Participating in training as an Attache, learning and contributing
              to the development and maintenance of web applications. Key areas
              of learning and responsibilities include:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <span className="font-medium">Full-Stack Development:</span>{" "}
                Gaining experience in building and maintaining scalable
                applications using{" "}
                <Badge
                  variant="secondary"
                  className="font-mono text-foreground"
                >
                  React
                </Badge>
                ,{" "}
                <Badge
                  variant="secondary"
                  className="font-mono text-foreground"
                >
                  TanStack Router
                </Badge>
                , and{" "}
                <Badge
                  variant="secondary"
                  className="font-mono text-foreground"
                >
                  NestJS
                </Badge>
                .
              </li>
              <li>
                <span className="font-medium">Database Management:</span>{" "}
                Learning to leverage{" "}
                <Badge
                  variant="secondary"
                  className="font-mono text-foreground"
                >
                  PostgreSQL
                </Badge>{" "}
                and{" "}
                <Badge
                  variant="secondary"
                  className="font-mono text-foreground"
                >
                  Redis
                </Badge>{" "}
                for efficient data storage and caching solutions.
              </li>
              <li>
                <span className="font-medium">Containerization:</span> Exploring
                application environments using{" "}
                <Badge
                  variant="secondary"
                  className="font-mono text-foreground"
                >
                  Docker
                </Badge>
                .
              </li>
              <li>
                <span className="font-medium">Version Control & CI/CD:</span>{" "}
                Collaborating with the team using{" "}
                <Badge
                  variant="secondary"
                  className="font-mono text-foreground"
                >
                  GitHub
                </Badge>{" "}
                for version control and learning to implement CI/CD pipelines.
              </li>
              <li>
                <span className="font-medium">Collaboration:</span> Working
                closely with cross-functional teams to understand the process of
                implementing new features and improving existing functionality.
              </li>
              <li>
                <span className="font-medium">Public Speaking:</span> Enhancing
                communication skills by presenting ideas and solutions
                effectively in team meetings and discussions.
              </li>
            </ul>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <div className="flex flex-col md:flex-row justify-between md:items-center gap-2">
              <div>
                <CardTitle>Godan Info</CardTitle>
                <CardDescription>
                  Remote Internship, Frontend Web Developer, January 2025 -
                  April 2025
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
            <p>
              Collaborated in building and optimizing user interfaces with{" "}
              <Badge variant="secondary" className="font-mono text-foreground">
                React.js
              </Badge>{" "}
              and{" "}
              <Badge variant="secondary" className="font-mono text-foreground">
                Ant Design
              </Badge>
              , enhancing performance and user experience. Contributed to
              team-driven projects and enjoyed working in a collaborative,
              fast-paced environment.
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <span className="font-medium">Smip Users Dashboard:</span>{" "}
                Developed role-based panels with user-friendly interfaces for
                investors, borrowers, and admins, improving user experience.
              </li>
              <li>
                <span className="font-medium">Workflow Optimization:</span>{" "}
                Streamlined submission and review workflows to reduce project
                approval times by 40%, enhancing operational efficiency.
              </li>
              <li>
                <span className="font-medium">User Engagement:</span> Optimized
                platform features to increase user engagement by 25%, boosting
                platform retention.
              </li>
              <li>
                <span className="font-medium">Continuous Improvements:</span>{" "}
                Implemented continuous improvements that led to a 95% project
                success rate, ensuring high project completion.
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex flex-col md:flex-row justify-between md:items-center gap-2">
              <div>
                <CardTitle>Freelance</CardTitle>
                <CardDescription>
                  Software Engineering Freelancer, September 2023 - Present
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
            <p>
              As a freelance software engineer, I specialize in building robust
              and scalable web applications. My work involves leveraging modern
              technologies and tools to deliver high-quality solutions. Key
              areas of expertise include:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <span className="font-medium">Backend Development:</span>{" "}
                Developing and maintaining backend systems using{" "}
                <Badge
                  variant="secondary"
                  className="font-mono text-foreground"
                >
                  NestJS
                </Badge>
                ,{" "}
                <Badge
                  variant="secondary"
                  className="font-mono text-foreground"
                >
                  Golang
                </Badge>
                , and other modern frameworks.
              </li>
              <li>
                <span className="font-medium">Containerization:</span> Utilizing{" "}
                <Badge
                  variant="secondary"
                  className="font-mono text-foreground"
                >
                  Docker
                </Badge>{" "}
                to create portable and efficient application environments.
              </li>
              <li>
                <span className="font-medium">Database Management:</span>{" "}
                Working with{" "}
                <Badge
                  variant="secondary"
                  className="font-mono text-foreground"
                >
                  PostgreSQL
                </Badge>{" "}
                for reliable and scalable data storage solutions.
              </li>
              <li>
                <span className="font-medium">Web Development:</span> Building
                full-stack applications with essential web technologies and
                frameworks.
              </li>
              <li>
                <span className="font-medium">Client Collaboration:</span>{" "}
                Partnering with clients to understand their requirements and
                deliver tailored solutions that meet their business goals.
              </li>
              <li>
                <span className="font-medium">Continuous Learning:</span>{" "}
                Staying updated with the latest tools and technologies to ensure
                the delivery of cutting-edge solutions.
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
