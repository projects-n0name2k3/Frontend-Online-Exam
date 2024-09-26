import React from "react";
import { Route, Routes } from "react-router-dom";
import AdminLayout from "./components/admin-view/layout";
import Products from "./pages/admin/products";

function App() {
  return (
    <div className="flex flex-col overflow-hidden bg-white">
      <Routes>
        <Route path="/admin" element={<AdminLayout />}>
          <Route path="products" element={<Products />} />
        </Route>

        <Route path="*" element={<Products />} />
      </Routes>
    </div>
  );
}

export default App;
