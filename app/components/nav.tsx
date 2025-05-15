'use client';

import Link from 'next/link';
import Image from 'next/image';
import { assets } from 'assets/assets';
import { useRef } from 'react';
import { fonts } from 'app/components/ui/fonts';

const navItems = {
  '/': {
    name: 'home',
  },
  '/#projects': {
    name: 'projects'
  },
  '#contact': {
    name: 'contact'
  }
}

export function Navbar() {

  const sideMenuRef = useRef<HTMLDivElement>();

  function openSideMenu() {
    sideMenuRef.current!.style.transform = 'translateX(-16rem)';
  }
  function closeSideMenu() {
    sideMenuRef.current!.style.transform = 'translateX(16rem)';
  }

  return (
    <aside className="-ml-[8px] mb-16 tracking-tight flex justify-between">
      <div className="px-2 lg:sticky lg:top-20">
        <nav
          className="flex flex-row items-baseline relative px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative"
          id="nav"
        >
          <div className="hidden md:flex flex-row space-x-0 pr-10">
            {Object.entries(navItems).map(([path, { name }]) => {
              return (
                <Link
                  key={path}
                  href={path}
                  className="transition-all hover:underline hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative py-1 px-2 m-1"
                >
                  {name}
                </Link>
              )
            })}
          </div>
        </nav>
      </div>

      <button className='w-6 md:hidden cursor-pointer'
        onClick={openSideMenu}
      >
        <Image className='dark:invert'
          src={assets.menu_black}
          alt='menu icon'
        />
      </button>
      <SideMenu ref={sideMenuRef} closeMenu={closeSideMenu}/>
    </aside>
  )
}

const SideMenu = ({ref, closeMenu}) => {
  return (
    <div className='flex md:hidden flex-col py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-white/[.96] dark:bg-black/90 transition duration-500'
      ref={ref}
    >
      
      <div className='absolute right-6 top-7 cursor-pointer'
        onClick={closeMenu}
      >
        <Image className='w-5 dark:invert'
          src={assets.close_black}
          alt=''
        />
      </div>
      <ul className={`flex flex-col gap-5 mt-10 ${fonts.montserrat}`}>
        <li><a className={`font-normal text-lg`} onClick={closeMenu} href="#top">Home</a></li>
        <li><a className={`font-normal text-lg`} onClick={closeMenu} href="#projects">Projects</a></li>
        <li><a className={`font-normal text-lg`} onClick={closeMenu} href="#contact">Contact</a></li>
      </ul>
    </div>
  );
};