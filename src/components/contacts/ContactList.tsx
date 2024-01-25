import ContactPerson from '@/components/contacts/ContactPerson';
import contacts from '@/data/mocks/contactsMock';
import Person from '@/data/models/personModel';

const groupContactsByFirstLetter = (contacts: Person[]): Record<string, Person[]> => {
	const grouped = {} as Record<string, Person[]>;

	contacts.forEach(person => {
		const firstLetter = person.firstName.charAt(0).toUpperCase();
		if (!grouped[firstLetter]) {
			grouped[firstLetter] = [];
		}
		grouped[firstLetter].push(person);
	});

	return grouped;
};

function ContactList(): JSX.Element {
	const groupedContacts = groupContactsByFirstLetter(contacts);

	return (
		<>
			{Object.entries(groupedContacts).map(([letter, people]) => (
				<div key={letter}>
					<h3 className="font-semibold text-zinc-400 mt-6 mb-1">{letter}</h3>
					<ul role="list" className="divide-y divide-divider-light dark:divide-divider-dark border-y border-divider-light dark:border-divider-dark">
						{people.map((person: Person) => (
							<ContactPerson key={person.id} firstName={person.firstName} lastName={person.lastName} />
						))}
					</ul>
				</div>
			))}
		</>
	);
}

export default ContactList;
