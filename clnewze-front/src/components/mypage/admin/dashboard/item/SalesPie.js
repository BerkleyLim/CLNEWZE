import React from 'react'

import ChartPanel from './ChartPanel'
import { FlexPie } from 'wijmo/wijmo.react.chart';

const SalesPie = ({ salesData }) => {
  return (
    <ChartPanel title="Sales by Salesperson">
      <FlexPie itemsSource={salesData}
        binding="sales"
        bindingName="name"
        innerRadius={0.70}
        style={{ height: "290px" }} 
                palette={['rgba( 171,125,246, 1)', 'rgba( 38, 193, 201, 1)', 'rgba( 129,201, 38, 1)', 'rgba( 250, 202, 0, 1)']} />
    </ChartPanel>
  );
}

export default SalesPie