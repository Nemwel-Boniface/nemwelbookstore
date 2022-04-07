import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <div className="navbar">
    <nav>
      <h1>Nemwel Bookstore</h1>
      <ul>
        <li><Link to="/">BOOKS</Link></li>
        <li><Link to="/categories">CATEGORIES</Link></li>
      </ul>
      <i class="fa fa-user" aria-hidden="true"></i>
    </nav>
  </div>
);
export default Navbar;
