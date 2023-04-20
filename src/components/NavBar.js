import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";
import { NavBarList } from "../Lists/NavBarList";
import "../css/NavBar.css";
import { IconContext } from "react-icons";

function Navbar() {
  const [NavBar, setNavBar] = useState(false);
  const [page, setPage] = useState("Home");
  const showSidebar = () => setNavBar(!NavBar);

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <div className="navbar1 fixed-top ">
          <Link to="#" className="menu-bars">
            <FaIcons.FaBars onClick={showSidebar} color="white"/>
          </Link>
          <h2 className="titleText">{page}</h2>
        </div>
        <nav className={NavBar ? "nav-menu active fixed-top" : "nav-menu "}>
          <ul className="nav-menu-items">
            <li className="navbar-toggle">
              <Link to="#" className="menu-bars" onClick={showSidebar}>
                <AiIcons.AiOutlineClose color='black'/>
              </Link>
            </li>
            {NavBarList.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path} onClick={() => setPage(item.title)}>
                    {item.icon}
                    <span className="span-title">{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
