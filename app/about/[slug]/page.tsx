"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import { marked } from "marked";
import { remark } from "remark";
import html from "remark-html";
import Markdown from "markdown-to-jsx";

import { PageData } from "../../../lib/Interfaces";
import ReactMarkdown from "react-markdown";
import baasAxios from "../../../lib/Utils/axios";

export default function AboutPage({
  params,
}: {
  params?: any;
  children?: React.ReactNode;
}) {
  async function loadData() {
    let res: PageData = await baasAxios
      .get("/content-entries?filters[slug][$eq]=" + params.slug)
      .then((res) => {
        return res.data.data[0];
      })
      .catch((err) => {
        console.log(err);
        return null;
      });

    setPageData(res);
    setContent(res.attributes.Content);
    console.log(res);
  }

  useEffect(() => {
    loadData();
    createMarkup();
    console.log(params);
  }, []);

  const [content, setContent] = useState<string>("");

  const [pageData, setPageData] = useState<PageData>({
    id: 0,
    attributes: {
      Content: "",
      Title: "",
      Slug: "",
      createdAt: "",
      Description: " ",
      publishedAt: "",
      updatedAt: "",
    },
  });
  const processedContent = async () => {
    // let str = await remark().use(html).process(pageData.attributes.Content);

    console.log(pageData);

    // setContent(str.toString());

    return "";
  };

  function createMarkup() {
    const contentHtml = processedContent();
    return contentHtml;
  }
  return (
    <>
      <div className="" dangerouslySetInnerHTML={{ __html: content }} />
    </>
  );
}
