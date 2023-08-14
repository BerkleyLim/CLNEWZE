import React from 'react'

import DataPanel from './DataPanel'
import { FlexGrid, FlexGridColumn } from 'wijmo/wijmo.react.grid';

const TransactionList = ({ transactions }) => {
  return (
    <DataPanel title="Recent Transactions">
      <FlexGrid style={{ width: "100%" }}
        itemsSource={transactions}>
        <FlexGridColumn header="Client Name" binding="client" width="2*" />
        <FlexGridColumn header="Description" binding="description" width="3*" />
        <FlexGridColumn header="Total ($)" binding="value" width="1*" />
        <FlexGridColumn header="Quantity" binding="itemCount" width="1*" />
      </FlexGrid>
    </DataPanel>
  );
}

export default TransactionList