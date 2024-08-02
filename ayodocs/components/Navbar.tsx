import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
  return (
    <div className='header'>
        <Link href={'./'} className='md:flex-1'>
            <Image src={'./ac'}/>
        </Link>
    </div>
  )
}

export default Navbar