import { TableCell, TableHead, TableRow } from '@material-ui/core'
import React from 'react'

interface ITableHeaderProps {}

export function TableHeader(props: ITableHeaderProps) {
    return (
        <TableHead>
            <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Rotation Period</TableCell>
                <TableCell>Orbital Period</TableCell>
                <TableCell>Diameter</TableCell>
                <TableCell>Climate</TableCell>
                <TableCell>Gravity</TableCell>
                <TableCell>Terrain</TableCell>
                <TableCell>Surface_water</TableCell>
                <TableCell>Population</TableCell>
                <TableCell>Created</TableCell>
                <TableCell>Edited</TableCell>
                <TableCell>url</TableCell>
                <TableCell>Residents</TableCell>
                <TableCell>Films</TableCell>
            </TableRow>

        </TableHead>
    )
}
