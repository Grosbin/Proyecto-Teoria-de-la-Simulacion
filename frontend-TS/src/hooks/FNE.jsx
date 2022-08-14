import React, { useEffect } from 'react'
import { Player, Controls } from '@lottiefiles/react-lottie-player';

export const FNE = ({ live }) => {

	useEffect(() => {
		console.log('Estoy en FNE')
	}, [live])


	const getRandomFNE = (min, max, num) => {
		min = Math.ceil(min);
		max = Math.floor(max);

		const random = [];
		for (let i = 0; i < num; i++) {
			random.push(Math.floor(Math.random() * (max - min + 1) + min));
		}

		return random;
	}


	const animation = () => (
		<Player
			autoplay
			loop
			src="./json/chart.json"
			style={{ height: '300px', width: '300px' }}
		>
			{/* <Controls visible={true} buttons={['play', 'repeat', 'frame', 'debug']} /> */}
		</Player>
	)



	return (
		<div style={{ width: '100%', height: '' }}>
			{
				getRandomFNE(2, 5, live).map((item, i) => {
					<div key={i} style={{ width: '300px' }}>
						{
							<Player
								autoplay
								loop
								src="./json/chart.json"
								style={{ height: '300px', width: '300px' }}
							>
								{/* <Controls visible={true} buttons={['play', 'repeat', 'frame', 'debug']} /> */}
							</Player>
						}
					</div>
				})
			}
		</div>
	)
}
