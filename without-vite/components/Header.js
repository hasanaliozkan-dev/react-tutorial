function Header(){
    return(
    <header>
        <nav className="nav">
            <img  className = "nav-logo" src="./react-logo.png" width="120px" />
            <ul className="nav-items">
                <li className="nav-item active ml3">Pricing</li>
                <li className="nav-item active ml3">About</li>
                <li className="nav-item active ml3">Content</li>
            </ul>
        </nav>
    </header>
    )
}

export default Header;