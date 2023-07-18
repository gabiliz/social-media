"use client"

import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDownIcon } from '@heroicons/react/20/solid'

export function SignInButton() {
  const { data: session, status } = useSession();
  console.log(session, status);

  if (status === "loading") {
    return <>...</>;
  }

  if (status === "authenticated") {
    return (
      <Link href={`/dashboard`} className="flex items-center">
        <Image 
          src={session.user?.image ?? '/meman.jpg'}
          width={50}
          height={50}
          alt="Your name"
          className="rounded-full"
        />
        <p className="ml-2 text-slate-700">{session.user?.name}</p>
        <ChevronDownIcon className="h-6 w-6 ml-2" />
      </Link>
    )
  }
  return <button className="inline-block rounded-lg px-2 py-1 text-slate-700 hover:text-slate-900 hover:bg-slate-100" onClick={() => signIn()}>Sign in</button>;
}

export function SignOutButton() {
  return <button className="inline-block rounded-lg px-2 py-1 text-slate-700 hover:text-slate-900 hover:bg-slate-100" onClick={() => signOut()}>Sign Out</button>
}