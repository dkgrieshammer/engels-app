import React from 'react';
import { Table, TableHeadCell, TableHead, TableBody, LetterRow } from 'components/Table/Table';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Elements/Table'
}

export const Header = () => {
  return (
    <Table>
      <TableHead>
        <TableHeadCell callback={action('clicked on nr')}>Nr</TableHeadCell>
        <TableHeadCell active  callback={action('clicked on sender')}>Von</TableHeadCell>
        <TableHeadCell callback={action('clicked on receiver')}>An</TableHeadCell>
        <TableHeadCell callback={action('clicked on date')}>Datum</TableHeadCell>
        <TableHeadCell callback={action('clicked on from')}>Abgesendet</TableHeadCell>
        <TableHeadCell callback={action('clicked on to')}>Empfangen</TableHeadCell>
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
      <LetterRow />
      <LetterRow />
      <LetterRow />
      <LetterRow />
      <LetterRow />
      <LetterRow />
      <LetterRow />
      <LetterRow />
      <LetterRow />
      <LetterRow />
      <LetterRow />
      <LetterRow />
      <LetterRow />
      <LetterRow />
      <LetterRow />
      <LetterRow />
      <LetterRow />
      <LetterRow />
      <LetterRow />
      <LetterRow />
    </TableBody>
  </Table>
)

export const Letter = ({nr,sender,receiver,date,from,to}) => (
  <Table>
    <TableBody>
    <LetterRow nr={nr} sender={sender} receiver={receiver} date={date} from={from} to={to}/>
    </TableBody>
  </Table>
)