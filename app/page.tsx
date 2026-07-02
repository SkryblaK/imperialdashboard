import Footer from "@/components/Footer";
import Header from "@/components/Header"
// import Image from "next/image"
// import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { TbCashHeart } from "react-icons/tb";
import { BiDownvote } from "react-icons/bi";
import { MdWorkHistory } from "react-icons/md";
import Services from "@/components/Services";
import Skills from "@/components/Skills";
import { FaHeart } from "react-icons/fa";

export default function Page() {
  return (
    <div className="flex bg-background flex-col min-h-svh ">
      <Header/>
      <div className="bg-secondary/40">
        <div className="flex flex-col mx-auto h-[80%]">
          <div className="flex flex-col md:flex-row w-[95%] mx-auto">
            <div className="flex w-full md:w-2/3 items-center h-dvh">
              <div className="flex flex-col text-center items-center">
                <h1 className="text-3xl md:text-7xl text-shadow-2xl font-black text-primary pb-2 md:pb-4 text-">Design without limits</h1>
                <h3 className="text-md md:text-3xl">Helping you <span className="text-primary">Inspire & convert</span>, daily!</h3>
                <p className="font-extralight">Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi suscipit eius corporis natus omnis iste iusto molestiae repudiandae earum expedita! Aliquid quia incidunt excepturi a itaque possimus dolore mollitia quasi.</p>
                <span className="flex md: gap-2 text-primary font-bold">
                  <p className="hidden md:flex">
                  Dream Into Reality
                  </p>
                  <p className="hidden md:flex">|</p>
                  <p className="">
                  Grow Faster, <span className="text-foreground">Smarter</span>,  Everyday
                  </p>
                  <p className="hidden md:flex">|</p>
                  <p className="hidden md:flex">
                  Market Your Best Side
                  </p>
                </span>
              </div>
            </div>
            <div className="hidden md:flex flex-col md:w-1/3 items-center justify-center select-none">
                {/* <Image src='/logo-light.png' height={400} width={400} alt="Main Attraction" /> */}
                {/* <Image src='/test/logos/westpac-group.svg' height={400} width={400} alt="Something"/> */}
                <Image src='/logos/' height={400} width={400} alt="Something" className="" loading="eager"/>
                
            </div>
          </div>
          <div className="flex flex-col items-center justify-center">
            {/* Call to action */}
            <div className="hidden md:flex justify-center gap-6 -translate-y-40 my-6">
              <Link href="/quote" >
                <Button>
                  <TbCashHeart/>
                  <p>|</p>
                  <p>Get a Free Quote!</p>
                </Button>
              </Link>
              <a href="#two" className="animate-bounce transition" >
                <Button>
                  <BiDownvote/>
                  <p>Keep Scrolling</p>
                  <BiDownvote/>
                </Button>
              </a>
              <Link href="/projects" className="block">
                <Button>
                <MdWorkHistory/>
                  <p>|</p>
                  <p>See Our Past Work</p>
                </Button>
              </Link>
            </div>
            {/* Call to action */}
            <div className="flex md:hidden flex-col items-center justify-center gap-6 md:-translate-y-30 lg:-translate-y-50 -translate-y-50 my-6">
              <div className="flex gap-4 items-center justify-center">
                <Link href="/quote" >
                  <Button>
                    <TbCashHeart/>
                    <p>|</p>
                    <p>Free Quote!</p>
                  </Button>
                </Link>
                <Link href="/projects" className="block">
                  <Button>
                  <MdWorkHistory/>
                    <p>|</p>
                    <p>Past Work</p>
                  </Button>
                </Link>
              </div>
              <a href="#services" className="animate-bounce duration-300" >
                <Button>
                  <BiDownvote/>
                  <p>Keep Scrolling</p>
                  <BiDownvote/>
                </Button>
              </a>
            </div>
            <div className="flex -translate-y-44 items-center font-light">
              <h1>Namibia&apos;s <span className="text-primary font-medium">Number 1</span> media center</h1>
              <FaHeart className="fill-primary ml-1 h-4 w-4"/>
            </div>
          </div>
        </div>
        <section id="services" className="w-[90%] mx-auto">
          <Services />
        </section>
        <section id="skills" className="w-full mt-4">
            <Skills />
        </section>d
      </div>

      <Footer/>
    </div>
  )
}
