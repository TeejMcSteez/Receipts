import supabase from "./supabase";

/**
 * Returns all approved submissions
 */
export async function getAllReceipts() {
  const { data, error } = await supabase
    .from("submissions")
    .select("id, title, summary, created_at")
    .eq("status", "approved")
    .order("created_at", { ascending: false });

  return data ?? [];
}
/**
 * Returns a specific case
 * @param caseId - uuid in db to lookup
 */
export async function getReceipt({ caseId }: { caseId: string }) {
    const { data, error } = await supabase
    .from("submissions")
    .select("id, title, summary, quotes, tags, sources, opinion, submitted_by, created_at")
    .eq("id", caseId)
    .maybeSingle();

    return data ?? "";
}

export async function getFuzzySearch({ text }: {text: string}) {
  const { data, error } = await supabase.rpc("smart_fuzzy_search", {
    query: text,
    scope: null
  });
  
  if (error) {
    return { message: error.message }
  } else {
    return data ?? null; // If data is anything falsey return null
  }
}
