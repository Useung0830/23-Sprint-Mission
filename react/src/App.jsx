import ItemsPage from "./pages/ItemsPage/ItemsPage";
import AdditemPage from "./pages/AdditemPage/additemPage";
import Header from "./components/Items/Header";
import Footer from "./components/Items/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MarginTop from "./components/MarginTop";
import MarginBottom from "./components/MarginBottom";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <MarginTop />
      <Routes>
        <Route path="/items" element={<ItemsPage />}></Route>
        <Route path="additem" element={<AdditemPage />}></Route>
      </Routes>
      <MarginBottom />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
