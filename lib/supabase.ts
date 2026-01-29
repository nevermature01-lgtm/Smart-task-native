import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://ryyrksntokrfxcemmzzl.supabase.co';
const supabaseAnonKey = 'sb_publishable_hRUeNMPkb1exHtkFsRsuNw_XQNGboep';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
