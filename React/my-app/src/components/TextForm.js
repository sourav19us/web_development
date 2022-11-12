import React, { useState } from "react";

export default function TextForm(props) {
  // this is Arrow function

  const handleUPClick = () => {
    alert("you clicked on Convert to uppercase");
    const newtext = text.toUpperCase();
    settext(newtext);
    // settext(
    //   "you clicked on Convert to uppercase and so now settext update the text area"
    // );
  };

  const handleOnChang = (event) => {
    console.log("on change");
    settext(event.target.value);
  };

  //   const [text, settext] = useState("enetr your text");
  const [text, settext] = useState(" ");

  return (
    <div>
      <div className="mb-3">
        <h1>Enter your text</h1>
        <label htmlFor="exampleFormControlTextarea1" className="form-label">
          Example textarea
        </label>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="15"
          value={text}
          onChange={handleOnChang}
        ></textarea>
        <button className="btn btn-primary my-3" onClick={handleUPClick}>
          Convert to uppercase
        </button>
      </div>
      <div className="container my-3">
        <h1>Your text summary</h1>
        <p>
          {text.split(" ").length - 2} words and {text.length} Alphabet
        </p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </div>
  );
}
