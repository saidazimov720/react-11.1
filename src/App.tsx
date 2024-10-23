import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import CatalogPage from './Components/CatalogPage';

const App: React.FC = () => {
  return (
    <Router>
      <nav>
        <ul>
          <li><Link to="/components/clothes">Clothes Catalog</Link></li>
          <li><Link to="/components/food">Food Catalog</Link></li>
          <li><Link to="/components/electronics">Electronics Catalog</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route path="/components/:category" element={<CatalogPage />} />
      </Routes>
    </Router>
  );
};

export default App;
