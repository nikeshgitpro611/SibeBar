import React from "react";
import logo from "./logo.svg";
import { social, links } from "./data";
import { FaTimes } from "react-icons/fa";
import { useGlobalContext } from "./Context";

const SideBar = () => {
  const { isSideBarOpen, closeSideBar } = useGlobalContext();
  return (
    <aside className={isSideBarOpen ? "sidebar show-sidebar" :'sidebar' }>
      <div className="sidebar-header">
        <img src={logo} alt="Logo" className="logo" />
        <button className="close-btn" onClick={closeSideBar}>
          <FaTimes />
        </button>
      </div>

      {/* =====For Links====== */}

      <ul className="links">
        {links.map((links) => {
          const { id, url, text, icon } = links;
          return (
            <li key={id}>
              <a href={url}>
                {icon}
                {text}
              </a>
            </li>
          );
        })}
      </ul>

      {/* =====For Social Logo=== */}
      <ul className="social-links">
        {social.map((links) => {
          const { id, url, icon } = links;
          return (
            <li key={id}>
              <a href={url}>{icon}</a>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default SideBar;
