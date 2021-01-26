import { makeStyles, Paper, TextField } from '@material-ui/core'
import { useFilterContext } from 'context/filter-context/FilterContext'
import { useTableContext } from 'context/table-context/TableContext'
import React, { useEffect } from 'react'

const useStyles = makeStyles((theme) => ({
    root: {
        margin: theme.spacing(1),
        padding: theme.spacing(1)
    }
}))

export function FilterWrapper() {
    const filterContext = useFilterContext()
    const tableContext = useTableContext()

    useEffect(() => {
        console.log('filtrando')
        tableContext.filterData(filterContext.filter)
    }, [filterContext.filter.filterByName.name])

    const styles = useStyles()

    return (
        <Paper elevation={2} className={styles.root} >
            <TextField
                label={'Filtrar pelo nome'}
                value={filterContext.filter.filterByName.name}
                onChange={event => filterContext.setNameFilter(event.target.value)}
            />
        </Paper>
    )
}
