import React from 'react'
import { Doughnut } from 'react-chartjs-2'

const DoughnutChart = ({ leadCompanies, contactCompanies }) => {
  return (
    <>
    <div className="min-w-0 p-4 rounded-lg shadow-xs">
      <p className="mb-4 font-semibold">Total Companies</p>
      <Doughnut 
        data= {{
          datasets: [
            {
              data: [leadCompanies, contactCompanies],
              backgroundColor: ['#0694a2', '#1c64f2', '#7e3af2'],
              label: 'Dataset 1',
            },
          ],
          labels: ['Lead Companies', 'Contact Companies'],
        }}
        options= {{
          responsive: true,
          cutoutPercentage: 80,
        }}
        legend = {{
          display: false,
        }}
      />
    </div>
    </>
  )
}

export default DoughnutChart