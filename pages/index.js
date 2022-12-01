import Link from "next/link";
import styles from "../styles/Home.module.scss";
import { client } from "./../libs/client";

//SSG buildしたときにサーバでAPIを用意しておく　　buildはdeployの前に行う
// 更新が多いページ(twitterのプロフィールページなど)に関してはSSRで作ったほうがいい
export const getStaticProps = async () => {
  const data = await client.get({ endpoint: "blog" });
  console.log(data);

  return {
    props: {
      blog: data.contents,
    },
  };
};

export default function Home({ blog }) {
  return (
    <div className={styles.container}>
      {blog.map((blog) => (
        <li key={blog.id}>
          <Link href={`blog/${blog.id}`}>{blog.title}</Link>
        </li>
      ))}
    </div>
  );
}
