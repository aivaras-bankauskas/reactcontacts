import ContactsList from '@/components/contactsList/ContactsList';

function ContactIndexPage(): JSX.Element {
	return (
		<div className='bg-light dark:bg-dark p-5 lg:p-10'>
			<h1 className="font-bold text-4xl text-color-light dark:text-color-dark mt-8 mb-40">Contacts</h1>
			<ContactsList />
		</div>
	);
}

export default ContactIndexPage;
