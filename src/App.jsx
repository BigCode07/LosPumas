import "./App.css";
import { useEffect, useState } from "react";
// Db Firestore
import { db } from "./firebase/firebaseConfig";

// Firestore
import { collection, query, getDocs } from "firebase/firestore";

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

const App = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const q = query(collection(db, "ProductsPuma"));
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        console.log(doc.id, " => ", doc.data());
      });
    };
    getProducts();
  }, []);

  return (
    <Router>
      <div className="App">
        <Header />
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/store" element={<StorePage />} />
          <Route path="/players" element={<TeamPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
