import Image from "next/image";
import Link from "next/link";

interface CompanyProps {
	imageSrc: string;
	title: string;
	linkedIn: string;
}

const Company: React.FC<CompanyProps> = ({ imageSrc, title, linkedIn }) => {
	return (
		<div>
			<Image
				className='bg-neutral-950 w-auto h-20 object-cover'
				src={imageSrc}
				alt={title}
				width={200}
				height={200}
			/>
			<Link
				target='_blank'
				href={linkedIn}
				className='mt-4 inline-block underline hover:text-amber-300'
			>
				{title}
			</Link>
		</div>
	);
};

export default Company;
