'use client'
import { Anchor, Camera, Edit, Menu, Moon, Sun } from 'lucide-react'
import { Links } from './../public/Data'
import Link from 'next/link'
import { Button } from './ui/button'
import { BsMoonFill, BsSunFill } from 'react-icons/bs'
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from './ui/collapsible'
import { useTheme } from 'next-themes'


const Header = () => {
  const { setTheme } = useTheme()

  return (
    <header className="absolute top-0 left-0 w-full z-10 p-4">
      {/* Web Navigation header */}
      <nav className="max-w-5xl mx-auto flex justify-between items-center dark:bg-black/55 bg-white/55 backdrop-blur-md px-4 py-2 rounded-lg shadow-lg dark:shadow-white/10 select-none">
        <div className="w-max mx-auto md:mx-0 flex flex-col text-xs items-center space-x-2">
          <Link href="/" className="flex flex-col text-xs items-center space-x-2">
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
          <span className='uppercase text-white/40 text-xs not-dark:text-gray-500'>Your one stop media center</span>
          </Link>
        </div>
        <div className="hidden md:flex flex-col">
          <div className="flex space-x-4 items-center justify-center text-sm">
            {
              Links.map((nav, index) => {
                if (nav.active) return <Link href={nav.link} key={index}
                className=''>
                  <Button className="bg-primary hover:bg-primary/90 dark:hover:bg-primary dark:text-white hover:text-black">
                    {nav.icon}
                    <div className="flex gap-2">
                    <div className="hidden lg:flex my-auto font-extralight">|</div>
                    {nav.name}
                    </div>
                  </Button>
                </Link>
              })
            }
            <div className="my-auto text-primary">|</div>
            {
              Links.map((dashboard, index) => {
                if (dashboard.login) return <Link href={dashboard.link} key={index}
                className=''>
                  <Button className="bg-primary hover:bg-primary/90 dark:hover:bg-primary dark:text-white dark:hover:text-black">
                    {dashboard.icon}
                    <div className="hidden lg:flex gap-2">
                      <div className="flex my-auto font-extralight">|</div>
                      {dashboard.name}
                    </div>
                  </Button>
                </Link>
              })
            }
          </div>
          {/* <div className="not-dark:absolute dark:hidden bottom-0 right-0 z-10 p-2 font-mono text-xs text-muted-foreground flex items-center">
          (Press <kbd className='px-1'>d</kbd> to toggle dark mode) | <BsMoonFill className='fill-purple-400 mx-2'/>
          </div> */}
          <div className="absolute bottom-0 right-0 z-10 p-2 font-mono text-xs text-muted-foreground flex items-center">
            <p className='not-dark:hidden'>(Press <kbd className='px-1'>d</kbd> to toggle light mode)</p>
            <p className='dark:hidden'>(Press <kbd className='px-1'>d</kbd> to toggle dark mode)</p>
            <p className='mx-2'>|</p>
            {/* <Button className=''>
              <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
              <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
            </Button> */}
            <BsSunFill onClick={() => setTheme('dark')} className='not-dark:hidden fill-amber-400 mr-2 hover:cursor-pointer'/>
            <BsMoonFill onClick={() => setTheme('light')} className='dark:hidden fill-purple-400 mr-2 hover:cursor-pointer'/> 
          </div>
        </div>
        <div className="flex md:hidden gap-4">
          <Collapsible className='absolute top-0 left-0 pl-1 pt-1'>
            <CollapsibleTrigger>
              <Button className="bg-primary hover:bg-primary/90 dark:hover:bg-primary dark:text-white dark:hover:text-black">
                <Menu/>
                <div className="hidden sm:flex gap-2">
                  <div className="flex my-auto font-extralight">|</div>
                  Menu
                </div>
              </Button>
            </CollapsibleTrigger>
            <CollapsibleContent>
              <div className="text-white top-20 absolute bg-primary rounded-lg">
                <ul className='flex flex-col'>
                  {
                    Links.map((link, index) => {
                      if (link.active) return <Link href={link.link} key={index}
                        className='flex gap-1 border-b px-2 justify-between py-1 hover:bg-red-400 hover:text-foreground first:rounded-t-lg'>
                          {link.icon}
                          {link.name}
                        </Link>
                      if (link.login) return <Link href={link.link} key={index}
                        className='flex sm:hidden gap-1 px-2 justify-between py-1 hover:bg-red-400 hover:text-foreground last:rounded-b-lg'>
                          {link.icon}
                          {link.navName}
                        </Link>
                    })
                  }
                </ul>
              </div>
            </CollapsibleContent>
          </Collapsible>
          
          <div className="hidden sm:flex my-auto text-primary">|</div>
          {
            Links.map((dashboard, index) => {
              if (dashboard.login) return <Link href={dashboard.link} key={index}
              className=''>
                <Button className="hidden sm:flex bg-primary hover:bg-primary/90 dark:hover:bg-primary dark:text-white dark:hover:text-black">
                  {dashboard.icon}
                  <div className="hidden lg:flex gap-2">
                    <div className="flex my-auto font-extralight">|</div>
                    {dashboard.name}
                  </div>
                </Button>
              </Link>
            })
          }
          <div className='absolute top-0 right-0 mr-1 mt-1'>
            <div className="rounded-full p-1 border dark:border-amber-400 border-purple-700">
              <BsSunFill onClick={() => setTheme('light')} className='not-dark:hidden fill-amber-400 hover:cursor-pointer'/>
              <BsMoonFill onClick={() => setTheme('dark')} className='dark:hidden fill-purple-700 hover:cursor-pointer'/>
            </div>
          </div>
        </div>
      </nav>
      {/* Mobile Navigation header */}
      {/* <nav className="max-w-5xl mx-auto flex justify-between items-center bg-white/80 backdrop-blur-md px-4 py-4 rounded-lg shadow-lg"></nav> */}
    </header>
  )
}

export default Header