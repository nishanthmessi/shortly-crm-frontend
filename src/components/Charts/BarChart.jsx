import { useState, useEffect } from 'react'
import axios from 'axios'
import { Bar } from 'react-chartjs-2'


const BarChart = () => {
  const [forecastedRevenue, setForecastedRevenue] = useState()

  const getDeals = async () => {
    const res = await axios.get('/deals')
    const data = res.data.data
    const forecastedRevenue = data.reduce((a,v) =>  a = a + v.dealValue , 0)
    setForecastedRevenue(forecastedRevenue)
  }

  useEffect(() => {
    getDeals()
  }, [])

  return (
    <>
    <div className="min-w-0 p-4 rounded-lg shadow-xs flex flex-col justify-center items-center">
      <p className="mb-4 font-semibold">Revenue</p>
      <Bar 
        data= {{
          labels: ['Revenue'],
          datasets: [
            {
              label: 'Forecasted Revenue',
              backgroundColor: '#0694a2',
              borderWidth: 1,
              data: [forecastedRevenue]
            },
            {
              label: 'Target Revenue',
              backgroundColor: '#7e3af2',
              borderWidth: 1,
              data: [500000]
            },
          ],
        }}
        options= {{
          responsive: true,
          indexAxis: 'y',
        }}
        legend= {{
          display: false,
        }}   
      />
    </div>  
    </>
  )
}

export default BarChart