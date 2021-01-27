import { MenuItem, Select } from '@material-ui/core'
import { ComparisonType } from 'context/Types'
import React from 'react'

const COMPARISON_FILTER_OPTIONS: ComparisonType[] = ['igual a', 'maior que', 'menor que']
interface IComparisonSelectFieldProps {
    value?: ComparisonType
    onChange: (value: ComparisonType) => void
}

export function ComparisonSelectField(props: IComparisonSelectFieldProps) {
    return (
        <Select
            value={props.value}
            onChange={(event) => { props.onChange(event.target.value as any as ComparisonType) }}
        >
            {
                COMPARISON_FILTER_OPTIONS.map(item => (
                    <MenuItem key={`menu-item-${item}`} value={item}>{item}</MenuItem>
                ))
            }
        </Select>
    )
}
