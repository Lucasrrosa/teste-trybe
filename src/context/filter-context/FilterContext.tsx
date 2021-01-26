import { IUseFilterReturn, useFilter } from 'context/filter-context/useFilter'
import React, { createContext, PropsWithChildren, useContext } from 'react'

const listResultContext = createContext<IUseFilterReturn | undefined>(undefined)

export const FilterContextProvider = (props: PropsWithChildren<{}>) => {
    const filterManager = useFilter()

    return (
        <listResultContext.Provider value={filterManager}>
            {props.children}
        </listResultContext.Provider>
    )
}

export function useFilterContext(): IUseFilterReturn {
    const listContext = useContext(listResultContext)

    if (!listContext) { throw new Error('Contexto inacessível ou nao inicializado') }

    return listContext
}
