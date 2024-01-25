import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { cn, formatDate } from "@/lib/utils";
import { ProjectListProps } from "@/types";
import React from "react";
import SectionTitle from "./section-title";
import Link from "next/link";

export default function ProjectList({
  projects,
  className,
  ...props
}: ProjectListProps & React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn(className, "space-y-7")} {...props}>
      <SectionTitle>Projects</SectionTitle>
      <ProjectContainer>
        {projects.map((project, index) => (
          <Link key={index} href={"/"}>
            <Card className="dark:bg-zinc-900 rounded-none">
              <CardContent className="h-64 flex items-center justify-center">
                {project.image}
              </CardContent>
              <CardFooter className="flex-col items-start space-y-1">
                <p className="text-sm">{project.title}</p>
                <p className="text-xs font-mono tracking-tight">
                  {formatDate(project.created_at)}
                </p>
              </CardFooter>
            </Card>
          </Link>
        ))}
      </ProjectContainer>
    </div>
  );
}

function ProjectContainer({
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
      {children}
    </div>
  );
}
