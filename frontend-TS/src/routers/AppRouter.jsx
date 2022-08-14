import { Route, Routes } from 'react-router-dom';
import { About } from '../pages/About';
import { Doc } from '../pages/Doc';
import { EvaluateProject } from '../pages/EvaluateProject';
import { RecoveryPeriod } from '../pages/RecoveryPeriod';
import { Start } from '../pages/Start';

const AppRouter = () => {
	return (
		<>
			<Routes>
				<Route path="/" element={<Start />} />
				<Route path="/documentacion" element={<Doc />} />
				<Route path="/acerca" element={<About />} />
				<Route path="/evaluar-proyecto" element={<EvaluateProject />} />
				<Route path="/periodo-recuperacion" element={<RecoveryPeriod />} />
				<Route path="/*" element={<Start />} />
			</Routes>
		</>
	)
}

export default AppRouter;