import { supabase } from "../../supabase";
import { unstable_noStore as noStore } from "next/cache";

export const GetProjects = async () => {
  noStore();
  try {
    const { data: projects, error } = await supabase
      .from("projects")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) return [];

    return projects;
  } catch (error) {
    throw error;
  }
};

export const GetProjectsDetail = async (slug: string) => {
  noStore();
  try {
    const { data: project_detail, error } = await supabase
      .from("projects")
      .select("*")
      .eq("slug", slug)
      .single();

    if (error) return null;

    return project_detail;
  } catch (error) {
    console.log("Error Fetching Program Detail, Cause: ", error);
  }
};
