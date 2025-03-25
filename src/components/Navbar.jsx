import { Link, NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import "../css/Navbar.css"

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
            <div className="navbar-brand">
                <Link to="/">Movie App</Link>
            </div>
            <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                ☰
            </button>
            <div className={`navbar-links ${menuOpen ? "active" : ""}`}>
                <NavLink to="/" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Home</NavLink>
                <NavLink to="/favorites" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Favorites</NavLink>
            </div>
        </nav>
    );
};

export default Navbar;
