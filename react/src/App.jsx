import ItemsPage from "./pages/ItemsPage/ItemsPage";
import AdditemPage from "./pages/AdditemPage/additemPage";
import Header from "./components/Items/Header";
import Footer from "./components/Items/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/items" element={<ItemsPage />}></Route>
        <Route path="additem" element={<AdditemPage />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
