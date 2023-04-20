import axios from "axios";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer p-10 py-48 w-full bg-black text-white  mx-auto">
      <div className="">
        <figure>
          <img
            src="/baas-logo-white.png"
            className="mx-auto py-4"
            alt="Shoes"
            width={150}
          />
        </figure>
        <p>
          {/* ACME Industries Ltd. */}
          <br />
          Custom Enterprise Software
          <br /> Since 2015
        </p>
      </div>
      <div>
        <span className="footer-title">Site Directory</span>
        <Link className="link link-hover" href={"/articles"}>
          Articles
        </Link>
        <Link className="link link-hover" href={"/services"}>
          Services
        </Link>{" "}
        <Link className="link link-hover" href={"/pricing"}>
          Pricing
        </Link>{" "}
        <Link className="link link-hover" href={"/projects"}>
          Projects
        </Link>{" "}
        <Link className="link link-hover" href={"/contact"}>
          Contact
        </Link>{" "}
      </div>
      {/* <div>
        <span className="footer-title">Company</span>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Jobs</a>
        <a className="link link-hover">Press kit</a>
      </div> */}
      <div>
        <span className="footer-title">Legal</span>
        <Link className="link link-hover" href={"/legal/terms-of-use"}>
          Terms of Use
        </Link>
        <Link className="link link-hover" href={"/legal/cookies"}>
          Cookie Policy
        </Link>
        {/* <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Cookie policy</a> */}
      </div>
    </footer>
  );
}
