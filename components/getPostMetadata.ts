import fs from 'fs'
import matter from 'gray-matter'
import { PostMetadata } from './PostMetadata'

const getPostMetadata = (): PostMetadata[] => {
  const folder = 'posts/'
  const files = fs.readdirSync(folder)
  const markdownPosts = files.filter((file) => file.endsWith(".md"))

  // get gray-metter data from earch file.
  const posts = markdownPosts.map((fileName) => {
    const fileContents = fs.readFileSync(`posts/${fileName}`, "utf8")
    const matterResult = matter(fileContents)
    return {
      title: matterResult.data.title,
      date: matterResult.data.date,
      subtitle: matterResult.data.subtitle,
      author: matterResult.data.author,
      badge: matterResult.data.badge,
      slug: fileName.replace(".md", ""),
    }
  })
  return posts
}

export default getPostMetadata
