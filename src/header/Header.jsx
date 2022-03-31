import React from 'react'
import Logo from '../logo192.png'
import CustomLink from '../CustomLink'
    
                     
export default function Header() {
  return (
    <header className="header">  
  <nav>    
    <ul>
       
        <img src={Logo} alt="Logo" style={{width:"80px",padding:'0px 20px'}}/>
      <div>
        <li id="home" className="menu"><CustomLink to="/">Home</CustomLink> </li>
          <li id="contact" className="menu con"><CustomLink to="/Contact">Contact</CustomLink></li>
        <li id="about" className="menu"> <CustomLink to="/About">About</CustomLink></li>

      </div>
    
        <li id="services" className="menu"><CustomLink to="/Servise">Servise</CustomLink></li>

    </ul>
  </nav>
</header>
  )
}
