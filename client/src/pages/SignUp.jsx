import { Button, Label, TextInput } from 'flowbite-react'
import React from 'react'
import { Link } from 'react-router-dom'

export default function SignUp() {
  return (
    <div className='min-h-screen mt-20'>
      <div className='flex p-3 max-w-3xl mx-auto flex-col md:flex-row gap-5'>

        {/* left */}
        <div className='flex-1'>
          <Link to="/" className='font-bold dark:text-white text-4xl'>
            <span className='px-2 py-1 bg-gradient-to-r from-purple-500 to-purple-700 rounded-lg text-white'>Vega's</span>Blog
          </Link>
          <p className='text-sm mt-5'>
            This is a project to showcase my habilities with the MERN stack. Sign up to try it.
          </p>
        </div>
          
        {/* right */}
        <div className='flex-1'>
          <form className='flex flex-col gap-4'>
            <div>
              <Label value='Your username'/>
              <TextInput type='text' placeholder='Username' id='username'/>
            </div>
            <div>
              <Label value='Your email'/>
              <TextInput type='text' placeholder='Email' id='email'/>
            </div>
            <div>
              <Label value='Your password'/>
              <TextInput type='text' placeholder='Password' id='password'/>
            </div>
            <Button gradientMonochrome='purple' className='w-full' type='submit'>
              Sign up
            </Button>
          </form>

          <div className='flex gap-2 texr-sm mt-5'>
            <span>Have an account?</span>
            <Link to="/sign-in" className='text-purple-500 font-semibold'>
              Sign in
            </Link>
          </div>

        </div>

      </div>

    </div>
  )
}
