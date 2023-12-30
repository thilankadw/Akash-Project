import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import { useEffect, useState } from 'react';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { register, login, reset } from '../../features/auth/authSlice';

const Login = () => {

    const [toggle, settoggle] = useState(false)

    const [passwordType, setPasswordType] = useState('password');
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setPasswordType((prevType) => (prevType === 'password' ? 'text' : 'password'));
        setIsPasswordVisible((prevVisibility) => !prevVisibility);
    };

    const [formData, setFormData] = useState({
        email: '',
        password: '',
        confirmpassword: '',
        loginemail: '',
        loginpassword: ''
    })
    
    const { email, password, confirmpassword, loginemail, loginpassword } = formData
    
    const navigate = useNavigate()
    const dispatch = useDispatch()
    
    const { user, isLoading, isError, isSuccess, message } = useSelector(
        (state) => state.auth
    )

    useEffect(() => {
        if (isError) {
          alert(message)
        }
    
        if (isSuccess || user) {
          navigate('/')
        }
    
        dispatch(reset())
    }, [user, isError, isSuccess, message, navigate, dispatch])

    const onChange = (e) => {
        setFormData((prevState) => ({
          ...prevState,
          [e.target.name]: e.target.value,
        }))
    }

    const loginSubmit = (e) => {
        e.preventDefault()

        const userData = {
            loginemail,
            loginpassword,
        }
        
        dispatch(login(userData))
    }

    const registerSubmit = (e) => {
        e.preventDefault()
    
        if (password !== confirmpassword) {
          alert('Passwords do not match')
        } else {
          const userData = {
            email,
            password,
          }
    
          dispatch(register(userData))
        }
    }

    return(

        <>
            <div>
                <Header/>

                <div className='flex flex-col justify-center items-center my-[100px] mt-[150px]'>

                    <div class="h-full w-full px-4">

                        <div class="flex flex-col items-center justify-center">

                            { 

                                !toggle ?
                        
                                <div class="bg-white rounded lg:w-1/3  md:w-1/2 w-full">

                                    <p tabindex="0" class="focus:outline-none text-2xl font-extrabold leading-6 text-gray-800">Login to your account</p>

                                    <p tabindex="0" class="focus:outline-none text-sm mt-4 font-medium leading-none text-gray-500">
                                        Dont have an account? 
                                        <button   
                                            class="hover:text-gray-500 focus:text-gray-500 focus:outline-none focus:underline hover:underline text-sm font-medium leading-none  text-gray-800 cursor-pointer ml-[20px]"
                                            onClick={() => {settoggle(!toggle)}}>
                                                Sign up here
                                        </button>
                                    </p>

                                    <button aria-label="Continue with google" role="button" class="py-3.5 px-4 border rounded-lg border-gray-700 flex items-center w-full mt-10">
                                        
                                        <svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M18.9892 10.1871C18.9892 9.36767 18.9246 8.76973 18.7847 8.14966H9.68848V11.848H15.0277C14.9201 12.767 14.3388 14.1512 13.047 15.0812L13.0289 15.205L15.905 17.4969L16.1042 17.5173C17.9342 15.7789 18.9892 13.221 18.9892 10.1871Z" fill="#4285F4" />
                                            <path d="M9.68813 19.9314C12.3039 19.9314 14.4999 19.0455 16.1039 17.5174L13.0467 15.0813C12.2286 15.6682 11.1306 16.0779 9.68813 16.0779C7.12612 16.0779 4.95165 14.3395 4.17651 11.9366L4.06289 11.9465L1.07231 14.3273L1.0332 14.4391C2.62638 17.6946 5.89889 19.9314 9.68813 19.9314Z" fill="#34A853" />
                                            <path d="M4.17667 11.9366C3.97215 11.3165 3.85378 10.6521 3.85378 9.96562C3.85378 9.27905 3.97215 8.6147 4.16591 7.99463L4.1605 7.86257L1.13246 5.44363L1.03339 5.49211C0.37677 6.84302 0 8.36005 0 9.96562C0 11.5712 0.37677 13.0881 1.03339 14.4391L4.17667 11.9366Z" fill="#FBBC05" />
                                            <path d="M9.68807 3.85336C11.5073 3.85336 12.7344 4.66168 13.4342 5.33718L16.1684 2.59107C14.4892 0.985496 12.3039 0 9.68807 0C5.89885 0 2.62637 2.23672 1.0332 5.49214L4.16573 7.99466C4.95162 5.59183 7.12608 3.85336 9.68807 3.85336Z" fill="#EB4335" />
                                        </svg>

                                        <p class="text-base font-medium ml-4 text-gray-700">Continue with Google</p>

                                    </button>

                                    <div class="w-full flex items-center justify-between py-5">

                                        <hr class="w-full bg-gray-400" />
                                        <p class="text-base font-medium leading-4 px-2.5 text-gray-400">OR</p>
                                        <hr class="w-full bg-gray-400  " />
                                    </div>

                                    <div>
                                        <label id="email" class="text-sm font-medium leading-none text-gray-800">
                                            Email
                                        </label>
                                        <input 
                                            aria-labelledby="email" 
                                            type="email" 
                                            id='loginemail'
                                            name='loginemail'
                                            value={loginemail}
                                            onChange={onChange}
                                            class="bg-gray-200 border outline-none rounded  text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"/>
                                    </div>

                                    <div class="mt-6  w-full">

                                        <label for="pass" class="text-sm font-medium leading-none text-gray-800">
                                            Password
                                        </label>

                                        <div class="relative flex items-center justify-center bg-gray-200 rounded px-[10px]">

                                            <input 
                                                id='loginpassword'
                                                name='loginpassword'
                                                value={loginpassword} 
                                                onChange={onChange}
                                                type={passwordType} 
                                                class="bg-gray-200 border outline-none rounded  text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"/>
                                            
                                            <button 
                                                className='text-[#4d4d4d]'
                                                onClick={togglePasswordVisibility}
                                            >
                                                {isPasswordVisible ? <VisibilityOffIcon /> : <VisibilityIcon />}
                                            </button>

                                        </div>

                                    </div>

                                    <div class="mt-8">
                                        <button 
                                            role="button" 
                                            type='Submit'
                                            onClick={loginSubmit}
                                            class="text-sm font-semibold leading-none text-white focus:outline-none bg-black rounded-[25px] uppercase py-4 w-full">
                                                Login
                                        </button>
                                    </div>

                                </div>

                                :

                                <div class="bg-white rounded lg:w-1/3  md:w-1/2 w-full">

                                    <p tabindex="0" class="focus:outline-none text-2xl font-extrabold leading-6 text-gray-800">Create an account</p>

                                    <p tabindex="0" class="focus:outline-none text-sm mt-4 font-medium leading-none text-gray-500">
                                        Already have an account? 
                                        <button   
                                            class="hover:text-gray-500 focus:text-gray-500 focus:outline-none focus:underline hover:underline text-sm font-medium leading-none  text-gray-800 cursor-pointer ml-[20px]"
                                            onClick={() => {settoggle(!toggle)}}>
                                                Sign up here
                                        </button>
                                    </p>

                                    <button aria-label="Continue with google" role="button" class="py-3.5 px-4 border rounded-lg border-gray-700 flex items-center w-full mt-10">
                                        <svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M18.9892 10.1871C18.9892 9.36767 18.9246 8.76973 18.7847 8.14966H9.68848V11.848H15.0277C14.9201 12.767 14.3388 14.1512 13.047 15.0812L13.0289 15.205L15.905 17.4969L16.1042 17.5173C17.9342 15.7789 18.9892 13.221 18.9892 10.1871Z" fill="#4285F4" />
                                            <path d="M9.68813 19.9314C12.3039 19.9314 14.4999 19.0455 16.1039 17.5174L13.0467 15.0813C12.2286 15.6682 11.1306 16.0779 9.68813 16.0779C7.12612 16.0779 4.95165 14.3395 4.17651 11.9366L4.06289 11.9465L1.07231 14.3273L1.0332 14.4391C2.62638 17.6946 5.89889 19.9314 9.68813 19.9314Z" fill="#34A853" />
                                            <path d="M4.17667 11.9366C3.97215 11.3165 3.85378 10.6521 3.85378 9.96562C3.85378 9.27905 3.97215 8.6147 4.16591 7.99463L4.1605 7.86257L1.13246 5.44363L1.03339 5.49211C0.37677 6.84302 0 8.36005 0 9.96562C0 11.5712 0.37677 13.0881 1.03339 14.4391L4.17667 11.9366Z" fill="#FBBC05" />
                                            <path d="M9.68807 3.85336C11.5073 3.85336 12.7344 4.66168 13.4342 5.33718L16.1684 2.59107C14.4892 0.985496 12.3039 0 9.68807 0C5.89885 0 2.62637 2.23672 1.0332 5.49214L4.16573 7.99466C4.95162 5.59183 7.12608 3.85336 9.68807 3.85336Z" fill="#EB4335" />
                                        </svg>
                                        <p class="text-base font-medium ml-4 text-gray-700">Continue with Google</p>
                                    </button>

                                    <div class="w-full flex items-center justify-between py-5">

                                        <hr class="w-full bg-gray-400" />
                                        <p class="text-base font-medium leading-4 px-2.5 text-gray-400">OR</p>
                                        <hr class="w-full bg-gray-400  " />

                                    </div>

                                    <div>

                                        <label id="email" class="text-sm font-medium leading-none text-gray-800">
                                            Email
                                        </label>

                                        <input 
                                            aria-labelledby="email" 
                                            type="email" 
                                            id='email'
                                            name='email'
                                            value={email}
                                            onChange={onChange}
                                            class="bg-gray-200 border outline-none rounded  text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"/>
                                    
                                    </div>

                                    <div class="mt-6  w-full">

                                        <label for="pass" class="text-sm font-medium leading-none text-gray-800">
                                            Password
                                        </label>

                                        <div class="relative flex items-center justify-center bg-gray-200 rounded px-[10px]">

                                            <input 
                                                id='password'
                                                name='password'
                                                value={password}
                                                type={passwordType} 
                                                onChange={onChange}
                                                class="bg-gray-200 border outline-none rounded  text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"/>

                                            <button 
                                                className='text-[#4d4d4d]'
                                                onClick={togglePasswordVisibility}
                                            >
                                                {isPasswordVisible ? <VisibilityOffIcon /> : <VisibilityIcon />}
                                            </button>

                                        </div>
                                    </div>

                                    <div class="mt-6  w-full">

                                        <label for="pass" class="text-sm font-medium leading-none text-gray-800">
                                            Confirm Password
                                        </label>

                                        <div class="relative flex items-center justify-center bg-gray-200 rounded px-[10px]">

                                            <input 
                                                id='confirmpassword'
                                                name='confirmpassword'
                                                value={confirmpassword} 
                                                type={passwordType} 
                                                onChange={onChange}
                                                class="bg-gray-200 border outline-none rounded  text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"/>

                                            <button 
                                                className='text-[#4d4d4d]'
                                                onClick={togglePasswordVisibility}
                                            >
                                                {isPasswordVisible ? <VisibilityOffIcon /> : <VisibilityIcon />}
                                            </button>
                                        </div>
                                    </div>

                                    <div class="mt-8">
                                        <button 
                                            role="button" 
                                            type='Submit'
                                            onClick={registerSubmit}
                                            class="text-sm font-semibold leading-none text-white focus:outline-none bg-black rounded-[25px] uppercase py-4 w-full">
                                                Register
                                        </button>
                                    </div>

                                </div>

                            }

                        </div>

                    </div>

                </div>

                <Footer/>
            </div>
        </>

    );

};

export default Login;