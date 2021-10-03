import {Fragment} from "react";
import Head from "next/head";
import FeaturedPosts from "../components/home-page/featured-posts";
import Hero from "../components/home-page/hero";
import {getFeaturedPosts} from "../lib/posts-util";

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

export default function HomePage(props) {
  return (
    <Fragment>
      <Head>
        <title>Juti's Blog</title>
        <meta
          name="description"
          content="I always enjoy front-end development."
        />
      </Head>
      <Hero />
      <FeaturedPosts posts={props.posts} />
    </Fragment>
  );
}

export function getStaticProps() {
  const featuredPosts = getFeaturedPosts();

  return {
    props: {
      posts: featuredPosts,
    },
  };
}
