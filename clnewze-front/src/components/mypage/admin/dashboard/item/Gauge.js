import React from 'react'

import ChartPanel from './ChartPanel'
import { RadialGauge } from 'wijmo/wijmo.react.gauge';

const Gauge = ({ data }) => {
  return (
    <ChartPanel title="Today's Sales ($)">
      <div className="gauge">
        <RadialGauge
          min={0} max={500000}
          step={50} isReadOnly={true}
          thickness={0.15}
          value={data}
        />
      </div>
    </ChartPanel>
  );
}

export default Gauge