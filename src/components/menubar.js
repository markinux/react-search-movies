import React from "react";
export default function menuBar() {
  return (
    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      <li className="nav-item dropdown">
        <a
          className="nav-link dropdown-toggle"
          href="#"
          id="navbarDropdown"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Dropdown
        </a>
        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
          <li>
            <a className="dropdown-item" href="/movies">
              Movies
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="/series">
              Series
            </a>
          </li>
        </ul>
      </li>
    </ul>
  );
}
