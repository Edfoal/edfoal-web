import './Navbar.css'

const Navbar = () => {
    return (
        <div >
            <nav className="Navbar">
                <a href="/" className="Site-Title">EdFoal</a>
                <ul>
                    <li><a href="/home">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/services">Services</a></li>
                    <li><a href="/team">Team</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar;