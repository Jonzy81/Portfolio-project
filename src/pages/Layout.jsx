import { Outlet, Link, NavLink, useLocation } from "react-router-dom";

const Layout = () => {
    const location = useLocation();
    const isContactPage = location.pathname === '/contact';

    return (
        <>{/* testing push  */}
            <header>
                <nav>
                    <ul className="nav-bar">
                        <input type="checkbox" id="check" />
                        <span className="menu">
                            <li>
                                <NavLink to="/about" activeClassname="active">About</NavLink>
                            </li>
                            <li>
                                <NavLink to="/career" activeClassname="active">Career</NavLink>
                            </li>
                            <li>
                                <NavLink to="/portfolio" activeClassname="active">Portfolio</NavLink>
                            </li>
                            <li>
                                <NavLink to="/contact" activeClassname="active">Contact</NavLink>
                            </li>
                            <label htmlFor="check" className="close-menu">
                                <i
                                    className="fa-solid fa-circle-xmark"
                                    style={{ color: "#000000" }}
                                />
                            </label>
                        </span>
                        <label htmlFor="check" className="open-menu">
                            <i className="fa-solid fa-bars" style={{ color: "#000000" }} />
                        </label>
                    </ul>
                    <Link to="/" className="home">
                        J<span id="jonny-trigger">o</span>nny Touma
                    </Link>
                </nav>
            </header>
            <Outlet />
            <footer className={isContactPage ? "fixed-footer" : ""}>
                <div className="footer-links">
                    <li className="get-in-touch">Get in touch</li>
                    <ul className="btn-links">
                        <li>
                            <a
                                href="https://se.linkedin.com/in/jonny-touma-93201014b"
                                className="bi bi-linkedin"
                            />
                        </li>
                        <li>
                            <a
                                href='mailto:"jonnytouma@gmail.com"'
                                className="bi bi-envelope-at-fill"
                            />
                        </li>
                        <li>
                            <a href="https://github.com/Jonzy81" className="bi bi-github" />
                        </li>
                        <li>
                            <a href="#modalPhone" className="bi bi-telephone-plus-fill" />
                            <div id="modalPhone" className="modal">
                                <div className="modal-content">
                                    <a
                                        href="#close"
                                        className="fa-solid fa-circle-xmark"
                                        id="close"
                                    />
                                    <a href="tel:+460707866632">
                                        <i className="bi bi-telephone-plus-fill">: +(46)0707866632</i>
                                    </a>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </footer>
        </>
    )
}

export default Layout
