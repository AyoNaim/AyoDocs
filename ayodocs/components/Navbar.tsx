import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

type headerProps = {
  children: React.ReactNode
}

const Navbar = ({children}: headerProps) => {
  return (
    <div className='header'>
        <Link href={'./'} className='md:flex-1'>
            <Image src={'./logo.svg'} alt='logo' width={120} height={32} className='hidden md:hidden'/>
            <Image src={'./logo-icon.svg'} alt='logo' width={32} height={32} className='mr-2 md:hidden'/>
        </Link>
    </div>
  )
}

export default Navbar