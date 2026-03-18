// packages/shared-services/index.ts
export * from './src/config/supabase';
export * from './src/types/database';
export { createAuthAPI } from './src/api/auth';  // ← Add this line!
export type { SignUpData, SignInData } from './src/api/auth';  // ← And export the types