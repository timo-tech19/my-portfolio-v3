import Container from "@/components/container";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
	const routes = [
		{
			href: "#home",
			label: "Home",
		},
		{
			href: "#experience",
			label: "Experience",
		},
		{
			href: "#projects",
			label: "Projects",
		},
	];

	return (
		<>
			<Container>
				<div className=''>
					<h2>timotech.</h2>
					<nav>
						<ul>
							{routes.map((route) => (
								<li key={route.href}>
									<Link href={route.href}>{route.label}</Link>
								</li>
							))}
						</ul>
					</nav>
				</div>
			</Container>
			<main className=''></main>
		</>
	);
}
