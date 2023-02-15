import React from 'react';
import { Link } from 'react-router-dom';
import { FaChevronLeft, FaMicrophone } from 'react-icons/fa';
import { BsGearFill } from 'react-icons/bs';

const Navigation = () => (

  <nav className="navbar fixed-top">
    <div className="container">
      <Link to="/">
        <FaChevronLeft />
      </Link>

      <h1>
        The Kingdom of The Sun
      </h1>
      <div className="right-menu">
        <FaMicrophone />
        <BsGearFill />
      </div>
    </div>
  </nav>

);
export default Navigation;
