import { makeStyles, Paper, Table as MaterialTable, TableContainer } from '@material-ui/core'
import { TableHeader } from 'components/table/TableHeader'
import { TableItem } from 'components/table/TableItem'
import { useTableContext } from 'context/table-context/TableContext'
import React from 'react'

const useStyles = makeStyles((theme) => ({
    // table: {
    //     margin: theme.spacing(1),
    //     padding: theme.spacing(1)
    // },
    paper: {
        margin: theme.spacing(1),
        padding: theme.spacing(1)
        // width: '98vw'
    }
}))

export function Table() {
    const { data } = useTableContext()
    const styles = useStyles()

    return (
        <Paper className={styles.paper}>
            <TableContainer >
                <MaterialTable size={'small'}>
                    <TableHeader/>
                    {
                        data.map(item => <TableItem key={item.name} item={item}/>)
                    }
                </MaterialTable>
            </TableContainer>
        </Paper>
    )
}
