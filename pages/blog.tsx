import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import Head from "next/head";
import { parse } from "node-html-parser";
import BrutList from "../components/brut-list";

interface Article {
  title?: string;
  link?: string;
  date?: string;
}

type Props = {
  articles: Article[];
};

function Blog({ articles }: Props) {
  dayjs.extend(customParseFormat);
  const items = articles.map((article) => ({
    ...article,
    date: dayjs(article.date, "DD/MM/YYYY"),
  }));

  return (
    <div className="border-8 border-black my-4">
      <Head>
        <title>Mateusz Ostafil | Blog</title>
        <meta
          name="description"
          content="Blog posts that Mateusz Ostafil wrote"
        />
        <meta name="author" content="Mateusz Ostafil" />
      </Head>
      <h1 className="text-6xl font-bold uppercase mt-2 text-center ">Blog</h1>
      <div className="font-mono border-8 border-black m-2">
        <p className="m-5 text-lg">Sometimes I write.</p>
        <BrutList items={items}></BrutList>
      </div>
    </div>
  );
}

export async function getStaticProps(): Promise<{ props: Props }> {
  const urls = [
    "https://www.divante.com/blog/author/mateusz-ostafil",
    "https://www.divante.com/blog/author/mateusz-ostafil/page/2",
  ];
  const pages = await Promise.all(urls.map(async (url) => await getHtml(url)));
  const articles = pages.flatMap((page) => parseArticles(page));

  return {
    props: {
      articles: articles,
    },
  };
}

async function getHtml(url: string): Promise<string> {
  return await (await fetch(url)).text();
}

function parseArticles(html: string): Article[] {
  const root = parse(html);
  return root.querySelectorAll("article").map((article) => ({
    title: article.querySelector("h5")?.textContent,
    link: article.querySelector("a")?.getAttribute("href"),
    date: article.querySelector(".publish-date")?.textContent,
  }));
}

export default Blog;
