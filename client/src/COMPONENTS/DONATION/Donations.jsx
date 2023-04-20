import { useState } from "react";
import Styles from './Donation.module.css'

export default function Donations(){

    const [error, setError] = useState('Enter your donation');
    const [donation, setDonation] = useState(0);

    function handleChange(event){
        const amount = event.target.value;

        if(!amount || amount < 100 || amount > 10000){
            setError("Enter an amount between 100 and 10.000");
        } else{
            setError(null);
            setDonation(amount);
        }
    }

    return (
        <div className={Styles.container}>
            <h1 className="subtitle text textColorPink">HELP A PET!</h1>
            <h2 className="text">Puppy Size Donation</h2>
            <h5>Value: AR$ 1.000</h5>
            <form action="http://localhost:3001/checkout" method="GET">
                <input type="hidden" name="title" value="Puppy Size Donation"/>
                <input type="hidden" name="price" value="1000"/>
                <input type="submit" value="Donar" className="btn"/>
            </form>

            <br />
            <hr />
            <br />

            <h2 className="text">Adventurous Hearts Donation</h2>
            <h5>Valor de AR$ 2.500</h5>
            <form action="http://localhost:3001/checkout" method="GET">
                <input type="hidden" name="title" value="Adventurous Hearts Donation"/>
                <input type="hidden" name="price" value="2500"/>
                <input type="submit" value="Donar" className="btn"/>
            </form>

            <br />
            <hr />
            <br />

            <h2 className="text">Large Love Donation</h2>
            <h5>Valor de AR$ 5.000</h5>
            <form action="http://localhost:3001/checkout" method="GET">
                <input type="hidden" name="title" value="Large Love Donation"/>
                <input type="hidden" name="price" value="5000"/>
                <input type="submit" value="Donar" className="btn"/>
            </form>

            <br />
            <hr />
            <br />

            <h2 className="text">Personalized Donation</h2>
            <form action="http://localhost:3001/checkout" method="GET" className={Styles.container}>
                <input type="hidden" name="title" value="Donación pequeño corazón."/>
                <label>Enter the amount to donate</label>
                <input type="number" min="100" max="10000" placeholder="Amount..." onChange={handleChange}/>
                <input type="hidden" name="price" value={donation}/>
                <br />
                {
                    error
                    ? (<>
                        <span className={Styles.error}>*{error}</span>
                        <br />
                        <input type="submit" value="Donar" className="btn" disabled/>
                        </>)
                    : <input type="submit" value="Donar" className="btn"/>
                }
                <br />
            </form>

        </div>
    )
}