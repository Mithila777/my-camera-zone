import React, {  useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import SocialLogin from '../SocialLogin/SocialLogin';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import auth from '../../firebase.init';
import { sendPasswordResetEmail } from 'firebase/auth';

const Login = () => {
  const [email, setEmail]=useState('');
    const [password ,setPassword]=useState('');
    const [errors,setErrors]=useState('');
    const navigate =useNavigate();
    const location =useLocation();
    const from =location?.state?.from?.pathname;


    const [
      signInWithEmailAndPassword,
      user,
      loading,
      error,
    ] = useSignInWithEmailAndPassword(auth);
  
    if (error) {
      return (
        <div>
          {setErrors(error.message)}
        </div>
      );
    }
    if (loading) {
      return <p>Loading...</p>;
    }
    if (user) {
      return (
        <div>
           {navigate("/")}


        </div>
      );}



    const handleEmail = event =>{
        setEmail( event.target.value);

    };


    const handlePassword = event =>{
      setPassword( event.target.value);

         };
    
    const handleSubmit = event => {
        event.preventDefault();

        signInWithEmailAndPassword(email, password)
        .then(()=>{
          navigate(from,{replace:true})
        })
        
    }

    const navigateRegister = event => {
        navigate('/register');
    }
   
    const passwordReset =()=>{
      sendPasswordResetEmail(auth,email);
      toast('sent email');
    }
    
   

    return (
        <div >
            <div className='registration'>
            <h3>Please Login</h3>
            <form onSubmit={handleSubmit}>

                <input onBlur={handleEmail} type="email"  id="" placeholder='Your Email' required/><br/>
                <input  onBlur={handlePassword} type="password"  id="" placeholder='Password' required/><br/>
                <input className='form-submit' type="submit" value="Sign In"  required/>
                <p >Don't have an account? <Link to="/Registration" onClick={navigateRegister}>Registration here</Link></p>
                <p >Forget password? <button onClick={passwordReset}>Reseat here</button></p>

                  {errors}


            </form>
           
            <SocialLogin></SocialLogin>
            <ToastContainer />

            </div>
            
        </div>
    );
};

export default Login;