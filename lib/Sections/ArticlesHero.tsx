"use client";

import { useEffect, useState } from "react";
import FeaturedArticle from "../Components/articles/FeaturedArticle";
import { Article } from "../Interfaces";
import baasAxios from "../Utils/axios";

export default function ArticlesHero() {
  useEffect(() => {
    LoadArticles();
  }, []);

  const [article, setArticle] = useState<Article>({
    Title: "",
  });

  const LoadArticles = async () => {
    let result = await baasAxios.get(
      "content-entries?filters[content_type][name][$eq]=Article&populate=*&filters[Featured][[$eq]=true&sort=id%3Adesc"
    );

    console.log(result.data.data[0].attributes);
    let art: Article;

    art = result.data.data[0].attributes;

    setArticle(art);

    // setArticle(result.data.data[0].attributes);
  };
  return (
    <>
      <div className="min-h-screen bg-white pt-20 px-4">
        <div className="container mx-auto text-left">
          <div className="">
            <h1 className="text-4xl font-bold">
              Here&#39;s What We&#39;ve Been Up To
            </h1>
            <p className="italic">
              <i>Our News:</i>
            </p>
            {/* <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p> */}
            {/* <button className="btn btn-primary">Get Started</button> */}
          </div>

          <FeaturedArticle article={article} />
        </div>
      </div>
    </>
  );
}
