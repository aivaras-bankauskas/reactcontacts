import { Link } from 'react-router-dom';
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
							<li key={contact.id} className="flex justify-between gap-x-6 py-2.5">
								<Link to={`/${contact.slug}`}>
									<div className="flex min-w-0 gap-x-4">
										<div className="flex min-w-0 gap-x-2">
											<div className="font-semibold text-color-light dark:text-color-dark">{contact.firstName}</div>
											<div className=" text-color-light dark:text-color-dark">{contact.lastName}</div>
										</div>
									</div>
								</Link>
							</li>
						))}
					</ul>
				</div>
			))}
		</>
	);
}

export default ContactList;
