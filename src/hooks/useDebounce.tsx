import { useState, useEffect } from 'react';

function useDebounce(input: any, delay: number) {
	const [debounceInput, setDebouncedInput] = useState<any>(input);

	useEffect(() => {
		const handler = setTimeout(() => {
			setDebouncedInput(input);
		}, delay);

		return () => {
			clearTimeout(handler);
		};
	}, [input, delay]);

	return debounceInput;
}

export default useDebounce;
