import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RouterHomePage from "./components/pages/RouterHomePage";
// import ContactUs from "./components/pages/ContactUs";
// import AboutUs from "./components/pages/AboutUs";
import RootLayout from "./components/pages/RootLayOut";
import RouterContactUs from "./components/pages/RouterContactUs";
import RouterAboutUs from "./components/pages/RouterAboutUs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "/", element: <RouterHomePage /> },
      { path: "/contact", element: <RouterContactUs /> },
      { path: "/about", element: <RouterAboutUs /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
