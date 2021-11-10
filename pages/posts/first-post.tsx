import { FunctionComponent } from "react";
import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'
import Layout from '../../components/layout'

const FirstPost: FunctionComponent = () => {
    return (
        <Layout>
            <Head>
                <title>

                    First Post
                </title>
            </Head>
            <h1>First Post</h1>
            <div>
                <Image
                    src="/images/profile.jpg"
                    height={300}
                    width={300}
                    alt="Your name"
                />
            </div>
            <h2>
                <Link href="/">
                    <a>Back to home</a>
                </Link>
            </h2>
        </Layout>
    )
}
export default FirstPost