import React from 'react'
import css from './Table.module.scss'
import { ArrowDown, ArrowUp } from 'Components/Icons/Icons'



export const Table = ({ children }) => <table className={css.table}>{children}</table>

export const TableHead = ({ children }) => (
    <thead>
        <tr>
            {children}
        </tr>
    </thead>
)
export const TableBody = ({ children }) => <tbody>{children}</tbody>
export const TableRow = ({ children }) => <tr>{children}</tr>
export const RowNr = ({ children }) => <td className={css.rowNr}>{children}</td>


export function TableHeadCell({ active = false, callback, dir, children }) {

    const style = active ? css.sortable + ' ' + css.active : css.sortable
    return (
        <th
            onClick={callback}
            className={style}>
            <div className={css.head}>{children} {dir === 'up' ? <ArrowUp /> : <ArrowDown />}</div>
        </th>
    )
}

export function LetterRow(props) {

    const clicked = () => props.callback(props.letterId) || null

    return (
        <tr onClick={clicked}>
            <td>{props.nr || 1}</td>
            <Person person={props.sender || "Sender"} />
            <Person person={props.receiver || "Receiver"} />
            <DateFormatted date={props.date} />
            <Place name={props.from || "sent from"} />
            <Place name={props.to || "sent to"} />
        </tr>
    )
}

function Place({ name }) {
    return (
        <td className={css.small}>
            {name || "Place"}
        </td>
    )
}

export function Person({ person = {} }) {

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
        <td className={css.date + ' ' + css.small}>
            {`${zeroDay}. ${zeroMonth}. ${year}`}
        </td>
    )
}