import React from 'react'

export default function NavTab() {
  return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/terms">
                  Terminos
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
  )
}
