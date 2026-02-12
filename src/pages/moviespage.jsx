import ChildCarousel1 from "../my_components/Carousel1";
import ChildCarousel2 from "../my_components/Carousel2";
import ChildCarousel3 from "../my_components/Carousel3";
import ChildCarousel4 from "../my_components/Carousel4";
import Navbar from "../my_components/Navbar";
import { Link } from "react-router-dom";

const moviespage = (props) => {
  let fillerHeight = {
    height: "50px",
  };
  return (
    <>
      <nav>
        <Navbar
          setSearchTerm={props.setSearchTerm}
          searchTerm={props.searchTerm}
        />
      </nav>
      {props.showAlert && (
        <div
          className="alert alert-primary position-fixed top-5 end-0 m-3"
          style={{ zIndex: 9999 }}
        >
          Added to <Link to="/mylist">My List</Link>!
        </div>
      )}
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
    </>
  );
};

export default moviespage;
