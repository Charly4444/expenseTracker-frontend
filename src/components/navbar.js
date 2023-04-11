import React from 'react';
import { Link } from 'react-router-dom';
const Navbar = () => {
  return <nav>
    <ul>
      <li>
        {/* instead of using the traditional link <a></a> tag */}
        {/* were using a <Link></Link> tag got from 'react-router-dom' */}
        {/* the 'to=--' property helps us match the <Route paths>*/}
        <Link className='nav-links' to="/">Home</Link>
      </li>
      <li>
        <Link className='nav-links' to="/users">Users</Link>
      </li>
      <li>
        <Link className='nav-links' to="/exp">Expenses</Link>
      </li>
      
    </ul>
  </nav>;
};

export default Navbar;
