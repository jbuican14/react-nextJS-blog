import Head from "next/head";
import {Fragment} from "react";
import AllPosts from "../../components/posts/all-posts";
import {getAllPosts} from "../../lib/posts-util";

function AllPostsPage(props) {
  return (
    <Fragment>
      <Head>
        <title>All Posts</title>
        <meta name="description" content="test post for a blog using md file" />
      </Head>
      <AllPosts posts={props.posts} />
    </Fragment>
  );
}
export function getStaticProps() {
  const allPosts = getAllPosts();

  return {
    props: {
      posts: allPosts,
    },
  };
}
export default AllPostsPage;
