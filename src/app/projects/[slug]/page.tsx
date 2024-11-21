import Tiptap from "@/components/tiptap/tiptap";
import { Button } from "@/components/ui/button";
import Link from "next/link";

// export default async function ProjectDetailPage({
//   params,
// }: {
//   params: { slug: string };
// }) {
//   const data = await GetProjectsDetail(params.slug);

//   if (!data) throw new Error("Error Fetching Product Detail.");

//   return (
//     <div className="flex flex-col items-start gap-4">
//       <p>
//         The detail of{" "}
//         <div className="font-bold text-purple-400 inline-block">
//           <Tiptap content={data.title} />
//         </div>{" "}
//         is in progress. Please come back later 😬🙏🏻
//       </p>
//       <Link href={"/"}>
//         <Button variant={"secondary"}>Go Back</Button>
//       </Link>
//     </div>
//   );
// }

import React from "react";

export default function page() {
  return <div>page</div>;
}
