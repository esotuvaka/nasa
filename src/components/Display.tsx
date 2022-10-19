import React from 'react';

interface IDisplay {
	HandleImageChange: (num: number) => void;
	itemsLength: number;
	activeItem: number;

	image?: string;
	title?: string;
	date?: string;
	center?: string;
	nasa_id?: string;
	description?: string;
	keywords?: string[];
}

const Collection = ({
	HandleImageChange,
	itemsLength,

	activeItem,
	image,
	title,
	date,
	center,
	nasa_id,
	description,
	keywords,
}: IDisplay) => {
	const descriptionShorterIndex: number = description!?.indexOf('<');
	const descriptionShortened = description?.substring(
		0,
		descriptionShorterIndex
	);

	return (
		<>
			<div className="mx-auto my-12 flex w-4/5 items-center justify-center">
				<button
					onClick={() => {
						if (activeItem > 0) HandleImageChange(-1);
					}}
					className="mx-1 flex h-8 w-8 items-center justify-center bg-black text-2xl text-white"
				>
					-
				</button>
				<p className="mx-1 flex h-8 items-center justify-center bg-black px-4 text-2xl text-white">
					{activeItem + 1}
				</p>
				<button
					onClick={() => {
						if (activeItem < itemsLength - 1) HandleImageChange(1);
					}}
					className="mx-1 flex h-8 w-8 items-center justify-center bg-black text-2xl text-white"
				>
					+
				</button>
			</div>
			<div className="relative mx-auto grid w-4/5 grid-cols-5 gap-4 bg-neutral-800">
				<div
					id="left-col"
					className="col-span-2 bg-neutral-800/50 text-left text-white"
				>
					<h1 className="text-4xl">{title}</h1>
					<h2 className="mt-2">{date}</h2>
					<h3 className="mb-4 text-sm">{nasa_id}</h3>
					<h4 className="mb-4">Image from {center} center</h4>
					{React.Children.toArray(keywords?.slice(0, 3)).map((keyword) => (
						<>
							{keyword ? (
								<div className="my-1">
									<p className="bg-neutral-900 px-2 py-1">{keyword}</p>
								</div>
							) : (
								<></>
							)}
						</>
					))}
					<p className="text-sm text-white">{descriptionShortened}</p>
				</div>
				<img
					src={image}
					id="mid-3-cols"
					className={`col-span-3 mx-auto`}
					alt="/"
				/>
			</div>
		</>
	);
};

export default Collection;
