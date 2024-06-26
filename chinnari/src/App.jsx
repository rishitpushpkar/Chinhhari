import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Enquiry from "./pages/Enquiry";
import { useMatch } from "react-router-dom";
function AppContent() {
  const isEnquiryPage = useMatch("/enquiry/:id");
  return (
    <>
      <header className="relative">
        <Navbar isEnquiryPage={isEnquiryPage} />
      </header>
      <hr />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/enquiry/:id" element={<Enquiry />} />
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
