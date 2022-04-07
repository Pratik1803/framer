import React from 'react'
import { Link } from 'react-router-dom';
import Styles from "./Navbar.module.scss";

function Navbar() {
  return (
    <div className={Styles.navbar}>
      <h1>alena</h1>
      <div className={Styles.nav_links}>
        <Link to={"/"}>Home</Link>
        <Link to={"/contact"}>Contact</Link>
      </div>
    </div>
  )
}

export default Navbar