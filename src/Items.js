import React from 'react';
import Item from './Item';

const Items = ({clicked, items,itemremove}) => {
	const Users = items.map ( (item,i) => {
			return (
				<Item 
				sno={i+1}
				name= {item.name}
				category={item.category}
				quantity={item.quantity}
				itemremove={itemremove}
				/>
				);
			})
	return (
		<div>
			{Users}
		</div>
	);
}
export default Items;