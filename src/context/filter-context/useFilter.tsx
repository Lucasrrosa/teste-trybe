import { FilterType, NumericFilterType, NumericValueColumnType } from 'context/Types'
import { useState } from 'react'

export interface IUseFilterReturn {
    filter: FilterType
    addNumericFilter: (item: NumericFilterType) => void
    removeNumericField: (key: NumericValueColumnType) => void
    setNameFilter: (value: string) => void
}

export function useFilter(): IUseFilterReturn {
    const [name, setNameFilter] = useState<string>('')
    const [numericFields, setNumericFields] = useState<NumericFilterType[]>([])

    function addNumericFilter(item: NumericFilterType) {
        setNumericFields([...numericFields, item])
    }

    function removeNumericField(key: NumericValueColumnType) {
        const filters = numericFields.filter(item => item.column !== key)
        setNumericFields(filters)
    }

    return {
        filter: {
            filterByName: { name },
            filterByNumericValues: numericFields
        },
        addNumericFilter,
        removeNumericField,
        setNameFilter
    }
}
