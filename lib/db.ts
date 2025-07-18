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

    return data ?? null;
}
/**
 * Uses postgresql rpc function to fuzzy search the db
 * @param text - string to fuzzy search the database
 * @returns data | null
 */
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
/**
 * Get all cases in the database
 * @returns data | null
 */
export async function getCases() {
  const { data, error } = await supabase
    .from("cases")
    .select("id, title, summary, opinion");

    return data ?? [];
}
/**
 * 
 * @param id - uuid in database
 * @returns data: {
 *  title: any;
 *  summary: any;
 *  opinion: any; }[ ] | null
 */
export async function getCase({ id }: { id: string }) {
  const { data, error } = await supabase
    .from("cases")
    .select("title, summary, opinion")
    .eq("id", id)
    .single();

    return data ?? null;
}
/**
 * 
 * @param id - uuid in db to get agency
 * @returns data: { id: any; name: any; description: any; }[] | null
 */
export async function getAgencies() {
  const { data, error } = await supabase
    .from("agencies")
    .select("id, name, description");

  return data ?? [];
}
/**
 * Returns an agencies name and description
 * @param id - uuid in the database
 * @returns data: { name: any; description: any; } | null
 */
export async function getAgency({ id }: { id: string }) {
  const { data, error } = await supabase
    .from("agencies")
    .select("name, description")
    .eq("id", id)
    .single();

  return data ?? "";
}