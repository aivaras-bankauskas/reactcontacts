import { faker } from '@faker-js/faker';
import Person from '@/data/models/personModel';

const createAutoIncrement = (start: number = 0): (() => number) => {
	let count = start;

	return () => {
		count += 1;

		return count;
	};
};

const generateContacts = (length: number, taskIdGen: () => number): Person[] => {
	return Array.from({ length }, () => ({
		id: taskIdGen(),
		firstName: faker.person.firstName(),
		lastName: faker.person.lastName(),
		createdAt: faker.date.past().toISOString(),
		updatedAt: faker.date.recent().toISOString()
	}));
};

const contacts = generateContacts(99, createAutoIncrement());

contacts.sort((a, b) => {
	return a.firstName.localeCompare(b.firstName);
});

export default contacts;
