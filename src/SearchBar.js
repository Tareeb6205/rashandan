import React from 'react';

const SearchBar = ( {clicks} ) => {
	return (
		<div className="p-3">
			<input
			className="p-3 border-2 border-solid border-green-300 bg-blue-200 rounded-lg"
			type="search"
			placeholder="Search items"
			onClick={clicks}
			/>
		</div>
		)
}

export default SearchBar;