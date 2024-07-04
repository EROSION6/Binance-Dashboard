import { TABLE_DATA, TABLE_HEAD } from '../data';

const TableCoin = () => {
	return (
		<div className='w-full border border-[#181717] bg-[#101010] rounded-lg mt-7 pl-12'>
			<table className='w-full text-left '>
				<thead>
					<tr>
						{TABLE_HEAD.map((head, i) => (
							<th key={head} className={`py-3 ${i === 4 || i === 5 ? 'xl:hidden' : ''}`}>
								<p className='font-normal text-[#606060]'>{head}</p>
							</th>
						))}
					</tr>
				</thead>
				<tbody>
					{TABLE_DATA.map((table, i) => (
						<tr key={i}>
							<td className='pb-3'>
								<p className='font-normal text-white'>{table.coin}</p>
							</td>
							<td className='pb-3'>
								<p className='text-white'>{table.price}</p>
							</td>
							<td className='pb-3'>
								<p className='text-[#f33333]'>{table.change}%</p>
							</td>
							<td className='pb-3'>
								<p className='text-white'>{table.volume}</p>
							</td>
							<td className='pb-3 xl:hidden'>
								<p className='text-white'>{table.high}</p>
							</td>
							<td className='pb-3 xl:hidden'>
								<p className='text-white'>{table.low}</p>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default TableCoin;
