import React from 'react';
import './header.css';
import { Link } from 'react-router';
import { GoThreeBars } from "react-icons/go";

const header = () => {
  return (
    <div className="header">
      <a href="#">Nike</a>
      <div className="bar"> <GoThreeBars /></div>
      <h2 className="bar">Nike</h2> 
    </div>
  );
};

export default header;
