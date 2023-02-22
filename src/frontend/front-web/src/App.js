import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddUserForm from "./AddUserForm.js";
import Welcome from "./screen/Welcome/Welcome.jsx";


const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/users/new" element={<AddUserForm />} />
          <Route
            path="/welcome/:username"
            element={<Welcome />}
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
