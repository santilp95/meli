"use client";
import { FC } from 'react'
import Image from 'next/image';

const logo = "/assets/Logo_ML.png";

/**
 * Icon product component
 */
export const IconProduct:FC = () => {
  return (
    <div>
      <Image src={logo} alt="Logo" width={40} height={30} />
    </div>
  )
}
