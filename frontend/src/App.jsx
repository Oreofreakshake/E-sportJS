import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

//my components
import Home from "./components/Home/Home";
import Form from "./components/Form/Form";
import Staff from "./components/Staff/Staff";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/registration" element={<Form />} />
                <Route path="/dashboard" element={<Staff />} />
            </Routes>
        </Router>
    );
};

export default App;
