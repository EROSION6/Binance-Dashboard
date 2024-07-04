import { TABLE_COINS_DATA } from '../data';

const TABLE_HEAD = ['Type', 'Asset', 'Date', 'Amount', 'Address', 'Status'];

const RecentTransactionTable = () => {
	return (
		<div className='w-full border border-[#181717] bg-[#101010] rounded-lg mt-7 pl-12 md:pl-2'>
			<table className='w-full text-left '>
				<thead>
					<tr>
						{TABLE_HEAD.map((head, i) => (
							<th key={head} className={`py-3 ${i === 2 || i === 4 ? 'xl:hidden' : ''}`}>
								<p className='font-normal text-[#606060]'>{head}</p>
							</th>
						))}
					</tr>
				</thead>
				<tbody>
					{TABLE_COINS_DATA.map((table, i) => (
						<tr key={i}>
							<td className='pb-3'>
								<p className='font-normal text-white'>{table.type}</p>
							</td>
							<td className='pb-3'>
								<div className='flex items-center gap-3'>
									<img src={table.assets.icon} alt={table.assets.title} className='w-9 h-9' />
									<strong className='text-white'>{table.assets.title}</strong>
									<small className='text-[#606060]'>{table.assets.titleSml}</small>
								</div>
							</td>
							<td className='pb-3 xl:hidden'>
								<p className='text-white'>{table.date}</p>
							</td>
							<td className='pb-3'>
								<p className='text-white'>{table.amount}%</p>
							</td>
							<td className='pb-3 xl:hidden'>
								<p className='text-white'>{table.address}</p>
							</td>
							<td className='pb-3'>
								<p className='text-white'>{table.status}</p>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default RecentTransactionTable;
