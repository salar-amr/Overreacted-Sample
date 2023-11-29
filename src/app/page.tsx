import { container } from 'tsyringe'

import Posts from '@internal/_infrastructure/ui/views/posts'
import { PostsStateManager } from '@internal/_infrastructure/ui/views/posts/posts.state'

export default async function PostsPage() {
  const postSatateManager = container.resolve(PostsStateManager)
  await postSatateManager.init()

  return <Posts />
}
