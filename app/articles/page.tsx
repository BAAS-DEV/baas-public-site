"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import ReactTimeAgo from "react-time-ago";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en.json";

import PageSectionHeader from "../../lib/Components/PageSectionHeader";
import baasAxios from "../../lib/Utils/axios";

export interface Article {
  attributes: {
    Content: string;
    Description: string;
    Slug: string;
    Title: string;
    imageURL: string;
    updatedAt: Date;
  };
}

export default function Articles() {
  useEffect(() => {
    LoadArticles();
    window.scrollTo(0, 0);
  }, []);
  TimeAgo.addDefaultLocale(en);

  const [articles, setArticles] = useState<Article[]>([]);

  const LoadArticles = async () => {
    let result = await baasAxios.get(
      "/content-entries?filters[content_type][name][$eq]=Article&populate=*"
    );

    console.log(result.data);

    setArticles(result.data.data);
  };

  return (
    <>
      <PageSectionHeader
        description="Packages of example components and products that we compile frequently"
        title="Articles"
      />
      <div className="grid grid-cols-1 mt-24 gap-4 mb-24">
        {articles.map((item, i) => (
          <>
            <div className={"mt-8"}>
              <ArticleCard article={item} />
            </div>
          </>
        ))}
      </div>
    </>
  );
}

function ArticleCard(props: { article: Article }) {
  const router = useRouter();

  return (
    <div className="flex justify-center container mx-auto">
      <div
        onClick={() =>
          router.push("/articles/" + props.article.attributes.Slug)
        }
        className="flex py-4 flex-col hover:cursor-pointer rounded-lg bg-info text-white shadow-lg dark:bg-neutral-700 w-full px-8 max-w-2xl  md:flex-row"
      >
        <img
          className="h-96 w-full rounded-t-lg object-cover md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
          src={props.article.attributes.imageURL}
          alt=""
        />
        <div className="flex flex-col justify-start p-6">
          <h5 className="mb-2 text-xl font-medium text-neutral-800 dark:text-neutral-50">
            {props.article.attributes.Title}
          </h5>
          <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
            {props.article.attributes.Description}
          </p>
          <p className="mb-4 text-base text-neutral-200 dark:text-neutral-200">
            <label>Last Updated: </label>
            <ReactTimeAgo
              date={props.article.attributes.updatedAt}
              locale="en-us"
            />
          </p>
          {/* <p className="text-xs text-neutral-500 dark:text-neutral-300">
            Last updated 3 mins ago
          </p> */}
        </div>
      </div>
    </div>
  );
}
