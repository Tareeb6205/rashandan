import React from 'react';
import SearchBar from './SearchBar';

const HeadItemList = ({ clicked }) => {
	return (
		<div className="flex items-center justify-around">
			<h1 className="text-[#183c28] text-[28px] font-bold">Grocery To-Do</h1>
			<input type="date" name="name" placeholder="To do on?" onClick={clicked}/>
			<SearchBar clicks={clicked}/>
		</div>
		)
}

export default HeadItemList;