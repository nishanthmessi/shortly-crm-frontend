import { useState, useEffect } from "react"
import axios from "axios"
import AccountsForm from "../components/Accounts/AccountsForm"
import AccountEditForm from "../components/Accounts/AccountEditForm"
import { Trash, Edit  } from 'react-feather'
import Spinner from "../components/Spinner"

const Accounts = () => {
  const [loading, setLoading] = useState(true);
  const [showAddRow, setShowAddRow] = useState(false)
  const [accounts, setAccounts] = useState([])
  const [account, setAccount] = useState()

  const accountData = account

  const loadAccounts = async () => {
    const res = await axios.get('/accounts')
    setAccounts(res.data.data)
    setLoading(false)
  }

  useEffect(() => {
    loadAccounts()
  }, [])

  const editAccounts = async (id) => {
    const res = await axios.get(`/accounts/${id}`)
    setAccount(res.data.data)
  }

  const deleteAccounts = async (id) => {
    await axios.delete(`/accounts/${id}`)
    setAccounts(accounts.filter((account) => account.id !== id))

    loadAccounts()
  }

  if(!loading) {
  return (
    <>
    <div className="w-9/12 mb-12 px-4 mx-auto mt-8">
      <h1 className='text-5xl font-bold mb-10'>Accounts</h1>
        <div className="w-full px-20">
          <table className="table w-full text-center">
            <thead>
              <tr>
                <th className='text-lg'>Account</th> 
                <th className='text-lg'>Contacts</th> 
                <th className='text-lg'>Industry</th>
                <th className='text-lg'>Priority</th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
            {accounts.map((account, i) => (
            <tr key={i} className="">
              <td>{account.accountName}</td>
              <td>{account.contact}</td>
              <td>{account.industry}</td>
              <td>{account.priority}</td>
              <td>
                <label htmlFor="my-modal-3" className="cursor-pointer text-secondary" onClick={() => editAccounts(account._id)}>
                  <Edit/>
                </label>
                <AccountEditForm accountData={accountData} loadAccounts={loadAccounts}/>
              </td>
              <td>
              <label className="cursor-pointer">
                <Trash className="text-error" onClick={() => deleteAccounts(account._id)}/>
              </label>
              </td>
            </tr>  
            ))}                                  
            </tbody>          
          </table>         
        </div>
        <div className="flex flex-col justify-center items-center mt-10">
        <div>
          <span className="font-bold mr-3">Add Account</span>
          <button 
            className={`btn btn-circle text-2xl font-medium ${showAddRow ? 'btn-error' : 'btn-primary'}`} 
            onClick={() => setShowAddRow(!showAddRow)}>
              {showAddRow ? '×' : '+'}
          </button>
          </div>
          {showAddRow && <AccountsForm loadAccounts={loadAccounts}/>}
        </div>
      </div>
    </>
  )
} else {
    return <Spinner />
  }
}

export default Accounts