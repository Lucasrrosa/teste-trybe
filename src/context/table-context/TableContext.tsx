import { FilterType, ListItemType } from 'context/Types'
import React, { createContext, PropsWithChildren, useContext, useEffect, useState } from 'react'
import { applyFilterToItem } from 'utils/FilterUtils'

const listResultContext = createContext<IUseListManager | undefined>(undefined)

export interface IUseListManager {
    data: ListItemType[],
    filterData: (filter: FilterType) => void
}

export const TableContextProvider = (props: PropsWithChildren<{}>) => {
    const [requestReturn, setRequestReturn] = useState<ListItemType[]>([])
    const [data, setData] = useState<ListItemType[]>([])

    useEffect(() => { runSearchRequest() }, [])
    useEffect(() => { console.log('effect', data) }, [data])

    async function runSearchRequest(): Promise<void> {
        const newData = await fetch('https://swapi-trybe.herokuapp.com/api/planets/')
            .then(response => response.json() as any)

        setRequestReturn(newData.results)
        setData(newData.results)
    }

    function filterData(filter: FilterType): void {
        const filteredData = requestReturn.filter(item => applyFilterToItem(filter, item))
        console.log('inside filter')

        setData([...filteredData])
    }
    return (
        <listResultContext.Provider value={{ data, filterData }}>
            {props.children}
        </listResultContext.Provider>
    )
}

export function useTableContext(): IUseListManager {
    const listContext = useContext(listResultContext)

    if (!listContext) { throw new Error('Contexto inacessível ou nao inicializado') }

    return listContext
}
