import React from 'react'
import './Table.scss'
import {ArrowDown, ArrowUp} from './../Icons'

export default function Table(props) {

    
    return (
        <table className="table table-striped">
            <TableHeader />
            <tbody>
                {props.children}
            </tbody>
        </table>
    )
}

export function TableHeader() {
    return (
        <thead>
            <tr>
                <ThCell>Nr</ThCell>
                <ThCell active={true}>Von</ThCell>
                <ThCell>An</ThCell>
                <ThCell>Datum</ThCell>
                <ThCell>Abgesendet</ThCell>
                <ThCell>Empfangen</ThCell>
            </tr>
        </thead>
    )
}

export function ThCell({active, callback, dir, children}) {

    const style = active ? "lt-sortable-table-header active" : "lt-sortable-table-header"
    return (
    <th 
        onClick={callback}
        className={style}>
        {children} {dir === 'up' ? <ArrowUp/> : <ArrowDown/> }
    </th>
    )
}