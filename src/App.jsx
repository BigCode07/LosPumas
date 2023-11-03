import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//Components
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

//Pages
import HomePage from "./pages/HomePage/HomePage";
import NewsPage from "./pages/NewsPage/NewsPage";
import StorePage from "./pages/StorePage/StorePage";
import TeamPage from "./pages/TeamPage/TeamPage";
import DetailPage from "./pages/DetailPage/DetailPage";


const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <NavBar />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/stores" element={<StorePage />} />
          <Route path="/players" element={<TeamPage />} />
          <Route path="/detail/:id" element={<DetailPage />} />
        </Routes>
        
   
        <Footer />
      </div>
    </Router>
  );
};

export default App;
