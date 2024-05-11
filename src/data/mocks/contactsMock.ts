import { faker } from '@faker-js/faker';
import Contact from '@/data/models/contactModel';

export const createAutoIncrement = (start: number = 0): (() => number) => {
	let count = start;

	return () => {
		count += 1;

		return count;
	};
};

export const generateContacts = (length: number, taskIdGen: () => number): Contact[] => {
	return Array.from({ length }, () => {
		const firstName = faker.person.firstName();
		const lastName = faker.person.lastName();

		return {
			id: taskIdGen(),
			firstName,
			lastName,
			slug: faker.helpers.slugify(firstName + ' ' + lastName).toLowerCase(),
			createdAt: faker.date.past().toISOString(),
			updatedAt: faker.date.recent().toISOString()
		};
	});
};

const contacts = generateContacts(99, createAutoIncrement());

contacts.sort((a, b) => {
	return a.firstName.localeCompare(b.firstName);
});

export default contacts;
