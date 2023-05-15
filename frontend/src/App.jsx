import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

//my components
import Home from "./components/Home/Home";
import Form from "./components/Form/Form";
import Dashboard from "./components/Staff/Dashboard/Staff";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/registration" element={<Form />} />
                <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
        </Router>
    );
};

export default App;
