import React, { FC, useEffect, useState } from 'react';
import useDebounce from '../../hooks/useDebounce';

interface IHeader {
	changeSearch: (input: string) => void;
}

// TO DO: Add ability to change center and years in the query.
// 		  Combine searchInput, center, and years into a single memoized reducer state object

// TO DO: Possible drop down menu for these query options (NASA centers)

const Header: FC<IHeader> = ({ changeSearch }) => {
	const [search, setSearch] = useState<string>('');

	const debouncedSearch = useDebounce(search, 500);

	useEffect(() => {
		changeSearch(debouncedSearch);
	}, [debouncedSearch]);

	return (
		<header className="flex w-full items-center justify-center bg-black py-6 shadow-lg shadow-black">
			<input
				type="text"
				id="search"
				name="search"
				placeholder="Search for NASA image"
				// Stop pulsing when there is a search input
				className={
					search.length > 0
						? `h-8 rounded-md px-4 text-black focus:animate-none focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-500`
						: `animate-input h-8  rounded-md px-4 text-black focus:animate-none focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-500`
				}
				onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
					setSearch(e.target.value);

					console.log('DEBOUNCED: ' + debouncedSearch);
				}}
			/>
		</header>
	);
};

export default Header;
