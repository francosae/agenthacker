import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useState } from 'react'
import { signinHook } from '../hooks/signinHook'
import { signupHook } from '../hooks/signupHook'
import { useNavigate } from 'react-router-dom'
function SignIn() {
  const [tab, setTab] = useState('signup')

  return (
<>
<Navbar />
<section class="bg-white dark:bg-gray-900">
    <div class="container flex items-center justify-center min-h-screen px-6 mx-auto">
        <div class="w-full max-w-md">
            <img class="object-cover w-24 h-24 mx-auto rounded-full" src="https://scontent-lga3-1.xx.fbcdn.net/v/t1.6435-9/59986569_964043287287497_5881972250336296960_n.jpg?stp=cp0_dst-jpg_e15_q65_s320x320&_nc_cat=110&ccb=1-7&_nc_sid=85a577&_nc_ohc=lw-sp0xi1DoAX9LpKYb&_nc_ht=scontent-lga3-1.xx&oh=00_AfAHOoVeDDsHDZBAnphP6neyl7FenZfKtuss6nYja6ZoOA&oe=63846EAD" alt="user avatar" />

            <div class="flex items-center justify-center mt-6">
                <button href="#" onClick={() => setTab('signin')} class="w-1/3 pb-4 font-medium text-center text-gray-500 capitalize border-b dark:border-gray-400 dark:text-gray-300">
                    sign in
                </button>

                <button href="#" onClick={() => setTab('signup')} class="w-1/3 pb-4 font-medium text-center text-[#122c5a] capitalize border-b  dark:border-blue-400 dark:text-white">
                    sign up
                </button>
            </div>

            {tab === 'signup' ? <SignUpForm /> : <></>}
            {tab === 'signin' ? <SignInForm /> : <></>}
        </div>
    </div>
</section>
<Footer />
</>
  )
}

function SignInForm(){
  const { form, handleOnInputChange, handleOnSubmit } = signinHook()
  console.log(form)
return(
<>
<div class="relative flex items-center mt-8">
                <span class="absolute">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                </span>

                <input 
                name="email"
                type="email"
                autoComplete="email"
                onChange={handleOnInputChange} 
                class="block w-full py-3 text-gray-700 bg-white border rounded-md px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Email" />
            </div>

            <div class="relative flex items-center mt-4">
                <span class="absolute">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                </span>

                <input type="password" name="password"
                onChange={handleOnInputChange} 
                class="block w-full px-10 py-3 text-gray-700 bg-white border rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Password" />
            </div>


            <div class="mt-6">
                <button onClick={() => handleOnSubmit() } class="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-[#122c5a] rounded-md hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                    Sign In
                </button>
            </div>
            <br></br>
            <div class="flex items-center justify-center py-4 text-center bg-gray-50 dark:bg-gray-700">
             <span class="text-sm text-gray-600 dark:text-gray-200">It's spy time</span>
          </div>
</>
)
}

function SignUpForm(){
  const { form, handleOnInputChange, handleOnSubmit, accountCreated } = signupHook()
  const navigate = useNavigate()
  if (accountCreated == true){
    navigate('/home')
  }
  return(
<>
<div class="relative flex items-center mt-8">
                <span class="absolute">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                </span>

                <input
                id="username"
                name="username"
                type="username"
                autoComplete="username"
                onChange={handleOnInputChange}
                required
                class="block w-full py-3 text-gray-700 bg-white border rounded-md px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Username" />
            </div>



            <div class="relative flex items-center mt-6">
                <span class="absolute">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                </span>

                <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                onChange={handleOnInputChange}
                required
              class="block w-full py-3 text-gray-700 bg-white border rounded-md px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Email address" />
            </div>

            <div class="relative flex items-center mt-4">
                <span class="absolute">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                </span>

                <input
                id="password"
                name="password"
                type="password"
                pattern=".{8,}"
                autoComplete="password"
                required
                onChange={handleOnInputChange} class="block w-full px-10 py-3 text-gray-700 bg-white border rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Password" />
            </div>

            <div class="relative flex items-center mt-4">
                <span class="absolute">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                </span>

                <input
                id="passwordConfirm"
                name="passwordConfirm"
                type="passwordConfirm"
                pattern=".{8,}"
                autoComplete="passwordConfirm"
                onChange={handleOnInputChange}
                required
                class="block w-full px-10 py-3 text-gray-700 bg-white border rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Confirm Password" />
            </div>

            <div class="mt-6">
                <button onClick={handleOnSubmit} class="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-[#122c5a] rounded-md hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                    Sign Up
                </button>
      

            </div>
            <br></br>
            <div class="flex items-center justify-center py-4 text-center bg-gray-50 dark:bg-gray-700">
              <span class="text-sm text-gray-600 dark:text-gray-200">It's spy time</span>
             </div>
</>
  )
}
export default SignIn