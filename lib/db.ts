import supabase from "./supabase";

export async function getAllReceipts() {
  const { data, error } = await supabase
    .from("submissions")
    .select("id, title, summary, created_at")
    .eq("status", "approved")
    .order("created_at", { ascending: false });

  return data ?? [];
}
/**
 * 
 * @param caseId - uuid in db to lookup
 * @returns 
 */
export async function getReceipt({ caseId }: { caseId: string }) {
    const { data, error } = await supabase
    .from("submissions")
    .select("id, title, summary, quotes, tags, sources, opinion, submitted_by, created_at")
    .eq("id", caseId);

    return data ?? [];
}
