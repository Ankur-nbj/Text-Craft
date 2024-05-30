import React, { useState, useEffect } from "react";

export default function About(props) {
  const [myStyle, setMyStyle] = useState({
    color: "white",
    backgroundColor: "black",
  });

  useEffect(() => {
    if (props.Mode === "light") {
      setMyStyle({
        color: "black",
        backgroundColor: "white",
      });
    } else {
      setMyStyle({
        color: "white",
        backgroundColor: "#2d2d2d",
      });
    }
  }, [props.Mode]);

  return (
    <div className="container my-5" style={myStyle}>
      <h2>About Us</h2>
      <p>
        <strong>TextCraft</strong> is a ReactJs website built primarily to do
        various operations on regular typed text. You can safely use WordPad or
        NotePad for text drafting, and saving, but TextCraft offers much more
        than simple text drafting and formatting. TextCraft can convert your
        text to any case in just one simple click of a button.You can remove
        whitespaces from your scripted documents, and wear up your earphones to
        listen to it, instead of straining your eyes! It does a detailed
        analyzing of your text, and provides an output of words, and characters
        The best part of TextCraft is that it is an open source project, as a
        result, dozens of new features are in the upcoming, which definitely
        makes it a cut above the rest.
      </p>
      <p>The most eminent features of the website are as follows :</p>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              type="button"
              style={myStyle}
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
             <strong>Analyse your Text</strong> 
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              It is a Simple Text Analyzer , which mutilates your text, but in a
              tender way
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              style={myStyle}
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
             <strong> Free to use</strong>
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              It is completely free to use. No credit cards required. Use as
              much as you want!!
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              style={myStyle}
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              <strong>Browser Compatible</strong>
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              It is compatible with all of your favorite browsers.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
