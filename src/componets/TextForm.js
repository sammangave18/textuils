import React, { useState } from "react";

export default function TextForm(props) {
  const [isPasted, setIsPasted] = useState(false);
  const handleUpClick = () => {
    // console.log("Upper Case clicked " + text);
    let newText = text.toUpperCase();
    settext(newText);
    // settext("You are clicked handaleUpClick");
    props.showAlert("Converted to Uppercase", "primary");
  };
  const handleLwClick = () => {
    // console.log("Lower Case clicked " + text);
    let newText = text.toLowerCase();
    settext(newText);
    // settext("You are clicked handaleLowerClick");
    props.showAlert("Converted to Lowercase", "primary");
  };

  const handleRevClick = () => {
    let newText = text.split(" ").reverse().join(" "); // reverse the words
    settext(newText);
    props.showAlert("Text reversed", "warning");
  };

  const handlePasteClick = () => {
    // Read text from the clipboard
    navigator.clipboard
      .readText()
      .then((pastedText) => {
        // Handle the pasted text, for example, set it to state
        settext(pastedText);
        setIsPasted(true);

        // console.log('Text pasted from clipboard:', pastedText);
        // Optionally, you can provide user feedback here (e.g., display a message)
      })
      .catch((error) => {
        // console.error('Failed to read text from clipboard:', error);
        // Handle errors here (e.g., display an error message)
      });
  };

  const handleClearClick = () => {
    let newText = "";
    settext(newText);
    setIsPasted(false);
  };

  // able to type and change in text area by event
  const handleOnChnage = (event) => {
    console.log("On Change");
    settext(event.target.value);
  };
  const [text, settext] = useState(" ");
  return (
    <>
      <div className="container">
        <h1 className="my-2">{props.head}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChnage}
            id="myform"
            rows="5"
            style={{
              backgroundColor: props.mode === "dark" ? "#181818" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
          ></textarea>
        </div>
        {isPasted && <p>Text pasted from clipboard</p>}

        <button className="btn btn-primary" onClick={handleUpClick}>
          Convert To uppercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleLwClick}>
          Convert To Lowecse
        </button>
        <button className="btn btn-success mx-2" onClick={handleRevClick}>
          Reverse
        </button>
        <button className="btn btn-success mx-2" onClick={handlePasteClick}>
          Paste
        </button>
        <button className="btn btn-danger mx-2" onClick={handleClearClick}>
          Clear
        </button>
      </div>
      <div className="container my-3">
        <h1>Summery :</h1>
        <p>
          {/* {text.split(" ").length} words {text.length} charcters */}
          {text.trim() ? (
            <>
              {text.split(" ").filter(Boolean).length} words{" "}
              {text.trim().length} characters
            </>
          ) : null}
        </p>
        <p>Read time {0.008 * text.split(" ").length} </p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Enter To preview here"}</p>
      </div>
    </>
  );
}
