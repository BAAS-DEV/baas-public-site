"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import ReactTimeAgo from "react-time-ago";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en.json";
import Image from "next/image";
import PageSectionHeader from "../../lib/Components/PageSectionHeader";
import baasAxios from "../../lib/Utils/axios";
import { Metadata } from "next";

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
      "content-entries?filters[content_type][name][$eq]=Article&sort=createdAt%3Adesc"
    );

    console.log(result.data);

    setArticles(result.data.data);
  };

  return (
    <>
      <PageSectionHeader
        description="Content tailored for helping you understand technology, and how it can help you."
        title="Articles"
      />
      <div className="grid grid-cols-1 mt-24 gap-4 pb-32 ">
        {articles.map((item, i) => (
          <>
            <div className={"mt-8 px-2"}>
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
    <div className="flex justify-center container mx-auto ">
      <div
        onClick={() =>
          router.push("/articles/" + props.article.attributes.Slug)
        }
        className="grid grid-cols-9 hover:cursor-pointer rounded-lg  shadow-lg dark:bg-neutral-700 w-full  max-w-4xl  md:flex-row"
      >
        <div className="col-span-9 md:col-span-4">
          <Image
            loader={() => props.article.attributes.imageURL}
            src={props.article.attributes.imageURL}
            alt={"picture of " + props.article.attributes.Title}
            width={50}
            height={50}
            className=" w-full h-full  rounded-t-lg md:rounded-l-lg md:rounded-r-none "
          />
        </div>
        <div className="col-span-9 bg-white rounded-t-none rounded-b-lg md:rounded-l-none  card md:col-span-5 p-4">
          <h5 className=" card-title text-xl mb-2 font-medium text-neutral-800 ">
            {props.article.attributes.Title}
          </h5>
          <p className="px-0 card-body py-1 text-base font-light text-neutral-600 ">
            {props.article.attributes.Description}
          </p>
          <p className="card-actions mb-4 text-base text-neutral-200 ">
            <label className="font-semibold">Last Updated: </label>
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
