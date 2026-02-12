import facebookIcon from "../../src/assets/social_icons/facebook.png";
import instagramIcon from "../../src/assets/social_icons/instagram.png";
import twitterIcon from "../../src/assets/social_icons/twitter.png";
import githubIcon from "../../src/assets/social_icons/github.png";

const Footer = (props) => {
  return (
    <footer className="bg-dark text-light py-4">
      <div className="container">
        {/* Social icons row */}
        <div className="row mb-3">
          <div className="col-auto">
            <a href="/" className="me-2">
              <img
                src={facebookIcon}
                alt="Facebook"
                className="img-fluid"
                style={{ width: "24px", height: "24px" }}
              />
            </a>
            <a
              href="https://www.instagram.com/mayanksaini.001"
              className="me-2"
            >
              <img
                src={instagramIcon}
                alt="Instagram"
                className="img-fluid"
                style={{ width: "24px", height: "24px" }}
              />
            </a>
            <a href="/" className="me-2">
              <img
                src={twitterIcon}
                alt="Twitter"
                className="img-fluid"
                style={{ width: "24px", height: "24px" }}
              />
            </a>
            <a href="https://github.com/dev-mayank-saini">
              <img
                src={githubIcon}
                alt="GitHub"
                className="img-fluid"
                style={{ width: "24px", height: "24px" }}
              />
            </a>
          </div>
        </div>

        {/* Links grid - ONE ROW with 4 columns */}
        <div className="row row-cols-2 row-cols-md-4 g-3">
          <div className="col">
            <a href="/" className="d-block small text-light mb-1">
              Audio Description
            </a>
            <a href="/" className="d-block small text-light mb-1">
              Investor Relations
            </a>
            <a href="/" className="d-block small text-light">
              Legal Notices
            </a>
          </div>

          <div className="col">
            <a href="/" className="d-block small text-light mb-1">
              Help Centre
            </a>
            <a href="/" className="d-block small text-light mb-1">
              Jobs
            </a>
            <a href="/" className="d-block small text-light">
              Cookie Preferences
            </a>
          </div>

          <div className="col">
            <a href="/" className="d-block small text-light mb-1">
              Gift Cards
            </a>
            <a href="/" className="d-block small text-light mb-1">
              Terms of Use
            </a>
            <a href="/" className="d-block small text-light">
              Corporate Information
            </a>
          </div>

          <div className="col">
            <a href="/" className="d-block small text-light mb-1">
              Media Centre
            </a>
            <a href="/" className="d-block small text-light mb-1">
              Privacy
            </a>
            <a href="/" className="d-block small text-light">
              Contact Us
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="row mt-3">
          <div className="col-12">
            <small>&copy; 1997–2026 Netflix Clone Project, Inc.</small>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
