import { useState } from 'react'
import axios from 'axios'

const DealsForm = ({ dealData,loadDeals }) => {
  const [dealName, setDealName] = useState('')
  const [stage, setStage] = useState('')
  const [account, setAccount] = useState('')
  const [dealValue, setDealValue] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()

    const dealsData = {
      dealName: dealName,
      stage: stage,
      account: account,
      dealValue: dealValue,
    }

    await axios.patch(`/deals/${dealData._id}`, dealsData)

    setDealName('')
    setStage('')
    setAccount('')
    setDealValue('')
    loadDeals()
  }

  return (
    <>
    <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
          <div className="w-7/12 mt-8 ml-16">
          <form onSubmit={handleSubmit}>
            <div className="grid md:grid-cols-2 md:gap-6">
            <div className="relative z-0 mb-6 w-full group">
              <input 
                type="text" 
                className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-secondary appearance-none focus:outline-none focus:ring-0 focus:border-secondary-focus peer" 
                placeholder=" "
                value={dealName}
                onChange={(e) => setDealName(e.target.value)} 
                required 
              />
              <label className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-secondary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">New Deal</label>
            </div>
            <div className="relative z-0 mb-6 w-full group">
              <input 
                type="text" 
                className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-secondary appearance-none focus:outline-none focus:ring-0 focus:border-secondary-focus peer" 
                placeholder=" "
                value={stage}
                onChange={(e) => setStage(e.target.value)}  
                required 
              />
              <label className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-secondary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Stage</label>
            </div>
            </div>
            <div className="grid md:grid-cols-2 md:gap-6">
              <div className="relative z-0 mb-6 w-full group">
                <input 
                  type="tel" 
                  className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-secondary appearance-none focus:outline-none focus:ring-0 focus:border-secondary-focus peer" 
                  placeholder=" "
                  value={account}
                  onChange={(e) => setAccount(e.target.value)}  
                  required 
                />
                <label className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-secondary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Account</label>
              </div>
              <div className="relative z-0 mb-6 w-full group">
                <input 
                  type="number" 
                  className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-secondary appearance-none focus:outline-none focus:ring-0 focus:border-secondary-focus peer" 
                  placeholder=" " 
                  value={dealValue}
                  onChange={(e) => setDealValue(e.target.value)} 
                  required 
                />
                <label className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-secondary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Deal Value</label>
              </div>
            </div>
            <button type="submit" className="btn btn-primary font-bold">Submit</button>
          </form>
        </div>
      </div>
    </div>
    </>
  )
}

export default DealsForm