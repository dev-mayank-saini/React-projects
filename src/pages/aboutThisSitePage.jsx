import React from "react";
import Navbar from "../my_components/Navbar";
import Footer from "../my_components/Footer";

const aboutThisSitePage = () => {
  let paragraphStyle = {
    color: "Gray",
    fontSize: "24",
  };

  let fillerHeight = {
    height: "50px",
  };
  return (
    <>
      <div className="container">
        <Navbar></Navbar>
      </div>
      <div className="container" style={fillerHeight}></div>
      <div>
        <p className="container my-3" style={paragraphStyle}>
          This site is only for learning purpose, I tried learning react and
          using mainly basic components without much thought to desgin and
          animations. On clicking the movies the user is redirected to a TMDB{" "}
          {"(The Movie Database)"} site, because I can't play the preview
          without a copyright, right!
        </p>
        <p className="container my-3" style={paragraphStyle}>
          I included a search bar and tried routing as well, for most of my
          components I have used Bootstrap's help, I am trying to learn Tailwind
          CSS as well, future projects will have better CSS.
        </p>
        <p className="container my-3" style={paragraphStyle}>
          By clicking the social icons you can view my own socials, Thanks for
          viewing the site!
        </p>
      </div>
      <div className="container">
        <Footer></Footer>
      </div>
    </>
  );
};

export default aboutThisSitePage;
