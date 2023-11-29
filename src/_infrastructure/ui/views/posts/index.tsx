import { container } from 'tsyringe'

import Post from './post'
import styles from './posts.module.css'
import { PostsStateManager } from './posts.state'

export default function Posts() {
  const postsSatateManager = container.resolve(PostsStateManager)

  return (
    <main>
      <ul className={styles.list}>
        {postsSatateManager.posts.map((itm) => {
          return (
            <Post
              key={itm.id}
              title={itm.title}
              url={itm.url}
              body={itm.body}
              date={itm.dateString}
            />
          )
        })}
      </ul>
    </main>
  )
}
