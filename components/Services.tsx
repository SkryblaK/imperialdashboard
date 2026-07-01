import React from 'react'
import Image from 'next/image'
import { ServiceList } from '@/public/Data'

const Services = () => {
  return (
    <section>
        <div className="-translate-y-20 mt-0 pt-0 flex flex-col items-center justify-center text-center">
            <h1 className="uppercase text-3xl md:text-5xl font-bold text-primary">
                Our Services
            </h1>
            <h4 className='text-sm md:text-base'>Abracadabra m*****f*****rs!</h4>
        </div>
        {/* <div className="grid  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 px-2 items-center">
            <div className="flex flex-col p-2 bg-secondary rounded-3xl">
                <div className="flex w-full h-40">
                    <Image src="/services/photo&video/family-photoshoot.jpg" alt='Family Photo' className='w-max rounded-3xl aspect-video' width={10} height={10} />
                    <div className="absolute text-center" >
                        <span className='flex bg-background p-2 items-center text-primary gap-1'>
                            
                            <p className='text-foreground'>|</p>
                            <p className='font-bold text-xl'>Photography</p>
                        </span>
                    </div>
                </div>
                <div className="hidden md:flex flex-col items-center text-center">
                    <span className='flex items-center text-primary gap-1'>
                        <BiCamera className='h-5 w-5'/>
                        <p className='text-foreground'>|</p>
                        <p className='font-bold text-xl'>Photography</p>
                    </span>
                    <span className='font-light text-xs text-foreground'>
                        <p className='inline hover:text-primary cursor-pointer ml-1'>Wedding Photography</p>,
                        <p className='inline hover:text-primary cursor-pointer ml-1'>Portraits</p>,
                        <p className='inline hover:text-primary cursor-pointer ml-1'>Product Shoots</p>,
                        <p className='inline hover:text-primary cursor-pointer ml-1'>Studio Photography</p>,
                        <p className='inline hover:text-primary cursor-pointer ml-1'>Event Photography</p>,
                        <p className='inline hover:text-primary cursor-pointer ml-1'>Wildlife/Landscape</p>,
                        <p className='inline hover:text-primary cursor-pointer ml-1'>Creative Photography</p>,
                        <p className='inline hover:text-primary cursor-pointer ml-1'>Fashion & Marketing</p>,
                        <p className='hover:text-primary cursor-pointer ml-1'>and more...</p>
                    </span>
                </div>
            </div>
            <div className="flex flex-col p-2 bg-secondary rounded-3xl">
                <div className="flex w-full h-40">
                    <Image src="/services/photo&video/family-photoshoot.jpg" alt='Family Photo' className='w-max rounded-3xl aspect-video' width={10} height={10} />
                </div>
                <div className="hidden md:flex flex-col items-center text-center">
                    <h1 className='flex items-center text-primary gap-1'>
                        <FaDrawPolygon className='h-5 w-5'/>
                        <p className='text-foreground'>|</p>
                        <p className='font-bold text-xl'>Design</p>
                    </h1>
                    <span className='font-light text-xs text-foreground'>
                        <p className='inline hover:text-primary cursor-pointer ml-1'>Posters</p>,
                        <p className='inline hover:text-primary cursor-pointer ml-1'>Company Branding</p>,
                        <p className='inline hover:text-primary cursor-pointer ml-1'>Business Cards</p>,
                        <p className='inline hover:text-primary cursor-pointer ml-1'>Logos</p>,
                        <p className='inline hover:text-primary cursor-pointer ml-1'>Banners</p>,
                        <p className='inline hover:text-primary cursor-pointer ml-1'>Wedding Prints</p>,
                        <p className='inline hover:text-primary cursor-pointer ml-1'>Social Posts</p>,
                        <p className='inline hover:text-primary cursor-pointer ml-1'>Brochures</p>,
                        <p className='inline hover:text-primary cursor-pointer ml-1'>Cards</p>,
                        <p className='inline hover:text-primary cursor-pointer ml-1'>Item 1</p>,
                        <p className='inline hover:text-primary cursor-pointer ml-1'>Item 2</p>,
                        <p className='hover:text-primary cursor-pointer ml-1'>and more...</p>
                    </span>
                </div>
            </div>
            <div className="flex flex-col p-2 bg-secondary rounded-3xl">
                <div className="flex w-full h-40">
                    <Image src="/services/photo&video/family-photoshoot.jpg" alt='Family Photo' className='w-max rounded-3xl aspect-video' width={10} height={10} />
                </div>
                <div className="hidden md:flex flex-col items-center text-center">
                    <h1 className='flex items-center text-primary gap-1'>
                        <BsYoutube className='h-5 w-5'/>
                        <p className='text-foreground'>|</p>
                        <p className='font-bold text-xl'>Livestreaming</p>
                    </h1>
                    <span className='font-light text-xs text-foreground'>
                        <p className='inline hover:text-primary cursor-pointer ml-1'>Podcasts</p>,
                        <p className='inline hover:text-primary cursor-pointer ml-1'>Conferences</p>,
                        <p className='inline hover:text-primary cursor-pointer ml-1'>Press Conferences</p>,
                        <p className='inline hover:text-primary cursor-pointer ml-1'>Multistreaming</p>,
                        <p className='inline hover:text-primary cursor-pointer ml-1'>Church Sermons</p>,
                        <p className='inline hover:text-primary cursor-pointer ml-1'>Crusades</p>,
                        <p className='inline hover:text-primary cursor-pointer ml-1'>Outdoor Events</p>,
                        <p className='inline hover:text-primary cursor-pointer ml-1'>Brochures</p>,
                        <p className='inline hover:text-primary cursor-pointer ml-1'>Cards</p>,
                        <p className='hover:text-primary cursor-pointer ml-1'>and more...</p>
                    </span>
                </div>
            </div>
            <div className="flex flex-col p-2 bg-secondary rounded-3xl">
                <div className="flex w-full h-40">
                    <Image src="/services/photo&video/family-photoshoot.jpg" alt='Family Photo' className='w-max rounded-3xl aspect-video' width={10} height={10} />
                </div>
                <div className="hidden md:flex flex-col items-center text-center">
                    <h1 className='flex items-center text-primary gap-1'>
                        <GiTeacher className='h-5 w-5'/>
                        <p className='text-foreground'>|</p>
                        <p className='font-bold text-xl'>Training & Consultation</p>
                    </h1>
                    <span className='font-light text-xs text-foreground'>
                        <p className='inline hover:text-primary cursor-pointer ml-1'>Posters</p>,
                        <p className='inline hover:text-primary cursor-pointer ml-1'>Company Branding</p>,
                        <p className='inline hover:text-primary cursor-pointer ml-1'>Business Cards</p>,
                        <p className='inline hover:text-primary cursor-pointer ml-1'>Logos</p>,
                        <p className='inline hover:text-primary cursor-pointer ml-1'>Banners</p>,
                        <p className='inline hover:text-primary cursor-pointer ml-1'>Wedding Prints</p>,
                        <p className='inline hover:text-primary cursor-pointer ml-1'>Social Posts</p>,
                        <p className='inline hover:text-primary cursor-pointer ml-1'>Brochures</p>,
                        <p className='inline hover:text-primary cursor-pointer ml-1'>Cards</p>,
                        <p className='hover:text-primary cursor-pointer ml-1'>and more...</p>
                    </span>
                </div>
            </div>
            <div className="flex flex-col p-2 bg-secondary rounded-3xl">
                <div className="flex w-full h-40">
                    <Image src="/services/photo&video/family-photoshoot.jpg" alt='Family Photo' className='w-max rounded-3xl aspect-video' width={10} height={10} />
                </div>
                <div className="hidden md:flex flex-col items-center text-center">
                    <h1 className='flex items-center text-primary gap-1'>
                        <FcVideoProjector className='h-5 w-5'/>
                        <p className='text-foreground'>|</p>
                        <p className='font-bold text-xl'>Videography</p>
                    </h1>
                    <span className='font-light text-xs text-foreground'>
                        <p className='inline hover:text-primary cursor-pointer ml-1'>Posters</p>,
                        <p className='inline hover:text-primary cursor-pointer ml-1'>Company Branding</p>,
                        <p className='inline hover:text-primary cursor-pointer ml-1'>Business Cards</p>,
                        <p className='inline hover:text-primary cursor-pointer ml-1'>Logos</p>,
                        <p className='inline hover:text-primary cursor-pointer ml-1'>Banners</p>,
                        <p className='inline hover:text-primary cursor-pointer ml-1'>Wedding Prints</p>,
                        <p className='inline hover:text-primary cursor-pointer ml-1'>Social Posts</p>,
                        <p className='inline hover:text-primary cursor-pointer ml-1'>Brochures</p>,
                        <p className='inline hover:text-primary cursor-pointer ml-1'>Cards</p>,
                        <p className='hover:text-primary cursor-pointer ml-1'>and more...</p>
                    </span>
                </div>
            </div>
            
        </div> */}
        <div className="grid  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 px-2 items-center">
            {
                ServiceList.map((service, index) => {

                    return <div className="flex gap-1 flex-col p-2 bg-primary rounded-2xl" key={index}>
                        <div className="flex flex-col w-full">
                            <Image 
                            src={service.image} 
                            alt={service.name} 
                            height={300} 
                            width={300} 
                            className='w-full rounded-t-2xl blur-xs hover:blur-none hover:cursor-pointer' />
                            <div className="flex w-full bg-background rounded-b-2xl">
                                <span className='flex w-full p-2 items-center text-primary gap-1 justify-center'>
                                    {service.iconHome}
                                    <p className='text-foreground'>|</p>
                                    <p className='font-bold text-xl'>{service.name}</p>
                                </span>
                            </div>
                        </div>
                        <div className="flex items-center text-background text-center">
                            {service.list}
                        </div>
                    </div>
                })
            }
        </div>
    </section>
  )
}

export default Services