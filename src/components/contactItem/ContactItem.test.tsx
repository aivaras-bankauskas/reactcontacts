import { render, screen } from '@testing-library/react';
import ContactItem from './ContactItem';
import Contact from '@/data/models/contactModel';

describe('ContactItem', () => {
	it('renders the contact\'s first and last name', () => {
		const contact: Contact = { firstName: 'John', lastName: 'Doe' };

		render(<ContactItem {...contact} />);

		expect(screen.getByText('John')).toBeInTheDocument();
		expect(screen.getByText('Doe')).toBeInTheDocument();
	});
});
