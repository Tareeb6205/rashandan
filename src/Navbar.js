import React from 'react';
import image1 from './assets/RashanDan logo square.png';
import settings from './assets/Settingforapp.png';
import add from './assets/Addforapp.png';
import history from './assets/Historyforapp.png';
import profile from './assets/Profileforapp.png';


const Navbar = () => {
	return (
		<div className="flex justify-between items-center bg-[#183c28] h-20">
			<div className="flex justify-start items-center">
				<img src={image1} className="ml-14 w-14 h-auto" alt=""/>
				<h1 className="ml-4 font-[600] font-sans text-[46px] text-[#f4ebce]">RASHANDAN</h1>
			</div>
			<div className="flex justify-end">
				<a href="" className="mr-5 w-8 h-auto hover:rotate-12">
					<img src={settings} alt="" className="" />
				</a>
				<a href="" className="mr-5 w-8 h-auto hover:grow-100">
					<img src={add} alt="" className="" />
				</a>
				<a href="" className="mr-5 w-8 h-auto">
					<img src={history} alt="" className="" />
				</a>
				<a href="" className="mr-5 w-8 h-auto">
					<img src={profile} alt="" className="" />
				</a>
			</div>
		</div>
		)
	}


export default Navbar;