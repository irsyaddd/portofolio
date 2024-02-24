import { supabase } from "../../supabase";
import { unstable_noStore as noStore } from "next/cache";

export async function getProjects() {
  noStore();
  try {
    const { data: posts, error } = await supabase.from("posts").select("*");

    if (error) throw error.message;

    return posts;
  } catch (error) {
    console.log("Error Fetching Projects ", error);
    return [];
  }
}
