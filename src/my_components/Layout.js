import Footer from "../my_components/Footer";
import Navbar from "../my_components/Navbar";
import MainCarousel from "../my_components/MainCarousel";
import ChildCarousel1 from "../my_components/Carousel1";
import ChildCarousel2 from "../my_components/Carousel2";
import ChildCarousel3 from "../my_components/Carousel3";
import ChildCarousel4 from "../my_components/Carousel4";

import Mylist from "../my_components/Mylist";

const Layout = (props) => {
  let fillerHeight = {
    height: "50px",
  };

  return (
    <>
      <div className="container">
        <Navbar
          brandName="Netflix"
          searchTerm={props.searchTerm}
          setSearchTerm={props.setSearchTerm}
        />
      </div>
      <div className="container" style={fillerHeight}></div>
      {props.showAlert && (
        <div
          className="alert alert-primary position-fixed top-5 end-0 m-3"
          style={{ zIndex: 9999 }}
        >
          Added to My List!
        </div>
      )}
      {props.showDeleteAlert && (
        <div
          className="alert alert-primary position-fixed top-5 end-0 m-3"
          style={{ zIndex: 9999 }}
        >
          Removed from My List!
        </div>
      )}

      <div className="container my-5">
        <MainCarousel />
      </div>
      <div className="container" style={fillerHeight}></div>

      <div className="container">
        <ChildCarousel1
          searchTerm={props.searchTerm}
          updateMyList={props.updateMyList}
          triggerAlert={props.triggerAlert}
          showAlert={props.showAlert}
        />
      </div>
      <div className="container" style={fillerHeight}></div>
      <div className="container">
        <ChildCarousel2
          searchTerm={props.searchTerm}
          setMyList={props.setMyList}
          updateMyList={props.updateMyList}
          triggerAlert={props.triggerAlert}
          showAlert={props.showAlert}
        />
      </div>
      <div className="container" style={fillerHeight}></div>
      <div className="container">
        <ChildCarousel3
          searchTerm={props.searchTerm}
          setMyList={props.setMyList}
          updateMyList={props.updateMyList}
          triggerAlert={props.triggerAlert}
          showAlert={props.showAlert}
        />
      </div>
      <div className="container" style={fillerHeight}></div>
      <div className="container">
        <ChildCarousel4
          searchTerm={props.searchTerm}
          setMyList={props.setMyList}
          updateMyList={props.updateMyList}
          triggerAlert={props.triggerAlert}
          showAlert={props.showAlert}
        />
      </div>
      <div className="container" style={fillerHeight}></div>
      <hr className="border-danger border-5 mx-5" />
      <div className="container my-5">
        <Mylist
          myList={props.myList}
          setMyList={props.setMyList}
          removeFromMyList={props.removeFromMyList}
          triggerDeleteAlert={props.triggerDeleteAlert}
        />
      </div>
      <div className="container" style={fillerHeight}></div>
      <div className="container my-5">
        <Footer
          footerHeader="Netflix UI Clone Project"
          footerTitle="TMDB (The Movie DataBase)"
          footerDesc="This product uses the TMDb API but is not endorsed or certified by TMDb."
        />
      </div>
    </>
  );
};

export default Layout;
