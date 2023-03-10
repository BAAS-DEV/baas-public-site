import axios from "axios";

export default function Footer() {
  return (
    <footer className="footer p-10 py-48 w-full bg-primary text-white  mx-auto">
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
        <span className="footer-title">Services</span>
        <a className="link link-hover">Branding</a>
        <a className="link link-hover">Design</a>
        <a className="link link-hover">Marketing</a>
        <a className="link link-hover">Advertisement</a>
      </div>
      <div>
        <span className="footer-title">Company</span>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Jobs</a>
        <a className="link link-hover">Press kit</a>
      </div>
      <div>
        <span className="footer-title">Legal</span>
        <a className="link link-hover">Terms of use</a>
        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Cookie policy</a>
      </div>
    </footer>
  );
}
