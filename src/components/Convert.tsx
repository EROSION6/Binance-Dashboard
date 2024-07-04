const Convert = () => {
	return (
		<div className='w-full border border-[#181717] bg-[#101010] rounded-lg mt-3 p-5'>
			<h3 className='text-white text-xl'>Convert</h3>

			<div className='space-y-4 w-full relative'>
				<div className='relative'>
					<input
						type='number'
						placeholder='Enter amount'
						className='w-full border border-[#181717] rounded-lg py-4 px-5 mt-3 bg-[#101010] text-white'
					/>
					<select className='w-[7rem] border border-[#101010] bg-[#181717] rounded-lg py-3 px-5 mt-3 text-white absolute right-2 top-[.4rem]'>
						<option value=''>Select</option>
						{/* Add your currency options here */}
					</select>
				</div>
				<div className='relative'>
					<input
						type='number'
						placeholder='Enter amount'
						className='w-full border border-[#181717] rounded-lg py-4 px-5 mt-3 bg-[#101010] text-white'
					/>
					<select className='w-[7rem] border border-[#101010] bg-[#181717] rounded-lg py-3 px-5 mt-3 text-white absolute right-2 top-[.4rem]'>
						<option value=''>Select</option>
						{/* Add your currency options here */}
					</select>
				</div>
			</div>
			<div className='w-full flex items-center justify-between  mt-5'>
				<p className='text-[#606060] text-sm'>Transaction fee:0.20$</p>
				<button className='text-white py-[.6rem] px-5 bg-[#C74220] rounded-lg'>Exchange</button>
			</div>
		</div>
	);
};

export default Convert;
