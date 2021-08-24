import React, {useState} from 'react';
import './header.css';
import { Link } from 'react-router-dom';
import { GoX } from "react-icons/go";
import { GoThreeBars } from "react-icons/go";

function header () {
  const [click, setClick] = useState (false)

  const handleClick =() => setClick (!click)
  

  return (
    <nav className="header">
     <Link to ='/' clasName ="header-logo">
       Nike
     </Link>
     
     <div className="menu" onClick={handleClick}> 
      <i className={click ?<GoThreeBars/> : <GoX/>}/>
     </div>
    
    </nav>
  );
};

export default header;
