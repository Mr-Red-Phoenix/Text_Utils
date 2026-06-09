import React,{use, useState} from 'react'
import PropTypes from 'prop-types'

export default function TextForm({showAlert={showAlert} ,heading = "Enter your text here ->",mode='light'}) {
    const [text, setText] = useState("");

        const handleUpClick=()=>{
        console.log("Uppercase was clicked");
        let newText=text.toUpperCase();
        setText(newText);
        showAlert("Converted to Uppercase!","success");
    }
        const handleLoClick=()=>{
        console.log("Lowercase was clicked");
        let newText=text.toLowerCase();
        setText(newText);
        showAlert("Converted to Lowercase!","success");
    }
        const handleInClick=()=>{
        console.log("Inverse was clicked");
        let newText = text.split('').reverse().join('');
        setText(newText);
        showAlert("Text Inversed!","success");
    }
        const handleClearClick=()=>{
        console.log("Clear Text was clicked");
        let newText='';
        setText(newText);
        showAlert("Text Cleared!","success");
    }
    const handleOnChange=(event)=>{
        console.log("On change");
        setText(event.target.value);
    }

    // text="new text";//wrong way to change the state
    // setText("new text")//correct way to change the state
  return (
    <>
    <div className='container' style={{color:mode==='dark'?'white':'black'}}>
        <div class="mb-3">
              <h3>{heading}</h3>
        <textarea class="form-control" onChange={handleOnChange} style={{color:mode==='dark'?'white':'black',backgroundColor:mode==='dark'?'black':'white'}} value={text} id="exampleFormControlTextarea1" rows="10"></textarea>
        </div>
        <div className="button-group" style={{ display: 'flex', gap: '10px' }}>
        <button className="btn btn primary mx-1 my-1"onClick={handleUpClick}style={{height: '50px' , width: '200px', backgroundColor: 'green', color: 'white', border: 'none' }}>Convert to Uppercase</button>
        <button className="btn btn primary mx-1 my-1"onClick={handleLoClick}style={{height: '50px' , width: '200px', backgroundColor: 'blue', color: 'white', border: 'none' }}>Convert to Lowercase</button>
        <button className="btn btn primary mx-1 my-1"onClick={handleInClick}style={{height: '50px' , width: '200px', backgroundColor: 'red', color: 'white', border: 'none' }}>Inverse Text</button>
        <button className="btn btn primary mx-1 my-1"onClick={handleClearClick}style={{height: '50px' , width: '200px', backgroundColor: 'purple', color: 'white', border: 'none' }}>Clear Text</button>
        </div>
        <div className="container my-2"></div>
        <h2>Your text summary</h2>
        <b>
        <p>{text.trim().length === 0 ? 0 : text.trim().split(/\s+/).length} words, {text.length} characters</p>
        <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes</p>
        </b>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something in text box."}</p>
    </div>
    </>
  )
}
//Wrong way to set default props and prop types
// TextForm.propTypes={
//     heading:PropTypes.string
// };
// TextForm.defaultProps={
//     heading:"Enter your text here ->"
// };
// import React, { useState } from 'react';
// import PropTypes from 'prop-types';

// export default function TextForm({ showAlert, heading = "Enter your text here", mode = 'light' }) {
//     const [text, setText] = useState("");

//     // Logic: Uppercase
//     const handleUpClick = () => {
//         if (text.length === 0) return showAlert("Enter text first!", "warning");
//         let newText = text.toUpperCase();
//         setText(newText);
//         showAlert("Converted to Uppercase!", "success");
//     };

//     // Logic: Lowercase
//     const handleLoClick = () => {
//         if (text.length === 0) return showAlert("Enter text first!", "warning");
//         let newText = text.toLowerCase();
//         setText(newText);
//         showAlert("Converted to Lowercase!", "success");
//     };

//     // Logic: Reverse Text
//     const handleInClick = () => {
//         if (text.length === 0) return showAlert("Enter text first!", "warning");
//         let newText = text.split('').reverse().join('');
//         setText(newText);
//         showAlert("Text Reversed!", "success");
//     };

//     // Logic: Copy to Clipboard (New Feature)
//     const handleCopy = () => {
//         if (text.length === 0) return showAlert("Nothing to copy!", "warning");
//         navigator.clipboard.writeText(text);
//         showAlert("Copied to Clipboard!", "success");
//     };

