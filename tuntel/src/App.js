import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Register from './pages/Register';
import NetworkGenerationList from './pages/NetworkGenerationList';
import SiteGSMList from './pages/SiteGSMList';
import AddNetworkGeneration from './pages/AddNetworkGeneration';
import UpdateNetworkGeneration from './pages/UpdateNetworkGeneration';
import DeleteNetworkGeneration from './pages/DeleteNetworkGeneration';
import AddSiteGSM from './pages/AddSiteGSM';
import UpdateSiteGSM from './pages/UpdateSiteGSM';
import DeleteSiteGSM from './pages/DeleteSiteGSM';
import './App.css';
import Navbar from './pages/Navbar';


function App() {
  return (
    <Router>
      
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          </Routes>
          <Navbar></Navbar>
          <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/network-generations" element={<NetworkGenerationList />} />
          <Route path="/site-gsm" element={<SiteGSMList />} />
          <Route path="/network-generations/add" element={<AddNetworkGeneration />} />
          <Route path="/network-generations/:id/edit" element={<UpdateNetworkGeneration />} />
          <Route path="/network-generations/:id/delete" element={<DeleteNetworkGeneration />} />
          <Route path="/site-gsm/add" element={<AddSiteGSM />} />
          <Route path="/site-gsm/:id/edit" element={<UpdateSiteGSM />} />
          <Route path="/site-gsm/:id/delete" element={<DeleteSiteGSM />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
