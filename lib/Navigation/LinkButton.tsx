import Link from "next/link";
import IconRender from "../Components/iconRender";

const LinkButton = (text: string, link?: string, icon?: string) => {
  return (
    <li>
      <Link className="text-lg" href={link ? link : "/"}>
        <IconRender arg={icon ? icon : ""} />
        {text}
      </Link>
    </li>
  );
};

export default LinkButton;
