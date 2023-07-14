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
  return <button onClick={() => signOut()}>Sign Out</button>
}