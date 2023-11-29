import { PostEntity } from '@internal/____core/post/post.entity'
import type { Post } from '@internal/____core/post/post.type'
import type { DTO } from '@internal/___resource/_internal/dto'

export class PostDto implements DTO<PostEntity> {
  constructor(private readonly post: Post) {}
  toDomain(): PostEntity {
    return PostEntity.toEntity(this.post)
  }
}
