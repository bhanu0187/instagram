import React, { useContext } from "react";
import { HiHome } from "react-icons/hi";
import { IoSearchOutline } from "react-icons/io5";
import {
	AiOutlineCompass,
	AiOutlineHeart,
	AiOutlineMessage,
	AiOutlinePlusCircle,
	AiOutlineSetting,
} from "react-icons/ai";
import { HiBars3 } from "react-icons/hi2";
import { FiLogOut } from "react-icons/fi";
import { Link } from "react-router-dom";
import { signOut } from "firebase/auth";

import UserContext from "../context/user";
import * as ROUTES from "../constants/routes";
import FirebaseContext from "../context/firebase";

const LeftSection = () => {
	const { user } = useContext(UserContext);
	const { auth } = useContext(FirebaseContext);

	return (
		<div className=' w-2/3 md:flex md:justify-center md:items-center h-screen bg-white md:bg-transparent border-r-2 border-white flex flex-col justify-start items-center'>
			<div className='p-4'>
				<h1 className='flex justify-center w-full'>
					<Link to={ROUTES.DASHBOARD}>
						<img
							src='/images/logoWhite.png'
							alt='logo'
							className='m-6 w-6/12'
						/>
					</Link>
				</h1>
				<div className='text-white text-sm space-y-4'>
					<button className='flex items-center space-x-2 py-2 px-4 rounded-lg hover:text-gray-600'>
						<HiHome className='w-7 h-6 mr-6 text-white cursor-pointer hover:text-gray-600' />
						<span className=' text-white text-lg hover:text-gray-600'>
							Home
						</span>
					</button>

					<button className='flex items-center space-x-2 py-2 px-4 rounded-lg'>
						<IoSearchOutline className='w-7 h-6 mr-6 text-white cursor-pointer hover:text-gray-600' />
						<span className=' text-white text-lg hover:text-gray-600'>
							Search
						</span>
					</button>

					<button className='flex items-center space-x-2 py-2 px-4 rounded-lg'>
						<AiOutlineCompass className='w-7 h-6 mr-6 text-white cursor-pointer hover:text-gray-600' />
						<span className=' text-white text-lg hover:text-gray-600'>
							Explore
						</span>
					</button>

					<button className='flex items-center space-x-2 py-2 px-4 rounded-lg'>
						<AiOutlineMessage className='w-7 h-6 mr-6 text-white cursor-pointer hover:text-gray-600' />
						<span className=' text-white text-lg hover:text-gray-600'>
							Message
						</span>
					</button>

					<button className='flex items-center space-x-2 py-2 px-4 rounded-lg'>
						<AiOutlinePlusCircle className='w-7 h-6 mr-6 text-white cursor-pointer hover:text-gray-600' />
						<span className=' text-white text-lg hover:text-gray-600'>
							Create
						</span>
					</button>

					<button className='flex items-center space-x-2 py-2 px-4 rounded-lg'>
						<AiOutlineHeart className='w-7 h-6 mr-6 text-white cursor-pointer hover:text-gray-600' />
						<span className=' text-white text-lg hover:text-gray-600'>
							Notifications
						</span>
					</button>

					<button className='flex items-center space-x-2 py-2 px-4 rounded-lg'>
						<Link to={`/p/${user.displayName}`}>
							<img
								src={`/images/avatars/karl.jpg`}
								alt='userProfilePicture'
								className='rounded-full h-6 w-7 flex mr-6 hover:text-gray-600'
							/>
						</Link>
						<span className=' text-white text-lg hover:text-gray-600'>
							Profile
						</span>
					</button>
				</div>
				<div>
					<button className='flex items-center space-x-2 py-2 px-4 rounded-lg mt-28 dropdown dropdown-end dropdown-right'>
						<label
							tabIndex={0}
							className='flex items-center space-x-2'
						>
							<HiBars3 className='w-10 h-8 text-white cursor-pointer hover:text-gray-600' />
							<span className=' text-white text-md hover:text-gray-600'>
								More
							</span>
						</label>
						<ul
							tabIndex={0}
							className='dropdown-content menu p-2 shadow bg-white rounded-box w-52'
						>
							<li>
								<button
									className='flex items-center space-x-2 py-2 px-4 rounded-lg'
									onClick={() => {
										signOut(auth);
									}}
								>
									<FiLogOut className='w-8 h-7 text-gray-600 cursor-pointer hover:text-gray-600' />
									<span className=' text-gray-600 text-md hover:text-gray-600'>
										Log Out
									</span>
								</button>
							</li>
							<li>
								<button className='flex items-center space-x-2 py-2 px-4 rounded-lg'>
									<AiOutlineSetting className='w-8 h-7 text-gray-600 cursor-pointer hover:text-gray-600' />
									<span className=' text-gray-600 text-md hover:text-gray-600'>
										Setting
									</span>
								</button>
							</li>
						</ul>
					</button>
				</div>
			</div>
		</div>
	);
};

export default LeftSection;
