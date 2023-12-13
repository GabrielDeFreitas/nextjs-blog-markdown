import Link from "next/link"
import { PostMetadata } from "./PostMetadata"

const PostPreview = (props: PostMetadata) => {
  return <>
    <div className='border border-violet-600'>
      <Link href={`/posts/${props .slug}`}>
        <h2>{props .title}</h2>
      </Link>
        <p>{props .date}</p>
        <p>{props .subtitle}</p>
    </div>
  </>
}

export default PostPreview
