import {useState, useEffect} from 'react'
import List from './List';
import Form from './Form';
import './styles.css'
function Contacts() {
    const [contacts, setContacts] = useState([
        // {
        //     fullname: "Kemal",
        //     phone_number: "123123"
        // },
        
        // {
        //     fullname: "Ahmet",
        //     phone_number: "321321"
        // },

        // {
        //     fullname: "Ömer",
        //     phone_number: "789789"
        // },
    ]);

    useEffect(() => {
        console.log(contacts);
    },[contacts])

  return (
    <div id='container'>
        <h1>Guide</h1>
        <List contacts={contacts}/>
        <Form addContact={setContacts} contacts={contacts} />
    </div>
  )
}

export default Contacts;
