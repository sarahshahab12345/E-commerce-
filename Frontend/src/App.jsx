import { Route, Routes } from "react-router-dom";
import "./App.css";
import AuthLayout from "./components/Layouts/Auth/Auth-Layout";
import Login from "./Pages/Auth/Login";
import Register from "./Pages/Auth/Register";
import AdminLayout from "./components/Layouts/Admin-View/Admin-Layout";
import AdminViewDashboard from "./Pages/Admin-View/Admin-View-Dashboard";
import AdminViewFeatures from "./Pages/Admin-View/Admin-View-Features";
import AdminViewOrders from "./Pages/Admin-View/Admin-View-Orders";
import AdminViewProducts from "./Pages/Admin-View/Admin-View-Products";
import ShoppingViewHome from "./Pages/Shopping-View/shopping-view-home";
import ShoppingViewAccount from "./Pages/Shopping-View/shopping-view-account";
import ShoppingViewCheckout from "./Pages/Shopping-View/shopping-view-checkout";
import ShoppingViewListing from "./Pages/Shopping-View/shopping-view-listing";
import NotFound from "./Pages/Not-Found/Not-Found";
import ShopLayout from "./components/Layouts/Shopping-View/Shop-Layout";

function App() {
  return (
    <>
      <Routes>
        <Route path="auth" element={<AuthLayout />}>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>

        <Route path="admin" element={<AdminLayout />}>
          <Route path="dashboard" element={<AdminViewDashboard />} />
          <Route path="features" element={<AdminViewFeatures />} />
          <Route path="orders" element={<AdminViewOrders />} />
          <Route path="products" element={<AdminViewProducts />} />
        </Route>

        <Route path="shop" element={<ShopLayout />}>
          <Route path="home" element={<ShoppingViewHome />} />
          <Route path="account" element={<ShoppingViewAccount />} />
          <Route path="checkout" element={<ShoppingViewCheckout />} />
          <Route path="listing" element={<ShoppingViewListing />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;