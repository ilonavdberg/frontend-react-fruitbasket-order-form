//Styling
import './FruitCounter.css'


function FruitCounter( { fruitName, fruitEmoji, fruitCount, setFruitCount }) {

    function increment() {
        setFruitCount(fruitCount + 1);
    }

    function decrement() {
        setFruitCount(fruitCount - 1);
    }

    return (
        <article className="fruitcounter">
            <h2 className="fruitcounter__title"> <span>{fruitEmoji}</span>{fruitName}</h2>
            <button
                className="fruitcounter__button"
                type="button"
                value={fruitCount}
                onClick={decrement}
                disabled={fruitCount === 0}
            >
                -
            </button>
            <p className="fruitcounter__count">{fruitCount}</p>
            <button
                className="fruitcounter__button"
                type="button"
                value={fruitCount}
                onClick={increment}
            >
                +
            </button>
        </article>
    )
}

export default FruitCounter;