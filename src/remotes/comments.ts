import { api } from '@remotes/supabaseClient';

export interface Comment {
  id: number;
  feedId: number;
  message: string;
  createAt: string;
}

/*export async function getComments(feedId: number) {
  const { data } = await api
    .from<Comment>('comments')
    .select('id, feedId, message, createAt')
    .eq('feedId', feedId)
    .order('id', { ascending: false });

  return data;
}*/

export async function getComments(feedId: number) {
  const { data } = await api
    .from<Comment>('comments')
    .select('id, feedId, message, createAt')
    .eq('feedId', feedId)
    .order('id', { ascending: false })
    .catch(() => {
      return { data: [{ id: null, feedId: feedId, message: '', createAt: null } as Comment] }; // 빈 형태의 Comment 타입 데이터 반환
    });

  return data;
}

export async function addComment(
  feedId: number,
  { message }: Pick<Comment, 'message'>
) {
  return api.from<Comment>('comments').upsert({
    feedId,
    message,
    createAt: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString(),
  });
}
