import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { Anchor, Camera, Edit, Shield } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { FaHome } from 'react-icons/fa'

const Privacy = () => {
  return (
    <div className="">
    {/* Header */}
    <div className="flex justify-between p-4">
            <Link href='/'>
            <Button className='text-background dark:text-foreground'>
                <FaHome />
                <p className='font-extralight'>|</p>
                <p className='font-light'>Go Back Home</p>
            </Button>
            </Link>
            <span className="hidden md:flex flex-col items-center">
            <h1 className='font-bold text-primary text-4xl'>
              Privacy Policy
            </h1>
            <p className='text-sm mt-1'>
                Drafted & defended by 
                <a href='lawyers-website' className='text-primary hover:text-destructive ml-1'>
                LegalWise Legal Practitioners
                </a>
            </p>
            </span>
            <Link href='/terms'>
            <Button className='text-background dark:text-foreground'>
                <p className='flex gap-1 font-light'>
                    View 
                    <strong>
                        Terms of Service 
                    </strong>
                </p>
                <p className='font-extralight'>|</p>
                <Shield className='fill-background dark:fill-foreground'/>
            </Button>
            </Link>
        </div>
        <div className="">
          <span className="flex md:hidden flex-col items-center p-4">
              <h1 className='font-bold text-primary text-4xl'>
                Privacy Policy
              </h1>
              <p className='text-sm mt-1'>
                  Drafted & defended by 
                  <a href='' className='text-primary hover:text-destructive ml-1'>
                    LegalWise Legal Practitioners
                  </a>
              </p>
            </span>
        </div>
        
        
        <Separator className='mb-8'/>









       {/* Content  */}
      <div className="min-h-100 text-primary w-[90%] lg:max-w-7xl mx-auto">
          <h1>Contents</h1>
          <h1 className='text-3xl'>Topic 1</h1>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias, quod quis. Vero ex, nesciunt atque eligendi consequuntur fugiat! Ut, fugiat. Sed ratione numquam, accusantium modi suscipit sapiente id ad aut qui cupiditate, illo minima. Mollitia id animi sit rem odit eligendi modi repellat accusamus qui quaerat ipsum, illo natus ducimus vel possimus porro architecto debitis repellendus? Saepe porro reiciendis officia quia, non iste assumenda esse maiores animi laboriosam dicta praesentium maxime? Expedita, cum! Quasi reiciendis quas obcaecati fuga porro perferendis illum nam, temporibus optio hic cupiditate, enim dolorem rem doloremque commodi deleniti impedit. Sequi, quasi. Asperiores laboriosam nostrum dignissimos dolore perferendis inventore, impedit vel beatae blanditiis. Esse natus quam totam nostrum nemo, eligendi blanditiis. Excepturi sint dolorum asperiores maiores atque voluptatibus in, totam, odio ullam voluptate perspiciatis numquam sunt mollitia facere facilis ex amet? Sunt omnis, error odio aspernatur accusantium enim dolores tenetur rem provident aperiam amet quis sequi rerum dolore voluptatum! Minima perferendis eius accusamus laboriosam tempore eos itaque, dicta placeat odit necessitatibus! Commodi quasi ducimus beatae inventore ex hic! Quod, eaque iusto. Illum quasi officiis soluta magnam voluptatum tempora praesentium veniam impedit libero aperiam vero, odit in, ut vitae eos earum harum, ipsa vel consequuntur expedita. Magni magnam quia debitis eos dolorum, ea laboriosam consectetur corrupti atque dignissimos sed provident accusamus iusto ullam natus aperiam nihil commodi sapiente neque ab amet! Perspiciatis itaque aut excepturi omnis totam iure est voluptatem cupiditate quis voluptatibus? Temporibus beatae corporis repellat nostrum cumque nihil quaerat. Velit consectetur aliquam, cumque quasi provident dicta ullam quae nulla!</p>
          <h1 className='text-3xl'>Topic 2</h1>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias, quod quis. Vero ex, nesciunt atque eligendi consequuntur fugiat! Ut, fugiat. Sed ratione numquam, accusantium modi suscipit sapiente id ad aut qui cupiditate, illo minima. Mollitia id animi sit rem odit eligendi modi repellat accusamus qui quaerat ipsum, illo natus ducimus vel possimus porro architecto debitis repellendus?</p>
      </div>







    {/* Footer */}
    <Separator className='mt-8'/>
      <div className="flex items-center justify-center py-4">
        <div className="text-sm text-right flex flex-col">
          <p>To notify us of mistakes</p>
          <p>Send us an email at:</p>
          <a href='mailto:legal@imperialmedia.com' className='text-primary hover:text-destructive'>
            legal@imperialmedia.com
          </a>
        </div>
        <Separator orientation='vertical' className='mx-8'/>
        <div className="flex flex-col text-xs items-center space-x-2">
          <Link href='' className="flex flex-col text-xs items-center space-x-2">
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
        <Separator orientation='vertical' className='mx-8'/>
        <div className="text-sm">
          <p>For all legal queries:</p>
          <span>
            <p>
              -&gt; contact our Lawyers at:
            </p>
            <a href='mailto:bshikongo@legalwise.com' className='text-primary hover:text-destructive'>
            bshikongo@legalwise.com
            </a>
          </span>
          
        </div>
      </div>
      <span className='flex gap-1 items-center justify-center mb-2 text-xs'>
        <p>&copy;</p>
        <p>{new Date().getFullYear()}</p>
        <p>|</p>
        <p>All rights reserved</p>
      </span>




    </div>
  )
}

export default Privacy