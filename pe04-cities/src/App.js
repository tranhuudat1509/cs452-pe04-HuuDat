import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import CityList from './components/CityList';
import AddCity from './components/AddCity';
import CityDetails from './components/CityDetails';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/cities" />} />
        <Route path="/cities" element={<CityList />}>
          <Route path=":id" element={<CityDetails />} />
        </Route>
        <Route path="/add" element={<AddCity />} />
      </Routes>
    </Router>
  );
}

export default App;
