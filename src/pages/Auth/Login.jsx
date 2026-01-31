

import  LoginPhoto from '../../assets/login-photo.png'
import AuthForm from '../../components/auth/AuthForm.jsx'
function Login() {
  return (
        <div  className=' min-h-screen bg-black flex '>
        {/* Left Section (Image) */}
        <div className="hidden lg:flex w-1/2 ">
            <img
            src={LoginPhoto} 
            alt="Login Illustration"
            className="max-w-1/2 h-screen"
            />
        </div>

        {/* Right Section  AuthForm */}
        <div className="w-full lg:w-1/2 flex items-center justify-center">
            <AuthForm />
        </div>
        </div>

    


  )
}

export default Login
