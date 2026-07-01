'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Field, FieldContent, FieldGroup, FieldLabel, FieldTitle } from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import { InputGroup, InputGroupAddon, InputGroupInput, InputGroupText } from '@/components/ui/input-group'
import { Label } from '@/components/ui/label'
import { Separator } from '@/components/ui/separator'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Anchor, Camera, Edit, Phone, User, UserKey } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { FaApple, FaGoogle, FaPassport, FaUser } from 'react-icons/fa'
import { MdEmail, MdPerson } from 'react-icons/md'
import { PiPasswordBold } from 'react-icons/pi'

const Auth = () => {
  return (
    <div className="flex bg-primary h-svh items-center">
        <div className='flex flex-col items-center justify-center w-[85%] md:w-[50%] lg:w-[30%] mx-auto bg-background rounded-lg h-max py-2'>
            {/* Logo & Branding */}
            <div className="flex flex-col items-center justify-center h-1/9 w-full mb-8">
                <div className="flex flex-col text-xs items-center space-x-2">
                    <Link href="" className="flex flex-col text-xs items-center space-x-2">
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
                    </Link>
                </div>
            </div>
            {/* Actual Authentication Form */}
            <div className="flex flex-col h-8/9  w-full items-center">
                <Tabs defaultValue='signIn' className='w-[90%] lg:w-[70%] items-center'>
                    <TabsList>
                        <TabsTrigger value='signIn'>Sign In</TabsTrigger>
                        <TabsTrigger value='signUp'>Sign Up</TabsTrigger>
                    </TabsList>
                    <TabsContent value='signIn' className='w-full'>
                        <Card>
                            <CardHeader>
                                <CardTitle className='text-center'>Login / Sign In</CardTitle>
                            </CardHeader>
                            <CardContent className='flex flex-col'>
                                <h3 className='text-xs text-destructive font-bold'>Login with Socials</h3>
                                {/* <Button className='bg-gray-300 text-gray-800 my-1 hover:bg-yellow-300 gap-4 w-[90%] mx-auto'>
                                    <FaGoogle />
                                    Login with Google
                                </Button>
                                <Button className='bg-gray-300 text-gray-800 my-1 hover:bg-green-300 gap-4 w-[90%] mx-auto'>
                                    <FaApple />
                                    Login with Apple ID
                                </Button> */}
                                <div className="flex">
                                    <Button className='bg-gray-300 text-gray-800 my-1 hover:bg-yellow-300 w-[45%] mx-auto flex justify-between'>
                                        <FaGoogle />
                                        Google
                                    </Button>
                                    <Button className='bg-gray-300 text-gray-800 my-1 hover:bg-green-300 w-[45%] mx-auto flex justify-between'>
                                        <FaApple />
                                        Apple ID
                                    </Button>
                                </div>

                                <h3 className='text-xs text-destructive font-bold mt-3 mb-2'>Login with Email</h3>
                                <div className="flex flex-col gap-2 text-gray-500 w-[90%] mx-auto">
                                    <InputGroup>
                                        <InputGroupAddon>
                                            <User/>
                                            <p className='font-light'>|</p>
                                        </InputGroupAddon>
                                        <InputGroupInput type='text' placeholder='example@email.com' className='' required/>
                                    </InputGroup>
                                    <InputGroup>
                                        <InputGroupAddon>
                                            <PiPasswordBold/>
                                            <p className='font-light'>|</p>
                                        </InputGroupAddon>
                                        <InputGroupInput type='password' placeholder='*************' className='' required/>
                                    </InputGroup>
                                </div>

                            </CardContent>
                            <CardFooter className='flex text-xs justify-center'>
                                <span className='flex gap-1 text-xs justify-center'>
                                    Authentication secured by <p className='font-bold text-destructive'>ImperialTech</p>
                                </span>
                            </CardFooter>
                        </Card>
                        <p className='text-xs p-1 bg-background w-max rounded-md mt-2 mx-auto'>&copy;{new Date().getFullYear()} | <Link href='' className='hover:text-primary'>Imperial Media Solutions</Link></p>
                    </TabsContent>
                    <TabsContent value='signUp' className='w-full'>
                        <Card>
                            <CardHeader>
                                <CardTitle className='text-center'>Create Account</CardTitle>
                            </CardHeader>
                            <CardContent className='flex flex-col'>
                                <h3 className='text-xs text-destructive font-bold'>Create using Socials</h3>
                                <div className="flex">
                                    <Button className='md:bg-yellow-500 md:dark:bg-yellow-300 text-foreground my-1 hover:bg-yellow-300 w-[45%] mx-auto flex justify-between'>
                                        <FaGoogle />
                                        Google
                                    </Button>
                                    <Button className='bg-blue-500 dark:bg-blue-300 text-foreground my-1 hover:bg-blue-300 w-[45%] mx-auto flex justify-between'>
                                        <FaApple />
                                        Apple ID
                                    </Button>
                                </div>
                                

                                <h3 className='text-xs text-destructive font-bold mt-3 mb-2'>Or Create using Email</h3>
                                <div className="flex flex-col gap-2 text-gray-500 w-[90%] mx-auto">
                                    <div className="flex gap-2 w-full">
                                        <Field className='flex text-xs w-full'>
                                            <Input id='createFirstName' placeholder='John' className='p-1 text-xs placeholder:text-xs'/>
                                        </Field>
                                        <Field className='flex text-xs'>
                                            <Input id='createLastName' placeholder='Doe' className='p-1 text-xs placeholder:text-xs'/>
                                        </Field>
                                    </div>
                                    <InputGroup>
                                        <InputGroupAddon>
                                            <MdPerson />
                                            <p className='font-extralight'>|</p>
                                        </InputGroupAddon>
                                        <InputGroupInput id='createUsername' type='text' placeholder='Username' className='p-1 text-xs placeholder:text-xs'/>
                                    </InputGroup>
                                    <InputGroup>
                                        <InputGroupAddon>
                                            <MdEmail />
                                            <p className='font-extralight'>|</p>
                                        </InputGroupAddon>
                                        <InputGroupInput id='createEmail' type='email' placeholder='johndoe@mail.com' className='p-1 text-xs placeholder:text-xs'/>
                                    </InputGroup>
                                    <InputGroup>
                                        <InputGroupAddon>
                                            <Phone />
                                            <p className='font-extralight'>|</p>
                                        </InputGroupAddon>
                                        <InputGroupInput id='createEmail' type='tel' placeholder='+264 81 260 8378' className='p-1 text-xs placeholder:text-xs'/>
                                    </InputGroup>

                                    <Field className='flex text-xs my-4'>
                                        <p className='text-center'>Enter & Verify Password</p>
                                        <InputGroup>
                                            <InputGroupAddon>
                                                <UserKey />
                                                <p className='font-extralight'>|</p>
                                            </InputGroupAddon>
                                            <InputGroupInput id='createEmail' type='password' placeholder='Enter Password' className='p-1 text-xs placeholder:text-xs'/>
                                        </InputGroup>
                                        <InputGroup>
                                            <InputGroupAddon>
                                                <UserKey />
                                                <p className='font-extralight'>|</p>
                                            </InputGroupAddon>
                                            <InputGroupInput id='createEmailVerify' type='password' placeholder='Verify Password' className='p-1 text-xs placeholder:text-xs'/>
                                        </InputGroup>
                                    </Field>
                                    <Button>Create Account</Button>
                                </div>

                            </CardContent>
                        </Card>
                        <p className='text-xs p-1 bg-background w-max rounded-md mt-2 mx-auto'>&copy;{new Date().getFullYear()} | <Link href='' className='hover:text-primary'>Imperial Media Solutions</Link></p>
                    </TabsContent>
                </Tabs>
            </div>
        </div>
    </div>
  )
}

export default Auth