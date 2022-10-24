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

type YearObject = {
	start: string;
	end: string;
};

function App() {
	// TO DO: Convert related search query state into a useReducer. searchInput, center, and years are all used in the search query

	const [searchInput, setSearchInput] = useState<string>('');
	const [center, setCenter] = useState<string>('GSFC');
	const [start, setStart] = useState<string>('1958');
	const [end, setEnd] = useState<string>('2023');

	const [collection, setCollection] = useState<ICollection>();
	const [loading, setLoading] = useState<boolean>(true);

	const [activeItem, setActiveItem] = useState<number>(0);

	useEffect(() => {
		//search NASA API automatically using debounce from Header component
		async function fetchData() {
			try {
				setLoading(true);

				const data = await fetch(
					`https://images-api.nasa.gov/search?q=${searchInput}&center=${center}&media_type=image&year_start=${start}&year_end=${end}`
				).then((res) => res.json());
				if (data.collection.items.length !== 0) {
					setCollection(data.collection);
					setActiveItem(0);
					setLoading(false);
					console.log(data.collection);
				}
			} catch (error) {
				console.error(error);
			}
		}

		if (searchInput) fetchData();
	}, [searchInput]);

	const itemsLength: number = collection?.items.length!;

	const handleItemChange = (num: number) => {
		setActiveItem((current) => current + num);
	};

	const handleStartChange = (yearStart: string) => {
		setStart(yearStart);
	};

	const handleEndChange = (yearEnd: string) => {
		setEnd(yearEnd);
	};

	const handleCenterChange = (center: string) => {
		setCenter(center);
	};

	return (
		<div className="min-h-[100vh] overflow-x-hidden bg-black">
			<Header changeSearch={(data) => setSearchInput(data)} />

			{searchInput === '' ? (
				<Home
					handleStartChange={handleStartChange}
					handleEndChange={handleEndChange}
					handleCenterChange={handleCenterChange}
				/>
			) : (
				// TO DO: Try to refactor Display component. Currently is changing state in the child then passing up to the parent via handleItemChange.
				//  		 Parent uses that state to set the activeItem then passes item data down based on that activeItem
				<Display
					itemsLength={itemsLength}
					activeItem={activeItem}
					handleItemChange={handleItemChange}
					loading={loading}
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
