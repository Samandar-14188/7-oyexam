import Header from "./utils/header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./page/home";
import Speakers from "./page/speakers";
import Earphones from "./page/earphones";
import Headphones from "./page/headphones";
import Footer from "./utils/footer";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="speakers" element={<Speakers />} />
          <Route path="earphones" element={<Earphones />} />
          <Route path="headphones" element={<Headphones />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}
