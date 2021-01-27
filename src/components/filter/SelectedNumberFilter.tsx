import { Chip, makeStyles } from '@material-ui/core'
import { useFilterContext } from 'context/filter-context/FilterContext'
import { NumericFilterType } from 'context/Types'
import React from 'react'

interface ISelectedNumberFilterProps {
    filter: NumericFilterType
}

const useStyles = makeStyles((theme) => ({
    chip: {
        margin: theme.spacing(1)
    }
}))

export function SelectedNumberFilter(props: ISelectedNumberFilterProps) {
    const styles = useStyles()
    const { removeNumericField } = useFilterContext()
    return (
        <Chip
            className={styles.chip}
            variant={'outlined'}
            label={`${props.filter.column} ${props.filter.comparison} ${props.filter.value}`}
            onDelete={() => removeNumericField(props.filter.column!)}
        />
    )
}