//     // Logic: Remove Extra Spaces (New Feature)
//     const handleExtraSpaces = () => {
//         if (text.length === 0) return showAlert("Enter text first!", "warning");
//         let newText = text.split(/[ ]+/);
//         setText(newText.join(" "));
//         showAlert("Extra spaces removed!", "success");
//     };

//     // Logic: Clear Text
//     const handleClearClick = () => {
//         let newText = '';
//         setText(newText);
//         showAlert("Text Cleared!", "success");
//     };

//     const handleOnChange = (event) => {
//         setText(event.target.value);
//     };

//     // Helper: Dynamic Styles
//     const containerStyle = {
//         color: mode === 'dark' ? '#f1f1f1' : '#333',
//         backgroundColor: mode === 'dark' ? '#042743' : 'white',
//         transition: 'all 0.3s ease-in-out'
//     };

//     const textAreaStyle = {
//         backgroundColor: mode === 'dark' ? '#13466e' : 'white',
//         color: mode === 'dark' ? 'white' : '#333',
//         border: mode === 'dark' ? '1px solid #f1f1f1' : '1px solid #ced4da',
//         resize: 'none' // Prevents ugly resizing
//     };

//     // Helper: Calculate Word Count accurately (removes empty strings)
//     const wordCount = text.split(/\s+/).filter((element) => { return element.length !== 0 }).length;

//     return (
//         <>
//             {/* Main Input Container */}
//             <div className='container my-5 p-4 rounded shadow-lg' style={containerStyle}>
//                 <h2 className='mb-4'>{heading}</h2>
                
//                 <div className="mb-3">
//                     <textarea 
//                         className="form-control" 
//                         value={text} 
//                         onChange={handleOnChange} 
//                         style={textAreaStyle} 
//                         id="myBox" 
//                         rows="8"
//                         placeholder="Start typing here..."
//                     ></textarea>
//                 </div>

//                 {/* Button Group - Responsive Grid */}
//                 <div className="d-flex flex-wrap gap-2">
//                     <button disabled={text.length===0} className="btn btn-primary flex-grow-1" onClick={handleUpClick}>
//                         Uppercase
//                     </button>
//                     <button disabled={text.length===0} className="btn btn-info text-white flex-grow-1" onClick={handleLoClick}>
//                         Lowercase
//                     </button>
//                     <button disabled={text.length===0} className="btn btn-secondary flex-grow-1" onClick={handleExtraSpaces}>
//                         Format Spaces
//                     </button>
//                     <button disabled={text.length===0} className="btn btn-warning flex-grow-1" onClick={handleCopy}>
//                         Copy Text
//                     </button>
//                     <button disabled={text.length===0} className="btn btn-danger flex-grow-1" onClick={handleInClick}>
//                         Reverse
//                     </button>
//                     <button disabled={text.length===0} className="btn btn-dark flex-grow-1" onClick={handleClearClick}>
//                         Clear
//                     </button>
//                 </div>
//             </div>

//             {/* Summary Container */}
//             <div className="container my-3 p-4 rounded shadow-sm" style={{...containerStyle, border: mode === 'dark' ? '1px solid white' : '1px solid #e0e0e0'}}>
//                 <h3>Your Text Summary</h3>
//                 <div className="row text-center my-3">
//                     <div className="col-md-6">
//                         <h4 className="display-6 text-primary">{wordCount}</h4>
//                         <p>Words</p>
//                     </div>
//                     <div className="col-md-6">
//                         <h4 className="display-6 text-primary">{text.length}</h4>
//                         <p>Characters</p>
//                     </div>
//                 </div>
                
//                 <div className="alert alert-info" role="alert">
//                     <strong>Estimated Read Time:</strong> {0.008 * wordCount} Minutes
//                 </div>

//                 <hr />
                
//                 <h4>Preview</h4>
//                 <div className="p-3 rounded" style={{backgroundColor: mode==='dark'?'#13466e':'#f8f9fa', minHeight:'60px'}}>
//                     <p className='mb-0'>
//                         {text.length > 0 ? text : <span className="text-muted">Nothing to preview yet...</span>}
//                     </p>
//                 </div>
//             </div>
//         </>
//     );
// }

// // Correct PropType Definition
// TextForm.propTypes = {
//     heading: PropTypes.string.isRequired,
//     mode: PropTypes.string,
//     showAlert: PropTypes.func
// };