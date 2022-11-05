import React from 'react'

export default function Footer() {
  return (
    <div>
      <footer className="page-footer font-small blue" style={{background:"black" , marginTop:"72px"}}>


<div className="footer-copyright text-center py-3 text-white">
   <span>© 2020 Copyright: Jafer Al-Dakhily</span>
  {/* <a href="/"  style={{background:"white"}}> MDBootstrap.com</a> */}
  <ul style={{ "listStyle":"none","display":"flex","justifyContent":"center","gap":"5px" }}>
  <li><i>Facebook</i></li>
  <li><i>Github</i></li>
  <li><i>Linkedin</i></li>
  </ul>
</div>


</footer>
    </div>
  )
}
