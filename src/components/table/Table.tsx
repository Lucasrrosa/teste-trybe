import { Paper, Table as MaterialTable, TableContainer } from '@material-ui/core'
import { TableHeader } from 'components/table/TableHeader'
import { TableItem } from 'components/table/TableItem'
import { useListManager } from 'context/table-context/useListManager'
import React, { useEffect } from 'react'

export function Table() {
    const { data } = useListManager()

    useEffect(() => {
        console.log('inside table', data)
    }, [data])

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
