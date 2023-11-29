import { injectable } from 'tsyringe'

import { PostEntity } from '@internal/____core/post/post.entity'
import { PostRepository } from '@internal/____core/post/post.repository'
import { Post } from '@internal/____core/post/post.type'

import { HttpClient } from '../_global/http/http-client'

import { PostDto } from './dto/post.dto'

@injectable()
export class PostResource implements PostRepository {
  constructor(private httpClient: HttpClient) {}

  async listPosts(): Promise<PostEntity[]> {
    const data = await this.httpClient.get<Post[]>('/posts')
    return data.map((itm) => new PostDto(itm).toDomain())
  }

  async getPost(id: PostEntity['id']): Promise<PostEntity> {
    const data = await this.httpClient.get<Post>(`/posts/${id}`)
    return new PostDto(data).toDomain()
  }
}
