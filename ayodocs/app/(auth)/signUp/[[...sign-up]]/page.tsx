import React from 'react'
import { SignIn, SignUp } from '@clerk/nextjs'

const page = () => {
  return (
    <div className='auth-page'>
        <SignUp />
    </div>
  )
}

export default page