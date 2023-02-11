import React from "react";
import {NavLink} from "react-router-dom";
import {Logo} from "components/base";

//scss

import "scss/header.scss";

const Header = () => {
  const menuItems = [
    {
      id: 1,
      text: "Home",
      path: "/",
    },
    {
      id: 2,
      text: "Starship",
      path: "/starships",
    },
    {
      id: 3,
      text: "Planet",
      path: "/planets",
    },
    {
      id: 4,
      text: "People",
      path: "/peoples",
    },
    {
      id: 5,
      text: "Vehicle",
      path: "/vehicles",
    },
  ];

  return (
    <header className="d-flex align-items-center flex-column py-3">
      <Logo />
      <nav className="navbar">
        <div className="container py-3">
          <ul className="nav list-unstyled d-flex">
            {menuItems.map((item) => (
              <li key={item.id} className="nav-item me-3 fw-bolder">
                <NavLink className="fs-5" to={item.path}>
                  {item.text}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
