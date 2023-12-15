import Link from "next/link"
import { PostMetadata } from "./PostMetadata"

const PostPreview = (props: PostMetadata) => {
  return <>
    <article className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1">
      <div className="p-6">
        <div className="flex items-baseline gap-4">
          <p className="text-gray-500 text-sm">
            {props.date}
          </p>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            {props.badge}
          </span>
        </div>
        <Link href={`/posts/${props.slug}`}>
          <h2 className="font-bold text-xl mb-2 transition duration-300 hover:underline">{props.title}</h2>
        </Link>
        <p className="text-gray-600">
          {props.subtitle}
        </p>
      </div>
    </article>
  </>
}

export default PostPreview
