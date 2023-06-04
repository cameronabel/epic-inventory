import React from "react";


export default function Header(){
  return (
    <>
      <nav>
        <span id="nav-pad"></span>
        <a href="/" id="nav-logo">Epic Inventory</a>
        <a href="https://github.com/cameronabel/epic-inventory" class="to-right nav-link" target="_blank"><img id="gh-logo" src="github-mark-white.png" /></a>
        <a href="mailto:cameronabel@gmail.com" class="nav-link">Contact</a>
        <span id="nav-pad"></span>
      </nav>
    </>
  );
}