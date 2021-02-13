import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <Link className="navbar-brand nav-title brand-text" to="/">spotify <span className="pinkish">mood ring</span></Link>
            </div>
        </nav>
    )
};

export default Navbar;