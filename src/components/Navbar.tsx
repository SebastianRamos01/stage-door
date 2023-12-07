'use client'
import React, { useEffect, useRef, useState } from 'react'
import Burguer from './Burguer'

export default function Navbar() {

  const [isOpen, setIsOpen] = useState<boolean>(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const toggleDropdown = (state: boolean) => {
    setIsOpen(!isOpen)
  }
  const handleClickOutside = (e: any) => {
    if(isOpen  && dropdownRef.current && !dropdownRef.current?.contains(e.target as Node)){
      setIsOpen((prevIsOpen) => !prevIsOpen)
    }
  }
  useEffect(() => {
    window.addEventListener('click', handleClickOutside);
    return () => {
      window.removeEventListener('click', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className='header' >
        <a href='/' className='title'>Stage Door</a>
        <div className='button' ref={dropdownRef} >
          <div onClick={() => toggleDropdown(isOpen)}>
            <Burguer></Burguer>
          </div>
        </div>
        {
          isOpen && 
              <ul className='nav'>
              <li>
                <a href='/about' className='ref'>About</a>
              </li>
              <li>
                <a href='/gallery' className='ref'>Gallery</a>
              </li>
              <li>
                <a href='/contact' className='ref'>Contact</a>
              </li>
            </ul>
        }
    </div>
  )
}
