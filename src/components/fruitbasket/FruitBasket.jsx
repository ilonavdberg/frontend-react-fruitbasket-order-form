//Styling
import './FruitBasket.css'

//Components
import FruitCounter from "../fruitcounter/FruitCounter.jsx"

//Functions
import {useState} from "react"


function FruitBasket() {
    const [fruitCounts, setFruitCounts] = useState({
        strawberries: 0,
        bananas: 0,
        apples: 0,
        kiwis: 0
    });

    const updateFruitCount = (fruit, newCount) => {
        setFruitCounts({
            ...fruitCounts,
            [fruit]: newCount
        });
    };

    const resetFruitCounts = () => {
        setFruitCounts({
            strawberries: 0,
            bananas: 0,
            apples: 0,
            kiwis: 0
        });
    };


    return (
        <section className="fruitbasket">
            <div className="fruitbasket__counters">
                <FruitCounter
                    fruitName={"Aardbeien"}
                    fruitEmoji={"🍓"}
                    fruitCount={fruitCounts.strawberries}
                    setFruitCount={(newCount) => updateFruitCount("strawberries", newCount)}
                />
                <FruitCounter
                    fruitName={"Bananen"}
                    fruitEmoji={"🍌"}
                    fruitCount={fruitCounts.bananas}
                    setFruitCount={(newCount) => updateFruitCount("bananas", newCount)}
                />
                <FruitCounter
                    fruitName={"Appels"}
                    fruitEmoji={"🍎"}
                    fruitCount={fruitCounts.apples}
                    setFruitCount={(newCount) => updateFruitCount("apples", newCount)}
                />
                <FruitCounter
                    fruitName={"Kiwi's"}
                    fruitEmoji={"🥝"}
                    fruitCount={fruitCounts.kiwis}
                    setFruitCount={(newCount) => updateFruitCount("kiwis", newCount)}
                />
            </div>
            <button
                type={"button"}
                onClick={resetFruitCounts}
            >
                Reset
            </button>
        </section>
    )
}

export default FruitBasket;