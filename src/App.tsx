import "@fontsource/mulish/300.css";
import "@fontsource/mulish/400.css";
import "@fontsource/mulish/500.css";
import "@fontsource/mulish/600.css";
import "@fontsource/mulish/700.css";

import "./index.scss";

import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

import Dashboard from "Modules/Dashboard";
import MyFirm from "Modules/MyFirm";
import AppLayout from "Layout/AppLayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={<AppLayout fluidHeader firstTimeUser={false} />}
      errorElement={
        <AppLayout fluidHeader firstTimeUser={false}>
          <p>Error Not Found!</p>
        </AppLayout>
      }
    >
      <Route index element={<Dashboard />} />
      <Route path="firm" element={<MyFirm />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
