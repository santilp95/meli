"use client";
import React from 'react'
import Image from 'next/image';

const logo = "/assets/Logo_ML.png";

/**
 * Icon product component
 */
export const IconProduct = () => {
  return (
    <Image src={logo} alt="Logo" width={40} height={40} />
  )
}
