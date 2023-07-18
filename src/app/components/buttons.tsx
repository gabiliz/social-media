"use client"

import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { useEffect, useRef, useState } from "react";

export function SignInButton() {
  const [isOpen, setIsOpen] = useState(false);
  const { data: session, status } = useSession();
  const ref = useRef<HTMLDivElement | null>(null);
  
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
  }, [ref]);

  if (status === "loading") {
    return <>...</>;
  }

  if (status === "authenticated") {
    return (
      <div ref={ref}>
        <button className="flex items-center" onClick={toggleDropdown}>
          <Image 
            src={session.user?.image ?? '/meman.jpg'}
            width={50}
            height={50}
            alt="Your name"
            className="rounded-full"
          />
          <ChevronDownIcon className="h-6 w-6 ml-2" />
        </button>
        {isOpen && (
          <div className="absolute z-10 mt-2 bg-white shadow-lg divide-y divide-gray-100 rounded-lg ">
            <div className="px-4 py-3 text-sm text-gray-900 ">
              <div>{session.user?.name}</div>
              <div className="font-medium truncate">{session.user?.email}</div>
            </div>
            <ul className="py-2 text-sm text-gray-700">
              <li className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"><Link href={`/dashboard`}>Dashboard</Link></li>
            </ul>
              <div className="py-2">
                <p className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"><button onClick={() => signOut()}>Sign Out</button></p>
              </div>           
          </div>
        )}
      </div>
    )
  }
  return <button className="inline-block rounded-lg px-2 py-1 text-slate-700 hover:text-slate-900 hover:bg-slate-100" onClick={() => signIn()}>Sign in</button>;
}
