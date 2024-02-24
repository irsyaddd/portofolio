import React from "react";
import { Card, CardContent, CardFooter } from "./ui/card";
import { Skeleton } from "./ui/skeleton";

export function ProjectSkeleton() {
  return (
    <Card className="dark:bg-zinc-900 rounded-none shadow-none">
      <CardContent className="h-64 flex items-center justify-center"></CardContent>
      <CardFooter className="flex-col items-start space-y-1">
        <Skeleton className="h-5 w-28" />
        <Skeleton className="h-5 w-20" />
      </CardFooter>
    </Card>
  );
}

export function ProjectsCardSkeleton() {
  return (
    <div className="grid grid-cols-3">
      <ProjectSkeleton />
      <ProjectSkeleton />
      <ProjectSkeleton />
      <ProjectSkeleton />
      <ProjectSkeleton />
      <ProjectSkeleton />
    </div>
  );
}
