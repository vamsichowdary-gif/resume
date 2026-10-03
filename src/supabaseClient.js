import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://gumdjcckdnoscjpuepof.supabase.co";
// Paste your copied anon public key here:
const supabaseAnonKey = "sb_publishable_Kv2Maq-eSxJH8e3KvjfZ8g_Zy_QKAEM";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
