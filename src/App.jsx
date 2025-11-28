import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";
import { CartProvider } from "./context/CartContext/CartProvider";
import { Cart } from "./components/Cart/Cart";
import { Header } from "./components/Header/Header";
import { ProductFormContainer } from "./components/adminComponents/ProductFormContainer/ProductFormContainer";

function App() {
  return (
    <>
      <BrowserRouter>
        <CartProvider>
          <Header />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/detail/:id" element={<ItemDetailContainer />} />
            <Route path="/category/:category" element={<ItemListContainer />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/admin" element={<ProductFormContainer />} />
          </Routes>
        </CartProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
