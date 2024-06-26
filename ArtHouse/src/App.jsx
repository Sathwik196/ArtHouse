import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginComponent from "../src/Components/LoginComponent"
import RegisterComponent from "../src/Components/RegisterComponent";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/login" element={<LoginComponent />} />
                <Route path="/register" element={<RegisterComponent />} />
                <Route path="*" element={<LoginComponent />} />
            </Routes>
        </Router>
    );
}

export default App;
