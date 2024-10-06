import { Route, Routes, useLocation } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import CategoryPage from "./pages/CategoryPage";
import FoodPage from "./pages/FoodPage";
import AboutPage from "./pages/AboutPage";
import FoodSearchPage from "./pages/FoodSearchPage";
import OrderPage from "./pages/OrderPage";
import CategorySearchPage from "./pages/CategorySearchPage";
import HomePageAdmin from "./pages/HomePageAdmin";
import NavbarAdmin from "./components/NavbarAdmin";
import ManageAdminPage from "./pages/ManageAdminPage";
import ManageCategoryPage from "./pages/ManageCategoryPage";
import ManageFoodPage from "./pages/ManageFoodPage";
import ManageOrderPage from "./pages/ManageorderPage";
import Login from "./pages/LoginPage";

function App() {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith("/admin");
  const isLoginRoute = location.pathname === "/login";

  return (
    <div className="bg-gray-100">
      {!isLoginRoute && (isAdminRoute ? <NavbarAdmin /> : <Navbar />)}

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/category" element={<CategoryPage />} />
        <Route path="/food" element={<FoodPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/food-search" element={<FoodSearchPage />} />
        <Route path="/order" element={<OrderPage />} />
        <Route path="/category-search" element={<CategorySearchPage />} />

        <Route path="/login" element={<Login />} />
        <Route path="/admin/home" element={<HomePageAdmin />} />
        <Route path="/admin/admin" element={<ManageAdminPage />} />
        <Route path="/admin/category" element={<ManageCategoryPage />} />
        <Route path="/admin/food" element={<ManageFoodPage />} />
        <Route path="/admin/order" element={<ManageOrderPage />} />
      </Routes>

      {!isAdminRoute && !isLoginRoute && <Footer />}
    </div>
  );
}

export default App;
