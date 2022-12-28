import React from "react";
import "./nav.css";
import HamburgerDrawers from "../components/HamburgerDrawers";

function Nav({setCategory}) {
  return (
    <div className="nav">
      <div className="menu">
        <HamburgerDrawers setCategory={setCategory}/>
      </div>
      <img
        className="nav_image"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRU6KKoF2PD5QsV5vmi34-MUknsPyu2L5I42SkQnAZY&s"
        alt="Inshortsimage"
      />
    </div>
  );
}

export default Nav;
