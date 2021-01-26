/* eslint-disable camelcase */

export type ComparisonType = 'maior que' | 'menor que' | 'igual a'

export type NumericValueColumnType = 'population' | 'orbital_period' | 'diameter' | 'rotation_period' | 'surface_water'

export type FilterByName = {
    name: string
}
export type NumericFilterType = {
    comparison: ComparisonType,
    value: string,
    column: NumericValueColumnType
}

export type FilterType = {
    filterByName: FilterByName,
    filterByNumericValues: NumericFilterType[]

}

export type ListItemType = {
    name: string,
    rotation_period: string,
    orbital_period: string,
    diameter: string,
    climate: string,
    gravity: string,
    terrain: string,
    surface_water: string,
    population: string,
    created: string,
    edited: string,
    url: string,
    residents: string[],
    films: string[],
}
