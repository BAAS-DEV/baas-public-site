import React from "react";
import DOMPurify from "dompurify";

export default function HTMLRender(props: { html: string }) {
  const html = props.html;
  const sanitizedHtml = DOMPurify.sanitize(html);

  return <div dangerouslySetInnerHTML={{ __html: sanitizedHtml }} />;
}
