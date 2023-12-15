import React, { useState } from 'react'
import Chart from 'react-google-charts'



// 참조 : https://stackblitz.com/edit/react-wijmo-salesdash-udsdv7?file=style.css
const DashBoard = () => {

  return (
    <div>
      <h1>대쉬보드</h1>

      <h2>매출액</h2>
      <Chart 
        chartType="ScatterChart"
        data={[["Age", "Weight"], [4, 5.5], [8, 12]]}
        width="100%"
        height="400px"
        legendToggle
      />

      <h2>오늘 방문자 수</h2>
      <Chart 
        chartType="ScatterChart"
        data={[["Age", "Weight"], [4, 5.5], [8, 12]]}
        width="100%"
        height="400px"
        legendToggle
      />

      <h2>악보 판매 건수</h2>
      <Chart 
        chartType="ScatterChart"
        data={[["Age", "Weight"], [4, 5.5], [8, 12]]}
        width="100%"
        height="400px"
        legendToggle
      />

      <h2>악보 판매 건수</h2>
      <Chart 
        chartType="ScatterChart"
        data={[["Age", "Weight"], [4, 5.5], [8, 12]]}
        width="100%"
        height="400px"
        legendToggle
      />
    </div>
  )
}

export default DashBoard