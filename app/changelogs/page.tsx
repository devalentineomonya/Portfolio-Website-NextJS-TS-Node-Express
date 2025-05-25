"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Link2, Search } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";

interface ChangelogEntry {
  version: string;
  date: string;
  link: string;
  description: string;
  changes?: string[];
}
const changelogData: ChangelogEntry[] = [
  {
    version: "4.0",
    date: "25 de May de 2025",
    link: "https://v4.devalentine.me",
    description:
      "Personal tech playground featuring experimental stacks, e-commerce integration, and enhanced professional showcase.",
    changes: [
      "Tech stack experimentation section",
      "Mini digital products shop",
      "Interactive tech library/resources",
      "Dedicated animated resume page",
      "Advanced CSS/SVG animations",
      "Personal blogging platform",
    ],
  },
  {
    version: "3.0",
    date: "5 de Jan de 2025",
    link: "https://v3.devalentine.me",
    description:
      "Professional showcase focused on project case studies and product demonstrations.",
    changes: [
      "Sanity CMS integration",
      "Framer Motion animations",
      "Project case studies",
      "Product demo section",
      "Interactive tech stack visualizer",
      "Enhanced performance metrics",
      "Dynamic content loading",
    ],
  },
  {
    version: "2.0",
    date: "26 de Jul de 2024",
    link: "https://v2.devalentine.me",
    description:
      "Modern redesign with component-driven architecture and advanced styling.",
    changes: [
      "shadcn/ui implementation",
      "Next.js App Router migration",
      "Dark/light mode toggle",
      "Advanced component library",
      "Interactive documentation",
      "Performance optimization",
      "Accessibility improvements",
    ],
  },
  {
    version: "1.0",
    date: "15 de Jan de 2024",
    link: "https://v1.devalentine.me",
    description:
      "Initial portfolio foundation with core functionality and basic presentation.",
    changes: [
      "React-based architecture",
      "Tailwind CSS styling",
      "Responsive hero section",
      "Project gallery",
      "Basic contact form",
      "Social media integration",
      "SEO optimization",
    ],
  },
];

export default function Changelog() {
  const [searchTerm, setSearchTerm] = useState("");
  const [expandedVersions, setExpandedVersions] = useState<string[]>([]);

  const filteredChangelog = changelogData.filter(
    (entry) =>
      entry.version.toLowerCase().includes(searchTerm.toLowerCase()) ||
      entry.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      entry.changes?.some((change) =>
        change.toLowerCase().includes(searchTerm.toLowerCase())
      )
  );

  return (
    <div className="my-16 px-4">
      <div className="mx-auto max-w-6xl space-y-8">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold text-foreground">Changelog</h1>
          <p className="text-muted-foreground">
            Track the evolution of my portfolio with detailed updates and
            improvements.
          </p>
        </div>

        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground " />
          <Input
            placeholder="Search changelog..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>

        <Accordion
          type="multiple"
          value={expandedVersions}
          onValueChange={setExpandedVersions}
          className="space-y-4"
        >
          {filteredChangelog.map((entry) => {
            const versionId = `version-${entry.version.replace(/\./g, "-")}`;

            return (
              <Card key={entry.version} className="border border-border py-0">
                <AccordionItem value={entry.version} className="border-none">
                  <AccordionTrigger className="hover:no-underline px-6">
                    <div className="flex items-center justify-between w-full">
                      <div className="flex items-center flex-col gap-3">
                        <div className="text-2xl font-medium">
                          Version {entry.version}
                        </div>
                        <span className="text-sm text-muted-foreground">
                          {entry.date}
                        </span>
                      </div>
                      <Link
                        href={entry.link}
                        target="_blank"
                        className="text-muted-foreground hover:text-primary ml-4 flex items-center gap-x-2"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Link2 className="size-5" />
                        <span>Link</span>
                      </Link>
                    </div>
                  </AccordionTrigger>

                  <AccordionContent id={versionId}>
                    <CardContent className="pt-0 px-6 pb-6">
                      <p className="text-foreground leading-relaxed mb-4">
                        {entry.description}
                      </p>

                      {entry.changes && (
                        <div className="space-y-2">
                          <h4 className="text-sm font-medium text-foreground">
                            Key Changes:
                          </h4>
                          <ul className="space-y-1">
                            {entry.changes.map((change, index) => (
                              <li
                                key={index}
                                className="text-sm text-muted-foreground flex items-start gap-2"
                              >
                                <span className="text-primary mt-1.5 h-1 w-1 rounded-full bg-current flex-shrink-0" />
                                {change}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </CardContent>
                  </AccordionContent>
                </AccordionItem>
              </Card>
            );
          })}
        </Accordion>

        {filteredChangelog.length === 0 && (
          <Card className="border border-border">
            <CardContent className="py-12 text-center">
              <p className="text-muted-foreground">
                No changelog entries found matching your search.
              </p>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
