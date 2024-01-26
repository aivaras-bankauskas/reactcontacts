import ContactList from '@/components/contactList/ContactList';

function App(): JSX.Element {
	return (
		<div className="container lg:w-1/2 mx-auto bg-light dark:bg-dark p-5">
			<h1 className="font-bold text-4xl text-color-light dark:text-color-dark mt-8 mb-40">Contacts</h1>
			<ContactList />
		</div>
	);
}

export default App;
