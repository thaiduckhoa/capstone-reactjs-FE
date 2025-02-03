import React from 'react'

import { transformer, z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import Footer from '../../components/Footer/Footer';
import { Route } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';



const LoginSchema = z.object({
 
  email: z.string().email({ message: "Please fill valid email" }),
  password: z.string().min(1, { message: "Please fill password" }),
 

})

export const Login = () => {
  const navigate = useNavigate();
  const FormLogin = useForm({
    resolver: zodResolver(LoginSchema)


  })
  const { register, handleSubmit, formState: { errors } } = FormLogin
  return (
    <div>

      <div className="min-h-screen bg-gray-100 text-gray-900 flex justify-center">
        <div className="max-w-screen-xl m-0 sm:m-10 bg-white shadow sm:rounded-lg flex justify-center flex-1">
          <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">

            <div className="mt-12 flex flex-col items-center">
              <h1 className="text-2xl xl:text-3xl font-extrabold text-[#188652]">
                Sign In
              </h1>
              <div className="w-full flex-1 mt-8">

                <form onSubmit={handleSubmit((value) => {

                })}>
                  <div className="mx-auto max-w-xs">
                    <input
                      {...register('email')}
                      className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                      type="text"
                      placeholder="Email" />
                    {
                      errors.email && <p className="text-red-500">{errors.email.message}</p>
                    }

                    <input
                      {...register('password')}
                      className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5" type="password"
                      placeholder="Password" />
                    {
                      errors.password && <p className="text-red-500">{errors.password.message}</p>
                    }

                    <button className="mt-5 tracking-wide font-semibold bg-[#1dbf73] text-gray-100 w-full py-4 rounded-lg hover:bg-[#188652] transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
                      <i class="fa-regular fa-user"></i>
                      <span className="ml-3">
                        Login
                      </span>
                    </button>

                    <div className="flex items-center justify-between pb-6">
                      <p className="mb-0 mr-2">Don't have an account?</p>
                      <div className='mt-3'>
                        <div className=' flex  gap-2 rounded border-2 border-danger px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-danger transition duration-150 ease-in-out hover:border-danger-600 hover:bg-green-500 hover:bg-opacity-10 hover:text-danger-600'>
                          <svg
                            className="w-6 h-6 "
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            strokeLinecap="round"
                            stroke-linejoin="round"
                          >
                            <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                            <circle cx="8.5" cy="7" r="4" />
                            <path d="M20 8v6M23 11h-6" />
                          </svg>
                          <button 
                          onClick={()=>{
                            
                            navigate('/register')
                          }}
                          type="button"> Register </button>
                        </div>

                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="flex-1 bg-indigo-100 text-center hidden lg:flex">
            <div className="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat" style={{ backgroundImage: 'url("https://storage.googleapis.com/devitary-image-host.appspot.com/15848031292911696601-undraw_designer_life_w96d.svg")' }}>
            </div>
          </div>
        </div>
      </div>



      <Footer />



    </div>
  )
}
