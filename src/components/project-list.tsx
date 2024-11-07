import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { GetProjects } from "@/lib/action";
import { cn, formatDate } from "@/lib/utils";
import { ImageIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Tiptap from "./tiptap/tiptap";

export default async function ProjectList({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  const projects = await GetProjects();

  return (
    <div className={cn(className, "space-y-7")} {...props}>
      <ProjectContainer>
        {projects.map((project, index) => (
          <Link key={index} href={`/projects/${project.slug}`}>
            <Card className="dark:bg-zinc-900 rounded-none shadow-none">
              <CardContent className="h-64 flex items-center justify-center">
                {project.thumbnail ? (
                  <Image alt={project.title} src={project.thumbnail} />
                ) : (
                  <ImageIcon className="h-14 w-14 opacity-20" />
                )}
              </CardContent>
              <CardFooter className="flex-col items-start space-y-1">
                <div className="text-sm">
                  <Tiptap content={project.title} />
                </div>
                <p className="text-xs font-mono tracking-tight">
                  {formatDate(project.created_at, "showcase")}
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
    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1" {...props}>
      {children}
    </div>
  );
}
