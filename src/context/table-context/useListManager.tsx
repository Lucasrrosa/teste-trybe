import { FilterType, ListItemType } from 'context/Types'
import { useEffect, useState } from 'react'

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
        const filteredData = requestReturn.filter(item => {
            if (item.name.includes(filter.filterByName.name)) { return true }
            return false
        })

        console.log('inside filter')

        setData(filteredData)
    }

    return {
        data,
        filterData
    }
}
