
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import axios from "axios";

function AuthForm() {
  const [isLoginMode, setIsLoginMode] = useState(true);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    mobile: "",
    address: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (isLoginMode) {
        // 🔐 LOGIN
        await axios.post("http://localhost:3000/auth/login", {
          email: formData.email,
          password: formData.password
        });

        navigate("/home"); // redirect to Home

      } else {
        // 📝 SIGNUP
        await axios.post("http://localhost:3000/auth/signup", {
          name: formData.name,
          email: formData.email,
          password: formData.password,
          mobile: formData.mobile,
          address: formData.address
        });

        setIsLoginMode(true);
        alert("Signup successful! Please login.");
      }

    } catch (error) {
      const msg = error.response?.data?.message || "Something went wrong";
      alert(msg);
    }
  };

  return (
    <div className="w-full max-w-md text-white p-6">

      <h1 className="text-2xl font-bold text-[#CC9600] mb-2">
        Welcome to Neth BookPoint!
      </h1>

      <p className="text-sm text-gray-300 mb-6">
        Discover a seamless way to sell your books and unlock exclusive benefits.
      </p>

      <div className='flex justify-center mb-4'>
        <h2 className='text-xl font-semibold text-center text-[#CC9600]'>
          {isLoginMode ? "Login in Your Account" : "Signup Account"}
        </h2>
      </div>

      {/* Tabs */}
      <div className='relative flex h-12 mb-6 border border-gray-300 rounded-full overflow-hidden'>
        <button onClick={() => setIsLoginMode(true)}
          className={`w-1/2 text-lg font-medium transition-all z-10 cursor-pointer ${isLoginMode ? "text-black" : "text-gray-300"}`}>
          Login
        </button>
        <button onClick={() => setIsLoginMode(false)}
          className={`w-1/2 text-lg font-medium transition-all z-10 cursor-pointer ${!isLoginMode ? "text-black" : "text-gray-300"}`}>
          Sign Up
        </button>
        <div className={`absolute top-0 h-full w-1/2 rounded-full bg-gradient-to-r from-yellow-600 via-yellow-400 to-orange-300 ${isLoginMode ? "left-0" : "right-0"}`}></div>
      </div>

      <form className='space-y-4' onSubmit={handleSubmit}>

        {!isLoginMode && (
          <>
            <input type='text' name="name" onChange={handleChange} placeholder='Name'
              className='w-full p-3 border-b-2 border-gray-300 outline-none focus:border-amber-500  placeholder-gray-400' required />

            <input type="email" name="email" onChange={handleChange} placeholder='Email'
              className='w-full p-3 border-b-2 border-gray-300 outline-none focus:border-amber-500 placeholder-gray-400' required />

            <input type='password' name="password" onChange={handleChange} placeholder='Password'
              className='w-full p-3 border-b-2 border-gray-300 outline-none focus:border-amber-500 placeholder-gray-400' required />

            <input type='text' name="mobile" onChange={handleChange} placeholder='Mobile'
              className='w-full p-3 border-b-2 border-gray-300 outline-none focus:border-amber-500 placeholder-gray-400' required />

            <input type='text' name="address" onChange={handleChange} placeholder='Address'
              className='w-full p-3 border-b-2 border-gray-300 outline-none focus:border-amber-500 placeholder-gray-400' required />
          </>
        )}

        {isLoginMode && (
          <>
            <input type="email" name="email" onChange={handleChange} placeholder='Email Address'
              className='w-full p-3 border-b-2 border-gray-300 outline-none focus:border-amber-500 placeholder-gray-400' required />

            <input type='password' name="password" onChange={handleChange} placeholder='Password'
              className='w-full p-3 border-b-2 border-gray-300 outline-none focus:border-amber-500 placeholder-gray-400' required />
          </>
        )}

        <button className='w-full p-3 bg-gradient-to-r from-yellow-600 via-yellow-400 to-orange-300 hover:cursor-pointer text-black font-medium py-3 rounded-lg mb-4 hover:opacity-90 transition'>
          {isLoginMode ? "Login" : "Signup"}
        </button>

        <p className='text-sm text-gray-300 text-center'>
          {isLoginMode ? "Don't have any account? " : "Already have an account? "}
          <a href="#" onClick={(e) => { e.preventDefault(); setIsLoginMode(!isLoginMode); }}
            className='text-[#CC9600] cursor-pointer ml-1'>
            {isLoginMode ? "Create an Account" : "Login"}
          </a>
        </p>
      </form>
    </div>
  );
}

export default AuthForm;



