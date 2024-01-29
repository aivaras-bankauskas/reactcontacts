import AppRoutes from '@/router/AppRoutes';

function App(): JSX.Element {
	return (
		<div className="container lg:w-1/2 mx-auto bg-light dark:bg-dark p-5 lg:p-10">
			<AppRoutes />
		</div>
	);
}

export default App;
