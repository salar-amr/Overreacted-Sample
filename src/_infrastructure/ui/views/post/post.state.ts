import { Lifecycle, injectable, scoped } from 'tsyringe'

import { PostResource } from '@internal/___resource/post/post.resource'
import { PostView } from '@internal/__adapter/post/post.view'

@injectable()
@scoped(Lifecycle.ContainerScoped)
export class PostStateManager {
  post: PostView | null
  constructor(private postResource: PostResource) {
    this.post = null
  }

  async init(id: string) {
    const post = await this.postResource.getPost(+id)
    const postView = PostView.fromDomain(post)
    this.post = postView
  }
}
