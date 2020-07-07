import React from 'react';
import './letter.scss'

export default function Letter({ nr, sender, receiver, date, from, to }) {

  const clicked = function() {
    alert("clicked")
  }

  return (
    <tr onClick={clicked}>
      <td>{nr}</td>
      <Person person={sender} />
      <Person person={receiver} />
      <DateFormatted date={date} />
      <Place name={from} />
      <Place name={to} />
    </tr>
  )
}

function Person({ person }) {
  return (
    <td>
      {person.namelink ? `${person.namelink} ${person.surname}, ${person.forename} ` : `${person.surname}, ${person.forename} `}
    </td>
  )
}

function Place({ name }) {
  return (
      <td>
          {name}
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

Letter.defaultProps = {
  nr: '1',
  sender: {forename:"Forename", surname:"Surename"},
  receiver: {forename:"Forename", surname:"Surename"},
  date: new Date(),
  from: "sent from",
  to: "sent to"
}