export interface IDisplay {
	image?: string;
}

const Collection = ({ image }: IDisplay) => {
	return (
		<>
			<h2>COLLECTION</h2>
			<img src={image} alt="/" />
		</>
	);
};

export default Collection;
