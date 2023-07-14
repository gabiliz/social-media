import Image from "next/image";
import Link from "next/link";
import { SignInButton, SignOutButton } from "./buttons";
import AuthCheck from "./AuthCheck";

export default function Header () {
	return (
		<header className="py-10">
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<nav className="relative z-50 flex justify-between">
					<div className="flex items-center md:gap-x-12">
						<Link href={"/"}>
							<Image 
								src='./peaknet.svg'
								alt="PeakNet Logo"
								width={216}
								height={40}
							/>
						</Link>
						<div className="hidden md:flex md:gap-x-6">
							<Link href={'/about'} className="inline-block rounded-lg px-2 py-1 text-slate-700 hover:text-slate-900 hover:bg-slate-100">About</Link>
							<Link href={'/blog'} className="inline-block rounded-lg px-2 py-1 text-slate-700 hover:text-slate-900 hover:bg-slate-100">Blog</Link>
							<Link href={'/users'} className="inline-block rounded-lg px-2 py-1 text-slate-700 hover:text-slate-900 hover:bg-slate-100">Users</Link>
						</div>
					</div>
					<div className="flex items-center gap-x-5 md:gap-x-8">
						<SignInButton />
						<AuthCheck>
							<SignOutButton />
						</AuthCheck>
					</div>

				</nav>
			</div>
		</header>
	)
}