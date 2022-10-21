import React, { useEffect, useState } from 'react';
import useDebounce from '../../hooks/useDebounce';

interface IHeader {
	changeSearch: (input: string) => void;
}

const Header = ({ changeSearch }: IHeader) => {
	const [search, setSearch] = useState<string>('');

	const debouncedSearch = useDebounce(search, 500);

	useEffect(() => {
		changeSearch(debouncedSearch);
	}, [debouncedSearch]);

	return (
		<header className="flex w-full items-center justify-center bg-neutral-800 py-6 shadow-lg shadow-black">
			<input
				type="text"
				id="search"
				name="search"
				placeholder="Search for NASA image"
				className="h-8 rounded-md px-4 text-black"
				onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
					setSearch(e.target.value);

					console.log('DEBOUNCED: ' + debouncedSearch);
				}}
			/>
		</header>
	);
};

export default Header;
