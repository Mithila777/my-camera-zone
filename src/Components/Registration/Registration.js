import React, { useState } from 'react';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import './Registration.css'
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';


const Registration = () => {
    const [userName, setName]=useState('');
    const [email, setEmail]=useState('');
    const [password ,setPassword]=useState('');
    const [confirmPassword, setConfirmPassword]=useState('');
    const [errors,setErrors]=useState('');
    const navigate =useNavigate();
    const [registard,setRegistard]=useState(false);

    const handleName = event =>{
        setName( event.target.value);
    };
    const handleEmail = event =>{
        setEmail( event.target.value);

    };

    const handlePassword = event =>{
        if(password.length <7)
         {
             setErrors( 'Password minimum length should be Eight.');
         }
        setPassword( event.target.value);

    };
    const handleConfirmPassword = event =>{
        setConfirmPassword( event.target.value)

    };
    const handleRegisterdChange = event =>{
        setRegistard(event.target.checked)
    }
    if(registard){
        navigate("/Login");
    }

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error
      ] = useCreateUserWithEmailAndPassword(auth,{sendEmailVerification:true});
    
      if (error) {
        return (
                         
            setErrors(error.message)
      );
      }

      if (loading) {
        return <p>Loading...</p>;
      }
      if (user) {
        return (
          <div>
               {console.log(user)} </div>
        );
      }
      const handlefrom =  (event) =>{
         if(password !== confirmPassword)
         {
             setErrors( 'your password does not match');
             return;
         }
         
         createUserWithEmailAndPassword(email, password)
         .catch(error=>{
             setErrors(error.massage)
         })
        
         event.preventDefault(); 

         navigate("/");


        }

    return (
        <div >
            <div className='registration'>
            <h3>Please Register</h3>
            <form onSubmit={handlefrom} >
                <input  onBlur={handleName} type="text"  placeholder='Your Name'  required /><br/>
                <input  onBlur={handleEmail}type="email"  id="" placeholder='Your Email' required/><br/>
                <input  onBlur={handlePassword} type="password"  id="" placeholder='Password' required/><br/>
                <input  onBlur={handleConfirmPassword} type="password" name="confirmpassword" id="" placeholder='Repeat your Password'  required/><br/>
                <input   onChange={handleRegisterdChange}   type ="checkbox" id="v1" name="v1" ></input>
                <label for="v1"> All ready registerd</label>
                <h6 style={{color:'red'}}>{errors}</h6>
                <input className='form-submit' type="submit" value="Sign Up"  required/>
                <p>Have already an account? <Link to="/Login">Login here</Link></p>



            </form>
            </div>
            
        </div>
    );
};

export default Registration;