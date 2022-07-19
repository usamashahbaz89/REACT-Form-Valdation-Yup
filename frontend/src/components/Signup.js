import React from 'react';
import { Formik, Form } from 'formik';
import { TextField } from './TextField';
import * as Yup from 'yup';
import { CustomSelect } from './customSelect'
import { CustomCheckbox } from './customCheckbox';
import  { useState } from 'react';


const validate = Yup.object({
  firstName: Yup.string()
    
    .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed")
    .min(2,   'Must be 2 characters or more')
    .required('Required'),
  lastName: Yup.string()
   
    .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed")
    .min(2,   'Must be 2 characters or more')
    .required('Required'),

    number: Yup.string()
    .matches(/^\d+$/, "Only numbers are allowed")
    .required('Required'),

    passport: Yup.string()
    .min(5,   'Must be 5 characters or more')
    .required('Required'),

    email: Yup.string()
  
    .matches(/^[[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, "Invalid Email" )
    .required('required'),

    cities: Yup.string()
    .oneOf(["Stockholm", "Malmö", "Gothenburg",  "önköping",  "Kristianstad", "Plock", "Krakow", "Gdansk", "Katowice" ])
    .required('required'),

    pickupCity: Yup.string()
    .required('Required'),

    approval: Yup.boolean()
    .oneOf([true ], "Please select checkbox"),

    roles: Yup.array()
    // .min(1)
    // .of(Yup.string().required())
    .required('required'),

    employer: Yup.string()
   
    .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed")
    .min(2,   'Must be 2 characters or more')
    .required('Required'),
    

   

    

  
    })


const Signup = () => {

  



  const addDetails =  (e) =>{
    
    e.preventDefault();
  

    alert("Submitted");
  }

  
 
    
  
  return (
    <Formik
      initialValues={{
        
        firstName: '',
        lastName: '',
        number:'',
        passport: '',
        email:'',
        cities:'',
        roles: [],
        employer: '',
        pickupCity:'',
        approval: false
        

        
        
        
        
      }}
      validationSchema={validate}
      onSubmit={values => {
         console.log(values)
        
      }}
    >
      {formik => (
       
        <div style={{borderStyle:"solid"}} >
          <h3 className="my-4 font-weight-bold .display-4">Form</h3>
          <Form  >
            <TextField label="First Name" name="firstName" type="text" placeholder="First Name" />
            <TextField label="Last Name" name="lastName" type="text"  placeholder="Last Name" />
            <div style={{height:"50px"}}></div>
            <TextField label="Phone Number" name="number" type="number"  placeholder="Phone Number"/>
            <div style={{height:"50px"}}></div>
            
<div style={{height:"50px"}}></div>
            <TextField label="Passport Number" name="passport" type="text"  placeholder="Passport Number" />
            <div style={{height:"50px"}}></div>
            <TextField label="Email" name="email" type="text"  placeholder="Email Address"/>
            <div style={{height:"50px"}}></div>
            <CustomSelect label="Attend to cities" name="cities" placeholder="please select a city">
              <option value= "">Please select one city</option>
              <option value= "Stockholm">Stockholm (SE)</option>
              <option value= "Malmö">Malmö  (SE)</option>
              <option value= "Gothenburg">Gothenburg  (SE)</option>
              <option value= "önköping">önköping  (SE)</option>
              <option value= "Kristianstad">Kristianstad  (SE)</option>
              <option value= "Plock">Plock  (PL)</option>
              <option value= "Krakow">Krakow  (PL)</option>
              <option value= "Gdansk">Gdansk  (PL)</option>
              <option value= "Katowice">Katowice  (PL)</option>
             </CustomSelect>

             <CustomSelect name="pickupCity" placeholder="Badge Pickup City">
               <option value= "">Badge Pickup City</option> 
              <option value= "Stockholm">Stockholm (SE)</option>
              <option value= "Malmö">Malmö  (SE)</option>
              <option value= "Gothenburg">Gothenburg  (SE)</option>
              <option value= "önköping">önköping  (SE)</option>
              <option value= "Kristianstad">Kristianstad  (SE)</option>
              <option value= "Plock">Plock  (PL)</option>
              <option value= "Krakow">Krakow  (PL)</option>
              <option value= "Gdansk">Gdansk  (PL)</option>
              <option value= "Katowice">Katowice  (PL)</option>
             </CustomSelect>
             

             <div style={{height:"50px"}}></div>
             




            
            



<TextField label="Employer/Client" name="employer" type="text"  placeholder="Employer/Client"/>

             <button className="btn btn-dark mt-3" type="submit"  onClick={(e) => addDetails(e)}>Submit</button> 
            <button className="btn btn-danger mt-3 ml-3" type="reset" style={{marginLeft:"10px"}}>Reset</button>
            <div style={{height:"30px"}}></div>
          </Form>
        </div>
      )}
    </Formik>
  )
}
export default Signup