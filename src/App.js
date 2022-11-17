import logo from './logo.svg';
import './App.css';
import { useForm } from "react-hook-form";

function App() {

  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  }

  return (
    <div id="container">
      <div class="form-wrap">
        <h1>Sign Up</h1>
        <p>It's free and only takes a minute</p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div class="form-group">
            <label for="first-name">First Name</label>
            <input type="text" name="firstName" id="first-name" {...register("firstName" , { required: true, maxLength: 10 })}/>
            
          </div>
          {errors.firstName && <p style={{color: "red"}}>Please check the First Name</p>}
          <div class="form-group">
            <label for="last-name">Last Name</label>
            <input type="text" name="lastName" id="last-name" {...register("lastName" , { required: true, maxLength: 10 })}/>
          </div>
          {errors.lastName && <p style={{color: "red"}}>Please check the Last Name</p>}
          <div class="form-group">
            <label for="email">Email</label>
            <input type="email" name="email" id="email" {...register("email",
                            {
                                required: true,
                                pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                            })}/>
          </div>
          {errors.email && <p style={{color: "red"}}>Please check the Email</p>}

          <div class="form-group">
            <label for="phone">Mobile No.</label>
            <input type="phone" name="phone" id="phone" {...register("phone", {
                            required: true,
                            pattern: /[7-9]{1}[0-9]{9}/
                        })}/>
          </div>
          {errors.phone && <p style={{color: "red"}}>Please check the Phone no.</p>}

          <div class="form-group">
            <label for="password">Password</label>
            <input type="password" name="password" id="password" {...register("password", {
                            required: true,
                            pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,15}$/
                        })}/>
          </div>
          {errors.password && <p style={{color: "red"}}>Please check the password</p>}

          <div class="form-group">
            <label for="password2">Confirm Password</label>
            <input type="password" name="password2" id="password2"  {...register("confirmPassword", {
                            required: true,
                            pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,15}$/
                        })}/>
          </div>
          {errors.confirmPassword && <p style={{color: "red"}}>Please check the password</p>}

          <button type="submit" class="btn">Sign Up</button>
          <p class="bottom-text">
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
