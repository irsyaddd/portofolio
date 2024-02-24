import { supabase } from "../../supabase";
import { unstable_noStore as noStore } from "next/cache";

export async function getProjects() {
  noStore();
  try {
    const { data: posts, error } = await supabase
      .from("posts")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) return [];

    return posts;
  } catch (error) {
    throw error;
  }
}
