import { IUseListManager } from 'context/table-context/useListManager'
import { FilterType, ListItemType } from 'context/Types'
import React, { createContext, PropsWithChildren, useContext, useEffect, useState } from 'react'

const listResultContext = createContext<IUseListManager | undefined>(undefined)

export const TableContextProvider = (props: PropsWithChildren<{}>) => {
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
