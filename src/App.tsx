import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import ItemList from "./components/ItemList";
import Receipt from "./components/Receipt";
import { Cart } from "./module";

function App() {
  const [money, setMoney] = useState<number>(10000000000);
  const [cart, setCart] = useState<Cart[]>([]);

  return (
    <div className="app">
      <Header money={money} />
      <ItemList
        money={money}
        setMoney={setMoney}
        cart={cart}
        setCart={setCart}
      />
      <Receipt cart={cart} setCart={setCart} />
    </div>
  );
}

export default App;
