import React from 'react';
import { Table, TableHeadCell, TableHead, TableBody, Person, Letter } from 'Components/Table/Table';

export default {
  title: 'Table'
}

export const Header = () => {
  return (
    <Table>
      <TableHead>
        <TableHeadCell>Nr</TableHeadCell>
        <TableHeadCell active>Von</TableHeadCell>
        <TableHeadCell>An</TableHeadCell>
        <TableHeadCell>Datum</TableHeadCell>
        <TableHeadCell>Abgesendet</TableHeadCell>
        <TableHeadCell>Empfangen</TableHeadCell>
      </TableHead>
    </Table>
  )
}

export const FullTable = () => (
  <Table>
    <TableHead>
      <TableHeadCell>Nr</TableHeadCell>
      <TableHeadCell active>Von</TableHeadCell>
      <TableHeadCell>An</TableHeadCell>
      <TableHeadCell>Datum</TableHeadCell>
      <TableHeadCell>Abgesendet</TableHeadCell>
      <TableHeadCell>Empfangen</TableHeadCell>
    </TableHead>
    <TableBody>
      <Letter />
      <Letter />
      <Letter />
      <Letter />
      <Letter />
      <Letter />
      <Letter />
      <Letter />
      <Letter />
      <Letter />
      <Letter />
      <Letter />
      <Letter />
      <Letter />
      <Letter />
      <Letter />
      <Letter />
      <Letter />
      <Letter />
      <Letter />
    </TableBody>
  </Table>
)

export const LetterRow = ({nr,sender,receiver,date,from,to}) => (
  <Table>
    <TableBody>
    <Letter nr={nr} sender={sender} receiver={receiver} date={date} from={from} to={to}/>
    </TableBody>
  </Table>
)