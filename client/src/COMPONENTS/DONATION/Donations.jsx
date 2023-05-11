import { useState } from "react";
import Styles from './Donation.module.css'
import Header from "../HEADER/Header";
import Footer from "../FOOTER/Footer";
import HeaderLogin from "../HEADER/HeaderLogin"

export default function Donations(){

    const [error, setError] = useState('Enter your donation');
    const [donation, setDonation] = useState(0);
    const id = localStorage.getItem('id') || "anonymous";

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
<div className="flex justify-center">


        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">



                <div className="card w-72 bg-base-100 shadow-xl m-4">
                    <div className="card-body"> 
                        <h2 className="card-title text-black font-['candara']">Puppy Size Donation</h2>
                        <h5 className="text bg-primary w-fit rounded-full"> AR$ 1.000</h5>
                        <form action={`https://proyectofinalpetbook-production.up.railway.app/checkout`} method="GET">
                            <input type="hidden" name="id" value={id} />
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
                        <form action="https://proyectofinalpetbook-production.up.railway.app/checkout" method="GET">
                            <input type="hidden" name="id" value={id} />
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
                        <form action="https://proyectofinalpetbook-production.up.railway.app/checkout" method="GET">
                            <input type="hidden" name="id" value={id} />
                            <input type="hidden" name="title" value="Large Love Donation"/>
                            <input type="hidden" name="price" value="5000"/>
                            <div className="card-actions justify-end"><input type="submit" value="DONATE NOW" className="btn btn-primary"/> </div>
                        </form>
                    </div>
                </div>


<div className="hidden lg:block place-items-center">
    <img src="/perrogatootro.png" alt=""  width='200px'/>
    <h5 className="font-[candara] text-neutral text-center text-3xl ">Your generosity <br /> can change lives!</h5>
</div>



                {/* <div className="card w-72 bg-base-100 shadow-xl m-4">
                    <div className="card-body">
                    <h2 className="card-title font-['candara'] text-neutral ">Personalized Donation</h2>
                    <form action="https://proyectofinalpetbook-production.up.railway.app/checkout" method="GET" className={Styles.container}>
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
            </div> */}

            <div className="card  w-72 bg-base-100 shadow-xl m-4">
                <div className="card-body">
                <h2 className="card-title text-black font-['candara']">Personalized Donation</h2>
                 <form action="https://proyectofinalpetbook-production.up.railway.app/checkout" method="GET" className={Styles.container}>
                    <input type="hidden" name="id" value={id} />
                    <input type="hidden" name="title" value="Personalized Donation"/>
                    <label className="italic">select here the amount to donate: </label>
                    <input type="number" min="100" max="10000" placeholder=" $..." onChange={handleChange}/>
                    <input type="hidden" name="price" value={donation}/>
                    <br/>
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

                                        {/*---------------------- Suscripción------------------------ */}
                <div className="card w-72 bg-base-100 shadow-xl m-4" >
                    <div className="card-body">
                        <h2 className="card-title text-black font-['candara']">Subscription</h2>
                        <h5 className="text bg-primary w-fit rounded-full">AR$ 12/month</h5>
                            <div className="card-actions justify-end">
                            <button className="btn btn-primary"><a href="https://www.mercadopago.com.ar/subscriptions/checkout?preapproval_id=2c93808487b7732f0187bda94b31021e">SUSCRIBE NOW</a></button>
                        </div>
                    </div>
                </div>

        <div className="flex justify-center items-center my-6">
            <h5 className="lg:hidden font-[candara] text-neutral text-center text-3xl ">Your generosity <br /> can change lives!</h5>
            <img src="/perrogatootro.png" alt=""  className=" w-28 lg:hidden"/>   
        </div>
        
</div>  
</div>
    
</div>

<div >
<Footer />
</div>
             
</div>
    )
}