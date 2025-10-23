"use client"
import React from 'react'
import Image from "next/image"

const Logo = () => {
  return (
    <div>
      <Image src="/logo-1.png" alt='logo' width={50} height={50} className='w-full '/>
    </div>
  )
}

export default Logo
