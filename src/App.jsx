import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import Home from "./page/home";
import Speakers from "./page/speakers";
import Earphones from "./page/earphones";
import Headphones from "./page/headphones";
import Layout from "./layout";
export default function App() {
  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />} >
        <Route index element={<Home />} />
        <Route path="speakers" element={<Speakers />} />
        <Route path="earphones" element={<Earphones />} />
        <Route path="headphones" element={<Headphones />} />
      </Route>
    )
  );
  return (
    <div>
      <RouterProvider router={routes} />
    </div>
  );
}
