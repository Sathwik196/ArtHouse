import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginComponent from "../src/Components/LoginComponent";
import RegisterComponent from "../src/Components/RegisterComponent";
import HomeComponent from './Components/HomeComponent';

function ErrorBoundary({ error }) {
  return <div>Error: {error.message}</div>;
}

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/login" element={<LoginComponent />} />
                <Route path="/register" element={<RegisterComponent />} />
                <Route path="/home" element={<HomeComponent />} />
                <Route path="*" element={<LoginComponent />} />
            </Routes>
        </Router>
    );
}

export default App;
