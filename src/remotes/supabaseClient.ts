import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

//if (supabaseUrl == null || supabaseAnonKey == null) {
//  throw Error(
//    `[Supabase] Failed initialize client -> supabaseUrl: ${supabaseUrl} / supabaseAnonKey: ${supabaseAnonKey}`
//  );
//}

//export const api = createClient(supabaseUrl, supabaseAnonKey);
let api;

if (supabaseUrl && supabaseAnonKey) {
  api = createClient(supabaseUrl, supabaseAnonKey);
} else {
  console.warn('Supabase 클라이언트 초기화 실패: URL 또는 키가 없습니다.');
}

export { api };