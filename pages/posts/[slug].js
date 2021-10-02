import React from "react";
import PostContent from "../../components/posts/post-detail/post-content";
import {getPostData, getPostsFiles} from "../../lib/posts-util";

function PostDetailPage(props) {
  return <PostContent post={props.post} />;
}

export function getStaticProps(context) {
  const {params} = context;
  const {slug} = params;

  const postData = getPostData(slug);
  return {
    props: {
      post: postData,
    },
  };
}

export function getStaticPaths() {
  const postFilenames = getPostsFiles();
  const slugs = postFilenames.map((fileName) => {
    return fileName.replace(/\.md$/, "");
  });

  return {
    paths: slugs.map((slug) => ({params: {slug: slug}})),
    fallback: false, // use 'blocking' if there are a lot of post and don't pre all posts
  };
}

export default PostDetailPage;
