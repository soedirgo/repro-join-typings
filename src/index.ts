import { createClient } from "@supabase/supabase-js";
import { Database } from "./database.types";

const supabase = createClient<Database>("", "");
(async () => {
  const { data, error } = await supabase
    .from("reports")
    .select(
      `
      id,
      created_at,
      created_by:employees!report_created_by_fkey(id,full_name)
    `,
    )
    .eq("id", 1)
    .limit(1)
    .single()
    .throwOnError();
  console.log(data, error);
})();
