import { supabase } from "../../supabase";

export async function getProjects() {
  try {
    const { data: posts, error } = await supabase.from("posts").select("*");

    if (error) throw error.message;

    return posts;
  } catch (error) {
    console.log("Error Fetching Projects ", error);
    return [];
  }
}
