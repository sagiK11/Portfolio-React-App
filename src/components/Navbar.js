import logo from "../../src/assets/images/page_logo.svg"

const Navbar = () => {
    return (
        <nav className="navbar  py-0" role="navigation" aria-label="main navigation">
            <div className="container">
                <Brand />
                <Menu />
            </div>
        </nav>
    )
}

export default Navbar

const Brand = () => {
    return (
        <div className="navbar-brand" >
            <a className="navbar-item" href="./">
                <img src={logo} alt="logo" style={{ minHeight: "48px" }} />
            </a>
            <a role="button" className="navbar-burger" id="burger" aria-label="menu" aria-expanded="false" data-target="navbar-menu">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
            </a>
        </div>
    )
}

const Menu = () => {
    return (
        <div className="navbar-menu" id="nav-links">
            <div className="navbar-end">
                <a href="mailto: sagikorzak@gmail.com" className="navbar-item">
                    Email
                </a>

                <a href="https://github.com/sagik11" className="navbar-item">
                    Github
                </a>

                <a href="https://www.linkedin.com/in/sagi-korzack/" className="navbar-item">
                    Linkedin
                </a>
            </div>

        </div>
    )

}
