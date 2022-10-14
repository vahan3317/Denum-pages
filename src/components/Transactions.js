import React from 'react'
import SearchTransactions from './childComponents/SearchTransactions'
import Table from './Table'

function Transactions() {
  return (
    <div className='font-["Raleway"]'>
     <SearchTransactions />
     <Table />
    </div>
  )
}

export default Transactions