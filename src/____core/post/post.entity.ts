import type { Post } from './post.type'

export class PostEntity {
  private constructor(
    private readonly id: number,
    private readonly title: string,
    private readonly body: string
  ) {}

  static toEntity(properties: Post): PostEntity {
    const { id, title, body } = properties
    return new PostEntity(id, title, body)
  }

  get properties(): Post {
    return {
      id: this.id,
      title: this.title,
      body: this.body
    }
  }
}
