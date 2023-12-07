import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

const about = () => {
  return (
    <div>
      <h2>
        About
      </h2>
      <Link to="/">click me </Link><br />
      <Link to="/service">click me </Link>
    </div>
  )
}

export default about
