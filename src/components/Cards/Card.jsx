import axios from 'axios'
import { useState ,useEffect } from 'react'
import {DollarSign, TrendingUp, } from 'react-feather'

const Card = () => {
  const [deal, setDeal] = useState()
  const [lead, setLead] = useState()
  const [forecastedRevenue, setForecastedRevenue] = useState([])

  const getDeals = async () => {
    const res = await axios.get('/deals')
    const data = res.data.data
    setDeal(data.length)

    const leads = await axios.get('/leads')
    const leadsData = leads.data.data
    setLead(leadsData.length)

    const forecastedRevenue = data.reduce((a,v) =>  a = a + v.dealValue , 0)
    setForecastedRevenue(forecastedRevenue)
  }

  useEffect(() => {
    getDeals()
  }, [])
  
  return (
    <>
    <div className="stats shadow bg-primary">
      <div className="stat">
        <div className="stat-figure text-secondary-focus mt-4">
          <DollarSign />
        </div>
        <div className="text-secondary-content stat-title">Current Revenue</div>
        <div className="text-neutral stat-value">${forecastedRevenue}</div>
      </div>
      
      <div className="stat">
        <div className="stat-figure text-secondary-focus mt-4">
          <TrendingUp/>
        </div>
        <div className="text-secondary-content stat-title">Deals</div>
        <div className="text-neutral stat-value">{deal}</div>
      </div>
      
      <div className="stat">
        <div className="stat-figure text-secondary-focus mt-4">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path></svg>
        </div>
        <div className="text-secondary-content stat-title">Total Leads</div>
        <div className="text-neutral stat-value">{lead}</div>
      </div>
      
    </div>
    </>
  )
}

export default Card