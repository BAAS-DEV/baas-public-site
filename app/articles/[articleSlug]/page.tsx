"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import HTMLRender from "../../../lib/Components/HTML/HTMLRender";
import baasAxios from "../../../lib/Utils/axios";
import { Article } from "../page";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import ReactTimeAgo from "react-time-ago";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en.json";

export default function ArticleDetails({
  params,
  searchParams,
}: {
  params?: { articleSlug: string };
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  useEffect(() => {
    LoadArticles();
    window.scrollTo(0, 0);
  }, []);
  TimeAgo.addDefaultLocale(en);

  const [articles, setArticles] = useState<Article | null>(null);

  const LoadArticles = async () => {
    let result = await baasAxios.get(
      "/content-entries/?filters[slug][$eq]=" + params?.articleSlug
    );

    setArticles(result.data.data[0]);
  };
  const router = useRouter();

  return (
    <>
      <div className="hero min-h-screen mx-auto  w-full">
        <div
          className="hero-overlay bg-cover"
          style={{ backgroundImage: "url('/svgs/rings.svg')" }}
        ></div>{" "}
        <div className="w-full  mb-8 px-8  max-w-4xl">
          <h1 className="text-4xl mb-4 text-white">
            {articles?.attributes.Title}
          </h1>
          <label className="text-white">Last Updated: </label>
          <br />
          <ReactTimeAgo
            date={
              articles?.attributes.updatedAt
                ? articles.attributes.updatedAt
                : new Date()
            }
            className="text-white"
            locale="en-us"
          />
        </div>
      </div>
      <div className="container mx-auto mt-28 mb-28 max-w-4xl w-full">
        <div className="px-4">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {articles?.attributes.Content ? articles?.attributes.Content : ""}
          </ReactMarkdown>
        </div>
      </div>

      <div className="mx-auto text-center w-full">
        <button
          className="btn btn-info text-2xl mb-16 mx-auto text-center text-white"
          onClick={() => router.back()}
        >
          Back To Articles
        </button>
      </div>
    </>
  );
}
