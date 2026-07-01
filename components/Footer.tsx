import React from 'react'
import { Anchor, Camera, Edit } from 'lucide-react'
import { FaFacebook, FaInstagram, FaMap } from 'react-icons/fa'
import { FaLocationDot } from 'react-icons/fa6'
import { PiNavigationArrowFill, PiPhoneFill } from 'react-icons/pi'
import { MdEmail } from 'react-icons/md'
import { BsTwitter } from 'react-icons/bs'

import Link from 'next/link'
import { Button } from './ui/button'
import { CompanyAddress, Links } from '@/public/Data'

const Footer = () => {
  return (
        <footer className='text-xs md:py-1 mt-2 border-t border-primary'>
            <div className="flex justify-center">
                <div className="flex flex-col w-full lg:w-1/3 p-4 pb-1">
                    <div className="flex flex-col text-xs items-center space-x-2">
                        <span className="flex text-xs font-bold text-gray-800">
                            <Camera className='text-red-600'/>
                            <Edit className='text-red-600'/>
                            <Anchor className='text-red-600'/>
                        </span>
                        <span className="flex font-bold text-2xl text-white not-dark:text-gray-800">
                            <p className=''>Imperial</p>
                            <p className='font-bold text-2xl text-red-600'>Media</p>
                            <p className=''>Solutions</p>
                        </span>
                        <span className='uppercase text-white/40 text-xs not-dark:text-gray-500'>
                            Your one stop media center
                        </span>
                    </div>
                    <span className='flex flex-col text-xs/tight text-center pt-4'>
                        <span className='flex justify-evenly'>
                            <a className='p-1 text-white bg-red-700 rounded-md' href='/privacy'>
                                Privacy Policy
                            </a>
                            <a className='p-1 text-white bg-red-700 rounded-md' href='/terms'>
                                Terms of Service
                            </a>
                        </span>
                        <p className='flex md:hidden text-red-400 justify-center pt-4 items-center'>
                            <PiPhoneFill className='mx-1'/> +264 81 260 8378 | <MdEmail className='mx-1'/>info@imperialmedia.com
                        </p>
                    </span>
                </div>
                <div className="hidden lg:flex flex-col bg-primary text-secondary w-1/3 p-4 pb-2 justify-between rounded-lg mt-2 dark:text-primary dark:bg-primary-foreground">
                    <div className="flex flex-col items-center justify-center">
                        <h1 className='text-md mb-2'>What do you want to view next?</h1>
                        <div className="flex justify-evenly gap-2">
                            {
                                Links.map((nav, index) => {
                                    if (nav.active || nav.login) {
                                        return <div key={index}>
                                                <Link href={nav.link}>
                                                    <Button className='bg-secondary dark:bg-primary not-dark:text-primary hover:bg-transparent dark:hover:bg-white hover:text-background dark:hover:text-primary ring-1 dark:hover:ring-primary'>
                                                        {nav.name}
                                                    </Button>
                                                </Link>
                                            </div>
                                    }
                                })
                            }
                        </div>
                    </div>
                    <div className="">
                        {
                            CompanyAddress.map((address, index) => {
                                return <span className='flex flex-col' key={index}>
                                    <hr className='w-[60%] mx-auto my-1 border-secondary dark:border-primary'/>
                                    <p className='flex items-center justify-center gap-1'>
                                        {address.locationIcon}{address.locationAddress}
                                    </p>
                                    <div className="flex items-center justify-between">
                                        <p className='flex items-center gap-1'>
                                        {address.postalIcon}{address.postalAddress}
                                        </p>
                                        <p className='flex items-center gap-1'>
                                        {address.townIcon}{address.townAddress}
                                        </p>
                                    </div>
                                </span>
                            })
                        }
                    </div>
                </div>
                <div className="hidden lg:flex flex-col w-1/3 p-4 pb-1 gap-2 items-center">
                    <h1 className='text-2xl font-bold flex items-center'>
                        Get In Touch
                    </h1>
                    <div className="flex flex-col text-base gap-1">
                        <p className='flex gap-2 items-center justify-center text-gray-700'>
                            <MdEmail/> info@imperialmedia.com
                        </p>
                        <p className='flex gap-2 items-center justify-center text-gray-700'>
                            <PiPhoneFill/> +264 81 260 8378
                        </p> 
                        <div className='flex gap-2 items-center justify-center'>
                            <div className="flex gap-4">
                                <a href="#">
                                    <FaFacebook className='fill-blue-500'/>
                                </a>
                                <a href="#">
                                    <FaInstagram className='fill-pink-500'/>
                                </a>
                                <a href="#">
                                    <BsTwitter className='fill-blue-700'/>
                                </a>
                            </div>
                            <p>|</p>
                            <p className='font-bold text-red-700' title='On all socials media platforms!'>
                                imperialmediasolutions
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col text-center mt-2 md:mt-3 mb-2">
                <div className='flex gap-2 items-center justify-center'>
                    <p>&copy;{new Date().getFullYear()}</p>
                    <p>|</p>
                    <span className='flex'>
                        <p>Imperial</p>
                        <p className='text-primary'>Media</p>
                        <p>Solutions</p>
                    </span>
                </div>
            </div>
        </footer>
  )
}

export default Footer