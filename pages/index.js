import Link from "next/link";
import Image from "next/image";
import Alert from "../components/alert";
import Date from "../components/date";

import {getSortedPostsData} from "../lib/posts";

// getStaticProps用于预渲染，只运用于服务器


// 在开发（npm run dev或yarn dev）中，getStaticProps在每个请求上运行。
// 在生产中，getStaticProps在构建时运行。
export async function getStaticProps(){
   const  allPostsData = getSortedPostsData()
   return {
       props:{
           allPostsData
       }
   }
}

export default function Home({allPostsData}) {
  return (
    <div>
        {/*<Link href="/posts/first-post">go to posts/first-post</Link>*/}
        {/*<Image src="/vercel.svg" width={100} height={100}/>*/}
        {/*<Alert type="success" someType="1231312"/>*/}
        <section>
            <h2>Blog</h2>
            <ul>
                {allPostsData.map(({id,date,title})=>{
                  return  <li key={id}>
                        <Link href={`/posts/${id}`}>
                            <a>{title}</a>
                        </Link>
                        <br/>
                        {id}
                        <br/>
                        <Date dateString={date}></Date>
                    </li>
                })}
            </ul>
        </section>
    </div>
  )
}
