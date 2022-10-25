import { FC, useEffect, useState } from 'react';

import Earth from '../assets/earth.png';
import Moon from '../assets/moon.png';
import Nasa from '../assets/nasa.png';

interface IHome {
	// Year range used in the search query (e.g: 1960, 2020)
	handleStartChange: (start: string) => void;
	handleEndChange: (end: string) => void;

	// NASA center used in the search query
	handleCenterChange: (center: string) => void;
}

const Home: FC<IHome> = ({
	handleStartChange,
	handleEndChange,
	handleCenterChange,
}) => {
	const [start, setStart] = useState<string>('1958');
	const [end, setEnd] = useState<string>('2023');
	const [center, setCenter] = useState<string>('ARC');

	useEffect(() => {
		handleStartChange(start);
		handleEndChange(end);
	}, [start, end]);

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
				<div className="flex">
					<input
						type="number"
						name="search"
						placeholder="1958"
						onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
							if (e.target.value.length === 4) {
								setStart(e.target.value);
							}
						}}
						className="h-7 w-20 rounded-md bg-neutral-200 px-2 text-center text-lg text-black focus:animate-none focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-500"
					/>
					<span className="mx-2 text-lg">to</span>
					<input
						type="number"
						name="search"
						placeholder="2023"
						onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
							if (e.target.value.length === 4) {
								setEnd(e.target.value);
							}
						}}
						className="h-7 w-20 rounded-md bg-neutral-200 px-2 text-center text-lg text-black focus:animate-none focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-500"
					/>
				</div>
				<p className="mt-4 mb-1">Center </p>

				<div className="grid grid-cols-5 gap-1">
					<div className="nasa-center-container">
						<button
							onClick={() => {
								handleCenterChange('ARC');
								setCenter('ARC');
							}}
							className={
								center === 'ARC'
									? `nasa-center-button-active`
									: `nasa-center-button`
							}
						>
							ARC
						</button>
					</div>
					<div className="nasa-center-container">
						<button
							onClick={() => {
								handleCenterChange('AFRC');
								setCenter('AFRC');
							}}
							className={
								center === 'AFRC'
									? `nasa-center-button-active`
									: `nasa-center-button`
							}
						>
							AFRC
						</button>
					</div>
					<div className="flex text-lg">
						<button
							onClick={() => {
								handleCenterChange('GRC');
								setCenter('GRC');
							}}
							className={
								center === 'GRC'
									? `nasa-center-button-active`
									: `nasa-center-button`
							}
						>
							GRC
						</button>
					</div>
					<div className="nasa-center-container">
						<button
							onClick={() => {
								handleCenterChange('GSFC');
								setCenter('GSFC');
							}}
							className={
								center === 'GSFC'
									? `nasa-center-button-active`
									: `nasa-center-button`
							}
						>
							GSFC
						</button>
					</div>
					<div className="nasa-center-container">
						<button
							onClick={() => {
								handleCenterChange('JPL');
								setCenter('JPL');
							}}
							className={
								center === 'JPL'
									? `nasa-center-button-active`
									: `nasa-center-button`
							}
						>
							JPL
						</button>
					</div>
					<div className="nasa-center-container">
						<button
							onClick={() => {
								handleCenterChange('JSC');
								setCenter('JSC');
							}}
							className={
								center === 'JSC'
									? `nasa-center-button-active`
									: `nasa-center-button`
							}
						>
							JSC
						</button>
					</div>
					<div className="nasa-center-container">
						<button
							onClick={() => {
								handleCenterChange('KSC');
								setCenter('KSC');
							}}
							className={
								center === 'KSC'
									? `nasa-center-button-active`
									: `nasa-center-button`
							}
						>
							KSC
						</button>
					</div>
					<div className="nasa-center-container">
						<button
							onClick={() => {
								handleCenterChange('LRC');
								setCenter('LRC');
							}}
							className={
								center === 'LRC'
									? `nasa-center-button-active`
									: `nasa-center-button`
							}
						>
							LRC
						</button>
					</div>
					<div className="nasa-center-container">
						<button
							onClick={() => {
								handleCenterChange('MSFC');
								setCenter('MSFC');
							}}
							className={
								center === 'MSFC'
									? `nasa-center-button-active`
									: `nasa-center-button`
							}
						>
							MSFC
						</button>
					</div>
					<div className="nasa-center-container">
						<button
							onClick={() => {
								handleCenterChange('MAF');
								setCenter('MAF');
							}}
							className={
								center === 'MAF'
									? `nasa-center-button-active`
									: `nasa-center-button`
							}
						>
							MAF
						</button>
					</div>
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
