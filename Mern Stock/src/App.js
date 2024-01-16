import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import SamaStock from "./components/samaStock";
import Team from "./components/presentationTeam";
import Orders from "./pages/Orders";
import PrivateRoutes from "./utils/privateRoutes";

function App() {
  return (
    <Router>
      <div className="">
        <div className="">
          <Routes>
            <Route path="*" element={<SamaStock />} />
              <Route path="/" element={<Team />} />
            <Route path="/" element={<PrivateRoutes />}>
            </Route>
              <Route path="/orders" element={<Orders />} />
            <Route path="/orders" element={<PrivateRoutes />}>
            </Route>
            <Route exact path="/" element={<SamaStock />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
