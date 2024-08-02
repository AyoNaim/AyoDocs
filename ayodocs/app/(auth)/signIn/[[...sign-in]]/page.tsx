import React from 'react'
import { SignIn } from '@clerk/nextjs'

const page = () => {
  return (
    <div className='auth-page'>
        <SignIn />
    </div>
  )
}

export default page