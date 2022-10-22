import { FC } from 'react';

import Earth from '../assets/earth.png';
import Moon from '../assets/moon.png';
import Nasa from '../assets/nasa.png';

interface IHome {
	// Year range used in the search query (e.g: 1960, 2020)
	handleTimeChange: (start: number, end: number) => void;

	// NASA center used in the search query
	// handleCenterChange: (center: string) => void;

	// // Number of keywords shown for each data item
	// handleKeywordsChange: (keywords: number) => void;
}

const Home: FC<IHome> = ({
	handleTimeChange,
	// handleCenterChange,
	// handleKeywordsChange,
}) => {
	return (
		<div
			id="Home"
			className="relative flex h-[95vh] items-center justify-center overflow-hidden  bg-gradient-to-t from-neutral-800 to-black text-3xl text-white"
		>
			<div className="absolute top-8 left-[5%] flex h-16 w-full flex-row">
				<img src={Nasa} alt="NASA logo" className="" />
				<h1 className="-mt-1 ml-4 text-7xl">API Explorer</h1>
			</div>
			<aside className="absolute left-[5%] top-32 w-[320px]  ">
				<p className="mb-1">Years</p>
				{/* TO DO: Implement state logic, state-prop passing, and app query manipulation for year start/end inputs */}
				<div className="flex">
					<input
						type="number"
						name="search"
						placeholder="1958"
						className="h-7 w-20 rounded-md bg-neutral-200 px-2 text-center text-lg text-black focus:animate-none focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-500"
					/>
					<span className="mx-2 text-lg">to</span>
					<input
						type="number"
						name="search"
						placeholder="2023"
						className="h-7 w-20 rounded-md bg-neutral-200 px-2 text-center text-lg text-black focus:animate-none focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-500"
					/>
				</div>
				<p className="mt-4 mb-1">Center *</p>

				{/* TO DO: Implement state logic, state-prop passing, and app query manipulation for each button with conditional styles based on center chosen */}
				<div className="grid grid-cols-5 gap-1">
					<div className="nasa-center-container">
						<button className="nasa-center-button">ARC</button>
					</div>
					<div className="nasa-center-container">
						<button className="nasa-center-button">AFRC</button>
					</div>
					<div className="flex text-lg">
						<button className="nasa-center-button">GRC</button>
					</div>
					<div className="nasa-center-container">
						<button className="nasa-center-button">GSFC</button>
					</div>
					<div className="nasa-center-container">
						<button className="nasa-center-button">JPL</button>
					</div>
					<div className="nasa-center-container">
						<button className="nasa-center-button">JSC</button>
					</div>
					<div className="nasa-center-container">
						<button className="nasa-center-button">KSC</button>
					</div>
					<div className="nasa-center-container">
						<button className="nasa-center-button">LRC</button>
					</div>
					<div className="nasa-center-container">
						<button className="nasa-center-button">MSFC</button>
					</div>
					<div className="nasa-center-container">
						<button className="nasa-center-button">MAF</button>
					</div>
					<p className="col-span-5 flex text-sm">
						<span className="mx-1">*</span>Not choosing a center will show
						results from the entire NASA API
					</p>
				</div>
			</aside>
			<div className="planets-container">
				<div className="earth">
					<img
						className="h-full w-full"
						id="earth-image"
						src={Earth}
						alt="a view of Earth from space"
					/>
				</div>

				<div className="planet-z-index" id="moon-index">
					<div className="route">
						<div className="planet-container" id="moon-container">
							<img
								className="planet"
								id="moon-image"
								src={Moon}
								alt="a view of the Moon from Earth"
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
