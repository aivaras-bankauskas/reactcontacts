import Phone from '@/data/models/phoneModel';

const phoneTypes = ['Mobile', 'Home', 'Work'];

const phoneMock: Phone[] = [];

for (let contactId = 1; contactId <= 300; contactId++) {
	const randomNumber = Math.floor(Math.random() * 10);
	const numberOfPhones = randomNumber < 7 ? Math.floor(Math.random() * 3) + 1 : 0;
	const typesForThisContact = phoneTypes.slice().sort(() => Math.random() - 0.5);

	for (let i = 0; i < numberOfPhones; i++) {
		phoneMock.push({
			id: phoneMock.length + 1,
			contactId: contactId,
			type: typesForThisContact[i],
			number: `+370 (6${String(contactId).padStart(2, '0')}) ${Math.floor(Math.random() * (9999 - 1111 + 1) + 1111)}${String(i + 1).padStart(2, '0')}`
		});
	}
}

export default phoneMock;
