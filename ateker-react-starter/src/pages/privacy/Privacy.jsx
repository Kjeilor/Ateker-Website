import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import "./styles/Privacy.scss";

const Privacy = () => {
  const [content, setContent] = useState("");

  useEffect(() => {
    fetch("/content/privacy.md")
      .then((res) => res.text())
      .then(setContent)
      .catch(() => setContent("Unable to load privacy policy."));
  }, []);

  return (
    <section className="privacy container">
      <h1>Privacy Policy</h1>
      <div className="markdown">
        <ReactMarkdown>{content}</ReactMarkdown>
      </div>
    </section>
  );
};

export default Privacy;
