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
			href: "https://twitter.com/timo__tech",
			label: "Twitter (X)",
		},
		{
			href: "https://www.linkedin.com/in/timo-heman/",
			label: "LinkedIn",
		},
		{
			href: "https://github.com/timo-tech19",
			label: "Github",
		},
	];

	const projects = [
		{
			imageUrl: "/appchat.png",
			name: "App Chat",
			url: "https://timotech-appchat.netlify.app/",
			description:
				"A social media type application which helps people kickoff conversations by postings topics and having people reply directly to their DMs.",
			github: "https://github.com/timo-tech19/appchat",
			stack: ["React", "Firebase", "TailWind CSS"],
			video: "/appchat.mp4",
		},
		{
			imageUrl: "/ecommerce.png",
			name: "Ecommerce App",
			url: "https://ecommerce-store-timotech.vercel.app/",
			description:
				"An ecommerce platform with a front end (store) and an admin area from managing your store.",
			github: "https://github.com/timo-tech19/ecommerce-store",
			stack: [
				"Nextjs",
				"Zustand",
				"Tailwind CSS",
				"Prisma",
				"Cloudinary",
				"Clerk Auth",
			],
			video: "/ecommerce.mp4",
		},
		{
			imageUrl: "/music.png",
			name: "Music App",
			url: "https://spotify-clone-timotech.vercel.app/",
			description:
				"Beautiful music application where you can upload your favourite songs and listen from anywhere.",
			github: "https://github.com/timo-tech19/spotify-clone",
			stack: [
				"Nextjs",
				"Supabase",
				"Tailwind CSS",
				"Zustand",
				"React Hook Form",
			],
			video: "/music.mp4",
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
									<Link
										href={route.href}
										target='_blank'
										className='hover:underline'
									>
										{route.label}
									</Link>
								</li>
							))}
						</ul>
					</nav>
				</div>
			</Container>
			<main>
				<RoughNotationGroup show>
					<section>
						<Container>
							<div className='flex flex-col-reverse px-4 lg:px-0 lg:flex-row items-center justify-around my-8 lg:my-16'>
								<div className='w-full lg:w-1/2 text-center lg:text-left'>
									<h1 className='text-5xl lg:text-7xl font-extrabold uppercase tracking-wider'>
										Timo{" "}
										<span className='font-semibold'>
											<RoughNotation type='highlight' color='#bbf7d0' order='1'>
												Heman
											</RoughNotation>
										</span>
									</h1>
									<hr className='mx-auto lg:ml-4 w-16 my-4 border-green-500 border-4' />
									<h3 className='mb-4 text-3xl lg:text-5xl'>
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
									<p className='mb-2 leading-7 text-md lg:text-lg'>
										Hello there, I&apos;m Timo from Cameroon. I&apos;ve been
										working professionally as a{" "}
										<RoughNotation type='highlight' color='#a5b4fc' order='2'>
											software developer for over a year.
										</RoughNotation>{" "}
										I started learning how to code about five years ago, two
										years before completing high school. Being{" "}
										<RoughNotation type='highlight' color='#bbf7d0' order='3'>
											{" "}
											self-taught
										</RoughNotation>{" "}
										has given me control over my learning process. It has also
										given me the opportunity to{" "}
										<RoughNotation type='highlight' color='#bae6fd' order='4'>
											{" "}
											learn skills and technologies much faster
										</RoughNotation>{" "}
										- an invaluable skill when{" "}
										<RoughNotation type='highlight' color='#fde68a' order='5'>
											working in startup environments.
										</RoughNotation>
									</p>
									<p className='leading-7 text-md lg:text-lg'>
										One of the reasons why I learned programming is because I
										wanted to work on cutting-edge projects that{" "}
										<RoughNotation type='underline' color='#1e40af' order='6'>
											solve complex problems
										</RoughNotation>{" "}
										in our ever-expanding digital world. At startups, I&apos;ve
										enjoyed working through problems that had me{" "}
										<RoughNotation type='box' color='#f97316' order='7'>
											googling and researching
										</RoughNotation>{" "}
										for the best possible solutions. It gets frustrating
										sometimes, but it&apos;s all smiles when it works. I&apos;m
										not scared of a challenge. Now I&apos;m looking for new
										opportunities that will further stretch my abilities.{" "}
										<RoughNotation type='circle' color='#dc2626' order='8'>
											Wanna hire me?
										</RoughNotation>
									</p>
									<div className='mt-10'>
										<Link
											href='mailto:timoheman16@gmail.com'
											target='_blank'
											className='rounded-md bg-amber-300 px-4 py-3 text-lg font-semibold shadow-sm hover:bg-amber-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-300'
										>
											Let&apos;s talk <span aria-hidden='true'>→</span>
										</Link>
									</div>
								</div>
								<div>
									<div className='rounded-full lg:rounded-xl overflow-hidden drop-shadow-2xl mb-8 lg:mb-0'>
										<Image
											className='object-cover object-top max-lg:w-[200px] max-lg:h-[200px]'
											src='/me.jpg'
											alt='Timo Heman'
											width={400}
											height={400}
										/>
									</div>
								</div>
							</div>
							<div className='flex items-center justify-center mt-16 lg:mt-0'>
								<RoughNotation
									customElement='div'
									type='bracket'
									brackets={["left", "right"]}
									order='9'
									padding={20}
									color='#1c1917'
								>
									<div className='flex items-center justify-center gap-x-8 lg:gap-x-24'>
										<Image
											className='max-lg:w-12 max-lg:h-12'
											src='/react.svg'
											alt='React'
											width={60}
											height={60}
										/>
										<Image
											className='max-lg:w-12 max-lg:h-12'
											src='/nextjs.svg'
											alt='Next'
											width={60}
											height={60}
										/>
										<Image
											className='max-lg:w-12 max-lg:h-12'
											src='/tailwind.svg'
											alt='Tailwind Css'
											width={60}
											height={60}
										/>
										<Image
											className='max-lg:w-12 max-lg:h-12'
											src='/typescript.svg'
											alt='TypeScript'
											width={60}
											height={60}
										/>
										<Image
											className='max-lg:w-12 max-lg:h-12'
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
				</RoughNotationGroup>
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
									className={index === 1 ? "lg:flex-row-reverse" : ""}
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
							<p className='text-lg mt-2 max-w-2xl mx-auto'>
								Thanks for taking the time to check out my portfolio. If you
								found my skills valuable to you, I&apos;d love to have a
								conversation. You can reach out to me on{" "}
								<Link
									href='https://twitter.com/timo__tech'
									target='_blank'
									className='underline text-green-500'
								>
									Twitter
								</Link>{" "}
								or{" "}
								<Link
									href='https://www.linkedin.com/in/timo-heman/'
									target='_blank'
									className='underline text-green-500'
								>
									LinkedIn
								</Link>{" "}
								. You can also click the button below to send me an email.
								Looking forward to hearing from you!
							</p>
							<Link
								href='mailto:timoheman16@gmail.com'
								target='_blank'
								className='inline-block mt-4 uppercase bg-amber-300 px-8 py-3 text-xl font-semibold shadow-lg hover:bg-amber-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-300 transition'
							>
								Let&apos;s Talk!
							</Link>
						</div>
					</Container>
				</footer>
			</main>
		</>
	);
}
