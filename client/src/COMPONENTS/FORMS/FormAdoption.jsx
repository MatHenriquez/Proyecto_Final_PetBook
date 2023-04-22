// A este form hay que modificarlo:
// -Solo pueden enviar peticion de adopcion los usuarios registrados
// -Hacer logica para que cuando hacen click en el boton Adopt me te
// pide que te logees como usuario)
// Que este form inlcuya Nombre e email del usuario que solicita la adopcion.
// Inputs: telefono de contacto, mensaje libre, nombre de la mascota que desea adoptar.


import React, {useState} from "react";
import {Formik,Form,Field,ErrorMessage} from 'formik';
import Agenda from "./Agenda";


const FormAdoption = () => {
    const[formSubmit, setFormSubmit] = useState(false);

    return (
        <>
           <div className="subtitle">
          <h1>WOULD YOU LIKE TO ADOPT A PET?</h1>
        </div>
        <Formik
        initialValues={{
            user: '',
            pet: '',
            message:'',
            date: '',
        }}
        validate={(valores) => {
            let errores ={}
              //validacion para el petname
              if (!valores.petname) {
                errores.pet = 'Please enter the name of the pet you would like to adopt!';
              } else if (!/^[a-zA-Z\s]{1,15}$/.test(valores.pet)) { // solo letras y espacios, hasta 15 caracteres
                errores.pet = 'Pet name can only contain letters and must not exceed 15 characters.';
              }
                //validacion mensaje
            if(!valores.message){
                errores.message ='Please, enter your message!'
              } else if (!/^[a-zA-Z]{1,150}$/.test(valores.message)){ 
                errores.message= 'Please enter a message with a maximum of 150 word, not numbers allowed!'
              }
  

            return errores;
            
        }}
        onSubmit={(valores, {resetForm}) => {
            resetForm();
            console.log('Form was send!');
            setFormSubmit(true);
            setTimeout(() => setFormSubmit(false), 4000) // para q desaparezca el mensaje en un tantos segundos.

            // aqui hay que conectarse a la base de datos y enviar los valores.
        }}
        >
         
            {( {errors}  ) => (
         <Form className="textColorGreen textItalic text-center">
            {console.log(errors)}
         <div>
             <label htmlFor="petname">Pet Name:</label>
             <Field
             type ="text" 
             id="pet" 
             name="pet" 
             placeholder = "" 
             /> 
             <ErrorMessage name="pet" component={()=> (
                <div className="text-error">{errors.pet}</div>
              )}/>
         </div>
         <div>
             <Agenda>
             <label htmlFor="date"></label>
             <Field
             type ="text" 
             id="date" 
             name="date"
             placeholder = "" 
             />
             <ErrorMessage name="date" component={()=> (
                <div className="text-error">{errors.date}</div>
              )}/>
            
             <Field
             type ="text" 
             id="date" 
             name="date"
             placeholder = "" 
             />
             <ErrorMessage name="date" component={()=> (
                <div className="error">{errors.date}</div>
              )}/>
          </Agenda>     
         </div> 
         <div>

         
         <p>Tell us more about you:</p>
            <Field 
            className="textareas"
            name="message" 
            as="textarea" 
            pleaceholder="Leve you additional comments"
            />
            <ErrorMessage name="message" component={()=> (
                <div className="text-error">{errors.message}</div>
              )}/>    
         </div>
         <div className="buttonSubtmit">
             <button type ="submit">SEND</button>
         { formSubmit && <p className="succes">Form was successfully submitted</p>}
         </div>
        
     </Form>
            )}
       
        </Formik>
        </>

    )
}

export default FormAdoption;
