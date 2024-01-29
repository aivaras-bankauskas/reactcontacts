import { BrowserRouter as Router } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import ContactItem from './ContactItem';
import Contact from '@/data/models/contactModel';

describe('ContactItem', () => {
	const contact: Contact = { slug: 'john-doe', firstName: 'John', lastName: 'Doe' };

	beforeEach(() => {
		render(
			<Router>
				<ContactItem {...contact} />
			</Router>
		);
	});

	it('renders the contact\'s first and last name', () => {
		expect(screen.getByText('John')).toBeInTheDocument();
		expect(screen.getByText('Doe')).toBeInTheDocument();
	});

	it('renders a link to the contact\'s page', () => {
		expect(screen.getByRole('link')).toHaveAttribute('href', '/john-doe');
	});
});
