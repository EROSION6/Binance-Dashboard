import { useEffect, useState } from 'react';
import { createChart, CandlestickSeries } from 'lightweight-charts';

const chartProperties = {
	height: 420,
	timeScale: {
		timeVisible: true,
		secondsVisible: false,
	},
};

const Diagram = () => {
	const [binance, setBinance] = useState<any[]>([]);
	const [chart, setChart] = useState<any>(null);
	const [candleSeries, setCandleSeries] = useState<CandlestickSeries | null>(null);

	useEffect(() => {
		const domElement = document.getElementById('chart');
		const newChart = createChart(domElement, chartProperties);
		const newCandleSeries = newChart.addCandlestickSeries();
   newChart.applyOptions({
			layout: {
			background: {
        color: 'transparent'
      },
      textColor: 'white'
			},
		});

		setChart(newChart);
		setCandleSeries(newCandleSeries);

		const getAllBinanceData = async () => {
			const response = await fetch(
				'https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1m&limit=1000',
			);
			const data = await response.json();
			setBinance(data);
		};
		getAllBinanceData();
	}, []);

	useEffect(() => {
		if (candleSeries) {
			binance.forEach(data => {
				candleSeries.update({
					time: data[0] / 1000,
					open: parseFloat(data[1]),
					high: parseFloat(data[2]),
					low: parseFloat(data[3]),
					close: parseFloat(data[4]),
				});
			});
		}
	}, [candleSeries, binance]);

	return (
		<div id='chart' className='w-full border border-[#181717] bg-[#101010] rounded-lg mt-7 pl-1' />
	);
};

export default Diagram;
