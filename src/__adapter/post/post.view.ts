import { PostEntity } from '@internal/____core/post/post.entity'

export class PostView {
  private constructor(
    public id: number,
    public title: string,
    public body: string,
    public date: Date
  ) {}

  static fromDomain(p: PostEntity): PostView {
    const { id, title, body } = p.properties
    const currentDate = new Date()
    const date = new Date(currentDate.getFullYear(), currentDate.getMonth(), id)
    return new PostView(id, title, body, date)
  }

  get dateString() {
    return this.date.toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric'
    })
  }

  get url() {
    return `/${this.id}`
  }
}
