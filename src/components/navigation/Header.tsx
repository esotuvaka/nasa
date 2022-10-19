import { useState } from 'react';

interface IHeader {
	HandleSearchInputChange: (str: string) => void;
}

const Header = ({ HandleSearchInputChange }: IHeader) => {
	const [searchInput, setSearchInput] = useState<string>('');

	const HandleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearchInput(() => e.target.value);
		console.log('HEADER searchInput HERE: ' + searchInput);
	};

	return (
		<header className="flex w-full items-center justify-center bg-neutral-800 py-6 shadow-lg shadow-black">
			<input
				type="text"
				id="search"
				name="search"
				placeholder="Search for NASA image"
				className="h-8 rounded-md rounded-r-none px-4 text-black"
				onKeyUp={(e: React.KeyboardEvent<HTMLInputElement>) => {
					if (e.key === 'Enter' && searchInput?.length > 0) {
						HandleSearchInputChange(searchInput);
					}
				}}
				onChange={HandleInputChange}
			/>
			<button
				className="flex h-8 items-center justify-center rounded-lg rounded-l-none bg-black px-4  text-white"
				onClick={() => {
					if (searchInput?.length > 0) {
						HandleSearchInputChange(searchInput);
					}
				}}
			>
				Search
			</button>
		</header>
	);
};

export default Header;
