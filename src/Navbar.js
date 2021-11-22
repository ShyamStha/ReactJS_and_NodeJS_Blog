import { Link } from 'react-router-dom'
const Navbar = function () {
    return (
        <div className="navbar">
            <div className="lists">
                <Link to="/" className="link1">Home</Link>
                <Link to="/create" className="link2">Create</Link>
            </div>
        </div>
    )
}
export default Navbar
