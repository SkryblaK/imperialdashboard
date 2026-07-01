import { Portfolio } from '@/public/Data'
import React from 'react'
import { FaMousePointer, FaPen } from 'react-icons/fa'
import { Button } from './ui/button'
import { TbCategoryFilled } from 'react-icons/tb'
import { RiHomeOfficeFill } from 'react-icons/ri'
import { HiComputerDesktop } from 'react-icons/hi2'
import { BsCameraFill } from 'react-icons/bs'

const Skills = () => {
  return (
    <div className='bg-primary w-full py-4'>
        <div className="text-center text-background mb-4">
            <h1 className='uppercase text-3xl md:text-5xl font-bold'>Our skills</h1>
            <p className='text-foreground'>Find out below</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 w-[90%] lg:w-7xl mx-auto">
            {
                Portfolio.map((skill, index) => {
                    let display = <TbCategoryFilled />
                    if (skill.type == 'web') {
                        display = <FaMousePointer />
                    } else if (skill.type == 'design') {
                        display = <FaPen />
                    } else if (skill.type == 'office') {
                        display = <HiComputerDesktop />                        
                    } else if (skill.type == 'camera') {
                        display = <BsCameraFill />                        
                    } else {
                        display = <TbCategoryFilled />
                    }
                    return <div className="rounded-2xl hover:cursor-pointer bg-background/50 dark:bg-foreground/50 dark:hover:bg-primary hover:bg-primary outline-2 outline-secondary/50 dark:outline-foreground/50 p-2 max-w-full" key={index}>
                        <div className="flex items-center text-background dark:text-foreground justify-between">
                            <h1 className='flex text-2xl gap-1 items-center'>
                                {skill.icon}
                                {skill.skill}
                            </h1>
                            <Button
                            variant='outline'
                            size='icon-xs'
                            className='bg-primary dark:bg-primary dark:text-foreground'>
                                {display}
                            </Button>
                        </div>
                        <div className=" text-foreground dark:text-background">
                            <p className='text-xs'>{skill.description}</p>
                        </div>
                    </div>
                })
            }
        </div>
    </div>
  )
}

export default Skills