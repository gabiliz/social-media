import Image from "next/image";
import Link from "next/link";
import { SignInButton, SignOutButton } from "./buttons";
import AuthCheck from "./AuthCheck";

export default function Header () {
	return (
		<nav className="flex m-8">
			<Link href={"/"}>
				<Image 
					src='./vercel.svg'
					alt="Vercel Logo"
					width={216}
					height={50}
				/>
			</Link>
			<ul className="flex flex-row items-center text-xl">
				<li className="mx-6">
					<Link href={'/about'}>About</Link>
				</li>
				<li className="mx-6">
					<Link href={'/blog'}>Blog</Link>
				</li>
				<li className="mx-6">
					<Link href={'/users'}>Users</Link>
				</li>
				<li className="mx-6">
					<SignInButton />
				</li>
				<li>
					<AuthCheck>
						<SignOutButton />
					</AuthCheck>
				</li>
			</ul>
		</nav>
	)
}