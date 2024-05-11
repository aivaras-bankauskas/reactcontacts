import { BrowserRouter, Routes, Route } from 'react-router-dom';

import ContactIndexPage from '@/views/pages/ContactIndexPage';
import ContactShowPage from '@/views/pages/ContactShowPage';

const AppRoutes = (): JSX.Element => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<ContactIndexPage />} />
				<Route path="/:slug" element={<ContactShowPage />} />
			</Routes>
		</BrowserRouter>
	);
};

export default AppRoutes;
