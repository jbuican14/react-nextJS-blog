import ReactMarkdown from "react-markdown";

import PostHeader from "./post-header";
import classes from "./post-content.module.css";

const DUMMY_POST = {
  slugs: "getting-started-nextjs",
  title: "Getting started with NextJS",
  image: "getting-started-nextjs.png",
  content: "# THIS IS A FIRST POST",
  date: "2021-1-1",
};

function PostContent() {
  const imagePath = `/images/posts/${DUMMY_POST.slugs}/${DUMMY_POST.image}`;

  return (
    <article className={classes.content}>
      <PostHeader title={DUMMY_POST.title} image={imagePath} />
      <ReactMarkdown>{DUMMY_POST.content}</ReactMarkdown>
    </article>
  );
}

export default PostContent;
