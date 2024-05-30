import React, { useState } from 'react';

export default function TextForm(props) {
  const [text, setText] = useState('');

  const handleUpClick = () => {
    const newText = text.toUpperCase();
    setText(newText);
  };

  const handleLowClick = () => {
    const newText = text.toLowerCase();
    setText(newText);
  };

  const handleTrimClick = () => {
    const newText = text.replace(/\s+/g, ' ').trim(); // Remove extra spaces
    setText(newText);
  };

  const handleCopyClick = () => {
    navigator.clipboard.writeText(text); // Copy text to clipboard
    alert('Text copied to clipboard!');
    
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  

  const wordCount = text.split(/\s+/).filter((word) => word !== '').length;


  return (
    <>
      <div className={`container my-3 text-${props.Mode === 'light' ? 'dark' : 'light'}`}>
        <h2>{props.heading}</h2>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.Mode === 'light' ? 'white' : 'grey',
              color: props.Mode === 'light' ? 'black' : 'white',
            }}
            placeholder="Enter your text here"
            id="MyText"
            rows="6"
          />
        </div>
        <button className='btn btn-primary me-2' onClick={handleUpClick}>Convert to Uppercase</button>
        <button className='btn btn-primary me-2' onClick={handleLowClick}>Convert to Lowercase</button>
        <button className='btn btn-primary me-2' onClick={handleTrimClick}>Remove Extra Spaces</button>
        <button className='btn btn-primary' onClick={handleCopyClick}>Copy Text</button>
      </div>
      <br />
      <div className={`container my-3 text-${props.Mode === 'light' ? 'dark' : 'light'}`}>
        <h2>Your Text Summary</h2>
        <hr />
        <p>{wordCount} words and {text.length} characters.</p>
      </div>
    </>
  );
}
