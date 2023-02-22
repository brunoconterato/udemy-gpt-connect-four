import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddUserForm from "./AddUserForm.js";

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/users/new" element={<AddUserForm />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
