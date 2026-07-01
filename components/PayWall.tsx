import React from 'react'
import { Button } from './ui/button'
import { AlertTriangle, Compass, LinkIcon, Mail, Phone, Map, User, HandCoins } from 'lucide-react'
import Link from 'next/link'
import { FaFileContract, FaGift, FaLock } from 'react-icons/fa'
import { WebsiteStatus } from '@/public/Data'
import projects from '../app/projects/page';

const site = [
    {
        info: 'Thindhimba George',
        infoTag: 'Website Owner:',
        infoTagSmall: 'Owner:',
        icon: <User className='w-5 h-5'/>
    },
    {
        info: 'https://www.imperialmedia.com',
        infoTag: 'Website Address:',
        infoTagSmall: 'Site:',
        icon: <LinkIcon className='w-5 h-5'/>
    },
    {
        info: 'Imperial Media Solutions',
        infoTag: 'Company Name:',
        infoTagSmall: 'Company:',
        icon: <Compass className='w-5 h-5'/>
    },
    {
        info: 'Windhoek, Namibia',
        infoTag: 'Company Location:',
        infoTagSmall: 'Location:',
        icon: <Map className='w-5 h-5'/>
    },
]


const PayWall = () => {
    
  return (
    <div className="sticky select-none items-center justify-between w-full top-0 z-100">
        <div className="absolute top-0 left-0 h-full w-full z-100 translate-y-full items-center justify-center">
            {
                WebsiteStatus.map((website, index) => {
                    if (website.state && website.site == 'imperialmedia' ) {
                        return (
                        <div className="flex flex-col items-center justify-between w-full h-dvh md:h-svh backdrop-blur-sm" key={index}>
                            {/* ! TOP Icon & Text */}
                            <div className="flex flex-col pt-10 text-4xl md:text-7xl items-center gap-2 md:gap-4">
                                <FaLock />
                                <h1 className='text-lg md:text-2xl font-black'>
                                    Site is Locked
                                </h1>
                            </div>






                            {/* Center Attraction */}
                            <div className="flex flex-col bg-primary/90 dark:bg-primary/80 px-2 md:px-10 rounded-xl w-[90%] sm:w-[70%] lg:w-[50%] text-sm">
                               <div className="flex flex-col items-center justify-center my-2">
                                <div className="flex md:hidden">
                                    <h1 className="flex text-xs font-bold items-center gap-2">
                                        <AlertTriangle/>
                                        This site has unpaid developer fees!
                                    </h1>
                                </div>
                                <div className="hidden md:flex">
                                    <span className="flex text-xs font-bold items-center gap-2 text-wrap w-[70%] mx-auto">
                                        <h1><AlertTriangle/></h1>
                                        <h1 className='text-center'>
                                            This site you have visited is unavailable due to unpaid developer fees!
                                        </h1>
                                    </span>
                                </div>
                               </div>
                               <div className="flex flex-col items-center justify-center bg-background dark:bg-background/70 w-full md:w-[70%] mx-auto rounded-2xl p-4 text-base font-light">
                                {
                                    site.map((site, index) => {
                                        return (
                                            <div className="text-sm flex gap-2 items-center w-full mb-1" key={index}>
                                                <p className='flex text-xs md:text-sm'>{site.icon}</p>
                                                <span className='flex md:hidden gap-1 text-xs'>
                                                    <p>{site.infoTagSmall}</p>
                                                    <p className='font-bold'>{site.info}</p>
                                                </span>
                                                <span className='hidden md:flex gap-1'>
                                                    <p>{site.infoTag}</p>
                                                    <p className='font-bold'>{site.info}</p>
                                                </span>
                                            </div>
                                        )
                                    })
                                }
                                <span className='flex gap-2 mt-3'>
                                    <p className='md:hidden block'>Fees Due:</p>
                                    <p className='hidden md:block'>Development Fees Due:</p>
                                    <p className='font-bold text-primary underline cursor-pointer hover:text-red-600'>N$2, 785.99</p>
                                </span>
                               </div>
                               <div className="flex flex-col items-center justify-center my-2 text-xs font-bold gap-1">
                                <h1 className='text-background'>Contact the company below:</h1>
                                <div className="flex gap-2">
                                    <a href="mailto:info@imperialmedia.com" className="w-full">
                                        <Button className='bg-background hover:bg-background/50 text-primary font-bold'>
                                            <Mail />
                                            Send Mail
                                        </Button>
                                    </a>
                                    <a href="tel:+264812608378" className="w-full">
                                        <Button className='bg-background hover:bg-background/50 text-primary font-bold'>
                                            <Phone />
                                            Call Office
                                        </Button>
                                    </a>
                                </div>
                                <h1 className='hidden md:flex'>This Wall of Shame will disappear within 24 hours of payment!</h1>
                                <h1 className='flex md:hidden'>Wall of Shame disappears 24Hrs after payment!</h1>
                               </div>
                            </div>






                            {/* Bottom Developer Tag */}
                            <div className="pb-10 max-w-[90%]">
                                <div className="flex flex-col items-center justify-center bg-background dark:bg-foreground/50 shadow-lg shadow-foreground/20 rounded-xl px-2 py-1 border border-foreground text-xs md:text-sm">
                                    <span className='md:flex items-center justify-center font-semibold'>
                                        <p className='text-center'>
                                            &copy; {new Date().getFullYear()}
                                        </p>
                                        <p className='px-4 hidden md:flex'>|</p>
                                        <Link href="/">
                                            <div className="flex">
                                                <p>Imperial</p>
                                                <p className='text-primary'>
                                                    Media
                                                </p>
                                                <p>Solutions</p>
                                            </div>
                                        </Link>
                                        <p className='px-4 hidden md:flex'>|</p>
                                        {/* <p>support@imperialmedia.com</p> */}
                                        {/* <p className='px-4'>|</p> */}
                                        <a href="tel:+" className='text-center hidden md:flex'>
                                            <p>+264 81 260 8378</p>
                                        </a>
                                    </span>
                                </div>
                            </div>
                        </div>)
                    } else {
                        return (<div key={index}>
                    </div>)
                    }
                })
            }
        </div>
    </div>
    //! Changes Here
    // <div className="absolute w-screen bg-primary/50 h-svh backdrop-blur-sm items-center justify-center text-center text-black dark:text-white select-none">
    //     {/* DESKTOP VERSION */}
    //     <div className="flex flex-col gap-0 items-center justify-center h-64 text-xs mx-auto rounded-4xl mt-87.5 -translate-y-37.5 md:px-8 pt-1 px-0">
    //         <div className="flex w-[95%] md:w-[80%] lg:w-[50%] bg-gray-300 dark:bg-gray-800 h-75 text-xs mx-auto rounded-4xl mt-87.5 -translate-y-37.5 md:px-8 pt-1 px-0 flex-col justify-between">

    //             <h1 className='w-[60%] mx-auto flex items-center justify-center gap-4 text-primary dark:text-red-400'>
    //                 <AlertTriangle className='h-12 w-12 animate-pulse'></AlertTriangle>
    //                 <p className='md:flex hidden'>The Site you have visited is not available due to unpaid developer fees.</p>
    //                 <p className='flex md:hidden'>The Site is offline until further notice</p>
    //             </h1>
    //             <div className="flex flex-col my-6 w-[90%] md:w-[70%] mx-auto bg-white dark:bg-gray-500 p-4 rounded-3xl">
    //                 <div className="flex gap-2 font-extralight">
    //                     <User className='h-4 w-4'></User>
    //                     <p className='md:flex hidden'>Website Owner:</p>
    //                     <p className='flex md:hidden'>Owner:</p>
    //                     <p className='font-bold'>Title Name Surname</p>
    //                 </div>
    //                 <div className="flex gap-2 font-extralight">
    //                     <LinkIcon className='h-4 w-4'></LinkIcon>
    //                     <p className='md:flex hidden'>Website Address:</p>
    //                     <p className='flex md:hidden'>Website:</p>
    //                     <a className='font-bold hover:text-primary hover:underline' href=''>https://www.site-address.com</a>
    //                 </div>
    //                 <div className="flex gap-2 font-extralight">
    //                     <Compass className='h-4 w-4'></Compass>
    //                     <p className='md:flex hidden'>Company Name:</p>
    //                     <p className='flex md:hidden'>Company:</p>
    //                     <p className='font-bold'>Don&apos;t Judge Enterprises Inc.</p>
    //                 </div>
    //                 <div className="flex gap-2 font-extralight">
    //                     <Map className='h-4 w-4'></Map>
    //                     <p className='md:flex hidden'>Company location:</p>
    //                     <p className='flex md:hidden'>Based in:</p>
    //                     <p className='font-bold'>Windhoek, Namibia</p>
    //                 </div>
    //                 <div className="flex gap-2 font-extralight justify-center pt-4 ">
    //                     Development Fees Due:
    //                     <p className='font-bold underline text-primary dark:text-red-600'>N$2, 785.99</p>
    //                 </div>
    //             </div>
    //             <div className="flex flex-col pb-6">
    //                 Contact the company below:
    //                 {    
    //                     <div className='flex gap-4 items-center justify-center'>
    //                         <a href="tel:+264812608378">
    //                             <Button>
    //                                 Call
    //                                 <div className="w-1 bg-amber-600"></div>
    //                                 <Phone/>
    //                             </Button>
    //                         </a>
    //                         <a href="mailto:support@imperialmedia.com">
    //                             <Button>
    //                                 E-mail
    //                                 <div className="w-1 bg-amber-600"></div>
    //                                 <Mail/>
    //                             </Button>
    //                         </a>
    //                     </div>
    //                 }
    //                 <p className='hidden md:block font-bold'>
    //                     This WALL OF SHAME will disappear within 24 hours of payment!
    //                 </p>
    //             </div>
    //         </div>
    //         <div className="text-xs py-2 px-2 md:px-4  md:bg-primary text-background shadow-2xl w-max mx-auto rounded-2xl">
    //             {/* <p>This site was built by:</p> */}
    //             <span className='md:flex items-center justify-center font-semibold'>
    //                 <p className=''>&copy; {new Date().getFullYear()}</p>
    //                 <p className='px-4 hidden md:flex'>|</p>
    //                 <Link href="/">
    //                     <div className="flex">
    //                         <p>Imperial</p>
    //                         <p className='text-foreground'>Media</p>
    //                         <p>Solutions</p>
    //                     </div>
    //                 </Link>
    //                 <p className='px-4 hidden md:flex'>|</p>
    //                 {/* <p>support@imperialmedia.com</p> */}
    //                 {/* <p className='px-4'>|</p> */}
    //                 <a href="tel:+">
    //                     <p>+264 81 260 8378</p>
    //                 </a>
    //             </span>
    //         </div>
    //     </div>
    //     {/* MOBILE VERSION */}
    //     {/* <div className="md:hidden flex w-[90%] bg-gray-800 text-xs mx-auto rounded-2xl flex-col justify-between">
    //         <div className="px-4 pt-3 flex">
    //             <AlertTriangle className='text-destructive'></AlertTriangle>
    //             <h1>The Site you have visited is not available due to unpaid developer fees. </h1>
    //         </div>
    //         <div className="flex flex-col my-6 w-[90%] mx-auto bg-gray-700 p-4 rounded-3xl">
    //             <div className="flex gap-2 font-extrabold">
    //                 <p className='font-extralight'>Owner:</p>
    //                 Title Name Surname
    //             </div>
    //             <div className="flex gap-2 font-bold">
    //                 <p className='font-extralight'>Website:</p>
    //                 https://www.site-address.com
    //             </div>
    //             <div className="flex gap-2 font-bold">
    //                 <p className='font-extralight'>Company:</p>
    //                 Don&apos;t Judge Enterprises
    //             </div>
    //             <div className="flex gap-2 font-bold">
    //                 <p className='font-extralight'>Location:</p>
    //                 Windhoek, Namibia
    //             </div>
    //             <div className="flex gap-2 font-bold justify-center pt-4">
    //                 <p className='font-extralight no-underline'>Development Fees Due:</p>
    //                 N$2, 785.99
    //             </div>
    //         </div>
    //         <div className="flex flex-col pb-6">
    //             Contact the company below:
    //             {    
    //                 <div>
    //                     <a href="tel:+">
    //                         <Button>
    //                             Call
    //                             <div className="w-1 bg-amber-600"></div>
    //                             <Phone/>
    //                         </Button>
    //                     </a>
    //                     <a href="mailto:">
    //                         <Button>
    //                             E-mail
    //                             <div className="w-1 bg-amber-600"></div>
    //                             <Mail/>
    //                         </Button>
    //                     </a>
    //                 </div>
    //             }
    //             <p>Thank you!</p>
    //         </div>
    //         <div className="text-xs py-2 px-2 md:px-4  md:bg-white text-red-600 shadow-2xl w-max mx-auto rounded-2xl">
    //             <span className='md:flex items-center justify-center font-semibold'>
    //                 <p className=''>&copy; {new Date().getFullYear()}</p>
    //                 <p className='px-4 hidden md:flex'>|</p>
    //                 <div className="flex">
    //                     <p>Imperial</p>
    //                     <p className='text-black'>Media</p>
    //                     <p>Solutions</p>
    //                 </div>
    //                 <p className='px-4 hidden md:flex'>|</p>
    //                 <p>+264 81 260 8378</p>
    //             </span>
    //         </div>
    //     </div> */}
      
    // </div>
  )
}

export default PayWall