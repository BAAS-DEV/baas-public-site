import Link from "next/link";

const LinkButton = (text: string, link?: string) => {
  return (
    <li>
      <Link className="text-lg" href={link ? link : "/"}>
        {text}
      </Link>
    </li>
  );
};

export default LinkButton;
