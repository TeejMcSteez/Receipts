import supabase from "./supabase";

export async function getAllReceipts() {
  const { data, error } = await supabase
    .from("submissions")
    .select("id, title, summary, created_at")
    .eq("status", "approved")
    .order("created_at", { ascending: false });

  return data ?? [];
}
