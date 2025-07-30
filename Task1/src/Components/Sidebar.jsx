import React, { useState } from "react";
import "../App.css";
import { SidebarData } from "./SidebarData";
import logo from "../assets/logo.svg";
import logoClosed from "../assets/logoClosed.svg"; // Assuming you have an image to display
function Sidebar() {
  const [closed, setOpen] = useState(true);
  return (
    <>
      <div
        className="logo"
        onClick={() => setOpen(!closed)}
        style={{
          position: "fixed",
          top: "0px",
          left: "10px",
          zIndex: 1200,
          padding: "0px",
          margin: "0px",
        }}
      >
        <img
          src={closed ? logoClosed : logo}
          alt="Logo"
          style={{
            width: "150px",
            height: "150px",
            backgroundColor: "transparent",
            display: "block",
          }}
        />
      </div>
      <div className={`Sidebar${closed ? "closed" : "open"}`}>
        <ul className="SidebarList">
          {SidebarData.map((val, key) => {
            return (
              <li
                key={key}
                className="row"
                id={window.location.pathname === val.link ? "active" : ""}
                onClick={() => {
                  window.location.pathname = val.link;
                }}
              >
                <div id={`icon${closed ? "closed" : "open"}`}>{val.icon}</div>
                <div id="title">{closed ? "" : val.title}</div>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default Sidebar;
