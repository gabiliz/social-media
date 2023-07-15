"use client"

import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

export function SignInButton() {
  const { data: session, status } = useSession();
  console.log(session, status);

  if (status === "loading") {
    return <>...</>;
  }

  if (status === "authenticated") {
    return (
      <Link href={`/dashboard`}>
        <Image 
          src={session.user?.image ?? '/meman.jpg'}
          width={50}
          height={50}
          alt="Your name"
          className="rounded-full"
        />
      </Link>
    )
  }
  return <button onClick={() => signIn()}></button>;
}

export function SignOutButton() {
  return <button className="inline-block rounded-lg px-2 py-1 text-slate-700 hover:text-slate-900 hover:bg-slate-100" onClick={() => signOut()}>Sign Out</button>
}