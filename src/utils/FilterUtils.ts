import { ComparisonType, FilterType, ListItemType, NumericFilterType } from 'context/Types'

function applyWithComparator(value: number, reference: number, comparison: ComparisonType): boolean {
    switch (comparison) {
    case 'igual a':
        return value === reference
    case 'maior que':
        return value > reference
    case 'menor que':
        return value < reference
    }
}

function applyNumericFilters(filters: NumericFilterType[], item: ListItemType): boolean {
    const result = filters.reduce((acc, curr) => {
        return acc && applyWithComparator(+item[curr.column!], +curr.value!, curr.comparison)
    }, true)
    return result
}

function applyFilterByName(item: ListItemType, nameFilter: string): boolean {
    return item.name.includes(nameFilter)
}

export function applyFilterToItem(filter: FilterType, item: ListItemType): boolean {
    return applyFilterByName(item, filter.filterByName.name) && applyNumericFilters(filter.filterByNumericValues, item)
}
