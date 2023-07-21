import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ShoppingPage from "./components/ShoppingPage";
import HomePage from "./components/HomePage";
import Navbar from './components/Navbar';

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShoppingPage />} />
      </Routes>
    </Router>
  )
}