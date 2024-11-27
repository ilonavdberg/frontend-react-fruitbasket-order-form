//Styling
import './OrderForm.css'


function OrderForm() {
    return (
        <>
            <h2>Bestelformulier</h2>
            <form>
                <label htmlFor="first-name-field">Voornaam </label>
                <input
                    type="text"
                    id="first-name-field"
                    name="first-name"
                />
                <label htmlFor="last-name-field">Achternaam </label>
                <input
                    type="text"
                    id="last-name-field"
                    name="last-name"
                />
                <label htmlFor="age-field">Leeftijd </label>
                <input
                    type="text"
                    id="age-field"
                    name="age"
                />
                <label htmlFor="zipcode-field">Postcode </label>
                <input
                    type="text"
                    id="zipcode-field"
                    name="zipcode"
                />
                <label htmlFor="delivery-frequency-select">Bezorgfrequentie</label>
                <select 
                    name="delivery-frequency" 
                    id="delivery-frequency-select"
                >
                    <option value="weekly">Iedere week</option>
                    <option value="biweekly">Iedere twee weken</option>
                    <option value="monthly">Iedere maand</option>
                </select>
                <input
                    type="radio"
                    id="daytime"
                    name="delivery-window"
                    value="daytime"
                />
                <label htmlFor="daytime">Overdag</label>
                <input 
                type="radio"
                id="evening"
                name="delivery-window"
                value="evening"
                />
                <label htmlFor="evening">'s Avonds</label>
                <label htmlFor="remarks-field">Opmerkingen</label>
                <textarea name="remarks" id="remarks-field" cols="30" rows="10"></textarea>
                <input
                    type="checkbox"
                    id="agreed-to-terms-checkbox"
                    name="agreed-to-terms"
                    value={false}
                />
                <label htmlFor="agreed-to-terms-checkbox">Ik ga akkoord met de voorwaarden</label>
                <button
                    type="button"
                >
                    Verzenden
                </button>
            </form>
        </>
    )
}

export default OrderForm