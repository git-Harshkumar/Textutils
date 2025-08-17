import React from 'react';
import { useState } from 'react';
import Alert from './Alert';
export default function Navbar(props) {
  const handleUpClick = () => {
    console.log("uppercase button is clicked");
    let newText = Text.toUpperCase();
    Settext(newText);
    props.showalert("Converted to Uppercase", "success")
  }
  const handleLoClick = () => {
    console.log("uppercase button is clicked");
    let newText = Text.toLowerCase();
    Settext(newText);
    props.showalert("Converted to Lowercase", "success")
  }
  const handleclearClick = () => {
    let newText = '';
    Settext(newText);
  }
  const handlecopyClick = () => {
    var text = document.getElementById("box");
    text.select();
    text.setSelectionRange(0, 9999)
    navigator.clipboard.writeText(text.value);
  }
  const handleOnChange = (event) => {
    console.log("onchange");
    Settext(event.target.value);
  }
  const [Text, Settext] = useState("");
  return (
    <>
      <div className='container' style={{
        color: props.mode === 'light' ? 'black' : 'white'
      }}>
        <div className="mb-3">
          <h1 mode={props.mode} >Enter the text to perform operation below :</h1>
          <textarea className="form-control" id="box" value={Text} onChange={handleOnChange} rows="8" style={{
            backgroundColor: props.mode === 'light' ? 'white' : 'grey',
            color: props.mode === 'light' ? 'black' : 'white'
          }}></textarea>
          <button
            className={`btn btn-${props.color} my-3 mx-1`}
            onClick={handleUpClick}
          >
            Convert to uppercase
          </button>
          <button className={`btn btn-${props.color} my-3 mx-1`} onClick={handleLoClick}>Convert to lowercase</button>
          <button className={`btn btn-${props.color} my-3 mx-1`} onClick={handleclearClick}>Clear Text</button>
          <button className={`btn btn-${props.color} my-3 mx-1`} onClick={handlecopyClick}>Copy Text</button>
        </div>
      </div>

      <div className="conatiner" style={{
        color: props.mode === 'light' ? 'black' : 'white'
      }}>
        <h1>Text Summary :</h1>
        <p>{Text.split(" ").length} Words and {Text.length} charcters</p>
        <p>{0.008 * Text.split(" ").length} Time to read</p>
        <h2>Preview</h2>
        <p>{Text}</p>
      </div>
    </>
  );
}
