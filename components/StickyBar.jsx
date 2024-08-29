import React from 'react'
import Link from 'next/link'
import { useEffect } from 'react';
export default function StickyBar() {
  useEffect(() => {
    let prevScrollPos = 100;
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      console.log(currentScrollPos);
      if (prevScrollPos > currentScrollPos) {
        document.querySelector('#sticky-bar').style.right = '1rem';
      } else {
        document.querySelector('#sticky-bar').style.right = '-100%';
      }
      prevScrollPos = currentScrollPos;
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return (
    <div id="sticky-bar" className=" fixed z-[1000] h-auto w-max top-[50%] translate-y-[-50%] right-[1rem] flex flex-col gap-2">
      <Link href="/registration" legacyBehavior className="p-2">
            <a href="/registration" className="bg-red border-white text-primary-light hover:shadow-md rounded-md active:-translate-y-1 delay-75 font-bold px-4 py-2 text-sm sm:text-xs">Register Now</a>
          </Link>
          <Link href="/PaperSubmission/info" legacyBehavior className="p-2">
            <a href="/PaperSubmission/info" className=" border-[white] text-primary-light rounded-md bg-[#002E73] hover:shadow-md delay-75 active:-translate-y-1 font-bold px-4 py-2 text-sm sm:text-xs">Submit Now</a>
          </Link>
      </div>
  )
}