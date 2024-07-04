import { RxDashboard } from 'react-icons/rx';
import { GoCreditCard } from 'react-icons/go';
import { BsArrowLeftRight } from 'react-icons/bs';
import { GrMoney } from 'react-icons/gr';
import { IoIosStar } from 'react-icons/io';
import { BiSolidShoppingBags } from 'react-icons/bi';
import { FaBell } from 'react-icons/fa';
import { IoMdSettings } from 'react-icons/io';
import { TbCircleLetterIFilled } from 'react-icons/tb';
import bitcoin from '../assets/coin/bitcoin_czsw521zkbe7.svg';
import coin from '../assets/coin/coin_1y6d1hzluydd.svg';
import dash from '../assets/coin/dash-3-logo-svgrepo-com.svg';
import ripple from '../assets/coin/ripple_8ejkv27prrxc.svg';
import usdt from '../assets/coin/usdt-svgrepo-com.svg';
import doge from '../assets/coin/doge-svgrepo-com.svg';
import litecoin from '../assets/coin/litecoin-ltc-cryptocurrency-svgrepo-com.svg';

export const navigation = [
	{
		title: 'Quick Access',
		navigate: [
			{ id: 1, icon: <RxDashboard className='w-6 h-6' />, title: 'Dashboard' },
			{ id: 2, icon: <GoCreditCard className='w-6 h-6' />, title: 'My Wallet' },
			{ id: 3, icon: <BsArrowLeftRight className='w-6 h-6' />, title: 'Exchange' },
		],
	},
	{
		title: 'Service',
		navigate: [
			{ id: 4, icon: <GrMoney className='w-6 h-6' />, title: 'Transactions' },
			{ id: 5, icon: <IoIosStar className='w-6 h-6' />, title: 'Rewards' },
			{ id: 6, icon: <BiSolidShoppingBags className='w-6 h-6' />, title: 'Utility Plan' },
		],
	},
	{
		title: 'Account',
		navigate: [
			{ id: 7, icon: <FaBell className='w-6 h-6' />, title: 'Natification' },
			{ id: 8, icon: <IoMdSettings className='w-6 h-6' />, title: 'Setting' },
			{ id: 9, icon: <TbCircleLetterIFilled className='w-6 h-6' />, title: 'FAQ' },
		],
	},
];

export const coinsData = [
	{
		icon: bitcoin,
		title: 'BTC',
		titleFull: 'Bitcoin',
		rost: 435.94,
		rostNumber: '68.44%',
		percent: '5.20%',
		price: '6,355.94',
		plus: '22,288',
	},
	{
		icon: litecoin,
		title: 'LCC',
		titleFull: 'Litecoin',
		rost: 135.98,
		rostNumber: '18.44%',
		price: '9,977.91',
		plus: '12.284',
	},
	{
		icon: doge,
		title: 'XDG',
		titleFull: 'Dogecoin',
		rost: 939.99,
		rostNumber: '88.84%',
		price: '4,356.84',
		plus: '82.188',
	},
	{
		icon: usdt,
		title: 'ETH',
		titleFull: 'Ethercoin',
		rost: 435.94,
		rostNumber: '68.44%',
		percent: '5.20%',
		price: '6,355.94',
		plus: '22,288',
	},
	{
		icon: dash,
		title: 'DASH',
		titleFull: 'Dash',
		rost: 135.98,
		rostNumber: '18.44%',
		price: '9,977.91',
		plus: '12.284',
	},
	{
		icon: ripple,
		title: 'XPP',
		titleFull: 'Ripple',
		rost: 435.94,
		rostNumber: '68.44%',
		percent: '5.20%',
		price: '6,355.94',
		plus: '22,288',
	},
	{
		icon: coin,
		title: 'VET',
		titleFull: 'Vechain',
		rost: 135.98,
		rostNumber: '18.44%',
		price: '9,977.91',
		plus: '12.284',
	},
];

export const TABLE_COINS_DATA = [
	{
		type: 'Exchange',
		assets: { icon: bitcoin, title: 'Bitcoin', titleSml: 'BTC' },
		amount: '3,87',
    date: '2024-05-23',
		address: '0xr...ar45',
		status: 'Success',
	},
	{
		type: 'Exchange',
		assets: { icon: usdt, title: 'Ethereum', titleSml: 'ETC' },
		amount: '3,65',
    date: '2024-05-23',
		address: '0xr...ar87',
		status: 'Success',
	},
	{
		type: 'Exchange',
		assets: { icon: bitcoin, title: 'Bitcoin', titleSml: 'BTC' },
		amount: '3,87',
    date: '2024-05-23',
		address: '0xr...ar45',
		status: 'Success',
	},
	{
		type: 'Exchange',
		assets: { icon: ripple, title: 'Ripple', titleSml: 'XPP' },
		amount: '2,97',
    date: '2024-05-21',
		address: '0xr...ar43',
		status: 'Success',
	},
	{
		type: 'Exchange',
		assets: { icon: coin, title: 'Vechain', titleSml: 'VET' },
		amount: '2,88',
    date: '2024-05-18',
		address: '0xr...ar87',
		status: 'Success',
	},
];

export const TABLE_HEAD = ['Binance Coin', 'Price', 'Change', '24h Volume', '24 High', '24 Low'];

export const TABLE_DATA = [
	{
		coin: 'BTC',
		price: '0.053366737',
		change: '-0,05',
		volume: '356.7 ETH/37366 DODGE',
		high: '0.033334',
		low: '0.034444',
	},
];
