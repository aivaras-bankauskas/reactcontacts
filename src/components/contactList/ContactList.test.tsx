import { BrowserRouter as Router } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import ContactList from './ContactList';
import contacts from '@/data/mocks/contactsMock';

describe('ContactList', () => {
	beforeEach(() => {
		render(
			<Router>
				<ContactList />
			</Router>
		);
	});

	it('renders a list of contacts', () => {
		const sampleContacts = contacts.slice(0, 10);

		sampleContacts.forEach(contact => {
			expect(screen.getAllByText(contact.firstName)[0]).toBeInTheDocument();
			expect(screen.getAllByText(contact.lastName)[0]).toBeInTheDocument();
		});
	});

	it('groups contacts by the first letter of the first name', () => {
		const sampleContacts = contacts.slice(0, 5); // Test the first 5 contacts
		const firstLetters = sampleContacts.map(contact => contact.firstName.charAt(0).toUpperCase());
		const uniqueFirstLetters = [...new Set(firstLetters)];

		uniqueFirstLetters.forEach(letter => {
			expect(screen.getByText(letter)).toBeInTheDocument();
		});
	});

	it('renders a link to each contact\'s page', () => {
		const sampleContacts = contacts.slice(0, 5); // Test the first 5 contacts

		sampleContacts.forEach(contact => {
			const link = screen.getByRole('link', { name: `${contact.firstName} ${contact.lastName}` });
			expect(link).toHaveAttribute('href', `/${contact.slug}`);
		});
	});
});
