import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import Logo from "../../assets/images/logo.png";
const AppHeader = () => {
  const [navOpen, setNavOpen] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    // var currentUrl = window.location.pathname;
    // setNavOpen(currentUrl);
  }, []);
  return (
    <>
      <header id="header" className="header">
        <div
          className="header-inner"
          style={{
            position: menuOpen ? "fixed" : "static",
            top: 0,
          }}
        >
          <div className="container">
            <div id="logo">
              <a href="https://azurehomesandconsultants.com/">
                
                <span className="logo-default"><img src={Logo} /></span>
                {/* <span className="logo-dark">Azure</span> */}
              </a>
            </div>
            <div id="mainMenu-trigger" onClick={() => setMenuOpen(!menuOpen)}>
              <a
                className={`lines-button x ${menuOpen ? `toggle-active` : ""}`}
              >
                <span className="lines"></span>
              </a>
            </div>
            <div
              id={`mainMenu`}
              className={`${menuOpen ? `menu-animate menu-open` : ""}`}
              style={{ minHeight: menuOpen ? "100vh" : 0 }}
            >
              <div className={`container`}>
                <nav>
                  <ul>
                    <li>
                      <Link
                        to={`${process.env.PUBLIC_URL}/`}
                        className={`${navOpen === "home" ? "active" : ""}`}
                        onClick={() => {
                          setNavOpen("home");
                          setMenuOpen(false);
                        }}
                      >
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link
                        to={`${process.env.PUBLIC_URL}/aboutUs`}
                        className={`${navOpen === "about" ? "active" : ""}`}
                        onClick={() => {
                          setNavOpen("about");
                          setMenuOpen(false);
                        }}
                      >
                        About Us
                      </Link>
                    </li>
                    <li>
                      <Link
                        to={`${process.env.PUBLIC_URL}/service`}
                        className={`${navOpen === "service" ? "active" : ""}`}
                        onClick={() => {
                          setNavOpen("service");
                          setMenuOpen(false);
                        }}
                      >
                        Services
                      </Link>
                    </li>
                    <li>
                      <Link
                        to={`${process.env.PUBLIC_URL}/portfolio`}
                        className={`${navOpen === "portfolio" ? "active" : ""}`}
                        onClick={() => {
                          setNavOpen("portfolio");
                          setMenuOpen(false);
                        }}
                      >
                        Portfolio
                      </Link>
                    </li>
                    <li>
                      <Link
                        to={`${process.env.PUBLIC_URL}/ideaBook`}
                        className={`${navOpen === "ideaBook" ? "active" : ""}`}
                        onClick={() => {
                          setNavOpen("ideaBook");
                          setMenuOpen(false);
                        }}
                      >
                        Idea Book
                      </Link>
                    </li>
                    {/* <li>
                      <Link
                        to="/blog"
                        className={`${navOpen === "blog" ? "active" : ""}`}
                        onClick={() => {
                          setNavOpen("blog");
                          setMenuOpen(false);
                        }}
                      >
                        Blog
                      </Link>
                    </li> */}
                    {/* <li> */}
                    {/* <Link
                        to="/carrer"
                        className={`${navOpen === "carrer" ? "active" : ""}`}
                        onClick={() => {
                          setNavOpen("carrer");
                          setMenuOpen(false);
                        }}
                      >
                        Carrers
                      </Link> */}
                    {/* </li> */}
                    <li>
                      <Link
                        to={`${process.env.PUBLIC_URL}/contact`}
                        className={`${navOpen === "contact" ? "active" : ""}`}
                        onClick={() => {
                          setNavOpen("contact");
                          setMenuOpen(false);
                        }}
                      >
                        Contact Us
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default AppHeader;
