import React from 'react'      
import PropTypes from 'prop-types'
import react,{usestate} from 'react'
import { Link } from 'react-router-dom'

export default function Navbar({
    toggleMode=()=>{},
    mode='light',
    title= 'Set title here',
    aboutText= 'About',
    type1= 'User',
    type2= 'Admin',
    type3= 'Guest'
    }) {  
    return (   
        <>
    {/* nav bar */}
    {/* <nav className="navbar navbar-expand-lg bg-body-tertiary"> */}
    <nav className={`navbar navbar-expand-lg navbar-${mode} bg-${mode}`}>
  <div className="container-fluid">
    <a className="navbar-brand" href="/">{title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon">{aboutText}</span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
          {/* <a className="nav-link active" aria-current="page" href="/">Home</a> */}
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/about">About</Link>
        </li>
        {/* <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Login
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="/">{type1}</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="/">{type2}</a></li>
            <li><a className="dropdown-item" href="/">{type3}</a></li>
          </ul>
        </li> */}
      </ul>
      {/* Toggle button for dark mode */}
        <div className={`form-check form-switch text-${mode==='light'?'dark':'light'}`}>
          <input className="form-check-input" onClick={toggleMode} type="checkbox" role="switch" id="switchCheckDefault"/>
          <label className="form-check-label" htmlFor="switchCheckDefault">Dark Mode</label>
        </div>
      {/* Search bar */}
      {/* <form className="d-flex my-2" role="search"> */}
        {/* <input className="form-control me-2" type="search" placeholder="Name" aria-label="Search"/> */}
        {/* <button className="btn btn-primary" type="submit">Search</button> */}
        {/* success->green */}
        {/* danger->red */}
        {/* primary->blue */}
      {/* </form> */}
    </div>
  </div>
</nav>  
</>
    );
}

    // Navbar.propTypes = {title : PropTypes.string,
    // aboutText : PropTypes.string,
    // type1 : PropTypes.string,
    // type2 : PropTypes.string,
    // type3 : PropTypes.string
    // }

    // Navbar.defaultProps = {
    // title: 'Set title here',
    // aboutText: 'About',
    // type1: 'User',
    // type2: 'Admin',
    // type3: 'Guest'
    // };
// import React from 'react';
// import PropTypes from 'prop-types';
// import { Link, NavLink } from 'react-router-dom';

// export default function Navbar({ 
//     title = 'TextUtils', 
//     aboutText = 'About', 
//     mode = 'light', 
//     toggleMode 
// }) {
  
//   // 1. Navbar Container Style
//   const navStyle = {
//     backgroundColor: mode === 'dark' ? 'rgb(4 39 67)' : 'white',
//     borderBottom: mode === 'dark' ? '1px solid #2c3e50' : '1px solid #e0e0e0',
//     transition: 'all 0.3s ease-in-out'
//   };

//   // 2. Custom Button Style (Inverted logic)
//   // If mode is Light -> Button is Dark (to show what clicking does)
//   // If mode is Dark -> Button is Light
//   const btnStyle = {
//     backgroundColor: mode === 'dark' ? '#f8f9fa' : '#042743', 
//     color: mode === 'dark' ? '#042743' : 'white',
//     border: mode === 'dark' ? '2px solid #042743' : '2px solid white',
//     borderRadius: '50px',     // Pill shape
//     padding: '8px 20px',
//     fontWeight: '600',
//     transition: 'transform 0.2s ease, box-shadow 0.2s ease',
//     cursor: 'pointer',
//     display: 'flex',
//     alignItems: 'center',
//     gap: '8px'
//   };

//   return (
//     <nav className={`navbar navbar-expand-lg navbar-${mode} sticky-top`} style={navStyle}>
//       <div className="container-fluid px-4">
        
//         {/* Brand Logo */}
//         <Link className="navbar-brand fw-bold fs-3" to="/">
//           {title}
//         </Link>

//         {/* Mobile Menu Button */}
//         <button 
//           className="navbar-toggler" 
//           type="button" 
//           data-bs-toggle="collapse" 
//           data-bs-target="#navbarSupportedContent" 
//           aria-controls="navbarSupportedContent" 
//           aria-expanded="false" 
//           aria-label="Toggle navigation"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>

//         {/* Collapsible Content */}
//         <div className="collapse navbar-collapse" id="navbarSupportedContent">
//           <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//             <li className="nav-item">
//               <NavLink 
//                 className={({ isActive }) => `nav-link ${isActive ? 'fw-bold active' : ''}`} 
//                 aria-current="page" 
//                 to="/"
//               >
//                 Home
//               </NavLink>
//             </li>
//             <li className="nav-item">
//               <NavLink 
//                 className={({ isActive }) => `nav-link ${isActive ? 'fw-bold active' : ''}`} 
//                 to="/about"
//               >
//                 {aboutText}
//               </NavLink>
//             </li>
//           </ul>

//           {/* Custom Dark/Light Mode Button */}
//           <div className="d-flex align-items-center">
//              <button 
//                 onClick={toggleMode} 
//                 style={btnStyle}
//                 className="shadow-sm"
//                 onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
//                 onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
//              >
//                {/* Logic: Show icon opposite to current state or representing the target state */}
//                {mode === 'light' ? (
//                  <>
//                    <span>Dark Mode</span>
//                    <span style={{fontSize: '1.2rem'}}>🌙</span> 
//                  </>
//                ) : (
//                  <>
//                    <span>Light Mode</span>
//                    <span style={{fontSize: '1.2rem'}}>☀️</span>
//                  </>
//                )}
//              </button>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// }

// Navbar.propTypes = {
//   title: PropTypes.string.isRequired,
//   aboutText: PropTypes.string.isRequired,
//   mode: PropTypes.string.isRequired,
//   toggleMode: PropTypes.func.isRequired
// };

// Navbar.defaultProps = {
//     title: 'Set title here',
//     aboutText: 'About'
// };