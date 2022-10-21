import React, { useEffect, useState } from 'react';

import Header from './components/navigation/Header';
import Home from './components/Home';
import Display from './components/Display';
import Loading from './components/Loading';

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
	//TO DO: Convert related search query state into a useReducer
	const [searchInput, setSearchInput] = useState<string>('');
	const [center, setCenter] = useState<string>('');

	const [collection, setCollection] = useState<ICollection>();

	const [loading, setLoading] = useState<boolean>(true);

	const [activeItem, setActiveItem] = useState<number>(0);

	useEffect(() => {
		//search NASA API automatically using debounce from Header component
		async function fetchData() {
			try {
				setLoading(true);

				const data = await fetch(
					`https://images-api.nasa.gov/search?q=${searchInput}&center=GSFC&media_type=image&year_start=2010`
				).then((res) => res.json());
				if (data.collection.items.length !== 0) {
					setCollection(data.collection);
					setActiveItem(0);
					setLoading(false);
					console.log(data.collection);
				} else {
				}
			} catch (error) {
				console.error(error);
			}
		}

		if (searchInput) fetchData();
	}, [searchInput]);

	const itemsLength: number = collection?.items.length!;

	const handleImageChange = (num: number) => {
		setActiveItem((current) => current + num);
	};

	return (
		<div className="min-h-[100vh] bg-neutral-800 pb-[10%]">
			<Header changeSearch={(data) => setSearchInput(data)} />

			{/* TO DO: Combine Loading component with display and pass in loading state; Reintroduce Home component afterwards */}
			{loading ? (
				<Loading />
			) : (
				<Display
					itemsLength={itemsLength}
					activeItem={activeItem}
					handleImageChange={handleImageChange}
					image={collection?.items[activeItem].links[0]?.href}
					title={collection?.items[activeItem].data[0].title}
					date={collection?.items[activeItem].data[0].date_created}
					center={collection?.items[activeItem].data[0].center}
					nasa_id={collection?.items[activeItem].data[0].nasa_id}
					description={collection?.items[activeItem].data[0].description}
					keywords={collection?.items[activeItem].data[0].keywords}
				/>
			)}
		</div>
	);
}

export default App;
