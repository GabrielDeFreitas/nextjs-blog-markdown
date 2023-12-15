import getPostMetadata from '../../components/getPostMetadata'
import PostPreview from '../../components/PostPreview'

const HomePage = () => {
  const postMetadata = getPostMetadata()
  const postPreview = postMetadata.map((post) => (
    <PostPreview
      key={post.slug}
      {...post}
    />
  ))

  return <main className="mx-auto max-w-2xl px-6 grid grid-cols-1 md:grid-cols-2 gap-4">
    {postPreview}
  </main>
}

export default HomePage
