import React from 'react'
import {Route,Routes,Link} from 'react-router-dom';
export default function Header() {
  return (
    <div>
 <nav className="navbar navbar-expand-lg navbar-light bg-dark" style={{height:"80px" }}>
 <div className="container-fluid">

   <button
     className="navbar-toggler"
     type="button"
     data-mdb-toggle="collapse"
     data-mdb-target="#navbarCenteredExample"
     aria-controls="navbarCenteredExample"
     aria-expanded="false"
     aria-label="Toggle navigation"
   >
     <i className="fas fa-bars"></i>
   </button>

   <div
     className="collapse navbar-collapse justify-content-center"
     id="navbarCenteredExample">

     <ul className="navbar-nav mb-2 mb-lg-0">
     <li className="nav-item">
         <a className="nav-link" href="#">   <Link to="/"   style={{color:"white", textDecoration:"none" , }}>Home</Link></a>
       </li>
       <li className="nav-item">
         <a className="nav-link" href="#">  <Link to="/about" style={{color:"white", textDecoration:"none"}}>About</Link></a>
       </li>
       <li className="nav-item">
         <a className="nav-link" href="#"> <Link to="/Contact" style={{color:"white", textDecoration:"none"}}>Contact</Link></a>
       </li>


     </ul>

   </div>

 </div>

</nav>

<h1 className="text-center mt-3">Tourism in Jordan</h1>
    </div>
  )
}
