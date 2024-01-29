import { generateContacts, createAutoIncrement } from '../../../src/data/mocks/contactsMock';

describe('generateContacts', () => {
	it('generates the correct number of contacts', () => {
		const contacts = generateContacts(10, createAutoIncrement());
		expect(contacts.length).toBe(10);
	});

	it('each contact has the correct properties', () => {
		const contacts = generateContacts(1, createAutoIncrement());
		const contact = contacts[0];
		expect(contact).toHaveProperty('id');
		expect(contact).toHaveProperty('firstName');
		expect(contact).toHaveProperty('lastName');
		expect(contact).toHaveProperty('createdAt');
		expect(contact).toHaveProperty('updatedAt');
	});
});
