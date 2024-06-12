import fs from 'fs/promises';
import { createFakeContact } from '../utils/createFakeContact.js';
import { PATH_DB } from '../constants/contacts.js';

export const addOneContact = async () => {
  try {
    const contacts = await fs.readFile(PATH_DB, 'utf8');
    const newContact = createFakeContact();
    const updatedContacts = [...JSON.parse(contacts), newContact];
    await fs.writeFile(
      PATH_DB,
      JSON.stringify(updatedContacts, null, 2),
      'utf8',
    );
    console.log('Successfully added one contact to the file.');
  } catch (error) {
    console.error('Error adding contact:', error);
  }
};

addOneContact();
