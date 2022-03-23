import React from 'react';

const AddNew = ({newitem, namechange, quachange, formshow, formclear}) => {
	return(
		<div>
			<form id="#form" className="flex justify-evenly hidden">
	          <input
	          type="text"
	          name="name"
	          onChange={namechange}
	          placeholder="Item name" />
	          <select id="category" name="category">
	            <option value="dairy">Dairy</option>
	            <option value="fruits/vegs">Fruits/Veggies</option>
	            <option value="snacks">Snacks</option>
	            <option value="other">Other</option>
	          </select>
	          <input
	          type="text"
	          name="name"
	          onChange={quachange}
	          placeholder="Quantity"
	          />
	        </form>
	          <button
	          id="enteritem"
	          className="hidden"
	          type="Submit" 
	          onClick={newitem}>Enter</button>
	        <p
	        className="text-[#183c28] text-[18px] ml-5 text-left hover:bg-sky-100"
	        onClick={formshow}
	        >+ Add new</p>
        </div>
		)
}

export default AddNew;