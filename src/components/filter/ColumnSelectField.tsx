import { MenuItem, Select } from '@material-ui/core'
import { useFilterContext } from 'context/filter-context/FilterContext'
import { NumericValueColumnType } from 'context/Types'
import React from 'react'

const NUMERIC_FILTER_OPTIONS: NumericValueColumnType[] = ['diameter', 'orbital_period', 'population', 'rotation_period', 'surface_water']
interface IColumnSelectFieldProps {
    value?: NumericValueColumnType
    onChange: (value: NumericValueColumnType) => void
}

export function ColumnSelectField(props: IColumnSelectFieldProps) {
    const { filter } = useFilterContext()
    return (
        <Select
            value={props.value}
            onChange={(event) => { props.onChange(event.target.value as any as NumericValueColumnType) }}
        >
            {
                NUMERIC_FILTER_OPTIONS
                    .filter(item => !filter.filterByNumericValues.find(f => f.column === item))
                    .map(item => (
                        <MenuItem key={`menu-item-${item}`} value={item}>{item}</MenuItem>
                    ))
            }
        </Select>
    )
}
