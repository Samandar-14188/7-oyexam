import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './page/home/index'
import Speakers from './page/speakers'
import Earphones from './page/earphones';
import Headphones from './page/headphones';
import Product from './page/product'; // The component for displaying a single product
import Layout from './layout';
import Registr from './page/registarsiya';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="speakers" element={<Speakers />} />
          <Route path="earphones" element={<Earphones />} />
          <Route path="headphones" element={<Headphones />} />
          <Route path="registrasiyashop" element={<Registr />} />
          <Route path="product/:id" element={<Product />} /> {/* Route for individual product */}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
