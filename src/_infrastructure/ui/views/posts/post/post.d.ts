import { PostView } from '@internal/__adapter/post/post.view'

export type PostProps = {
  url: PostView['url']
  title: PostView['title']
  body: PostView['body']
  date: PostView['dateString']
}
