import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!, // ! = Trust me bro
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export default supabase