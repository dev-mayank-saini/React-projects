import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = (props) => {
  let brandNameStyle = {
    color: "red",
    fontSize: "32px",
  };
  let navbarFontSizes = {
    fontSize: "15px",
  };

  let [showSearch, setShowSearch] = useState(false);

  const toggleSearch = () => {
    setShowSearch(!showSearch);
    fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=856b2af6648ffe4fff1a4e19be4e761e",
    )
      .then((res) => res.json())
      .then((data) => data.result);
  };

  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-dark fixed-top"
        style={{ backgroundColor: "rgba(0,0,0,0.8)" }}
      >
        <div className="container-fluid">
          <a className="navbar-brand" style={brandNameStyle} href="/">
            {props.brandName}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav me-auto align-items-center">
              <li className="nav-item">
                <Link
                  className="nav-link active fw-light text-light"
                  aria-current="page"
                  style={navbarFontSizes}
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link fw-lighter text-light "
                  style={navbarFontSizes}
                  to="/netflixspecial"
                >
                  Shows
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link  fw-lighter text-light "
                  style={navbarFontSizes}
                  to="/movies"
                >
                  Movies
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link  fw-lighter text-light "
                  style={navbarFontSizes}
                  to="/newandpopular"
                >
                  New & Popular
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link  fw-lighter text-light "
                  style={navbarFontSizes}
                  to="/mylist"
                >
                  My List
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link  fw-lighter text-light "
                  style={navbarFontSizes}
                  to="/about"
                >
                  About This Site
                </Link>
              </li>
            </ul>
            <ul className="navbar-nav ms-auto align-items-center gap-2">
              {showSearch && (
                <li className="nav-item">
                  <input
                    type="search"
                    className="form-control form-control-sm bg-dark text-white border-0 me-2"
                    placeholder="Search"
                    autoFocus
                    value={props.searchTerm}
                    onChange={(e) => props.setSearchTerm(e.target.value)}
                  />
                </li>
              )}
              <button
                className="btn btn-outline-light btn-sm"
                onClick={toggleSearch}
              >
                <i className="bi bi-search"></i>
              </button>
              <button className="btn btn-outline-light btn-sm">
                <i className="bi bi-bell"></i>
              </button>
              <li
                className="nav-item dropdown gap dropdown-toggle"
                data-bs-toggle="dropdown"
              >
                <i className="bi bi-person-circle fs-4 text-white ms-2"></i>
                <ul className="dropdown-menu dropdown-menu-end text-white">
                  <li>
                    <a className="dropdown-item" href="/">
                      Just for show yk
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
