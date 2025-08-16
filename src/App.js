import './App.css';
import Home from './Components/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Clients from './Components/Clients';
import Twopeople from './Components/Twopeople';
import Blog from './Components/Blog';
import Marketing from './Components/Marketing';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';

import HomePage from './page/homepage/HomePage';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <header>
          <Navbar />
        </header>

        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/twopeople" element={<Twopeople />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/marketing" element={<Marketing />} />
          <Route path="/footer" element={<Footer />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
