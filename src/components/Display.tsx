import React, { FC } from 'react';

import Loading from './Loading';

import Nasa from '../assets/nasa.png';

interface IDisplay {
	handleItemChange: (num: number) => void;
	itemsLength: number;
	activeItem: number;

	loading: boolean;
	image?: string;
	title?: string;
	date?: string;
	center?: string;
	nasa_id?: string;
	description?: string;
	keywords?: string[];
}

const Display: FC<IDisplay> = ({
	handleItemChange,
	itemsLength,
	activeItem,

	loading,
	image,
	title,
	date,
	center,
	nasa_id,
	description,
	keywords,
}) => {
	const descriptionShorterIndex: number = description!?.indexOf('<');
	const descriptionShortened = description?.substring(
		0,
		descriptionShorterIndex
	);

	return (
		<>
			{loading ? (
				<Loading />
			) : (
				<>
					<div className="mx-auto mb-8 flex h-16 w-4/5 flex-row justify-between">
						<a
							className="flex h-16 flex-row justify-start hover:cursor-pointer"
							href="/"
						>
							<img src={Nasa} alt="NASA logo" className="" />
							<h1 className="-mt-1 ml-4 text-7xl text-neutral-200">
								API Explorer
							</h1>
						</a>
						<div className="flex h-16 items-end">
							<button
								onClick={() => {
									if (activeItem > 0) handleItemChange(-1);
								}}
								className={
									activeItem === 0
										? `mx-1 flex h-12 w-12 items-center justify-center rounded-l-md bg-neutral-500 text-3xl font-bold text-white`
										: `mx-1 flex h-12 w-12 items-center justify-center rounded-l-md bg-neutral-900 text-3xl font-bold text-white`
								}
							>
								-
							</button>
							<p className="mx-1 flex h-12 w-12 items-center justify-center bg-neutral-900 px-4 text-3xl font-bold text-white">
								{activeItem + 1}
							</p>
							<button
								onClick={() => {
									if (activeItem < itemsLength - 1) handleItemChange(1);
								}}
								className={
									activeItem === itemsLength - 1
										? `mx-1 flex h-12 w-12 items-center justify-center rounded-r-md bg-neutral-500 text-3xl font-bold text-white`
										: `mx-1 flex h-12 w-12 items-center justify-center rounded-r-md bg-neutral-900 text-3xl font-bold text-white`
								}
							>
								+
							</button>
						</div>
					</div>
					<div className="relative mx-auto grid w-4/5 grid-cols-5 gap-4 bg-black pb-20">
						<div className="col-span-3 mx-auto">
							<img src={image} id="mid-3-cols" className=" " alt="/" />
						</div>
						<div
							id="left-col"
							className="bg-neutral-black col-span-2 text-left text-white"
						>
							<h1 className="text-4xl">{title}</h1>
							<h2 className="mt-2 text-sm text-neutral-400">{date}</h2>
							<h3 className="mb-4 text-sm text-neutral-400">{nasa_id}</h3>
							<h4 className="mb-4 text-sm text-neutral-300">
								Image from {center} center
							</h4>
							<div className="flex flex-col">
								{React.Children.toArray(keywords?.slice(1, 4)).map(
									(keyword) => (
										<>
											{keyword ? (
												<div className="my-1">
													<p className="w-min max-w-[32vw] whitespace-pre rounded-md bg-neutral-900 px-2 py-1">
														{keyword}
													</p>
												</div>
											) : (
												<></>
											)}
										</>
									)
								)}
							</div>
							<p className="mt-4 text-sm text-white">{descriptionShortened}</p>
						</div>
					</div>
				</>
			)}
		</>
	);
};

export default Display;
