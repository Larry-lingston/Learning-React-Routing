import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const home = () => {
  return (
    <div>
      <h1>
        Home
      </h1>
      <Link to="/about">click me</Link><br />
      <Link to="/service">click me</Link>
    </div>
  )
}

export default home
