import React from 'react'
import './Table.scss'
import {ArrowDown, ArrowUp} from './../../Icons'
import PropTypes from 'prop-types'

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

export function Letter(props) {
    return (
        <tr>
            <td>{props.nr || 1}</td>
            <Person person={props.sender} />
            <Person person={props.receiver} />
            <DateFormatted date={props.date} />
            <Place name={props.from} />
            <Place name={props.to} />
        </tr>
    )
}

function Place({ name }) {
    return (
        <td>
            {name || "Place"}
        </td>
    )
}

export function Person({person = {}}) {

    return (
        <td>
            {person.namelink !== undefined ? `${person.namelink} ${person.surname}, ${person.forename} ` : `${person.surname || "Surname"}, ${person.forename || "Forename"}`}
        </td>
    )
}


//Date is reserved 🤦‍♂️
function DateFormatted(props) {
    const d = new Date(props.date)
    const year = d.getFullYear() || ""
    const month = d.getMonth() || ""
    const day = d.getDate() || ""
    const zeroMonth = month < 10 ? `0${month}` : month
    const zeroDay = day < 10 ? `0${day}` : day
    return (
        <td className="date">
            {`${zeroDay}. ${zeroMonth}. ${year}`}
        </td>
    )
}