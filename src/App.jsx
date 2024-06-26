import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { useMatch } from "react-router-dom";
import { useState } from "react";
import { products } from "./utils/Constant";
function AppContent() {
  const isEnquiryPage = useMatch("/enquiry/:id");
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategories, setSelectedCategories] = useState([]);

  // Function to filter products based on search query and selected categories
  const filterProducts = (query, categories) => {
    let newFilteredProducts = products;

    // Filter by search query
    if (query) {
      newFilteredProducts = newFilteredProducts.filter((product) =>
        product.product_name.toLowerCase().includes(query.toLowerCase())
      );
    }

    // Filter by selected categories
    if (categories.length > 0) {
      newFilteredProducts = newFilteredProducts.filter((product) =>
        categories.includes(product.type)
      );
    }

    setFilteredProducts(newFilteredProducts);
  };

  // Handle search input change
  const handleSearchChange = (query) => {
    setSearchQuery(query);
    filterProducts(query, selectedCategories);
  };

  // Handle category checkbox change
  const handleCategoryChange = (categories) => {
    setSelectedCategories(categories);
    filterProducts(searchQuery, categories);
  };
  return (
    <>
      <header className="relative">
        <Navbar
          isEnquiryPage={isEnquiryPage}
          onSearchChange={handleSearchChange}
        />
      </header>
      <hr />
      <main>
        <Routes>
          <Route
            path="/"
            element={
              <Home
                filteredProducts={filteredProducts}
                onCategoryChange={handleCategoryChange}
              />
            }
          />
        </Routes>
      </main>
      <hr />
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}
