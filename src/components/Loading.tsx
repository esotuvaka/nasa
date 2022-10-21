const Loading = () => {
	return (
		<div className="flex h-[80vh] w-full items-center justify-center text-4xl text-white">
			<div className="mr-3 mt-3 block h-5 w-8 animate-spin rounded-full border-4 border-l-transparent border-t-transparent border-b-transparent border-r-blue-500 " />
			<p>Loading...</p>
		</div>
	);
};

export default Loading;
