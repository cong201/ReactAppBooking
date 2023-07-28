import "./navbar.css"

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="container">
                <a href="/"><span className="logo">BookingHotel</span></a>
                <div className="items">
                    <button className="button">Login</button>
                    <button className="button">Sign up</button>
                </div>
            </div>
        </div>
    )
}

export default Navbar