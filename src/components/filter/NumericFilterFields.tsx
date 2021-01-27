import { IconButton, TextField } from '@material-ui/core'
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
        setNewFilter({ comparison: 'igual a', column: undefined, value: undefined })
    }

    return (
        <div>
            <ColumnSelectField
                onChange={column => { setNewFilter({ ...newFilter, column }) }}
                value={newFilter.column}
            />
            <ComparisonSelectField
                onChange={comparison => { setNewFilter({ ...newFilter, comparison }) }}
                value={newFilter.comparison}
            />
            <TextField
                type={'number'}
                value={newFilter.value}
                onChange={event => {
                    setNewFilter({ ...newFilter, value: event.target.value })
                }}
            />
            {filterContext.canAddNumericFilter &&
                <IconButton
                    onClick={addFilter}
                    disabled={!newFilter.column || !newFilter.value || !newFilter.comparison}
                >
                    <AddCircle fontSize={'default'} />
                </IconButton>
            }
        </div>
    )
}
