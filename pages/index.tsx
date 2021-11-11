import getSortedPostsData from '../lib/posts'
import Home, { HomeProps } from '../components/home'
import { GetStaticProps } from 'next'
const HomePage: React.FunctionComponent<HomeProps> = ({ posts }) => {
  return (
    <Home posts={posts} />
  )
}

export const getStaticProps: GetStaticProps = async context => {
  const posts = getSortedPostsData()
  return {
    props: {
      posts
    }
  }
}

export default Home
