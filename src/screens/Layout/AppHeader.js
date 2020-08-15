import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

const AppHeader = () => {
  const [navOpen, setNavOpen] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    var currentUrl = window.location.pathname;
    setNavOpen(currentUrl);
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
              <a href="index.html">
                <span className="logo-default">Interior</span>
                <span className="logo-dark">Interior</span>
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
                        }}
                      >
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/aboutUs"
                        className={`${navOpen === "about" ? "active" : ""}`}
                        onClick={() => setNavOpen("about")}
                      >
                        About Us
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/service"
                        className={`${navOpen === "service" ? "active" : ""}`}
                        onClick={() => setNavOpen("service")}
                      >
                        Services
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/contact"
                        className={`${navOpen === "portfolio" ? "active" : ""}`}
                        onClick={() => setNavOpen("portfolio")}
                      >
                        Portfolio
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/"
                        className={`${navOpen === "ideaBook" ? "active" : ""}`}
                        onClick={() => setNavOpen("ideaBook")}
                      >
                        Idea Book
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/contact"
                        className={`${navOpen === "blog" ? "active" : ""}`}
                        onClick={() => setNavOpen("blog")}
                      >
                        Blog
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/"
                        className={`${navOpen === "carrer" ? "active" : ""}`}
                        onClick={() => setNavOpen("carrer")}
                      >
                        Carrers
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/contact"
                        className={`${navOpen === "contact" ? "active" : ""}`}
                        onClick={() => setNavOpen("contact")}
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
