import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import * as GiIcons from "react-icons/gi";
import * as CgIcons from "react-icons/cg";
import { Links, Socials } from "../Links";
import "./Navbar.css";


export const Navbar = () => {
  const [Icon, SetIcon] = useState(false);
  const [Sidebar, Setsidebar] = useState(true);

  useEffect(() => {
    const timeout = setInterval(() => {
      SetIcon(!Icon);
    }, 800);
    return () => clearInterval(timeout);
  }, [Icon]);

  return (
    <>
      <div className="navigations">
        <Link to="#">
          <button>
            <GiIcons.GiHamburgerMenu
              className={`${Icon ? `menu-icon2` : `menu-icon`}`}
              onClick={() => Setsidebar(true)}
            />
          </button>
        </Link>
      </div>
      <nav
        className={`${
          Sidebar ? `sidebar-hide sidebar-active` : `sidebar-hide`
        }`}
      >
        <div className="sidebar-header">
          <h1 className="sidebar-title">Sidebar</h1>
          <Link to="#">
            <button className="closeicon" onClick={() => Setsidebar(false)}>
              <CgIcons.CgClose />
            </button>
          </Link>
        </div>
        <div className="sidebar-links">
            <ul onClick={()=>Setsidebar(false)}>
              {Links.map((items, index) => {
                const { cName, name, to, icon } = items;
                return (
                  <Link to={to} className="sidebar-link-router">
                    <li key={index} className={cName}>
                      {icon}
                      <span>{name}</span>
                    </li>
                  </Link>
                );
              })}
            </ul>
        </div>
        <div className="sidebar-socials">
            {Socials.map((items, index) => {
              const { social,site } = items;
              return <a href={site} target="_blank" rel="noopener noreferrer" key={index}>{social}</a>;
            })}
        </div>
      </nav>
    </>
  );
};
