import phoneMock from '../../../src/data/mocks/phoneMock';

describe('phoneMock', () => {
	it('should have less than or equal to 600 phones', () => {
		expect(phoneMock.length).toBeLessThanOrEqual(600);
	});

	it('each contactId should have between 0 and 3 phones', () => {
		const phonesPerContact = new Map<number, number>();

		phoneMock.forEach(phone => {
			phonesPerContact.set(phone.contactId, (phonesPerContact.get(phone.contactId) || 0) + 1);
		});

		phonesPerContact.forEach(phones => {
			expect(phones).toBeGreaterThanOrEqual(0);
			expect(phones).toBeLessThanOrEqual(3);
		});
	});

	it('phone types for each contactId should be unique', () => {
		const phoneTypesPerContact = new Map<number, Set<string>>();

		phoneMock.forEach(phone => {
			if (!phoneTypesPerContact.has(phone.contactId)) {
				phoneTypesPerContact.set(phone.contactId, new Set());
			}

            phoneTypesPerContact.get(phone.contactId)!.add(phone.type);
		});

		phoneTypesPerContact.forEach(types => {
			expect(types.size).toBeLessThanOrEqual(3);
		});
	});

	it('id of each phone should be unique', () => {
		const ids = new Set(phoneMock.map(phone => phone.id));
		expect(ids.size).toBe(phoneMock.length);
	});
});
