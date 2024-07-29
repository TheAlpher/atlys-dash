import { Fragment } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";

function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <Routes>
          <Route path="home" element={<Home />} />
          <Route path="login" element={<Login />} />
          {/* <Route path="*" element={<Navigate to="login" replace />} /> */}
        </Routes>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
