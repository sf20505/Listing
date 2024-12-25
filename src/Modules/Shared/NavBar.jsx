import React from "react";
import { MenuOutlined } from "@ant-design/icons";

export const NavBar = ({collapsed ,toggleCollapse ,menuItems}) => {
  return (
    <div className={`sider ${collapsed ? "collapsed" : ""}`}>
      <button className="collapse-btn" onClick={() => toggleCollapse()}>
        <MenuOutlined />
      </button>
      {!collapsed && (
        <ul className="menu">
          {menuItems.map((item, index) => (
            <li key={index} className="menu-item">
              <a href={item.path}>{item.name}</a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

