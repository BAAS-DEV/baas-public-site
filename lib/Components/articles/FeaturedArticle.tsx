import { Article } from "../../Interfaces";
import Image from "next/image";
import ReactTimeAgo from "react-time-ago";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en.json";
import { time } from "console";
import Link from "next/link";
export default function FeaturedArticle(props: { article: Article }) {
  TimeAgo.addDefaultLocale(en);

  return (
    <>
      <div className="">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="w-full">
            <Image
              loader={() =>
                props.article.imageURL ? props.article.imageURL : ""
              }
              height={50}
              width={50}
              className={"w-full mx-auto h-full rounded-lg"}
              src={props.article.imageURL ? props.article.imageURL : ""}
              alt={""}
            />
          </div>
          <div className="w-full mt-40 px-4">
            <h1 className="text-4xl font-bold pb-2">{props.article?.Title}</h1>
            <p>
              <span className="font-semibold">Last Updated: </span>
              {props.article?.updatedAt ? (
                <ReactTimeAgo
                  date={formatTimeAgo(props.article.updatedAt)}
                  locale="en-us"
                />
              ) : (
                <></>
              )}
            </p>
            <p className="text-md font-light">{props.article?.Description}</p>
            <Link
              className="btn btn-accent mr-4"
              href={"/articles/" + props.article.slug}
            >
              Read Our Post
            </Link>
            <button className="btn btn-info">View More Articles</button>
          </div>
        </div>
      </div>
    </>
  );
}

function formatTimeAgo(time: Date): Date {
  if (time != null) {
    return new Date(time);
  }

  return new Date();
}
