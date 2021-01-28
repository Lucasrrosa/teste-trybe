import { Grid, IconButton, TextField } from '@material-ui/core'
import { AddCircle } from '@material-ui/icons'
import { ColumnSelectField } from 'components/filter/ColumnSelectField'
import { ComparisonSelectField } from 'components/filter/ComparisonSelectField'
import { useFilterContext } from 'context/filter-context/FilterContext'
import { NumericFilterType } from 'context/Types'
import React, { useState } from 'react'

interface INumericFilterProps {}

export function NumericFilterFields(props: INumericFilterProps) {
    const filterContext = useFilterContext()
    const [newFilter, setNewFilter] = useState<NumericFilterType>({ comparison: 'igual a', column: undefined, value: undefined })

    function addFilter() {
        filterContext.addNumericFilter(newFilter)
        setNewFilter({ comparison: 'igual a', column: undefined, value: '' })
    }

    return (
        <Grid container spacing={2}>
            <Grid item xs={4}>
                <ColumnSelectField
                    onChange={column => { setNewFilter({ ...newFilter, column }) }}
                    value={newFilter.column}
                />
            </Grid>
            <Grid item xs={3}>

                <ComparisonSelectField
                    onChange={comparison => { setNewFilter({ ...newFilter, comparison }) }}
                    value={newFilter.comparison}
                />
            </Grid>
            <Grid item xs={3}>
                <TextField
                    label={'Valor'}
                    size={'small'}
                    type={'number'}
                    value={newFilter.value}
                    onChange={event => {
                        setNewFilter({ ...newFilter, value: event.target.value })
                    }}
                />
            </Grid>
            {filterContext.canAddNumericFilter &&
                <Grid item xs={2}>
                    <IconButton
                        onClick={addFilter}
                        disabled={!newFilter.column || !newFilter.value || !newFilter.comparison}
                    >
                        <AddCircle fontSize={'default'} />
                    </IconButton>
                </Grid>
            }
        </Grid>
    )
}
