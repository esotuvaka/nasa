import { useEffect, useState } from 'react';

import Loading from './components/Loading';
import HUD from './components/Display';

import './App.css';

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
	title: string;
	date_created?: string;
	keywords?: string[];
	nasa_id?: string;
	secondary_creator?: string;
};

type LinkArray = {
	href: string;
	rel: string;
	render: string;
};

function App() {
	const [searchInput, setSearchInput] = useState<string>('');
	//TO DO: make a custom type for the collection
	const [collection, setCollection] = useState<ICollection>();
	const [loading, setLoading] = useState<boolean>(true);

	async function Search() {
		const returnedImage = await fetch(
			`https://images-api.nasa.gov/search?q=${searchInput}&center=JPL&media_type=image&year_start=2010`
		)
			.then((response) => response.json())
			.then((data) => {
				//set equal to the array of items
				setCollection(data.collection);
				console.log(data.collection);
				console.log('LINK HERE: ' + collection?.items[0].links[0].href);
			});
		setLoading(false);
	}

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearchInput(e.target.value);
	};

	return (
		<div className="App">
			<header className="py-4 bg-stone-800 flex w-full justify-center items-center">
				<input
					type="text"
					id="search"
					name="search"
					placeholder="Search for NASA image"
					className="px-4 rounded-md text-black rounded-r-none h-8"
					onKeyUp={(e: React.KeyboardEvent<HTMLInputElement>) => {
						if (e.key === 'Enter' && searchInput?.length > 0) {
							Search();
						}
					}}
					onChange={handleChange}
				/>
				<button
					className="px-4 bg-black h-8 rounded-lg rounded-l-none flex justify-center items-center  text-white"
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
				<Loading />
			) : (
				<HUD image={collection?.items[0].links[0].href} />
			)}
		</div>
	);
}

export default App;
