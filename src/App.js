import React, { useRef } from 'react';
import logo from './logo.svg';
import './App.css';
import { useForm } from "react-hook-form";
import ReCAPTCHA from "react-google-recaptcha";

function App() {

  const { register, watch, handleSubmit, formState: { errors } }= useForm();

  const captchaRef = useRef(null);


  const onSubmit = (data) => {
    console.log(data);
  }

  

  return (
    <div id="container">
      <div className="form-wrap">
        <h1>Sign Up</h1>
        <p>It's free and only takes a minute</p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group">
            <label htmlFor="first-name">First Name</label>
            <input type="text" name="firstName" id="first-name" {...register("firstName" , { required: true, maxLength: 10 })}/>
            
          </div>
          {errors.firstName && <p style={{color: "red"}}>Please check the First Name</p>}
          <div className="form-group">
            <label htmlFor="last-name">Last Name</label>
            <input type="text" name="lastName" id="last-name" {...register("lastName" , { required: true, maxLength: 10 })}/>
          </div>
          {errors.lastName && <p style={{color: "red"}}>Please check the Last Name</p>}
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" {...register("email",
                            {
                                required: true,
                                pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                            })}/>
          </div>
          {errors.email && <p style={{color: "red"}}>Please check the Email</p>}

          <div className="form-group">
            <label htmlFor="phone">Mobile No.</label>
            <input type="phone" name="phone" id="phone" {...register("phone", {
                            required: true,
                            pattern: /^[789]\d{9}$/
                        })}/>
          </div>
          {errors.phone && <p style={{color: "red"}}>The Phone no. must be 10 digit long.</p>}

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" {...register("password", {
                            required: true,
                            pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,15}$/
                        })}/>
          </div>
          {errors.password && <p style={{color: "red"}}>Password must contain one capital letter, one small letter, one number and must be 6 - 15 chars long.</p>}

          <div className="form-group">
            <label htmlFor="password2">Confirm Password</label>
            <input type="password" name="password2" id="password2"  {...register("confirmPassword", {
                            required: true,
                            validate: (val: string) => {
                              if (watch('password') != val) {
                                return "Your passwords do no match";
                              }
                            },
                        })}/>
          </div>
          {errors.confirmPassword && errors.confirmPassword.type === "validate" && <p  style={{color: "red"}}>Passwords do not match</p>}

         
          <ReCAPTCHA ref={captchaRef} sitekey={process.env.REACT_APP_SITE_KEY}/>
           

          <button type="submit" className="btn">Sign Up</button>
          <p className="bottom-text">
            By clicking the Sign Up button, you agree to our
            <a href="#">Terms & Conditions</a> and
            <a href="#">Privacy Policy</a>
          </p>
        </form>
      </div>
    </div>
    
  );
}

export default App;
