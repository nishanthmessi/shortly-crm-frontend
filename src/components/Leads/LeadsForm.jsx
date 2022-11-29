import { useState } from 'react'
import axios from 'axios'

const LeadsForm = ({ loadLeads, setShowAddRow }) => {
  const [leadName, setLeadName] = useState('')
  const [status, setStatus] = useState('')
  const [company, setCompany] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [location, setLocation] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()

    const leadData = {
      leadName: leadName,
      status: status,
      company: company,
      email: email,
      phone: phone,
      location: location
    }

    await axios.post('/leads', leadData)
    // const res = await axios.post('/leads', leadData)

    setLeadName('')
    setStatus('')
    setCompany('')
    setEmail('')
    setPhone('')
    setLocation('')
    loadLeads()
    setShowAddRow(false)
  }

  return (
    <>
    <div className="w-7/12 mt-8 ml-16">
      <form onSubmit={handleSubmit}>
      <div className="grid md:grid-cols-2 md:gap-6">
      <div className="relative z-0 mb-6 w-full group">
        <input 
          type="text" 
          className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-secondary appearance-none focus:outline-none focus:ring-0 focus:border-secondary-focus peer" 
          placeholder=" "
          value={leadName}
          onChange={(e) => setLeadName(e.target.value)} 
          required 
        />
        <label className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-secondary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">New Lead</label>
      </div>
      <div className="relative z-0 mb-6 w-full group">
        <input 
          type="text" 
          className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-secondary appearance-none focus:outline-none focus:ring-0 focus:border-secondary-focus peer" 
          placeholder=" "
          value={status}
          onChange={(e) => setStatus(e.target.value)}  
          required 
        />
        <label className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-secondary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Status</label>
      </div>
      </div>
      <div className="grid md:grid-cols-2 md:gap-6">
        <div className="relative z-0 mb-6 w-full group">
          <input 
            type="tel" 
            className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-secondary appearance-none focus:outline-none focus:ring-0 focus:border-secondary-focus peer" 
            placeholder=" "
            value={company}
            onChange={(e) => setCompany(e.target.value)}  
            required 
          />
          <label className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-secondary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Company</label>
        </div>
        <div className="relative z-0 mb-6 w-full group">
          <input 
            type="email" 
            className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-secondary appearance-none focus:outline-none focus:ring-0 focus:border-secondary-focus peer" 
            placeholder=" " 
            value={email}
            onChange={(e) => setEmail(e.target.value)} 
            required 
          />
          <label className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-secondary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email</label>
        </div>
      </div>
      <div className="grid md:grid-cols-2 md:gap-6">
        <div className="relative z-0 mb-6 w-full group">
          <input 
            type="text" 
            className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-secondary appearance-none focus:outline-none focus:ring-0 focus:border-secondary-focus peer" 
            placeholder=" " 
            value={phone}
            onChange={(e) => setPhone(e.target.value)} 
            required 
          />
          <label className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-secondary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Phone</label>
        </div>
        <div className="relative z-0 mb-6 w-full group">
          <input 
            type="text" 
            className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-secondary appearance-none focus:outline-none focus:ring-0 focus:border-secondary-focus peer" 
            placeholder=" " 
            value={location}
            onChange={(e) => setLocation(e.target.value)} 
            required 
          />
          <label className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-secondary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Location</label>
        </div>
      </div>
      <button type="submit" className="btn btn-primary font-bold">Submit</button>
      </form>
    </div>
    </>
  )
}

export default LeadsForm