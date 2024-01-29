import ContactItem from '@/components/contactItem/ContactItem';
import contacts from '@/data/mocks/contactsMock';
import Contact from '@/data/models/contactModel';

const groupContactsByFirstLetter = (contacts: Contact[]): Record<string, Contact[]> => {
	const grouped = {} as Record<string, Contact[]>;

	contacts.forEach(contact => {
		const firstLetter = contact.firstName.charAt(0).toUpperCase();
		if (!grouped[firstLetter]) {
			grouped[firstLetter] = [];
		}
		grouped[firstLetter].push(contact);
	});

	return grouped;
};

function ContactList(): JSX.Element {
	const groupedContacts = groupContactsByFirstLetter(contacts);

	return (
		<>
			{Object.entries(groupedContacts).map(([letter, contacts]) => (
				<div key={letter}>
					<h3 className="font-semibold text-zinc-400 mt-6 mb-1">{letter}</h3>
					<ul role="list" className="divide-y divide-divider-light dark:divide-divider-dark border-y border-divider-light dark:border-divider-dark">
						{contacts.map((contact: Contact) => (
							<ContactItem key={contact.id} slug={contact.slug} firstName={contact.firstName} lastName={contact.lastName} />
						))}
					</ul>
				</div>
			))}
		</>
	);
}

export default ContactList;
