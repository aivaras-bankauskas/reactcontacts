import { render, screen } from '@testing-library/react';
import ContactList from './ContactList';
import contacts from '@/data/mocks/contactsMock';

describe('ContactList', () => {
	it('renders a list of contacts grouped by the first letter of the first name', () => {
		render(<ContactList />);

		contacts.forEach(contact => {
			const firstNameElements = screen.getAllByText(contact.firstName);
			const lastNameElements = screen.getAllByText(contact.lastName);
			expect(firstNameElements.length).toBeGreaterThanOrEqual(1);
			expect(lastNameElements.length).toBeGreaterThanOrEqual(1);
		});

		const firstLetters = contacts.map(contact => contact.firstName.charAt(0).toUpperCase());
		const uniqueFirstLetters = [...new Set(firstLetters)];
		uniqueFirstLetters.forEach(letter => {
			const letterElements = screen.getAllByText(letter);
			expect(letterElements.length).toBeGreaterThanOrEqual(1);
		});
	});
});
