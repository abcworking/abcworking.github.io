import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Listings from "./pages/Listings.jsx";
import NavBar from "./components/NavBar.jsx";
import { trackPageview } from "./analytics.js";

function PageviewTracker() {
  const location = useLocation();

  useEffect(() => {
    trackPageview(location.pathname);
  }, [location.pathname]);

  return null;
}

export default function App() {
  return (
    <>
      <PageviewTracker />
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/listings" element={<Listings />} />
      </Routes>
    </>
  );
}
