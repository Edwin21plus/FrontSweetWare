import React, {useState} from 'react';
import './App.css';
import Navbar from './components/NavBar';
import { BrowserRouter as Router, Route,  Routes} from 'react-router-dom';
import Home from './pages/Home.js';
import Sales from './pages/Sales.js';
import Products from './pages/Products.js';
import Clients from './pages/Clients.js';
import Employees from './pages/Employees.js';
import Login from './components/Login.js';


function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  function handleLogin() {
    setIsAuthenticated(true);
  }

  return (
    <>
      <Router>
        {isAuthenticated && <Navbar />}
        <Routes>
          <Route path='/' element={isAuthenticated ? <Home></Home> : <Login onLogin={handleLogin}></Login>} />
          <Route path='/sales' element={<Sales></Sales>} />
          <Route path='/products' element={<Products></Products>} />
          <Route path='/clients' element={<Clients></Clients>} />
          <Route path='/employees' element={<Employees></Employees>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;