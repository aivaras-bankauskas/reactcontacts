import { render, screen } from '@testing-library/react';
import ContactPerson from './ContactPerson';
import Person from '@/data/models/personModel';

describe('ContactPerson', () => {
	it('renders the person\'s first and last name', () => {
		const person: Person = { firstName: 'John', lastName: 'Doe' };

		render(<ContactPerson {...person} />);

		expect(screen.getByText('John')).toBeInTheDocument();
		expect(screen.getByText('Doe')).toBeInTheDocument();
	});
});
