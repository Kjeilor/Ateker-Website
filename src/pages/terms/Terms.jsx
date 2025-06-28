import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import "./styles/Terms.scss";

const Terms = () => {
  const [content, setContent] = useState("");

  useEffect(() => {
    fetch("/content/terms.md")
      .then((res) => res.text())
      .then(setContent)
      .catch(() => setContent("Unable to load terms of service."));
  }, []);

  return (
    <section className="terms container">
      <div className="markdown">
        <ReactMarkdown>{content}</ReactMarkdown>
      </div>
    </section>
  );
};

export default Terms;
