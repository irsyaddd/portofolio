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
    <div>
      <h1>{data.title}</h1>
      <h3>{formatDate(data.created_at, "detail")}</h3>
      <p>{data.content}</p>
      <p>{data.category ?? "undefined"}</p>
    </div>
  );
}
