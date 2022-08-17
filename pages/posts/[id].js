import Layout from "../../components/layout";
import {getAllPostIds,getPostData} from "../../lib/posts";
import Head from "next/head";
import Date from "../../components/date";

export  default function Post({postData}){
    return <Layout>
        <Head>
            <title>{postData.title}</title>
        </Head>
        {postData.title}
        <br />
        {postData.id}
        <br />
        <Date dateString={postData.date}></Date>
        <br/>
        <div dangerouslySetInnerHTML={{__html:postData.contentHtml}}></div>
    </Layout>
}

export async function getStaticPaths(){
const paths = getAllPostIds()
    console.log(paths)
    return {
         paths,
        fallback:false
    }
}

export async function getStaticProps(data) {
    //  这里的data就是getStaticPaths返回的数据
    const postData = await getPostData(data.params.id)
    return {
        // 把该数据塞进了props属性中
        props:{
            postData
        }
    }
}