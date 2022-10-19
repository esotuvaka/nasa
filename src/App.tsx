import React, { useState } from 'react';

import Header from './components/navigation/Header';
import Home from './components/Home';
import Display from './components/Display';

//EACH COLLECTION SHOULD HAVE:
interface ICollection {
	items: ItemsArray[];
}

type ItemsArray = {
	data: DataArray[];
	href?: string;
	links: LinkArray[];
};

type DataArray = {
	center?: string;
	date_created?: string;
	description?: string;
	keywords?: string[];
	location?: string;
	media_type?: string;
	nasa_id?: string;
	title: string;
	secondary_creator?: string;
};

type LinkArray = {
	href: string;
	rel: string;
	render: string;
};

function App() {
	//TO DO: Convert related state into a useReducer
	const [searchInput, setSearchInput] = useState<string>('');
	const [center, setCenter] = useState<string>('');

	const [collection, setCollection] = useState<ICollection>();

	const [loading, setLoading] = useState<boolean>(true);

	const [activeItem, setActiveItem] = useState<number>(0);

	// TO DO: Error handle for no items in collection, Error handle for bad query / no search results
	async function Search() {
		await fetch(
			// `https://images-api.nasa.gov/album/${searchInput}`
			`https://images-api.nasa.gov/search?q=${searchInput}&center=GSFC&media_type=image&year_start=2010`
		)
			.then((response) => response.json())
			.then((data) => {
				setCollection(data.collection);
				console.log(data.collection);
			});
		setActiveItem(0);
		setLoading(false);
	}

	const itemsLength: number = collection?.items.length!;

	const HandleImageChange = (num: number) => {
		setActiveItem((current) => current + num);
	};

	const HandleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearchInput(e.target.value);
	};

	const HandleNasaCenterChange = (str: string) => {
		setCenter(str);
	};

	return (
		<div className="min-h-[100vh] bg-neutral-800 pb-[10%]">
			{/* <Header Search={Search} /> */}
			{/* TO DO: Convert Header element into a component that passes input state to app, then app runs a search using that state
						Could be done by passing state up, then onClick / Enter tell parent to run Search on searchInput */}
			<header className="flex w-full items-center justify-center bg-neutral-800 py-6 shadow-lg shadow-black">
				<input
					type="text"
					id="search"
					name="search"
					placeholder="Search for NASA image"
					className="h-8 rounded-md rounded-r-none px-4 text-black"
					onKeyUp={(e: React.KeyboardEvent<HTMLInputElement>) => {
						if (e.key === 'Enter' && searchInput?.length > 0) {
							Search();
						}
					}}
					onChange={HandleSearchChange}
				/>
				<button
					className="flex h-8 items-center justify-center rounded-lg rounded-l-none bg-black px-4  text-white"
					onClick={() => {
						if (searchInput?.length > 0) {
							Search();
						}
					}}
				>
					Search
				</button>
			</header>
			{loading ? (
				<Home />
			) : (
				<>
					<Display
						itemsLength={itemsLength}
						activeItem={activeItem}
						HandleImageChange={HandleImageChange}
						image={collection?.items[activeItem].links[0]?.href}
						title={collection?.items[activeItem].data[0].title}
						date={collection?.items[activeItem].data[0].date_created}
						center={collection?.items[activeItem].data[0].center}
						nasa_id={collection?.items[activeItem].data[0].nasa_id}
						description={collection?.items[activeItem].data[0].description}
						keywords={collection?.items[activeItem].data[0].keywords}
					/>
				</>
			)}
		</div>
	);
}

export default App;
