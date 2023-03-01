import "@fontsource/mulish/300.css";
import "@fontsource/mulish/400.css";
import "@fontsource/mulish/500.css";
import "@fontsource/mulish/600.css";
import "@fontsource/mulish/700.css";

import "./index.scss";

import { Routes, Route } from "react-router-dom";

import Dashboard from "Modules/Dashboard";
import AddClient from "Modules/AddClient";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/add-client" element={<AddClient />} />
    </Routes>
  );
}

export default App;
