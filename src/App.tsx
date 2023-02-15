import "@fontsource/mulish";
import "./index.scss";

import { Routes, Route } from "react-router-dom";
import Dashboard from "Modules/Dashboard";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
    </Routes>
  );
}

export default App;
