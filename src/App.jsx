//Styling
import './App.css'

//Components
import FruitBasket from "./components/fruitbasket/FruitBasket.jsx";
import OrderForm from "./components/orderform/OrderForm.jsx";

//Functions
import {useState} from "react";


function App() {
    const [fruitCounts, setFruitCounts] = useState({
        strawberries: 0,
        bananas: 0,
        apples: 0,
        kiwis: 0
    });

  return (
    <main>
        <h1>Fruitmand bezorgservice</h1>
        <FruitBasket
            fruitCounts={fruitCounts}
            setFruitCounts={setFruitCounts}
        />
        <OrderForm
            fruitCounts={fruitCounts}
        />
    </main>
  )
}

export default App
