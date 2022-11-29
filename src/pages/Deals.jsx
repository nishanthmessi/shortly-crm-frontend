import { useState, useEffect } from "react"
import axios from "axios"
import { Trash, Edit  } from 'react-feather'
import DealsForm from "../components/Deals/DealsForm"
import DealEditForm from "../components/Deals/DealEditForm"
import Spinner from "../components/Spinner"

const Deals = () => {
  const [loading, setLoading] = useState(true);
  const [showAddRow, setShowAddRow] = useState(false)
  const [deals, setDeals] = useState([])
  const [deal, setDeal] = useState()

  const dealData = deal

  const loadDeals = async () => {
    const res = await axios.get('/deals')
    setDeals(res.data.data)
    setLoading(false)
  }

  useEffect(() => {
    loadDeals()
  }, [])

  const editDeals = async (id) => {
    const res = await axios.get(`/deals/${id}`)
    setDeal(res.data.data)
  }

  const deleteDeals = async (id) => {
    await axios.delete(`/deals/${id}`)
    setDeals(deals.filter((deal) => deal.id !== id))

    loadDeals()
  }

  if(!loading) {
  return (
    <>
    <div className="w-9/12 mb-12 px-4 mx-auto mt-8">
      <h1 className='text-5xl font-bold mb-10'>Deals</h1>
        <div className="w-full px-20">
          <table className="table w-full text-center">
            <thead>
              <tr>
                <th className='text-lg'>Deal</th>
                <th className='text-lg'>Stage</th>
                <th className='text-lg'>Account</th> 
                <th className='text-lg'>Deal Value</th>
                <th className='text-lg'>Deal Date</th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
            {deals.map((deal, i) => (
            <tr key={i} className="">
              <td>{deal.dealName}</td>
              <td>{deal.stage}</td>
              <td>{deal.account}</td>
              <td>$ {deal.dealValue}</td>
              <td>{deal.createdAt}</td>
              <td>
                <label htmlFor="my-modal-3" className="cursor-pointer text-secondary hover:text-secondary" onClick={() => editDeals(deal._id)}>
                  <Edit/>
                </label>
                <DealEditForm dealData={dealData} setDeals={setDeals} loadDeals={loadDeals}/>
              </td>
              <td>
                <label className="cursor-pointer text-error" onClick={() => deleteDeals(deal._id)}>
                  <Trash className="hover:text-error"/>
                </label>
              </td>
            </tr> 
            ))}                                   
            </tbody>          
          </table>         
        </div>
        <div className="flex flex-col justify-center items-center mt-10">
        <div>
            <span className="font-bold mr-3">Add Deal</span>
            <button 
              className={`btn btn-circle text-2xl font-medium ${showAddRow ? 'btn-error' : 'btn-primary'}`} 
              onClick={() => setShowAddRow(!showAddRow)}>
                {showAddRow ? '×' : '+'}
            </button>
          </div>
          {showAddRow && <DealsForm loadDeals={loadDeals}/>}
        </div>
      </div> 
    </>
  )
} else {
    return <Spinner/>
  }
}

export default Deals