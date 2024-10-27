import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import {
  HomePage,
  ProductsPage,
  AboutPages,
  ContactPage,
  ServicesPage,
  LocationPage,
} from "../../pages";
// import { NotFound } from "../../shared";
import MasterLayout from "./../../Layout/MasterLayout";

// import RouteGuard from "../Routing/RouteGuard";
const router = createBrowserRouter(
  createRoutesFromElements([
    // Public routes [just for testing purposes]
    <Route path="/" element={<MasterLayout />}>
      <Route index  element={<HomePage />} />,
      <Route path="about" element={<AboutPages />} />,
      <Route path="services" element={<ServicesPage />} />,
      <Route path="products" element={<ProductsPage />} />,
      <Route path="location" element={<LocationPage />} />,
      <Route path="contact" element={<ContactPage />} />,
      {/* <Route path="*" element={<NotFound />} /> */}
    </Route>,
  ])
);
export default router;
