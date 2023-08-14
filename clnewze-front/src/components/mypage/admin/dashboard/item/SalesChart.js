import React from 'react'

import ChartPanel from './ChartPanel'
import { FlexChart, FlexChartSeries } from 'wijmo/wijmo.react.chart';

const SalesChart = ({ salesData }) => {
  return (
    <ChartPanel title="Sales By Country">
      <FlexChart itemsSource={salesData}
        bindingX="country"
        style={{ height: "290px" }}
        palette={['rgba(171,125,246, 1)']}>
        <FlexChartSeries name="Sales" binding="sales" />
      </FlexChart>
    </ChartPanel>
  );
}
export default SalesChart