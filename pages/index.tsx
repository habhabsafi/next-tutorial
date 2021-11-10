import getSortedPostsData from '../lib/posts'
import Home, { HomeProps } from '../components/home'

const HomePage: React.FunctionComponent<HomeProps> = ({ posts }) => {
  return (
    <Home posts={posts} />
  )
}


export async function getStaticProps() {
  const posts = getSortedPostsData()
  return {
    props: {
      posts
    }
  }
}
export default Home
