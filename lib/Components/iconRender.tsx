import {
  IoMdBook,
  IoIosCodeWorking,
  IoIosPricetags,
  IoIosDocument,
  IoIosCall,
  IoIosHome,
} from "react-icons/io";

export default function IconRender(props: { arg: string }) {
  switch (props.arg) {
    case "home":
      return <IoIosHome />;
    case "articles":
      return <IoMdBook />;
    case "services":
      return <IoIosCodeWorking />;
    case "pricing":
      return <IoIosPricetags />;
    case "projects":
      return <IoIosDocument />;
    case "contact":
      return <IoIosCall />;
    default:
      return <></>;
  }
}
