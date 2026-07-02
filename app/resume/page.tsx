import Footer from '@/components/Footer'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle 
} from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { Education, References } from '@/public/Data'
import { ArrowLeft, Dot, Download, Mail, Phone, Star} from 'lucide-react'
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { BiHardHat } from 'react-icons/bi'
import { MdOutlineWorkHistory } from 'react-icons/md';
import { PiGraduationCapBold } from 'react-icons/pi'

export const metadata: Metadata = {
  title: 'Resume'
}

const resume = () => {
  return (
    <div className='flex flex-col'>
      <div className="sticky md:items-center justify-between w-full top-0 z-10">
        <div className="flex items-center justify-between bg-background shadow-md shadow-background p-2">
          <Link href='/'>
            <Button className='text-background dark:text-foreground'>
              {/* <FaHome /> */}
              <ArrowLeft />
              <p className='hidden sm:block font-extralight'>|</p>
              <p className='hidden sm:block font-light'>Back</p>
            </Button>
          </Link>

          <h1 className='font-bold text-2xl md:text-3xl text-primary '>
            Resume / CV
          </h1>
          
          <Link href='/docs/myCV.pdf' download>
            <Button className='text-background dark:text-foreground'>
              <Download />
              <p className='hidden sm:block font-extralight'>|</p>
              <p className='hidden sm:block font-light'>PDF</p>
            </Button>
          </Link>
        </div>
      </div>
        <div className="flex flex-col items-center justify-center w-full px-4">
            <div className="flex flex-col items-center justify-center">
              <h4>AKA Portfolio, CV or Bio</h4>
            </div>
            <div className="flex flex-col bg-background p-4 mx-4 mt-4 w-full items-center justify-center rounded-2xl gap-6 border-4 border-primary">
              <div className="flex bg-primary p-4 rounded-2xl text-white">
                <div className="text-center w-full">
                  <span className='text-2xl md:text-4xl text-white font-bold flex gap-2 justify-center'>
                    <p>George</p>
                    <em className='hidden md:block font-light ml-2 mr-3' >
                      &lsquo;SkryblaK&rsquo;
                    </em>
                    <p>Thindhimba</p>
                  </span>
                  <p className='text-xs md:text-sm lg:text-2xl lg:font-light text-white max-md:italic'>
                    Videographer | Web Developer | Graphic Designer | Network Specialist | Mechanical Engineer | CEO
                  </p>
                  <p className='text-sm mt-8 md:px-8 font-thin'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam, ex, consequatur fuga, possimus quas animi nostrum quaerat atque consequuntur tenetur saepe sit. Suscipit consequuntur ut accusantium modi quia quo voluptatibus minus porro a, fugit libero error dicta deleniti esse aperiam nam nemo adipisci voluptate neque assumenda aut maxime nostrum reprehenderit! Eos cupiditate velit ullam porro. Totam voluptatum iusto quidem non aliquam commodi, atque rem, a ipsum numquam aspernatur magnam ex, doloremque nemo quam quos distinctio eaque rerum placeat vel ad? </p>
                </div>
                <Image 
                src='me/black-hand-square.jpg'
                height={300}
                width={300}
                alt='An Image'
                unoptimized
                className='hidden lg:flex max-lg: aspect-square rounded-full shadow-[0_0_10px] shadow-background'
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
                <div className="">
                  <h1 className='flex text-xl justify-center gap-2 md:text-3xl items-center font-semibold my-2'>
                    Educational Background <PiGraduationCapBold />
                  </h1>
                  {
                    Education.map((school, index) => {
                      return <div className="bg-primary py-2 px-1 rounded-2xl text-background mb-2" key={index}>
                        <span className="flex flex-col md:flex-row justify-between">
                          <h3 className="text-lg md:text-2xl font-semibold flex items-center gap-2">
                            {school.name}
                          </h3>
                          <div className="text-xs bg-background text-primary p-0.5 rounded-lg">
                            <p className="hidden md:block text-center">
                              {school.type}
                            </p>
                            <span className="flex font-bold justify-center items-center">
                              <p>{school.certificate}</p>
                              <Dot />
                              <p>{school.period}</p>
                            </span>
                          </div>
                        </span>
                        <p className="flex items-center justify-center gap-2 text-center font-bold">
                          {school.course}
                        </p>
                        <p className="flex items-center text-sm justify-center gap-2 text-center font-light italic">
                          {school.note}
                        </p>
                        <p className="flex items-center justify-center gap-2 text-center font-bold underline">
                          {school.title}
                        </p>
                        <span className="text-center text-sm font-light">
                          <p>
                            {school.content}
                          </p>
                        </span>
                      </div>
                    })
                  }
                </div>
                <div className="">
                  <h1 className='flex text-xl justify-center gap-2 md:text-3xl items-center font-semibold my-2'>
                    Work History <MdOutlineWorkHistory />
                  </h1>
                  {
                    
                  }
                </div>
                <div className="">
                  <h1 className='text-3xl ml-8 font-semibold flex gap-2 items-center'>
                    Skills <BiHardHat />
                  </h1>
                  <div className="flex flex-col gap-4">
                    <div className="w-2/3">
                      <h3 className='font-bold text-lg'>Computing</h3>
                      <h3 className='font-bold text-lg'>Design</h3>
                      <h3 className='font-bold text-lg'>Web Development</h3>
                    </div>
                    <div className="flex flex-col gap-1 w-full max-w-100 select-none">
                      <h3 className='font-bold text-lg text-center '>Linguistic Skills</h3>
                      <span className='flex justify-between text-sm'>
                        <p>English</p>
                        <div className="flex text-primary">
                          <Star className='fill-primary'/>
                          <Star className='fill-primary'/>
                          <Star className='fill-primary'/>
                          <Star className='fill-primary'/>
                          <Star className=''/>
                        </div>
                      </span>
                      <span className='flex justify-between text-sm'>
                        <p>Afrikaans</p>
                        <div className="flex text-primary">
                          <Star className='fill-primary'/>
                          <Star className='fill-primary'/>
                          <Star className='fill-primary'/>
                          <Star className=''/>
                          <Star className=''/>
                        </div>
                      </span>
                      <span className='flex justify-between text-sm'>
                        <p>German</p>
                        <div className="flex text-primary">
                          <Star className='fill-primary'/>
                          <Star className=''/>
                          <Star className=''/>
                          <Star className=''/>
                          <Star className=''/>
                        </div>
                      </span>
                      <span className='flex justify-between text-sm'>
                        <p>Wambo</p>
                        <div className="flex text-primary">
                          <Star className='fill-primary'/>
                          <Star className='fill-primary'/>
                          <Star className='fill-primary'/>
                          <Star className=''/>
                          <Star className=''/>
                        </div>
                      </span>
                      <span className='flex justify-between text-sm'>
                        <p>Mandarin</p>
                        <div className="flex text-primary">
                          <Star className='fill-primary'/>
                          <Star className=''/>
                          <Star className=''/>
                          <Star className=''/>
                          <Star className=''/>
                        </div>
                      </span>
                      <span className='flex justify-between text-sm'>
                        <p>Mbukushu</p>
                        <div className="flex text-primary">
                          <Star className='fill-primary'/>
                          <Star className='fill-primary'/>
                          <Star className=''/>
                          <Star className=''/>
                          <Star className=''/>
                        </div>
                      </span>
                      <p className='text-xs text-primary w-max mx-auto'>
                        *If not listed, it&apos;s unknown
                      </p>
                    </div>
                  </div>                  
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4 w-full items-center justify-center">
              <h1 className='flex text-xl justify-center gap-2 md:text-3xl items-center font-semibold border-x-4 border-b-4 p-2 border-primary rounded-b-2xl bg-primary'>
                References <PiGraduationCapBold />
              </h1>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full md:w-[90%] py-4">
                {
                  References.map((reference, index) => {
                    return <Card key={index} className='w-full md:w-[90%] mx-auto not-dark:border-2 border-primary'>
                      <CardHeader>
                        <CardTitle className='flex items-center gap-4 text-xl justify-center'>
                          {reference.icon}
                          {reference.name}
                        </CardTitle>
                      </CardHeader>
                      <Separator />
                      <CardContent className='text-center'>
                        <div className="flex flex-col lg:hidden">
                          <h2 className='font-bold'>{reference.title}</h2>
                          <h3>@ {reference.organization}</h3>
                        </div>
                        <div className='hidden lg:flex flex-col lg:flex-row gap-1 justify-center'>
                          <p className='font-bold w-max text-center'>{reference.title}</p>
                          <span className='flex gap-1'>
                            <p>@</p>
                            <p>{reference.organization}</p>
                          </span>
                        </div>
                        <CardDescription>
                          <p>
                            {reference.number}
                          </p>
                          <p className='italic'>
                            {reference.email}
                          </p>
                        </CardDescription>
                      </CardContent>
                      <CardFooter className='grid grid-cols-2 gap-2'>
                        <a href={`tel:${reference.callNumber}`} className='w-full mx-auto'>
                          <Button className='w-full flex gap-2 items-center'>
                            <Phone/>
                            Call
                          </Button>
                        </a>
                        <a href={`mailto:${reference.email}`} className='w-full mx-auto'>
                          <Button className='w-full flex gap-2 items-center'>
                            <Mail />
                            Email
                          </Button>
                        </a>
                      </CardFooter>
                    </Card>
                  })
                }
              </div>
            </div>
        </div>
        <div className="flex flex-col py-4 items-center justify-center not-dark:border-t border-primary">
          <p>Download the Resume in PDF format below:</p>
          <Link href='/docs/myCV.pdf' download>
            <Button className='text-background dark:text-foreground shadow-md shadow-background'>
              <Download />
              <p className='hidden sm:block font-extralight'>|</p>
              <p className='hidden sm:block font-light'>Download PDF</p>
            </Button>
          </Link>
        </div>
        <Footer />
    </div>
  )
}

export default resume