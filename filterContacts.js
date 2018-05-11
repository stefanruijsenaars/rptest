import contactList from './contactList.json';

export default function filterContacts(searchText) {
  return contactList.filter((contact) => {
    if (contact.name.toLowerCase().includes(searchText.toLowerCase())) {
      return true;
    }
    if (contact.keywords.includes(searchText)) {
      return true;
    }
    return false;
  });
}
