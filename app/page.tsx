"use client";

import Company from "@/components/company";
import Container from "@/components/container";
import Heading from "@/components/heading";
import Project from "@/components/project";
import Image from "next/image";
import Link from "next/link";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";
import { Typewriter } from "react-simple-typewriter";

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

	const projects = [
		{
			imageUrl: "/appchat.png",
			name: "App Chat",
			description:
				"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque dignissimos sed similique, nobis numquam iste itaque ducimus magnam harum.",
			github: "",
		},
		{
			imageUrl: "/ecommerce.png",
			name: "Ecommerce App",
			description:
				"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque dignissimos sed similique, nobis numquam iste itaque ducimus magnam harum.",
			github: "",
		},
		{
			imageUrl: "/music.png",
			name: "Music App",
			description:
				"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque dignissimos sed similique, nobis numquam iste itaque ducimus magnam harum.",
			github: "",
		},
	];

	return (
		<>
			<Container>
				<div className='flex justify-between items-center py-6'>
					<h2 className='font-extrabold text-3xl tracking-wide'>
						timo<span className='text-green-500 font-bold'>tech.</span>
					</h2>
					<nav className='hidden lg:block'>
						<ul className='flex items-center gap-x-8 font-semibold uppercase'>
							{routes.map((route) => (
								<li key={route.href}>
									<Link href={route.href}>{route.label}</Link>
								</li>
							))}
						</ul>
					</nav>
				</div>
			</Container>
			<main>
				<section>
					<Container>
						<div className='flex items-center justify-around my-16'>
							<div className='w-1/2'>
								<h1 className='text-7xl font-extrabold uppercase tracking-wider'>
									Timo{" "}
									<span className='font-semibold'>
										<RoughNotation type='highlight' show color='#bbf7d0'>
											Heman
										</RoughNotation>
									</span>
								</h1>
								<hr className='ml-4 w-16 my-4 border-green-500 border-4' />
								<h3 className='mb-4 text-5xl'>
									I am a{" "}
									<span className='text-stone-700 font-semibold'>
										<Typewriter
											words={[
												"Software Developer",
												"Fast-paced Learner",
												"Problem Solver",
												"great fit for the job!",
											]}
											loop={0}
											cursor
											cursorStyle='<'
										/>
									</span>
								</h3>
								<p className='mb-2 leading-7 text-lg'>
									Lorem ipsum dolor sit amet consectetur adipisicing elit.
									Consequatur aliquid, a, nesciunt recusandae soluta debitis
									reprehenderit perspiciatis quia error atque aspernatur iure
									quam similique. Ab qui quam nesciunt ea non odio repellat
									corrupti est maiores iusto neque dolores, sed laboriosam.
								</p>
								<p className='leading-7 text-lg'>
									Dolor sit amet consectetur adipisicing elit. Quas sit
									necessitatibus repellendus fugit nostrum cupiditate minima
									error tempore esse asperiores, nisi, voluptates soluta iusto
									officia, nobis optio ipsa facilis{" "}
									<RoughNotation type='circle' show animate color='#ff0000'>
										perspiciatis?
									</RoughNotation>
								</p>
								<div className='mt-10'>
									<Link
										href='#'
										className='rounded-md bg-amber-300 px-4 py-3 text-lg font-semibold shadow-sm hover:bg-amber-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-300'
									>
										Let&apos;s talk <span aria-hidden='true'>→</span>
									</Link>
								</div>
							</div>
							<div>
								<div className='rounded-xl overflow-hidden drop-shadow-2xl'>
									<Image
										className='object-cover'
										src='/me.jpg'
										alt='Timo Heman'
										width={400}
										height={400}
									/>
								</div>
							</div>
						</div>
						<div className='flex items-center justify-center'>
							<RoughNotation
								customElement='div'
								type='bracket'
								brackets={["left", "right"]}
								show
								padding={20}
								color='#dc2626'
							>
								<div className='flex items-center justify-center gap-x-24'>
									<Image src='/react.svg' alt='React' width={60} height={60} />
									<Image src='/nextjs.svg' alt='Next' width={60} height={60} />
									<Image
										src='/tailwind.svg'
										alt='Tailwind Css'
										width={60}
										height={60}
									/>
									<Image
										src='/typescript.svg'
										alt='TypeScript'
										width={60}
										height={60}
									/>
									<Image
										src='/javascript.svg'
										alt='Javascipt'
										width={60}
										height={60}
									/>
								</div>
							</RoughNotation>
						</div>
					</Container>
				</section>

				<section className='mt-16 py-4 bg-stone-50'>
					<Container>
						<Heading title='Previously worked at' />
						<div className='mt-12 flex items-center justify-around'>
							<Company
								title='Stat-ly (Remote - USA)'
								linkedIn='https://www.linkedin.com/company/stat-ly/'
								imageSrc='/statly.svg'
							/>
							<Company
								title='FieldR (Remote - Sri Lanka)'
								linkedIn='https://www.linkedin.com/company/fieldr-match-analyzing-tool/'
								imageSrc='/fieldr.jpg'
							/>
						</div>
					</Container>
				</section>

				<section className='py-16'>
					<Container>
						<Heading title='Personal Projects' />
						<div className='mt-12'>
							{projects.map((project, index) => (
								<Project
									key={project.name}
									index={index + 1}
									{...project}
									className={index === 1 ? "flex-row-reverse" : ""}
									video='/appchat-mvp.mp4'
								/>
							))}
						</div>
					</Container>
				</section>

				<footer className='py-16 bg-stone-50'>
					<Container>
						<div className='text-center'>
							<h2 className='text-4xl font-semibold tracking-wide'>
								Wanna Hire Me?
							</h2>
							<p className='text-xl mt-2'>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
								quibusdam dolore quaerat.
							</p>
							<button className=' mt-4 uppercase bg-amber-300 px-8 py-3 text-xl font-semibold shadow-lg hover:bg-amber-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-300 transition'>
								Let&apos;s Talk!
							</button>
						</div>
					</Container>
				</footer>
			</main>
		</>
	);
}
