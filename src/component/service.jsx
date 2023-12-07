import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom'

const service = () => {
  return (
    <div>
      <h1>
        Service
      </h1>
      <Link to="/">click me</Link><br />
      <Link to="/about">click me</Link>
    </div>
  )
}

export default service
