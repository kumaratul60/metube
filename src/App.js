import "./App.css";
import Header from "./components/Header/Header";
import Videos from "./components/RecommendedVideos/Videos";
import Sidebar from "./components/Sidebar/Sidebar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SearchPage from "./components/SerachPage/SearchPage";

function App() {
  return (
    // BEM class naming convention
    <div className="app">
      {/* Router => which component we want to show 
     Routes or Switch => It determines the route path
    */}
      <Router>
        <Header />
        <Routes>
          <Route
            path="/search/:searchTerm"
            element={
              <>
                <div className="app__page">
                  <Sidebar />
                  <SearchPage />
                </div>
              </>
            }
          />

          <Route
            path="/"
            element={
              <>
                <div className="app__page">
                  <Sidebar />
                  <Videos />
                </div>
              </>
            }
          />
        </Routes>
        {/* <div className="app__page">
          <Sidebar />
          <Videos />
        </div> */}
      </Router>
    </div>
  );
}

export default App;
