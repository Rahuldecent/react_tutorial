
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar'
import Home from './components/Home'
import Offices from './components/Offices'



function App() {
  return (
    <>
      <NavBar />
      <div className="p-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/offices" element={<Offices />} />
        </Routes>
      </div>
    </>
  );
}

export default App
