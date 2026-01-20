import React, { useState } from 'react'
import { useFormState } from 'react-dom'

export default function About() {
    // default style(white mode)
    const[myStyle, setMyStyle] = useState(    {
        color: 'black',
        backgroundColor: 'white'
    })
    // default button text
    const[btnText, setBtnText] = useState("Enable Dark Mode")
    // changing style(dark and white mode) 
    const toggleStyle = ()=>{
        if(myStyle.color === 'white'){
            setMyStyle({ 
                color: 'black',
            backgroundColor: 'white',
            border: '2px solid black'
       })
       setBtnText("Enable Dark Mode")
    }
    else{
            setMyStyle({ 
                color: 'white',
        backgroundColor: 'black',
        border: '1px solid white'
       })  
       setBtnText("Enable Light Mode")      
    }
}

return (
    <div className='container' style={myStyle}>
        <h1 className="my-3">About Text Utils</h1>
        <div className="accordion" id="accordionFlushExample">
            
            {/* Item 1: Project Overview */}
            <div className="accordion-item">
                <h2 className="accordion-header" id="flush-headingOne">
                    <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="true" aria-controls="flush-collapseOne">
                        <strong>Analyze Your Text</strong>
                    </button>
                </h2>
                <div id="flush-collapseOne" className="accordion-collapse collapse show" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body" style={myStyle}>
                        Text Utils gives you a way to analyze your text quickly and efficiently. 
                        It is a <strong>React.js-based web application</strong> designed to offer a suite of intuitive text transformation utilities. 
                        Whether you are a developer, student, or content creator, this tool empowers you to perform common operations like converting to uppercase, lowercase, or clearing input instantly[cite: 45].
                    </div>
                </div>
            </div>

            {/* Item 2: Key Features */}
            <div className="accordion-item">
                <h2 className="accordion-header" id="flush-headingTwo">
                    <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                        <strong>Free to Use & Powerful Features</strong>
                    </button>
                </h2>
                <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body" style={myStyle}>
                        Text Utils is a free character counter tool that provides instant character count and word count statistics for a given text. 
                        Key features include:
                        <ul>
                            <li><strong>Text Transformations:</strong> Convert text to Uppercase, Lowercase, or Inverse Case[cite: 83].</li>
                            <li><strong>Real-Time Summary:</strong> Instant feedback on word count, character count, and estimated reading time[cite: 84].</li>
                            <li><strong>Accessibility:</strong> Toggle between Dark and Light modes for a comfortable reading experience[cite: 85].</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Item 3: Tech Stack & Compatibility */}
            <div className="accordion-item">
                <h2 className="accordion-header" id="flush-headingThree">
                    <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                        <strong>Browser Compatible & Tech Stack</strong>
                    </button>
                </h2>
                <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body" style={myStyle}>
                        This software works in any web browser such as Chrome, Firefox, Internet Explorer, Safari, or Opera. 
                        It serves as a practical showcase of modern frontend development, utilizing:
                        <ul>
                            <li><strong>React.js</strong> for component-based architecture.</li>
                            <li><strong>React Router</strong> for seamless single-page navigation[cite: 143].</li>
                            <li><strong>Bootstrap v5</strong> for a responsive, mobile-friendly interface.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        
        {/* Keeps your existing button logic */}
        <div className="container my-3">
            <button onClick={toggleStyle} type="button" className="btn btn-primary">{btnText}</button>
        </div>
    </div>
  )
}
// import React from 'react'
// // import { Link } from 'react-router-dom' 

// export default function About({ mode = 'light' }) {

//     // Dynamic Style Configuration
//     const styles = {
//         container: {
//             color: mode === 'dark' ? 'white' : '#2c3e50',
//             backgroundColor: mode === 'dark' ? 'rgb(4 39 67)' : 'white',
//             minHeight: '100vh',
//         },
//         card: {
//             backgroundColor: mode === 'dark' ? 'rgb(30 65 90)' : 'white',
//             color: mode === 'dark' ? 'white' : 'black',
//             border: mode === 'dark' ? '1px solid white' : '1px solid #e0e0e0',
//             transition: 'transform 0.3s ease, box-shadow 0.3s ease'
//         },
//         heroText: {
//             // Changed 'background' to 'backgroundImage' for better stability
//             backgroundImage: mode === 'dark' 
//                 ? 'linear-gradient(90deg, #00d2ff 0%, #3a7bd5 100%)' 
//                 : 'linear-gradient(90deg, #d53369 0%, #daae51 100%)',
//             WebkitBackgroundClip: 'text',
//             backgroundClip: 'text',       // Added standard property
//             color: 'transparent',         // Added standard fallback
//             WebkitTextFillColor: 'transparent',
//             fontWeight: 'bold',
//             display: 'inline-block'       // Fixes the "ribbon" rendering bug on re-render
//         },
//         // Custom colors for icons/headers to ensure visibility in Dark Mode
//         iconColor1: { color: mode === 'dark' ? '#61dafb' : '#0d6efd' }, // Light Blue vs Primary Blue
//         iconColor2: { color: mode === 'dark' ? '#98c379' : '#198754' }, // Light Green vs Success Green
//         iconColor3: { color: mode === 'dark' ? '#e06c75' : '#dc3545' }  // Light Red vs Danger Red
//     }

