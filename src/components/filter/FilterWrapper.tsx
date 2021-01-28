import { Grid, makeStyles, Paper, TextField } from '@material-ui/core'
import { NumericFilterFields } from 'components/filter/NumericFilterFields'
import { SelectedNumberFilter } from 'components/filter/SelectedNumberFilter'
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
    }, [filterContext.filter])

    const styles = useStyles()

    return (
        <Paper elevation={2} className={styles.root} >
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <TextField
                        fullWidth
                        size={'small'}
                        label={'Filtrar pelo nome'}
                        value={filterContext.filter.filterByName.name}
                        onChange={event => filterContext.setNameFilter(event.target.value)}
                    />
                </Grid>
                <Grid item xs={6}>
                    <NumericFilterFields/>
                </Grid>
            </Grid>
            {filterContext.filter.filterByNumericValues.map(item => <SelectedNumberFilter filter={item} key={item.column} />)}
        </Paper>
    )
}
