import Home from "./router/Home";
import Detail from "./router/Detail";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          basename={process.env.PUBLIC_URL}
          path={`/movie/:id`}
          element={<Detail />}
        />
        <Route
          basename={process.env.PUBLIC_URL}
          path={`/`}
          element={<Home />}
        />
      </Routes>
    </Router>
  );
}

export default App;
