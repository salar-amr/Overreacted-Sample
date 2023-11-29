import type { PostEntity } from './post.entity'

export interface PostRepository {
  listPosts(): Promise<PostEntity[]>
  getPost(id: PostEntity['id']): Promise<PostEntity>
}
