import { readContacts } from '../utils/readContacts';
import { createFakeContact } from '../utils/createFakeContact';
import { writeContacts } from '../utils/writeContacts';

const generateContacts = async (number) => {
  try {
    const myContacts = await readContacts();
    const newContacts = [];
    for (let i = 0; i < number; i++) {
      newContacts.push(createFakeContact());
    }
    const updatedContacts = [...myContacts, ...newContacts];
    await writeContacts(updatedContacts);
  } catch {
    (error) => console.error(error);
  }
};

generateContacts(5);
