import { useState } from 'react'
import initialContact from '../src/components/ContactList/Contact.json'
import ContactForm from '../src/components/ContactForm/ContactForm'
import SearchBox from '../src/components/SearchBox/SearchBox'
import ContactList from '../src/components/ContactList'


function App() {
const [Contacts, setContacts] = useState(initialContact)
const addContact = (newContact) => {}
  return (
<div>
  <h1>Phonebook</h1>
  <ContactForm  />
  <SearchBox />
      <ContactList Contacts={Contacts} />
</div>
  )
}

export default App
