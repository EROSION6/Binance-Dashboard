import Coins from './Coins';
import Convert from './Convert';
import Diagram from './Diagram';
import Navbar from './Navbar';
import RecentTransactionTable from './RecentTransactionTable';
import TableCoin from './TableCoin';

const Main = () => {
	return (
		<main className='w-full flex flex-col px-5'>
			<Navbar />
			<div className='w-full flex space-x-5 lg:flex-col lg:space-x-0'>
				<section className='w-full'>
					<TableCoin />
					<Diagram />
					<RecentTransactionTable />
				</section>
				<section className={`w-[38%] xl2:w-[55%] ${'right'}`}>
					<Coins />
					<Convert />
				</section>
			</div>
		</main>
	);
};

export default Main;
