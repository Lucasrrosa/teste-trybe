import { TableCell, TableRow } from '@material-ui/core'
import { ListItemType } from 'context/Types'
import React from 'react'

interface ITableItemProps {
    item: ListItemType
}

export function TableItem({ item }: ITableItemProps) {
    return (
        <TableRow>
            <TableCell>{item.name}</TableCell>
            <TableCell>{item.rotation_period}</TableCell>
            <TableCell>{item.orbital_period}</TableCell>
            <TableCell>{item.diameter}</TableCell>
            <TableCell>{item.climate}</TableCell>
            <TableCell>{item.gravity}</TableCell>
            <TableCell>{item.terrain}</TableCell>
            <TableCell>{item.surface_water}</TableCell>
            <TableCell>{item.population}</TableCell>
            <TableCell>{item.created}</TableCell>
            <TableCell>{item.edited}</TableCell>
            <TableCell>{item.url}</TableCell>
            <TableCell>{item.residents}</TableCell>
            <TableCell>{item.films}</TableCell>
        </TableRow>
    )
}
