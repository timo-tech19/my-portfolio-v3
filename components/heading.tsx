interface HeadingProps {
	title: string;
}

const Heading: React.FC<HeadingProps> = ({ title }) => {
	return (
		<div className='border-l-4 pl-2 border-green-500 text-lg font-semibold italic'>
			{title}
		</div>
	);
};

export default Heading;
