import "./App.css";
import Layout from "./my_components/Layout.js";
import Mylistpage from "./pages/Mylistpage.jsx";
import { Routes, Route } from "react-router-dom";
import { useState, useEffect, useCallback } from "react";
import Newandpopularpage from "./pages/Newandpopularpage.jsx";
import Netflixspecialpage from "./pages/Netflixspecialpage.jsx";
import Moviespage from "./pages/moviespage.jsx";
import AboutThisSitePage from "./pages/aboutThisSitePage.jsx";

function App() {
  const [myList, setMyList] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [showDeleteAlert, setShowDeleteAlert] = useState(false);

  const updateMyList = useCallback((movie) => {
    setMyList((prev) => [...prev, movie]);
  }, []);

  const removeFromMyList = useCallback((movieId) => {
    setMyList((prev) => prev.filter((movie) => movie.id !== movieId));
  }, []);

  const triggerAlert = useCallback(() => {
    setShowAlert(true);
  }, []);

  useEffect(() => {
    if (showAlert) {
      const timer = setTimeout(() => setShowAlert(false), 2000);
      return () => clearTimeout(timer);
    }
  }, [showAlert]);

  const triggerDeleteAlert = useCallback(() => {
    setShowDeleteAlert(true);
  }, []);

  useEffect(() => {
    if (showDeleteAlert) {
      const timer = setTimeout(() => setShowDeleteAlert(false), 1000);
      return () => clearTimeout(timer);
    }
  }, [showDeleteAlert]);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout
            myList={myList}
            setMyList={setMyList}
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            updateMyList={updateMyList}
            removeFromMyList={removeFromMyList}
            showAlert={showAlert}
            triggerAlert={triggerAlert}
            showDeleteAlert={showDeleteAlert}
            triggerDeleteAlert={triggerDeleteAlert}
          />
        }
      />
      <Route
        path="/mylist"
        element={
          <Mylistpage
            myList={myList}
            setMyList={setMyList}
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            removeFromMyList={removeFromMyList}
            triggerDeleteAlert={triggerDeleteAlert}
            showDeleteAlert={showDeleteAlert}
          />
        }
      />
      <Route
        path="/newandpopular"
        element={
          <Newandpopularpage
            showAlert={showAlert}
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            updateMyList={updateMyList}
            triggerAlert={triggerAlert}
          />
        }
      />
      <Route
        path="/netflixspecial"
        element={
          <Netflixspecialpage
            showAlert={showAlert}
            updateMyList={updateMyList}
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            triggerAlert={triggerAlert}
          />
        }
      />
      <Route
        path="/movies"
        element={
          <Moviespage
            setSearchTerm={setSearchTerm}
            searchTerm={searchTerm}
            showAlert={showAlert}
            updateMyList={updateMyList}
            triggerAlert={triggerAlert}
          />
        }
      />
      <Route
        path="/about"
        element={
          <AboutThisSitePage
            setSearchTerm={setSearchTerm}
            searchTerm={searchTerm}
            showAlert={showAlert}
            updateMyList={updateMyList}
            triggerAlert={triggerAlert}
          />
        }
      />
    </Routes>
  );
}

export default App;
