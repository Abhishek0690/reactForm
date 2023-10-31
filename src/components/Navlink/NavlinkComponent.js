import React from "react";
import { Link } from "react-router-dom";

const NavLinkComponent = () => {
  return (
    <div className="navbar">
      <Link to="/add-shop">New Shop</Link>
      <Link to="/add-product">Add Product</Link>
    </div>
  );
};
export default NavLinkComponent;
