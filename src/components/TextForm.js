import React, {useState} from 'react'
import PropTypes from 'prop-types'


export default function TextForm(props) {
    const handleUpClick = () => {
        let newText= text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase", "success");
    }
    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase", "success");

    }
    const handleClearClick = () => {
        let newText = "";
        setText(newText);
        props.showAlert("Cleared", "success");

    }
 
 
    const handleOnChange = (event) => {
        setText(event.target.value);
    }

   

    const[text, setText] = useState('');      
  

    





return (
    <>
    <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
    <div className="mb-3">
    <h1>{props.heading} </h1>
    <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#4C5155':'white',color: props.mode==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
    </div>
    <button className="btn btn-primary mx-2 mb-2"  onClick={handleUpClick}>Convert to upperCase</button>
    <button className="btn btn-primary mx-2 mb-2" onClick={handleLoClick}>Convert to LowerCase</button>
    <button className="btn btn-primary mx-2 mb-2" onClick={handleClearClick}>Clear Text</button>

    </div>
    <div className="container my-4" style={{color: props.mode==='dark'?'white':'black'}}>
    <h1>Your text Summary</h1>
    <p>{text.split(" ").length} words and {text.length} Characters</p>
    <p>{0.008*text.split(" ").length} Minutes to read</p>

    <h2>Preview</h2>
    <p>{text.length > 0 ? text : "Enter something in the textbox above to preview here "}</p>
    </div>
    </>
)
    }