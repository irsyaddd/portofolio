import { getProjectsDetail } from "@/lib/action";
import { formatDate } from "@/lib/utils";
import React from "react";

export default async function ProjectDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const data = await getProjectsDetail(params.slug);

  if (!data) throw new Error("Error Fetching Product Detail.");

  return (
    <div className="flex h-screen items-center justify-center">
      <p>
        The detail of {data.title} is in progress. Please come back later 😬🙏🏻
      </p>
    </div>
  );
}
