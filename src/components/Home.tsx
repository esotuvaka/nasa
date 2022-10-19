type Props = {};

const Home = (props: Props) => {
	return (
		<div
			id="Home"
			className="relative flex h-[70vh] w-full items-center justify-center overflow-hidden text-3xl text-white"
		>
			<div className="h-64 w-64 rounded-full bg-neutral-100" />
			<div
				id="mercury"
				className="absolute z-50 h-[10vh] w-[40vh] rounded-[50%] border-2 border-dashed border-white/50 transition-all duration-300 hover:cursor-pointer hover:border-2 hover:border-solid hover:border-white "
			/>
			<div className="absolute z-40 ml-[40vh] text-white">Time</div>
			<div
				id="venus"
				className="absolute z-40 h-[15vh] w-[60vh] rounded-[50%] border-2 border-dashed border-white/50 transition-all duration-300 hover:cursor-pointer hover:border-2 hover:border-solid hover:border-white"
			/>
			<div className="absolute z-30 mr-[55vh] mt-[5vh] text-white">Center</div>
			<div
				id="earth"
				className="absolute z-30 h-[20vh] w-[80vh] rounded-[50%] border-2 border-dashed border-white/50 transition-all duration-300 hover:cursor-pointer hover:border-2 hover:border-solid hover:border-white"
			/>
			<div className="absolute z-20 ml-[60vh] mb-[14vh]">Keywords</div>
			<div
				id="mars"
				className="absolute z-20 h-[25vh] w-[100vh] rounded-[50%] border-2 border-dashed border-white/50 transition-all duration-300 hover:border-2 hover:border-solid hover:border-white"
			/>
		</div>
	);
};

export default Home;
