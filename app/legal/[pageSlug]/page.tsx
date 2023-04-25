"use client";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import HTMLRender from "../../../lib/Components/HTML/HTMLRender";
import baasAxios from "../../../lib/Utils/axios";

export default function PricePage({
  params,
  searchParams,
}: {
  params: { articleSlug: string };
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  useEffect(() => {
    window.scrollTo(0, 0);

    loadContent();
  }, []);

  const [htmltext, setHtmlText] = useState<string>("");

  const loadContent = async () => {
    await baasAxios
      .get("/")
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="container mx-auto mt-28 mb-28 max-w-4xl w-full">
      <div className="px-4">
        {/* <ReactMarkdown remarkPlugins={[remarkGfm]}> */}
        {/* {articles?.attributes.Content ? articles?.attributes.Content : ""} */}
        {/* </ReactMarkdown> */}
      </div>
    </div>
  );
}
