import Head from "next/head";
import AllPosts from "../../components/posts/all-posts";

const DUMMY_POSTS = [
  {
    slugs: "getting-started-nextjs",
    title: "Getting started with NextJS",
    image: "getting-started-nextjs.png",
    excerpt:
      "NextJS is the React framework from production - it maskes building fullstack React app",
    date: "2021-1-1",
  },
  {
    slugs: "getting-started-nextjs2",
    title: "Getting started with NextJS",
    image: "getting-started-nextjs.png",
    excerpt:
      "NextJS is the React framework from ,production - it maskes building fullstack React app",
    date: "2021-02-2",
  },
  {
    slugs: "getting-started-nextjs3",
    title: "Getting started with NextJS",
    image: "getting-started-nextjs.png",
    excerpt:
      "NextJS is the React framework from production - it maskes building fullstack React app",
    date: "2021-02-2",
  },
  {
    slugs: "getting-started-nextjs4",
    title: "Getting started with NextJS",
    image: "getting-started-nextjs.png",
    excerpt:
      "NextJS is the React framework from production - it maskes building fullstack React app",
    date: "2021-02-2",
  },
];

function AllPostsPage(props) {
  return <AllPosts posts={DUMMY_POSTS} />;
}
export default AllPostsPage;
