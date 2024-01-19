import HomePage from "@/pages/HomePage";
// import StyleGuide from "@/pages/StyleGuide";
import {
  Route,
  createRoutesFromElements,
  createBrowserRouter,
} from "react-router-dom";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<HomePage />} />
    </Route>
  )
);
