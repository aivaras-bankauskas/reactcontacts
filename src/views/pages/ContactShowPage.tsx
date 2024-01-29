import { Link, useParams } from 'react-router-dom';
import contacts from '@/data/mocks/contactsMock';
import phones from '@/data/mocks/phoneMock';

function PhoneList({ contactId }: {contactId: number}): JSX.Element | null {
	const listOfPhones = phones.filter(phone => phone.contactId === contactId);

	if (listOfPhones.length === 0) {
		return null;
	}

	return (
		<section className='bg-light dark:bg-dark m-5 px-3 rounded-xl'>
			<ul role="list" className="divide-y divide-divider-light dark:divide-divider-dark py-2">
				{listOfPhones.map(phone => (
					<li key={phone.id} className="py-2">
						<h1 className='text-color-light dark:text-color-dark'>{phone.type}</h1>
						<a href={`tel:${phone.number.replace(/\s/g, '')}`} className="text-color-link">{phone.number}</a>
						<span></span>
					</li>
				))}
			</ul>
		</section>
	);
}

function ContactShowPage(): JSX.Element {
	const { slug } = useParams();

	const contact = contacts.find(contact => {
		return contact.slug === slug;
	});

	console.log(contact);

	const fullName = `${contact?.firstName} ${contact?.lastName}`;

	return (
		<>
			<div className='flex justify-between m-5'>
				<Link to="/" className="text-color-link">
					<div className='flex'>
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
							<path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
						</svg>
						<span>Contacts</span>
					</div>
				</Link>
				<Link to={`/${slug}/edit`} className="text-color-link">
					<span>Edit</span>
				</Link>
			</div>
			<h1 className="text-3xl text-center text-color-light dark:text-color-dark mt-8 mb-10">{ fullName }</h1>

			<PhoneList contactId={contact?.id as number} />
		</>
	);
}

export default ContactShowPage;
