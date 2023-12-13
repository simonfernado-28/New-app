import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from "./component/sidebar";
import Dashboard from "./pages/home";
import './App.css';
import Barcodefunction from "./pages/barcode_generator";
import Qrcode from "./pages/qrcode_generator";
import Formvalidation from "./pages/formvalidator";
import Index from "./component/home";

function App() {
  const[isAuthenticate, setIsAuthenticate] = useState(true);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        {isAuthenticate && <Sidebar>
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/barcode" element={<Barcodefunction />} />
            <Route path="/qrcode" element={<Qrcode />} />
            <Route path="/fees-management" element={<Formvalidation />} />
          </Routes>
        </Sidebar>}

      </Routes>
    </BrowserRouter>
  );
}

export default App;
