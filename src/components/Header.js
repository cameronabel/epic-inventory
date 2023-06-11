import React from "react";
import ghCat from './../img/github-mark-white.png';


export default function Header(){
  return (
    <>
      <nav>
        <span id="nav-pad"></span>
        <a href="/" id="nav-logo">Epic Inventory</a>
        <a href="https://github.com/cameronabel/epic-inventory" className="to-right nav-link" target="_blank"><img id="gh-logo" src={ghCat} /></a>
        <a href="mailto:cameronabel@gmail.com" className="nav-link">Contact</a>
        <span id="nav-pad"></span>
      </nav>
    </>
  );
}