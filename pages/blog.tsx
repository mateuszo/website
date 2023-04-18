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
  const items = articles
    .map((article) => ({
      ...article,
      date: dayjs(article.date, "DD/MM/YYYY"),
    }))
    .sort((a, b) => b.date.diff(a.date));

  return (
    <div className="border-8 border-black my-4">
      <Head>
        <title>Mateusz Ostafil | Blog</title>
        <meta name="description" content="Blog posts that Mateusz Ostafil wrote" />
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
  const articles = await getDivanteArticles();

  articles.push({
    title: "Najważniejsze wydarzenia w IT w 2022 r.",
    link: "https://geek.justjoin.it/podsumowanie-2022-w-it-najwazniejsze-wydarzenia-3/#Mateusz_Ostafil",
    date: "12/12/2022",
  });

  articles.push({
    title: "Okiem programisty. Soft skille na wyższych stanowiskach to must have.",
    link: "https://geek.justjoin.it/okiem-programisty-soft-skille-na-wyzszych-stanowiskach-to-must-have-wywiad-z-mateuszem-ostafilem/",
    date: "29/06/2022",
  });

  return {
    props: {
      articles: articles,
    },
  };
}

async function getDivanteArticles() {
  const urls = [
    "https://www.divante.com/blog/author/mateusz-ostafil",
    "https://www.divante.com/blog/author/mateusz-ostafil/page/2",
  ];
  const pages = await Promise.all(urls.map(async (url) => await getHtml(url)));
  return pages.flatMap((page) => parseArticles(page));
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
