import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import { Route, Routes, Navigate } from 'react-router-dom';
import Add from './pages/Add/Add';
import List from "./pages/List/List";
import Orders from "./pages/Orders/Orders";
import AdminLogin from "./pages/Login/Login";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const url = "http://localhost:4000";
  const isAdmin = localStorage.getItem("adminLoggedIn");

  return (
    <div>
      <ToastContainer />

      {isAdmin && <Navbar />}
      {isAdmin && <Sidebar />}

      <Routes>
        {/* Admin Login */}
        <Route path="/login" element={<AdminLogin />} />

        {/* Protected Admin Routes */}
        <Route 
          path="/add" 
          element={isAdmin ? <Add url={url}/> : <Navigate to="/login" />} 
        />

        <Route 
          path="/list" 
          element={isAdmin ? <List url={url}/> : <Navigate to="/login" />} 
        />

        <Route 
          path="/orders" 
          element={isAdmin ? <Orders url={url}/> : <Navigate to="/login" />} 
        />

        {/* Default redirect */}
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </div>
  );
};

export default App;