//     return (
//         <div style={styles.container} className="pb-5">
//             {/* --- Hero Section --- */}
//             <div className="container py-5 text-center">
//                 {/* Wrapped h1 in a div to ensure centering since h1 is now inline-block */}
//                 <div>
//                     <h1 className="display-3 mb-3" style={styles.heroText}>
//                         About Text Utils
//                     </h1>
//                 </div>
//                 <p className="lead mb-4 px-5">
//                     Your daily driver for manipulating text. We strip away the complexity 
//                     and provide you with a clean, efficient interface to format your content 
//                     in seconds.
//                 </p>
//                 <div className="d-flex justify-content-center gap-3">
//                     {/* CTA Buttons */}
//                     <a href="/" className="btn btn-primary btn-lg px-4 gap-3 shadow-sm">
//                         Start Using Now
//                     </a>
//                     <a href="#features" className={`btn btn-outline-${mode === 'dark' ? 'light' : 'dark'} btn-lg px-4`}>
//                         Learn More
//                     </a>
//                 </div>
//             </div>

//             {/* --- Features Grid Section --- */}
//             <div id="features" className="container my-5">
//                 <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
                    
//                     {/* Feature 1 */}
//                     <div className="col d-flex align-items-start">
//                         <div className="card h-100 shadow-sm p-4" style={styles.card}>
//                             <div className="mb-3 fs-2">⚡</div>
//                             {/* Applied dynamic color style instead of generic className */}
//                             <h3 className="fw-bold mb-0 fs-4" style={styles.iconColor1}>Instant Analysis</h3>
//                             <p className="mt-3 mb-0">
//                                 Get real-time word counts, character counts, and reading time estimates. 
//                                 Perfect for writers who need to hit specific limits.
//                             </p>
//                         </div>
//                     </div>

//                     {/* Feature 2 */}
//                     <div className="col d-flex align-items-start">
//                         <div className="card h-100 shadow-sm p-4" style={styles.card}>
//                             <div className="mb-3 fs-2">Aa</div>
//                             <h3 className="fw-bold mb-0 fs-4" style={styles.iconColor2}>Text Transformation</h3>
//                             <p className="mt-3 mb-0">
//                                 Convert text to Uppercase, Lowercase, or Capitalized Case instantly. 
//                                 No need to rewrite paragraphs manually.
//                             </p>
//                         </div>
//                     </div>

//                     {/* Feature 3 */}
//                     <div className="col d-flex align-items-start">
//                         <div className="card h-100 shadow-sm p-4" style={styles.card}>
//                             <div className="mb-3 fs-2">🧹</div>
//                             <h3 className="fw-bold mb-0 fs-4" style={styles.iconColor3}>Clean Formatting</h3>
//                             <p className="mt-3 mb-0">
//                                 Remove extra spaces and junk formatting copied from PDFs or websites. 
//                                 Make your text clean and professional.
//                             </p>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             {/* --- Tech Stack Section --- */}
//             <div className="container border-top pt-5 mt-5 text-center">
//                 <h2 className="mb-4">Powered By</h2>
//                 <div className="row justify-content-center">
//                     <div className="col-lg-8">
//                         <p>
//                             This application is a Single Page Application (SPA) built using 
//                             <strong> React.js</strong> and <strong>Bootstrap 5</strong>. 
//                             It is lightweight, fast, and works entirely in your browser—meaning 
//                             your text data never leaves your computer.
//                         </p>
//                     </div>
//                 </div>
//                 {/* Final CTA */}
//                 <div className="mt-5">
//                     <a href="/" className="btn btn-lg btn-success shadow-lg">
//                         Go to Text Converter &rarr;
//                     </a>
//                 </div>
//             </div>
//         </div>
//     )
// }