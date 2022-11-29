import React from 'react'
import { Pie } from 'react-chartjs-2'

const PieChart = ({ deals, leads, contacts, accounts }) => {
  return (
    <>
    <div className="min-w-0 p-4 rounded-lg shadow-xs">
      <p className="mb-4 font-semibold">Overview</p>
      <Pie 
        data= {{
          datasets: [
            {
              data: [leads, deals, contacts, accounts],
              backgroundColor: ['#0694a2', '#1c64f2', '#7e3af2', '#ef9fbc'],
              label: 'Dataset 1',
            },
          ],
          labels: ['Leads', 'Deals', 'Contacts', 'Accounts'],
        }}
        options= {{
          responsive: true,
          cutoutPercentage: 0,
        }}
        legend = {{
          display: false,
        }}
      />
    </div>
    </>
  )
}

export default PieChart