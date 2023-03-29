import React from "react";

const Header = () => {
  return (
    <div>
      <nav class="navbar navbar-light bg-primary justify-content-between">
        <a class="navbar-brand ps-3">Navbar</a>
        <form class="form-inline pe-3">
          <input
            class="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          
        </form>
      </nav>
    </div>
  );
};

export default Header;