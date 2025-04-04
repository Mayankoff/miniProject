import React, { useState } from "react";
import Logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import ReorderIcon from "@mui/icons-material/Reorder";
import "../styles/Navbar.css";

function Navbar() {
  const [openLinks, setOpenLinks] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };

  return (
    <>
      <div className="navbar">
        <div className="leftSide" id={openLinks ? "open" : "close"}>
        <Link to="/">
        <img src={Logo} alt="Minki's Pizzeria" className="Logo" />
      </Link>
          <div className="hiddenLinks">
            <Link to="/" className="nav-button"> Home </Link>
            <Link to="/menu" className="nav-button"> Menu </Link>
            <Link to="/about" className="nav-button"> About </Link>
            <Link to="/contact" className="nav-button"> Contact </Link>
          <a href="https://drive.google.com/file/d/1sfTNXORjcmk3m2DkQIz16glNO9R84svv/view?usp=sharing" className="nav-button" target="_blank" rel="noopener noreferrer">Portfolio</a>
          </div>
        </div>

        <div className="rightSide">
          <Link to="/" className="nav-button"> Home </Link>
          <Link to="/menu" className="nav-button"> Menu </Link>
          <Link to="/about" className="nav-button"> About </Link>
          <Link to="/contact" className="nav-button"> Contact </Link>
          <a href="https://drive.google.com/file/d/1sfTNXORjcmk3m2DkQIz16glNO9R84svv/view?usp=sharing" className="nav-button" target="_blank" rel="noopener noreferrer">Portfolio</a>
          <button onClick={toggleNavbar}>
            <ReorderIcon />
          </button>
        </div>
      </div>
    </>
  );
}

export default Navbar;
