import { FilterWrapper } from 'components/filter/FilterWrapper'
import { Table } from 'components/table/Table'
import { FilterContextProvider } from 'context/filter-context/FilterContext'
import { TableContextProvider } from 'context/table-context/TableContext'
import React from 'react'

export function App() {
    return (
        <TableContextProvider>
            <FilterContextProvider>
                <FilterWrapper/>
                <Table/>
            </FilterContextProvider>
        </TableContextProvider>
    )
}
