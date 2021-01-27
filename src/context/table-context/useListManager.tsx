import { FilterType, ListItemType } from 'context/Types'
import { useEffect, useState } from 'react'
import { applyFilterToItem } from 'utils/FilterUtils'

export interface IUseListManager {
    data: ListItemType[],
    filterData: (filter: FilterType) => void
}

export function useListManager(): IUseListManager {
    const [requestReturn, setRequestReturn] = useState<ListItemType[]>([])
    const [data, setData] = useState<ListItemType[]>([])

    useEffect(() => { runSearchRequest() }, [])

    async function runSearchRequest(): Promise<void> {
        const newData = await fetch('https://swapi-trybe.herokuapp.com/api/planets/')
            .then(response => response.json() as any)

        setRequestReturn(newData.results)
        setData(newData.results)
    }

    function filterData(filter: FilterType): void {
        if (!data.length) { return }
        const filteredData = requestReturn.filter(item => applyFilterToItem(filter, item))

        console.log('inside filter')

        setData(filteredData)
    }

    return {
        data,
        filterData
    }
}
