import React from "react";

export default function ProjectDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  return <div>ProjectDetailPage {params.slug}</div>;
}
