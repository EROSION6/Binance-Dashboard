import { FaBell } from 'react-icons/fa';
import { BsEnvelopeFill } from 'react-icons/bs';
import avatar from '../assets/avatar-svgrepo-com.svg';
import { IoSearchOutline } from 'react-icons/io5';
import { RxHamburgerMenu } from 'react-icons/rx';
import { useContext } from 'react';
import { Context } from '../Context/burgerMenu';

const Navbar = () => {
	const { openAndCloseMenu } = useContext(Context);

	return (
		<header className='flex justify-between w-full pt-7 '>
			<div className='lg:hidden'>
				<h1 className='text-white text-3xl'>Dashboard</h1>
			</div>
			<div className='lg:w-full'>
				<div className='flex items-center space-x-7 relative justify-between md:justify-end'>
					<RxHamburgerMenu
						onClick={openAndCloseMenu}
						className='text-[#606060] w-8 h-8 hidden lg:block'
					/>
					<IoSearchOutline className='text-[#606060] w-5 h-5 absolute left-[.7rem] top-[.6rem] md:hidden' />
					<input
						type='text'
						placeholder='Search...'
						className='w-[20rem] border border-[#181717] bg-[#101010] rounded-md py-[.5rem] px-9 text-[#606060] placeholder:text-[#606060] lg:w-[80%] md:hidden'
					/>
					<div className='flex items-center gap-3 text-white'>
						<FaBell className='w-5 h-5 ' />
						<BsEnvelopeFill className='w-5 h-5' />
						<img src={avatar} alt='avatar' className='w-9 h-9 rounded-full' />
					</div>
				</div>
			</div>
		</header>
	);
};

export default Navbar;
