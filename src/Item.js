import React from 'react';
// import { robots } from './robots';


const Item = ({sno,name, category, quantity, itemremove}) => {
	return (
		<div className="flex items-center justify-around bg-lime-100">
			{/*<img src={`https://robohash.org/${1}?set=set3`} alt="Robo" width="250" height="250"/>*/}
			<div id="item" className="flex justify-center items-center">
				<input type="checkbox"/>
				<div>{sno}</div>
				<div>{ name }</div>
				<div>{ quantity }</div>
				<button onClick={itemremove}>X</button>
			</div>
		</div>
	)
}

export default Item;
