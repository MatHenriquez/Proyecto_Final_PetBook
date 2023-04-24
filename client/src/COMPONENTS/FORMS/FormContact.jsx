//form con captcha. 
import React, {useState} from "react";
import {Formik,Form,Field,ErrorMessage} from 'formik';
//Este fomr lo puede llenar un usario registrado o no registrado y el administrador va a recibir un email.
//Una vez que el usuario complete el formulario y haga clic en "enviar", puedes usar la función "fetch" de JavaScript para enviar una solicitud POST al servidor.
import { sendEmail } from "../../Redux/actions";
import Header from "../HEADER/Header";
import HeaderLogin from "../HEADER/HeaderLogin";
import Footer from "../FOOTER/Footer";
import { useEffect } from "react";
import Swal from 'sweetalert2';
import { useNavigate } from "react-router-dom";



const FormContact = () => {
    const[formSubmit, setFormSubmit] = useState(false);
    const [user, setUser] = useState({ email: "", name: "" });
    const navigate = useNavigate();
    
    useEffect(() => {
      if (localStorage.getItem('token')) {
        fetch("http://localhost:3001/users", {
          headers: {
            "Authorization": `Bearer ${localStorage.getItem('token')}`
          }
        })
          .then(res => {
            if (res.ok) {
              return res.json();
            } else {
              throw new Error("Response was not JSON");
            }
          })
          .then(data => {
            setUser({ email: data.email, name: data.name });
          })
          .catch(error => console.error(error));
      }
    }, []);
    
    
   
    
    return (
        <>
        <div> {localStorage.getItem('token') ? <HeaderLogin className='mb-4' /> : <Header className="mb-4" /> } </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full'>

          <div  className='flex flex-col justify-center'> 
            <div >
              <h1 className="subtitle">CONTACT US.</h1>
            </div>
            <Formik
            initialValues={{
              lastname:"",
              message: ""
            }}
            validate={(valores) => {
                let errores ={}
                //validacion para el nombre
                if(!valores.name){
                  errores.name ='Please, enter your name!'
                } else if (!/^[a-zA-ZÀ-ÿ\s]{2,16}$/.test(valores.name)){ // 2 a 16 digitos aceptan letras mayúsculas y minúsculas, acentos y espacios.
                  errores.name = 'Name can only contain letters and spaces.'
                }
              
                //validacion para el apellido
                if(!valores.lastname){
                    errores.lastname ='Please, enter your Last name!'
                } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.lastname)){ // 4 a 16 digitos y solo numeros, letras y guion _
                  errores.lastname = 'Last name can only contain letters and spaces.'
                }

                //validacion para el email
                if(!valores.email){
                    errores.email ='Please, enter your email!'
                } else if (!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(valores.email)){ // 4 a 16 digitos y solo numeros, letras y guion _
                  errores.email = 'Email can only contain letters,spaces and piriods.'
                }
                //validacion mensaje
                if(!valores.message){
                  errores.message ='Please, enter your message!'
                } else if (!/^[a-zA-Z ]{1,150}$/.test(valores.message)){ 
                  errores.message= 'Please enter a message with a maximum of 150 word, not numbers allowed!'
                }

                
                return errores;
                
            }}
          
            onSubmit={(values, {resetForm}) => {
              Swal.fire({
                title: 'HELP A PET!',
                text: 'Donate \u2764 ',
                imageUrl:'https://media.tenor.com/O7tk8A-EoIgAAAAj/puppy.gif',
                imageWidth: 300,
                imageHeight: 300,
                imageAlt: 'Custom image',
                showCancelButton: true,
                confirmButtonText: 'Yes!',
                cancelButtonText: 'Not Now!',
                confirmButtonColor: '#1B2021',
                ccancelButtonColor: 'transparent',
                cancelButtonBorder: 'none',
                cancelButtonColor:'#C0F8D1',
                background: '#C0F8D1',
                color: '#1B2021',
               
              }).then((result) => {
                if (result.isConfirmed) {
                  navigate("/donate");
                }else if (result.dismiss === Swal.DismissReason.cancel) {
                  navigate("/home");
                }
              });
              setFormSubmit(true);
              sendEmail(values.name, values.lastname, values.email, values.message)
              .then(() => {
              console.log('Form was sent!');
              setTimeout(() => setFormSubmit(false), 4000);
              resetForm();
            })
            .catch((error) => {
              console.error('Error sending email:', error);
              setTimeout(() => setFormSubmit(false), 4000);
            });
        }}
            >

                {( {errors}  ) => (
                  
            <Form className='max-w-[400px] w-full mx-auto rounded-lg bg-white  p-4'>
                {console.log(errors)}
          
            <div className='divForminput'>
                <Field
                type ="text" 
                id="name" 
                name="name" 
                className= 'inputs'
                placeholder= {user.name ? user.name : "Write you name, plase"}
                />
                <ErrorMessage name="name" component={()=> (
                    <div className="text-error">{errors.name}</div>
                )}/>
            </div>

            <div className="divForminput">
                
                <Field
                type ="text" 
                id="lastname" 
                name="lastname" 
                placeholder = "Write your last name, plase" 
                className='inputs'
                />
                <ErrorMessage name="lastname" component={()=> (
                  <div className="text-error">{errors.lastname}</div>
                )}/>
            </div>
           
           
            <div className="divForminput">
                
                <Field
                type ="email" 
                id="email" 
                name="email" 
                className='inputs'
                placeholder={user.email ? user.email : "Write you e-mail, please"}
                />
                <ErrorMessage name="email" component={()=> (
                  <div className="text-error">{errors.email}</div>
                )}/>
            </div>
            <div className="divForminput">
            <p className="ml-4">you're message:</p>
                <Field 
                className="textareas"
                name="message" 
                as="textarea" 
                />    
                <ErrorMessage name="message" component={()=> (
                    <div className="text-error">{errors.message}</div>
                  )}/>    
            </div>
            <div className="buttonSubtmit text-center ">
                <button className=""  type ="submit ">SEND</button>
            { formSubmit && <p className="succes">Form was successfully submitted</p>}
            </div>
          
        </Form>
                )}
          
            </Formik>
          </div>

            {/* IMAGEN */}
            <div className='hidden sm:block'>  
              <img className='w-[100%] h-full  object-cover' src="perrocomputadora.jpeg" alt="perro en computadora" />
            </div>
        </div>
        <div>
          <Footer />
        </div>

        </>



    )
}

export default FormContact;



