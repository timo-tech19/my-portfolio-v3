import useVideoModal from "@/hooks/use-video-modal";
import Image from "next/image";
import Link from "next/link";

interface ProjectProps {
	imageUrl: string;
	index: number;
	name: string;
	description: string;
	github: string;
	className?: string;
	video: string;
	stack: string[];
}

const Project: React.FC<ProjectProps> = ({
	imageUrl,
	index,
	name,
	description,
	github,
	className,
	video,
	stack,
}) => {
	const videoModal = useVideoModal();

	return (
		<div
			className={`flex flex-col lg:flex-row lg:justify-around items-center mt-20 ${className}`}
		>
			<div className='flex'>
				<span className='text-5xl font-bold border-r-4 pr-2 border-r-green-500 self-start'>
					0{index}
				</span>
				<div className='max-h-[200px] overflow-hidden ml-4'>
					<Image src={imageUrl} alt={name} width={400} height={400} />
				</div>
			</div>
			<div className='lg:w-1/3 text-center lg:text-left w-3/4 mt-8 lg:mt-0'>
				<h3 className='text-3xl font-semibold'>{name}</h3>
				<ul className='mt-2 flex gap-x-3 items-center justify-center lg:justify-stretch flex-wrap gap-y-4'>
					{stack.map((item) => (
						<li key={item} className='bg-stone-200 py-1 px-2 rounded-md'>
							{item}
						</li>
					))}
				</ul>
				<p className='mt-4'>{description}</p>
				<div className='mt-4 flex justify-center lg:justify-stretch gap-x-2'>
					<Link
						href={github}
						className='rounded-md border-2 border-amber-300 px-3 py-1.5 text-lg font-semibold shadow-sm hover:bg-amber-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-300 transition'
					>
						Github
					</Link>
					<button
						onClick={() => videoModal.onOpen(video)}
						className='rounded-md border-2 border-amber-300 px-3 py-1.5 text-lg font-semibold shadow-sm hover:bg-amber-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-300 transition'
					>
						Demo
					</button>
				</div>
			</div>
		</div>
	);
};

export default Project;
