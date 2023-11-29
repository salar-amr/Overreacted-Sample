import { Lifecycle, injectable, scoped } from 'tsyringe'

import { PostResource } from '@internal/___resource/post/post.resource'
import { PostView } from '@internal/__adapter/post/post.view'

@injectable()
@scoped(Lifecycle.ContainerScoped)
export class PostsStateManager {
  posts: PostView[]
  constructor(private postResource: PostResource) {
    this.posts = []
  }

  async init() {
    const posts = await this.postResource.listPosts()
    const postViews = posts.map((itm) => PostView.fromDomain(itm))
    postViews.sort((a, b) => (a.date > b.date ? -1 : 1))
    this.posts = postViews
  }
}
