import React from "react";
// import {Link} from 'react-router-dom';

const Nav = () => (
  <nav className="navbar navbar-default">
   <div className="navbar-header">
    <a className="navbar-brand" href="/">
      <span>
        <strong>Home</strong>
      </span>
    </a>
   </div>
   <div>
   <a className="navbar-brand" href="/account">
      <span>
        <strong>Account</strong>
      </span>
    </a>
   </div>
 </nav>
);

export default Nav;


