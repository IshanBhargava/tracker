import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>
                <Link to='/'>The Tracker</Link>
            </h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/progress">Progress</Link>
            </div>
        </nav>
    );
};

export default Navbar;