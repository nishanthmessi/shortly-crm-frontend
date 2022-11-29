import { useState, useEffect } from "react"
import axios from "axios"
import ContactsForm from "../components/Contacts/ContactsForm"
import ContactEditForm from "../components/Contacts/ContactEditForm"
import { Trash, Edit  } from 'react-feather'
import Spinner from "../components/Spinner"

const Contact = () => {
  const [loading, setLoading] = useState(true);
  const [showAddRow, setShowAddRow] = useState(false)
  const [contacts, setContacts] = useState([])
  const [contact, setContact] = useState()

  const contactData = contact

  const loadContacts = async () => {
    const res = await axios.get('/contacts')
    setContacts(res.data.data)
    setLoading(false)
  }

  useEffect(() => {
    loadContacts()
  }, [])

  const editContacts = async (id) => {
    const res = await axios.get(`/contacts/${id}`)
    setContact(res.data.data)
  }

  const deleteContacts = async (id) => {
    await axios.delete(`/contacts/${id}`)
    setContacts(contacts.filter((contact) => contact.id !== id))

    loadContacts()
  }

  if(!loading) {
  return ( 
    <>
    <div className="w-9/12 mb-12 px-4 mx-auto mt-8">
      <h1 className='text-5xl font-bold mb-10'>Contacts</h1>
        <div className="w-full px-20">
          <table className="table w-full text-center">
            <thead>
              <tr>
                <th className='text-lg'>Contact</th>
                <th className='text-lg'>Company</th>
                <th className='text-lg'>Priority</th>
                <th className='text-lg'>Phone</th>
                <th className='text-lg'>Email</th> 
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
            {contacts.map((contact, i) => (
            <tr key={i} className="">
              <td>{contact.contactName}</td>
              <td>{contact.company}</td>
              <td>{contact.priority}</td>
              <td>{contact.phone}</td>
              <td>{contact.email}</td>
              <td>
                <label htmlFor="my-modal-3" className="cursor-pointer text-secondary" onClick={() => editContacts(contact._id)}>
                  <Edit/>
                </label>
                <ContactEditForm contactData={contactData} setContact={setContact} loadContacts={loadContacts}/>
              </td>
              <td>
              <label className="cursor-pointer">
                <Trash className="text-error" onClick={() => deleteContacts(contact._id)}/>
              </label>
              </td>
            </tr>
            ))}                                    
            </tbody>          
          </table>         
        </div>
        <div className="flex flex-col justify-center items-center mt-10">
          <div>
            <span className="font-bold mr-3">Add Contact</span>
            <button 
              className={`btn btn-circle text-2xl font-medium ${showAddRow ? 'btn-error' : 'btn-primary'}`} 
              onClick={() => setShowAddRow(!showAddRow)}>
                {showAddRow ? '×' : '+'}
            </button>
          </div>
          {showAddRow && <ContactsForm loadContacts={loadContacts}/>}
        </div>
      </div> 
    </>
  )
} else {
    return <Spinner/>
  }
}

export default Contact