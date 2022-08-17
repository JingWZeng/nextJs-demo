import Link from "next/link";
import Head from "next/Head";
import Layout from "../../components/layout";
export default function FirstPost(){
    return<Layout>
        <Head>
            <title>first post</title>
        </Head>
    <Link href="/">
        go to home
    </Link>
    </Layout>
}