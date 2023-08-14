import React, { useState } from 'react'

import { recentSales } from './item/data/recentSales'
import { salesByCountry } from './item/data/salesByCountry'
import { salesByPerson } from './item/data/salesByPerson'
import CustomNavBar from './CustomNavBar'
import Gauge from './item/Gauge'
import SalesChart from './item/SalesChart'
import SalesPie from './item/SalesPie'
import TransactionList from './item/TransactionList'


// 참조 : https://stackblitz.com/edit/react-wijmo-salesdash-udsdv7?file=style.css
const DashBoard = () => {

  const calculateSales = () => {
    let totalSales = 0;
    recentSales.forEach(sale => totalSales += sale.value);
    return totalSales;
  }

  return (
    <div>
        <CustomNavBar title="Sales Dashboard" />
          <div className="row">
            <Gauge data={calculateSales()} />
            <SalesChart salesData={salesByCountry} />
            <SalesPie salesData={salesByPerson} />
          </div>
          <div className="row">
            <TransactionList transactions={recentSales} />
          </div>
    </div>
  )
}

export default DashBoard