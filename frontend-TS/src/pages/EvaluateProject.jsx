import React, { useEffect, useState } from "react";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Table } from "../components/ui/Table";
import { LineChart } from "../hooks/LineChart";
import { Player, Controls } from '@lottiefiles/react-lottie-player';
import { getRandomFNE } from "../helpers/getRandomFNE";
import { getCPP } from "../helpers/getCPP";
import { Card } from 'primereact/card';
import { getVPF } from "../helpers/getVPF";
import { getRecoveryperiod } from "../helpers/getRecoveryPeriod";


export const EvaluateProject = () => {

	const [investment, setInvestment] = useState("");
	const [own_resources, setOwnResources] = useState("");
	const [financing, setFinancing] = useState("");
	const [live, setLive] = useState('');
	const [rateOwnResources, setRateOwnResources] = useState('');
	const [rateFinancing, setRateFinancing] = useState('');
	const [cpp, setCpp] = useState('');
	const [vpf, setVPF] = useState('');
	const [pr, setPR] = useState('');

	const [anim, setAnim] = useState(false);
	const [tableFNE, setTableFNE] = useState(false);
	const [disabled, setDisabled] = useState(true);
	const [initSimulate, setInitSimulate] = useState(false);
	const [disabledLive, setDisabledLive] = useState(true);

	const [dataFNE, setDataFNE] = useState([]);



	const handleStartSimulation = (e) => {
		e.preventDefault();
		const data1 = parseInt(own_resources);
		const data2 = parseInt(financing);
		const data3 = parseInt(investment);
		const data4 = parseInt(rateOwnResources);
		const data5 = parseInt(rateFinancing);

		const resulCPP = getCPP(data1, data2, data3, data4, data5);
		const resulVPF = getVPF(dataFNE);
		const resulPR = getRecoveryperiod(dataFNE, investment);

		setCpp(resulCPP);
		setVPF(resulVPF);
		setPR(resulPR);

		setInitSimulate(true);
		// console.log(vpf, ' Este es el vpf')
	};


	const min = -(investment);
	const max = investment;
	const randomFNE = getRandomFNE(min, max, live);

	useEffect(() => {
		setDataFNE(randomFNE);
	}, [live]);


	useEffect(() => {

		if (live !== '' && live != 0) {
			setAnim(true)
		}
		if (live == 0) {
			setAnim(false);
			setTableFNE(false);
		}
		if (own_resources) {
			setDisabledLive(false);
			setFinancing(investment - own_resources);
		}
		if (investment) {
			setDisabled(false);
		}

	}, [live, own_resources, investment, financing, dataFNE]);

	const animation = () => {
		setTimeout(() => {

			setAnim(false);
			setTableFNE(true);
			setInitSimulate(false);

		}, 10000);



		return (
			<Player
				autoplay
				loop
				src="./json/chart.json"
				style={{ height: '300px', width: '300px' }}
			>

			</Player>
		)
	}


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
									keyfilter={/[0-9]/}
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
									keyfilter={/[0-9]/}
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
									keyfilter={/[0-9]/}
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
									keyfilter={/[0-9]/}
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
									keyfilter={/[0-9]/}
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
									keyfilter={/[0-9]/}
									value={live}
									disabled={disabledLive}
									onChange={(e) => setLive(e.target.value)}
								/>
								<label htmlFor="live">Vida de proyecto</label>
							</span>
						</div>

						<div className="button__evalute-project">
							<Button
								label="Iniciar simulación"
								className="p-button-primary"
								type="submit"
								disabled={anim}
								onClick={handleStartSimulation}

							/>
							{
								initSimulate && <Button label="Guardar simulación" className="p-button-success" />
							}

						</div>
					</form>
				</div>

				<div style={{ textAlign: 'center' }}>
					<h2>Flujo Neto de Efectivo</h2>
					{
						anim ? animation() : tableFNE && <Table item={dataFNE} />
					}
				</div>


				{/* <div>
					<Card title="CCP" subTitle="Costo de Capital Ponderado">
						{cpp} %
					</Card>
				</div>
				<div>
					<Card title="VPF" subTitle="Valor del Precio en el Futuro">
						L {vpf}
					</Card>
				</div> */}
			</div>
			{
				initSimulate && (
					<div>

						<div className="grid__container">
							<div>
								<Card title="CCP" subTitle="Costo de Capital Ponderado">
									{cpp} %
								</Card>
							</div>
							<div>
								<Card title="VPF" subTitle="Valor del Precio en el Futuro">
									L {vpf}
								</Card>
							</div>
						</div>
						<div className="grid__container" style={{ marginTop: '10px' }}>
							<div>
								<Card title="PR" subTitle="Periodo de Recuperación">
									{pr} Años
								</Card>
							</div>
							<div>
								{/* <Card title="VPF" subTitle="Valor del Precio en el Futuro">
						L {vpf}
					</Card> */}
							</div>
						</div>

					</div>)

			}
			<div className="flex__container">
				{
					initSimulate && <LineChart data={dataFNE} />
				}


			</div>
		</div>
	);
};
