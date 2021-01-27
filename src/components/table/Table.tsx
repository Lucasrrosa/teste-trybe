import { Paper, Table as MaterialTable, TableContainer } from '@material-ui/core'
import { TableHeader } from 'components/table/TableHeader'
import { TableItem } from 'components/table/TableItem'
import { useTableContext } from 'context/table-context/TableContext'
import React from 'react'

export function Table() {
    const { data } = useTableContext()

    return (
        <TableContainer component={Paper}>
            <MaterialTable size={'small'}>
                <TableHeader/>
                {
                    data.map(item => <TableItem key={item.name} item={item}/>)
                }
            </MaterialTable>
        </TableContainer>
    )
}
