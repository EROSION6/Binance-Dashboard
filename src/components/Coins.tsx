import { FiRotateCw } from 'react-icons/fi';
import { coinsData } from '../data';

type Props = {
	icon: string;
	title: string;
	titleFull: string;
	rost: string;
	rostNumber: number;
	price: number;
	plus: boolean;
};

const Coins = () => {
	return (
		<div className='w-full border border-[#181717] bg-[#101010] rounded-lg mt-7 p-5'>
			<div className='w-full flex justify-between items-center'>
				<h3 className='text-white text-xl'>Coins</h3>
				<button className='bg-black text-white p-2 rounded-lg border border-[#181717]'>
					<FiRotateCw />
				</button>
			</div>
			<div>
				{coinsData.map(coin => (
					<Card key={coin.price} {...coin} />
				))}
			</div>
		</div>
	);
};

const Card = ({ icon, title, titleFull, rost, rostNumber, price, plus }: Props) => {
	return (
		<div className='flex justify-between items-center text-white mt-5'>
			<div className='flex space-x-3 items-center'>
				<img src={icon} alt={title} className='w-9 h-9' />
				<div>
					<strong>{title}</strong>
					<p className='text-[#606060]'>{titleFull}</p>
				</div>
			</div>
			<div className='flex flex-col'>
				<b className={rost > '200' ? 'text-[#45d208]' : 'text-[#c33]'}>${rost}</b>
				<p className={rost > '200' ? 'text-[#1d5704]' : 'text-[#791616]'}>${rostNumber}</p>
			</div>
			<div>
				<p>${price}</p>
				<p className='text-[#606060]'>{plus}%</p>
			</div>
		</div>
	);
};

export default Coins;
