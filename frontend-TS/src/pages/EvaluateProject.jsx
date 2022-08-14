import React, { useEffect, useState } from "react";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Table } from "../components/ui/Table";
import { FNE } from "../hooks/FNE";
import { Player, Controls } from '@lottiefiles/react-lottie-player';
import { getRandomFNE } from "../helpers/getRandomFNE";
import { getCPP } from "../helpers/getCPP";


export const EvaluateProject = () => {

	const [investment, setInvestment] = useState("");
	const [own_resources, setOwnResources] = useState("");
	const [financing, setFinancing] = useState("");
	const [live, setLive] = useState('');
	const [anim, setAnim] = useState(false);
	const [tableFNE, setTableFNE] = useState(false);
	const [disabled, setDisabled] = useState(true);
	const [disabledLive, setDisabledLive] = useState(true);
	const [rateOwnResources, setRateOwnResources] = useState('');
	const [rateFinancing, setRateFinancing] = useState('');
	const [cpp, setCpp] = useState('');

	const handleStartSimulation = (e) => {
		e.preventDefault();
		setAnim(true);
		console.log(investment, own_resources, financing);
	};

	useEffect(() => {
		if (live !== '' && live != 0) {
			setAnim(true)
		}
		if (own_resources) {
			setDisabledLive(false);
			setFinancing(investment - own_resources);
		}
		if (investment) {
			setDisabled(false);
		}
	}, [live, own_resources, investment, financing]);

	const animation = () => {
		setTimeout(() => {

			setAnim(false);
			setTableFNE(true);
		}, 10000);


		return (
			<Player
				autoplay
				loop
				src="./json/chart.json"
				style={{ height: '300px', width: '300px' }}
			>
				{/* <Controls visible={true} buttons={['play', 'repeat', 'frame', 'debug']} /> */}
			</Player>
		)
	}

	const min = -(investment / 2);
	const max = investment / 2;
	console.log('min', min, 'max', max);
	const randomFNE = getRandomFNE(min, max, live);

	const resulCPP = getCPP(own_resources, financing, investment, rateOwnResources, rateFinancing);

	return (
		<div className="main">
			<div className="grid__container" style={{ marginTop: "70px" }}>
				<div>
					<form onSubmit={handleStartSimulation} style={{ marginBottom: "10px" }}>
						<div className="">
							<span className="p-float-label">
								<InputText
									id="investment"
									name="investment"
									value={investment}
									onChange={(e) => setInvestment(e.target.value)}
								/>

								<label htmlFor="investment">Inversión</label>
							</span>
						</div>
						<div className="">
							<span className="p-float-label input__text">
								<InputText
									id="own_resources"
									name="own_resources"
									value={own_resources}
									disabled={disabled}
									onChange={(e) => setOwnResources(e.target.value)}
								/>
								<label htmlFor="own_resources">Recursos propios</label>
							</span>
						</div>
						<div className="">
							<span className="p-float-label input__text">
								<InputText
									id="rate_own_resources"
									name="rate_own_resources"
									value={rateOwnResources}
									disabled={disabled}
									onChange={(e) => setRateOwnResources(e.target.value)}
								/>
								<label htmlFor="rate_own_resources">Tasa Recursos propios</label>
							</span>
						</div>
						<div className="">
							<span className="p-float-label input__text">
								<InputText
									id="financing"
									name="financing"
									value={financing}
									disabled={disabled}
									onChange={(e) => setFinancing(e.target.value)}
								/>
								<label htmlFor="financing">Finaciamiento</label>
							</span>
						</div>
						<div className="">
							<span className="p-float-label input__text">
								<InputText
									id="rate_financing"
									name="rate_financing"
									value={rateFinancing}
									disabled={disabled}
									onChange={(e) => setRateFinancing(e.target.value)}
								/>
								<label htmlFor="financing">Tasa Financiamiento</label>
							</span>
						</div>
						<div className="">
							<span className="p-float-label input__text">
								<InputText
									id="live"
									name="live"
									value={live}
									disabled={disabledLive}
									onChange={(e) => setLive(e.target.value)}
								/>
								<label htmlFor="live">Vida de proyecto</label>
							</span>
						</div>
						<div className="">
							<span className="p-float-label input__text">
								<InputText id="cpp" name="cpp" value={cpp} disabled />

								<label htmlFor="cpp">CCP %</label>
							</span>
						</div>
						<div className="button__evalute-project">
							<Button
								label="Iniciar simulación"
								className="p-button-primary"
								type="submit"
								onClick={handleStartSimulation}
							/>
							<Button label="Guardar simulación" className="p-button-success" />
						</div>
					</form>
				</div>
				{
					anim ? animation() : tableFNE && <Table item={randomFNE} />
				}

				{/* <div style={{ width: '500px' }}>
					{
						randomFNE.map(item => (

							<h2 key={item}>{item.toString()}</h2>

						))
					}
				</div> */}
			</div>
		</div>
	);
};
