import { useState, useEffect } from 'react';
import axios from 'axios'
import Card from './Cards/Card'
import BarChart from './Charts/BarChart';
import DoughnutChart from './Charts/DoughnutChart';
import PieChart from './Charts/PieChart';
import Spinner from './Spinner';

const Dashboard = () => {
  const [loading, setLoading] = useState(true);
  const [deals, setDeals] = useState()
  const [leads, setLeads] = useState()
  const [contacts, setContacts] = useState()
  const [accounts, setAccounts] = useState()
  const [leadCompanies, setLeadCompanies] = useState()
  const [contactCompanies, setContactCompanies] = useState()

  const loadDeals = async () => {
    const deals = await axios.get('/deals')
    const dealData = deals.data.data
    setDeals(dealData.length)

    const leads = await axios.get('/leads')
    const leadsData = leads.data.data
    setLeadCompanies(leadsData.length)
    setLeads(leadsData.length)

    const contacts = await axios.get('/contacts')
    const contactData = contacts.data.data
    setContactCompanies(contactData.length)
    setContacts(contactData.length)

    const accounts = await axios.get('/accounts')
    const accountsData = accounts.data.data
    setAccounts(accountsData.length)

    setLoading(false)
  }

  useEffect(() => {
    loadDeals()
  })

  if(!loading) {
  return ( 
    <>
    <div className="w-9/12 mb-12 px-4 mx-auto mt-8">
      <h1 className='text-5xl font-bold mb-10'>Dashboard</h1>
        <div className='flex items-center justify-center mb-20'>
          <Card/>
        </div>
        <div className="grid gap-6 mb-8 grid-cols-3">
          <PieChart deals={deals} leads={leads} contacts={contacts} accounts={accounts}/>
          <BarChart/>
          <DoughnutChart leadCompanies={leadCompanies} contactCompanies={contactCompanies}/>  
        </div>
      </div> 
    </>
  )
} else {
    return <Spinner/>
  }
}

export default Dashboard