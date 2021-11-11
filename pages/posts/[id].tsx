import Layout from '../../components/layout'
import { getAllPostIds, getPostData } from '../../lib/posts'
import { BlogPost } from '../../types/blog'
import { GetStaticProps, GetStaticPaths, GetServerSideProps } from 'next'
import Head from 'next/head'
import Date from '../../components/date'
import utilStyles from '../../styles/utils.module.css'

type PostProps = {
    postData: BlogPost
}
const Post: React.FunctionComponent<PostProps> = ({ postData }) => {
    return (
        <Layout>
            <Head>
                <title>{postData.title}</title>
            </Head>
            <article>
                <h1 className={utilStyles.headingXl}>{postData.title}</h1>
                <div className={utilStyles.lightText}>
                    <Date dateString={postData.date} />
                </div>
                <div dangerouslySetInnerHTML={{ __html: postData.contentHtml ?? "" }} />
            </article>
        </Layout>
    )
}


export const getStaticProps: GetStaticProps = async (context) => {
    const { id } = context.params as { id: string }
    const postData = await getPostData(id)
    return {
        props: {
            postData
        }
    }
}

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = getAllPostIds()

    console.log({ paths })
    return {
        paths,
        fallback: false
    }
}

export default Post