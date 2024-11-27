//Styling
import './App.css'

//Components
import FruitBasket from "./components/fruitbasket/FruitBasket.jsx";
import OrderForm from "./components/orderform/OrderForm.jsx";


function App() {

  return (
    <>
        <h1>Fruitmand bezorgservice</h1>
        <FruitBasket />
        <OrderForm />
    </>
  )
}

export default App
