// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://ukmcmbrhqwqmtagmhjcv.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVrbWNtYnJocXdxbXRhZ21oamN2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzc5OTAwNjksImV4cCI6MjA1MzU2NjA2OX0.QWqrafp3Jpr4s9C7YTgm9NLR6Ca4G7SeIUx_D2rDSFc";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);