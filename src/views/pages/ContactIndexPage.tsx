import ContactList from '@/components/contactList/ContactList';

function ContactIndexPage(): JSX.Element {
	return (
		<>
			<h1 className="font-bold text-4xl text-color-light dark:text-color-dark mt-8 mb-40">Contacts</h1>
			<ContactList />
		</>
	);
}

export default ContactIndexPage;
