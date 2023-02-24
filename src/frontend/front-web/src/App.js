import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddUserForm from "./components/pages/AddUser/AddUserForm.jsx";
import Welcome from "./components/pages/Welcome/Welcome.jsx";
import Connect4 from "./components/pages/Connect4/Connect4";

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/users/new" element={<AddUserForm />} />
          <Route path="/welcome/:username" element={<Welcome />} />
          <Route path="/connect4" element={<Connect4 />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
