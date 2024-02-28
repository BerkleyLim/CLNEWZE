import React from 'react'
import Chart from 'react-google-charts'

const DashboardManagementPage = () => {
  const data = [
    ['Task', 'Hours per Day'],
    ['Work',     11],
    ['Eat',      2],
    ['Commute',  2],
    ['Watch TV', 2],
    ['Sleep',    7]
  ]
  const options = {
    // title: "매출차트"
  }
  return (
    <div>
    <h1>매출 관리</h1>
    <hr/>
    <br /><br />
    <h2>종합분석</h2>
    <Chart 
      chartType="PieChart"
      data={data}
      width="100%"
      height="400px"
      options={options}
    />
    <hr/>
    {/* <br /><br />
    <h2>일자별매출조회</h2>
    <Chart 
      chartType="PieChart"
      data={data}
      width="100%"
      height="400px"
      options={options}
    />
    <hr/>
    <br /><br />
    <h2>매출리스트</h2>
    <Chart 
      chartType="PieChart"
      data={data}
      width="100%"
      height="400px"
      options={options}
    /> */}
  </div>
  )
}

export default DashboardManagementPage