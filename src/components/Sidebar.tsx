import { useContext, useState } from 'react';
import { navigation } from '../data';
import { FcStumbleupon } from 'react-icons/fc';
import { Context } from '../Context/burgerMenu';
import { FiLogOut } from 'react-icons/fi';

const Sidebar = () => {
	const [isActive, setIsActive] = useState<number>(1);

	const { open } = useContext(Context);

	return (
		<aside className={open ? 'xl:w-[6rem]' : 'w-0'}>
			<div
				className={`h-screen bg-[#101010] w-[15rem] px-4 xl:w-[6rem] md:fixed md:z-10 ${
					open ? ' transform-x-0' : '-translate-x-[150%]'
				} transition-transform duration-300 ease-in-out`}>
				<div className='flex items-center text-white py-6 space-x-1 '>
					<FcStumbleupon className='w-16 h-12' />
					<h1 className='text-2xl xl:hidden'>CoinSpace</h1>
				</div>
				<div className='h-[88%] flex flex-col justify-between xl:items-center'>
					<div className='space-y-10 xl:space-y-0'>
						{navigation.map((link, i) => (
							<div key={i}>
								<h2 className='text-white text-xl border-b border-[#181717] pb-4 xl:hidden'>
									{link.title}
								</h2>
								<ul className='space-y-4 pt-4'>
									{link.navigate.map((nav, i) => (
										<li
											className={`flex items-center space-x-3 ${
												isActive === nav.id ? ' text-white' : 'text-[#606060]'
											}`}
											key={i}
											onClick={() => setIsActive(nav.id)}>
											<span className='xl:pt-4'>{nav.icon}</span>
											<a className='text-lg xl:hidden' href='#'>
												{nav.title}
											</a>
										</li>
									))}
								</ul>
							</div>
						))}
					</div>
					<div className='flex items-center space-x-3 text-[#606060] hover:text-white transition duration-300'>
						<FiLogOut className='w-6 h-6 ' />
						<a className='text-lg xl:hidden' href='#'>
							Log out
						</a>
					</div>
				</div>
			</div>
		</aside>
	);
};

export default Sidebar;
