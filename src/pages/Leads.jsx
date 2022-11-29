import { useState, useEffect } from "react"
import 'chart.js/auto';
import axios from "axios"
import LeadsForm from "../components/Leads/LeadsForm"
import { Trash, Edit } from 'react-feather'
import LeadEditForm from "../components/Leads/LeadEditForm"
import Spinner from "../components/Spinner";

const Leads = () => {
  const [loading, setLoading] = useState(true);
  const [showAddRow, setShowAddRow] = useState(false)
  const [leads, setLeads] = useState([])
  const [lead, setLead] = useState()

  const leadData = lead

  const loadLeads = async () => {
    const res = await axios.get('/leads')
    setLeads(res.data.data)
    setLoading(false);
  }

  useEffect(() => {
    loadLeads()
  }, [])

  const deleteLeads = async (id) => {
    await axios.delete(`/leads/${id}`)
    setLeads(leads.filter((lead) => lead.id !== id))

    loadLeads()
  }

  const editLeads = async (id) => {
    const res = await axios.get(`/leads/${id}`)
    setLead(res.data.data)
  }

  if(!loading) {
  return (
    <>
    <div className="w-9/12 mb-12 px-4 mx-auto mt-8">
      <h1 className='text-5xl font-bold mb-10'>Leads</h1>
        <div className="w-full px-20">
          <table className="table w-full text-center">
            <thead>
              <tr>
                <th className='text-lg'>Leads</th>
                <th className='text-lg'>Status</th>
                <th className='text-lg'>Company</th>
                <th className='text-lg'>Email</th> 
                <th className='text-lg'>Phone</th>
                <th className='text-lg'>Location</th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
            {leads.map((lead, i) => (
              <tr key={i} className="">
                <td>{lead.leadName}</td>
                <td>{lead.status}</td>
                <td>{lead.company}</td>
                <td>{lead.email}</td>
                <td>{lead.phone}</td>
                <td>{lead.location}</td>
                <td>
                  <label htmlFor="my-modal-3" className="cursor-pointer text-secondary" onClick={() => editLeads(lead._id)}>
                    <Edit/>
                  </label>
                  <LeadEditForm leadData={leadData} setLeads={setLeads} loadLeads={loadLeads}/>
                </td>
                <td>
                  <label className="cursor-pointer">
                    <Trash className="text-error" onClick={() => deleteLeads(lead._id)}/>
                  </label>
                </td>
              </tr>
            ))}                                    
            </tbody>          
          </table>
        </div>
        <div className="flex flex-col justify-center items-center mt-10">
          <div>
            <span className="font-bold mr-3">Add Lead</span>
            <button 
              className={`btn btn-circle text-2xl font-medium ${showAddRow ? 'btn-error' : 'btn-primary'}`} 
              onClick={() => setShowAddRow(!showAddRow)}>
                {showAddRow ? '×' : '+'}
            </button>
          </div>
          {showAddRow && <LeadsForm loadLeads={loadLeads} showAddRow={setShowAddRow}/>}
        </div>
      </div> 
    </>
  ) 
  } else {
    return <Spinner />
  }
}

export default Leads