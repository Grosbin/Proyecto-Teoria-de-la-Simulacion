import { Route, Routes } from 'react-router-dom';
import { About } from '../pages/About';
import { Doc } from '../pages/Doc';
import { Start } from '../pages/Start';

const AppRouter = () => {
	return (
		<>
			<Routes>
				<Route path="/" element={<Start />} />
				<Route path="/documentacion" element={<Doc />} />
				<Route path="/acerca" element={<About />} />
				<Route path="/*" element={<Start />} />
			</Routes>
		</>
	)
}

export default AppRouter;