"use client";
import { useEffect } from "react";
import ContactUsForm from "../../lib/Components/forms/ContactUsForm";

export default function ContactUs() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <ContactUsForm />
    </div>
  );
}
