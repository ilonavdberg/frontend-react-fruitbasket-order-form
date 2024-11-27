//Styling
import './OrderForm.css'

//Functions
import {useForm} from 'react-hook-form'

function OrderForm({fruitCounts}) {
    const {
        register,
        handleSubmit,
        formState: {errors}
    } = useForm();

    function onSubmit(data) {
        console.log("Klantgegevens: ", data)
        console.log("Bestelling: ", fruitCounts)
    }

    return (
        <section className="orderform">
            <h2>Bestelformulier</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="orderform__questions">
                <label htmlFor="first-name-field">
                    Voornaam
                    <input
                        type="text"
                        id="firstname-field"
                        {...register('firstname', {
                            required: {
                                value: true,
                                message: "Dit veld is verplicht"
                            }
                        })}
                    />
                    {errors.firstname && <p className="errormessage">{errors.firstname.message}</p>}
                </label>

                <label htmlFor="lastname-field">
                    Achternaam
                    <input
                        type="text"
                        id="lastname-field"
                        {...register('lastname', {
                            required: {
                                value: true,
                                message: "Dit veld is verplicht"
                            }
                        })}
                    />
                    {errors.lastname && <p className="errormessage">{errors.lastname.message}</p>}
                </label>

                <label htmlFor="age-field">
                    Leeftijd
                    <input
                        type="text"
                        id="age-field"
                        {...register('age', {
                            required: {
                                value: true,
                                message: "Dit veld is verplicht"
                            }
                        })}
                    />
                    {errors.age && <p className="errormessage">{errors.age.message}</p>}
                </label>

                <label htmlFor="zipcode-field">
                    Postcode
                    <input
                        type="text"
                        id="zipcode-field"
                        {...register('zipcode', {
                            required: {
                                value: true,
                                message: "Dit veld is verplicht"
                            }
                        })}
                    />
                    {errors.zipcode && <p className="errormessage">{errors.zipcode.message}</p>}
                </label>

                <label htmlFor="delivery-frequency-select">
                    Bezorgfrequentie
                    <select
                        id="delivery-frequency-select"
                        {...register('delivery-frequency')}
                    >
                        <option value="weekly">Iedere week</option>
                        <option value="biweekly">Iedere twee weken</option>
                        <option value="monthly">Iedere maand</option>
                    </select>
                </label>

                <div>
                    <label htmlFor="daytime">
                        <input
                            type="radio"
                            id="daytime"
                            value="daytime"
                            {...register('delivery-window')}
                        />
                        Overdag
                    </label>

                    <label htmlFor="evening">
                        <input
                            type="radio"
                            id="evening"
                            value="evening"
                            {...register('delivery-window')}
                        />
                        {"'s Avonds"}
                    </label>
                </div>


                <label htmlFor="remarks-field">
                    Opmerkingen
                    <textarea
                        id="remarks-field"
                        cols="30"
                        rows="10"
                        {...register('remarks')}
                    >
                </textarea>
                </label>


                <label htmlFor="agreed-to-terms-checkbox">
                    <input
                        type="checkbox"
                        id="agreed-to-terms-checkbox"
                        {...register('agreedToTerms', {
                            required: {
                                value: true,
                                message: "U moet akkoord gaan met de voorwaarden"
                            }
                        })}
                    />
                    Ik ga akkoord met de voorwaarden
                    {errors.agreedToTerms && <p className="errormessage">{errors.agreedToTerms.message}</p>}
                </label>

                <button type="submit">
                    Verzenden
                </button>
            </form>
        </section>
    );
}

export default OrderForm