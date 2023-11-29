import { container } from 'tsyringe'

import Post from '@internal/_infrastructure/ui/views/post'
import { PostStateManager } from '@internal/_infrastructure/ui/views/post/post.state'

export default async function PostPage({
  params: { id }
}: {
  params: { id: string }
}) {
  const postSatateManager = container.resolve(PostStateManager)
  await postSatateManager.init(id)

  return <Post />
}
