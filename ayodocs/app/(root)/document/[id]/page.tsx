import { Editor } from '@/components/editor/Editor'
import Navbar from '@/components/Navbar'
import React from 'react'
import { SignedOut, SignedIn, UserButton, SignInButton } from '@clerk/nextjs'

const page = () => {
  return (
    <div>
        <Navbar>
            <div className='flex w-fit items-center justify-center gap-2'>
                <p className='document-title'>i am here</p>
            </div>
            <SignedOut>
                <SignInButton />
            </SignedOut>
            <SignedIn>
                <UserButton />
            </SignedIn>
        </Navbar>
        <Editor />
    </div>
  )
}

export default page