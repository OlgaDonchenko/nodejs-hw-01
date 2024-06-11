import fs from 'fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const countContacts = async () => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf8');
    const contacts = JSON.parse(data);
    return contacts.length;
  } catch (error) {
    console.error('Error reading contacts:', error);
    return 0;
  }
};

countContacts()
  .then((count) => console.log(count))
  .catch((err) => console.error(err));
