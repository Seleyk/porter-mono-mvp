import { createClient } from '@supabase/supabase-js';

// Factory function that apps will use
export const createSupabaseClient = (url: string, key: string) => {
  return createClient(url, key);
};

// Don't create a default client here since we don't have access to env vars