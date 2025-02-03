import React from 'react';
import { DatePicker, message } from "antd";
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useNavigate } from 'react-router-dom';
import dayjs from "dayjs";
import {RegisterSchema} from './Register.schema';

import { UserTemplate } from '../../templates/UserTemplate/UserTemplate';



export const Register = () => {

    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors }, setValue } = useForm({
        resolver: zodResolver(RegisterSchema),
        mode: 'onChange'
    });

    const onSubmit = async (data) => {
        const formattedData = {

            ...data,
            gender: data.gender === "Male",


        };
        console.log(formattedData);

        try {
            const response = await fetch('https://fiverrnew.cybersoft.edu.vn/api/auth/sigup', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formattedData),
            });

            if (response.ok) {
                message.success("Registration successful!");
                navigate('/login');
            } else {
                const errorData = await response.json();
                console.error('Registration error:', errorData);
                message.error('Registration failed! Please check details.');
            }
        } catch (error) {
            console.error('Registration error:', error);
            message.error('Registration failed! Please try again later.');
        }
    };

    return (
        
      
        <div className='my-10 '>
            <div className="h-[150vh] items-center flex justify-center px-5 lg:px-0">
                <div className="max-w-screen-xl bg-white border shadow sm:rounded-lg flex justify-center flex-1">
                    <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
                        <div className="flex flex-col items-center">
                            <div className="text-center">
                                <h1 className="text-2xl xl:text-4xl font-extrabold text-blue-900">REGISTER</h1>
                                <p className="text-[12px] text-gray-500">Hey, enter your details to create your account</p>
                            </div>
                            <div className="w-full flex-1 mt-8">
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <div className="mx-auto max-w-xs flex flex-col gap-3">
                                        {/* Username */}
                                        <div>

                                            <div className=' flex items-center gap-3'>
                                                <i className="fa-solid fa-user"></i>
                                                <input
                                                    {...register('name')}
                                                    className="w-full px-5 py-3 rounded-lg bg-gray-100 border placeholder-gray-500 text-sm focus:outline-none"
                                                    type="text"
                                                    placeholder="Enter your name"
                                                />
                                            </div>
                                            {errors.name && <p className="text-red-500 text-xs ml-6">{errors.name.message}</p>}

                                        </div>

                                        {/* Email */}
                                        <div>
                                            <div className=' flex items-center gap-3'>
                                                <i className="fa-solid fa-envelope" />
                                                <input
                                                    {...register('email')}
                                                    className="w-full px-5 py-3 rounded-lg bg-gray-100 border placeholder-gray-500 text-sm focus:outline-none"
                                                    type="email"
                                                    placeholder="Enter your email"
                                                />
                                            </div>
                                            {errors.email && <p className="text-red-500 text-xs ml-6">{errors.email.message}</p>}

                                        </div>

                                        {/* Phone */}
                                        <div>
                                            <div className=' flex items-center gap-3'>
                                                <i className="fa-solid fa-mobile-screen-button"></i>
                                                <input
                                                    {...register('phone')}
                                                    className="w-full px-5 py-3 rounded-lg bg-gray-100 border placeholder-gray-500 text-sm focus:outline-none"
                                                    type="tel"
                                                    placeholder="Enter your phone"
                                                />
                                            </div>

                                            {errors.phone && <p className="text-red-500 text-xs ml-6">{errors.phone.message}</p>}
                                        </div>


                                        {/* Password */}
                                        <div>
                                            <div className=' flex  items-center gap-3'>
                                                <i className="fa-solid fa-lock"></i>
                                                <input
                                                    {...register('password')}
                                                    className="w-full px-5 py-3 rounded-lg bg-gray-100 border placeholder-gray-500 text-sm focus:outline-none"
                                                    type="password"
                                                    placeholder="Your password"
                                                />
                                            </div>
                                            {errors.password && <p className="text-red-500 text-xs ml-6">{errors.password.message}</p>}
                                        </div>


                                        {/* Confirm Password */}
                                        <div>
                                            <div className='flex items-center gap-3'>
                                                <i className="fa-solid fa-key"></i>
                                                <input
                                                    {...register('confirmPassword')}
                                                    className="w-full px-5 py-3 rounded-lg bg-gray-100 border placeholder-gray-500 text-sm focus:outline-none"
                                                    type="password"
                                                    placeholder="Repeat your password"
                                                />
                                            </div>
                                            {errors.confirmPassword && <p className="text-red-500 text-xs ml-6">{errors.confirmPassword.message}</p>}
                                        </div>


                                        {/* Birthday */}
                                        <div>
                                            <div className='flex items-center gap-3'>
                                                <i className="fa-solid fa-cake-candles"></i>
                                                <DatePicker
                                                    onChange={(date, dateString) => setValue('birthday', dayjs(date).format('YYYY-MM-DD'))}
                                                    className="cursor-pointer w-full px-5 py-3 rounded-lg bg-gray-100 border placeholder-gray-500 text-sm focus:outline-none"
                                                    placeholder='YYYY-MM-DD'
                                                />
                                            </div>
                                            {errors.birthday && <p className="text-red-500 text-xs ml-6">{errors.birthday.message}</p>}
                                        </div>


                                        {/* Role */}
                                        <div>
                                            <div className='flex items-center gap-3'>
                                                <i className="fa-solid fa-gear"></i>
                                                <input
                                                    {...register('role')}
                                                    className="w-full px-5 py-3 rounded-lg bg-gray-100 border placeholder-gray-500 text-sm focus:outline-none"
                                                    type="text"
                                                    placeholder="Enter your role"
                                                />
                                            </div>

                                            {errors.role && <p className="text-red-500 text-xs ml-6">{errors.role.message}</p>}
                                        </div>

                                        {/* skill */}
                                        <div>
                                            {/* <div className='flex items-center gap-3'>
                                                <i className="fa-solid fa-pen"></i>                                                <input
                                                    {...register('skill')}
                                                    className="w-full px-5 py-3 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                                                    type="text"
                                                    placeholder="Your skill"
                                                />
                                            </div>
                                            {errors.skill && <p className="text-red-500 text-xs ml-6">{errors.skill.message}</p>} */}
                                        </div>



                                        {/* certification */}

                                        <div>
                                            {/* <div className='flex items-center gap-3'>
                                                <i className="fa-regular fa-note-sticky"></i>                                                <input
                                                    {...register('certification')}
                                                    className="w-full px-5 py-3 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                                                    type="text"
                                                    placeholder="Your certification"
                                                />
                                            </div>
                                            {errors.certification && <p className="text-red-500 text-xs ml-6">{errors.certification.message}</p>} */}
                                        </div>

                                        {/* Gender */}
                                        <div className='flex items-center justify-between gap-3'>
                                            <i className="fa-solid fa-venus-mars text-3xl"></i>
                                            <div className="flex items-center">
                                                <input
                                                    {...register('gender')}
                                                    id="male"
                                                    type="radio"
                                                    value="Male"
                                                    className="w-4 h-4 bg-gray-100 border-gray-300"
                                                />
                                                <label htmlFor="male" className="ms-2 text-sm text-gray-900">Male</label>
                                            </div>
                                            <div className="flex items-center">
                                                <input
                                                    {...register('gender')}
                                                    id="female"
                                                    type="radio"
                                                    value="Female"
                                                    className="w-4 h-4 bg-gray-100 border-gray-300"
                                                />
                                                <label htmlFor="female" className="ms-2 text-sm text-gray-900">Female</label>
                                            </div>
                                            {errors.gender && <p className="text-red-500 text-xs">{errors.gender.message}</p>}
                                        </div>

                                        <button type='submit' className="mt-5 bg-blue-900 text-white w-full py-4 rounded-lg">
                                            Submit
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="flex-1 text-center hidden md:flex">
                        <div
                            className="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat"
                            style={{
                                backgroundImage: `url(https://img.freepik.com/premium-vector/illustration-create-account-flat-design_9206-2974.jpg?w=740)`,
                            }}
                        ></div>
                    </div>
                </div>
            </div>
        </div>
            
    );
};
