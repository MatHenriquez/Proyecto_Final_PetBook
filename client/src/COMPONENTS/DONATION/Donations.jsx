import { useState } from "react";
import Styles from './Donation.module.css'
import Header from "../HEADER/Header";
import Footer from "../FOOTER/Footer";
import HeaderLogin from "../HEADER/HeaderLogin"

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
        <div>
            <div className="bg-[url('/backdonations1.png')] bg-no-repeat w-[100hv]">

                <div>
                {localStorage.getItem('token') ? <HeaderLogin className='mb-4' /> : <Header className="mb-4" /> }    
                </div>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-1">

                <div className="card w-72 bg-base-100 shadow-xl m-4">
                    <div className="card-body"> 
                        <h2 className="card-title text-black font-['candara']">Puppy Size Donation</h2>
                        <h5 className="text bg-primary w-fit rounded-full"> AR$ 1.000</h5>
                        <form action="http://localhost:3001/checkout" method="GET">
                            <input type="hidden" name="title" value="Puppy Size Donation"/>
                            <input type="hidden" name="price" value="1000"/>
                            <div className="card-actions justify-end"> <input type="submit" value="DONATE NOW" className="btn btn-primary"/> </div>
                        </form>
                    </div>
                </div>

                <div className="card w-72 bg-base-100 shadow-xl m-4">
                    <div className="card-body">
                        <h2 className="card-title text-black font-['candara']">Adventurous Donation</h2>
                        <h5 className="text bg-primary w-fit rounded-full"> AR$ 2.500</h5>
                        <form action="http://localhost:3001/checkout" method="GET">
                            <input type="hidden" name="title" value="Adventurous Hearts Donation"/>
                            <input type="hidden" name="price" value="2500"/>
                            <div className="card-actions justify-end"><input type="submit" value="DONATE NOW" className="btn btn-primary"/></div>
                        </form>
                    </div>
                </div >

                <div className="card w-72 bg-base-100 shadow-xl m-4" >
                    <div className="card-body">
                        <h2 className="card-title text-black font-['candara']">Large Love Donation</h2>
                        <h5 className="text bg-primary w-fit rounded-full">AR$ 5.000</h5>
                        <form action="http://localhost:3001/checkout" method="GET">
                            <input type="hidden" name="title" value="Large Love Donation"/>
                            <input type="hidden" name="price" value="5000"/>
                            <div className="card-actions justify-end"><input type="submit" value="DONATE NOW" className="btn btn-primary"/> </div>
                        </form>
                    </div>
                </div>


                <div className=""><img src="/perrogatootro.png" alt=""  width=''/></div>

                <div className="card w-72 bg-base-100 shadow-xl m-4">
                    <div className="card-body">
                    <h2 className="card-title font-['candara'] text-neutral ">Personalized Donation</h2>
                    <form action="http://localhost:3001/checkout" method="GET" className={Styles.container}>
                        <input type="hidden" name="title" value="Donación pequeño corazón."/>
                        <label className="italic text-sm">select here the amount to donate: </label>
                        <input type="number" min="100" max="10000" placeholder=" $..." onChange={handleChange}/>
                        <input type="hidden" name="price" value={donation}/>
                        <br />
                        {
                            error
                            ? (<>
                                <span className={Styles.error}>*{error}</span>
                                <br />
                                <input type="submit" value="Donar" className="btn" disabled/>
                                </>)
                            : <input type="submit" value="DONATE NOW" className="btn btn-primary "/>
                        }
                        <br />
                    </form>

                    </div>
                </div>

                <div className="flex justify-center items-center">
                    <h5 className="font-[candara] text-neutral text-center text-3xl ">Your generosity <br /> can change lives!</h5>

                    
                </div>
                        
        </div>      
            </div>

<div >
    {/* ARREGLAR QUE CUANDO SE PASA A UNA PANTALLA MAS GRANDE EL FOOTER NO QUEDA AL FINAL  */}
<Footer />
</div>
             
        </div>
    )
}