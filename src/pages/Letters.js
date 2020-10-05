import { LetterRow, Table, TableBody, TableHead, TableHeadCell } from 'components/Table/Table';
import { DataContext } from 'modules/Contexts';
import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Page from './Page';

export function Letters(props) {
  const data = useContext(DataContext)
  const history = useHistory() //used for Letter click
  const [by, setSorting] = useState({ asc: true, col: 'nr' })
  const letters = [...data.letters]
  const pLetters = getPersons(letters, data)
  const fullLetters = getPlaces(pLetters, data)


  function onSelect(id) {
    if (id === by.col) toggleDirection()
    else setSorting({ asc: by.asc, col: id })
  }

  function toggleDirection() {
    const dir = by.asc ? false : true
    setSorting({ asc: dir, col: by.col })
  }
  sortBy(by, fullLetters)
  function sortBy(by, letters) {
    switch (by.col) {
        case 'nr':
            console.log("by Num")
            sortByNum(letters, by.col, by.asc)
            break;
        case 'sender':
        case 'receiver':
            sortByName(letters, by.col, by.asc)
            break;
        case 'from':
        case 'to':
            sortByLetter(letters, by.col, by.asc)
            break;
        case 'date':
            sortByDate(letters, by.col, by.asc)
            break;
        default:
            break;
    }
}

function sortByDate(l, col, asc) {
  const retVal = asc ? 1 : -1
  l.sort((a, b) => {
      return a.date > b.date ? retVal : a.date < b.date ? -retVal : 0
  })
  return l
}

function sortByLetter(l, col, asc) {
  const retVal = asc ? 1 : -1
  l.sort((a, b) => {
      return a[col] > b[col] ? retVal : a[col] < b[col] ? -retVal : 0
  })
  return l
}

function sortByNum(l, col, asc) {
  l.sort((a, b) => {
      const aNum = a.number
      const bNum = b.number
      const check = aNum > bNum ? 1 : aNum < bNum ? -1 : 0
      return asc ? check : check * -1
  })
  return l
}

function sortByName(l, col, asc) {
  const retVal = asc ? 1 : -1
  l.sort(function (a, b) {
      const aName = a[col].surname.toLowerCase() + a[col].forename.toLowerCase()
      const bName = b[col].surname.toLowerCase() + b[col].forename.toLowerCase()
      if (aName > bName) return retVal
      else if (aName < bName) return -retVal
      return 0
  })
  return l
}

const onLetterClicked = (id) => {
  history.push(`/letter/:${id}`)
}

  return (
    <Page
      title="Übersicht aller Briefe"
    >
      <Table>
        <TableHead>
          <TableHeadCell dir={by['asc'] ? 'down' : 'up'} active={by.col === 'nr'} callback={() => onSelect('nr')}>Nr</TableHeadCell>
          <TableHeadCell dir={by['asc'] ? 'down' : 'up'} active={by.col === 'sender'} callback={() => onSelect('sender')}>Von</TableHeadCell>
          <TableHeadCell dir={by['asc'] ? 'down' : 'up'} active={by.col === 'receiver'} callback={() => onSelect('receiver')}>An</TableHeadCell>
          <TableHeadCell dir={by['asc'] ? 'down' : 'up'} active={by.col === 'date'} callback={() => onSelect('date')}>Datum</TableHeadCell>
          <TableHeadCell dir={by['asc'] ? 'down' : 'up'} active={by.col === 'from'} callback={() => onSelect('from')}>Abgesendet</TableHeadCell>
          <TableHeadCell dir={by['asc'] ? 'down' : 'up'} active={by.col === 'to'} callback={() => onSelect('to')}>Empfangen</TableHeadCell>
        </TableHead>
        <TableBody>
          {fullLetters.map((letter, i) => {
            return <LetterRow key={i} callback={onLetterClicked} letterId={letter.name} nr={letter.number} date={letter.date} sender={letter.sender} receiver={letter.receiver} from={letter.from} to={letter.to} content={letter['#text']} />
          })}
        </TableBody>
      </Table>
    </Page>
  )
}


function getPerson(person, data) {
  try {
    const pRef = person.ref.split(" ")[0].slice(1) //FUCKING CHANGES OF IDS -> THIS SRSLY NEEDS TO STOP, FRONTEND BREAKS ON EVERY CHANGE OF DATA MODEL FROM EXIST!!!!!!! AAAAAAARG FUCK MY WEEKENDS 
    const p = data.persons.find(x => x["xml:id"] === pRef)
    const fullname = Array.isArray(p.persName) ? p.persName[0] : p.persName //exception handling & data modeling needs to come from the backend, capturing errors should happen where the model is produced!
    const fName = Array.isArray(fullname.forename) ? fullname.forename[0] + " " + fullname.forename[1] : fullname.forename
    const forename = fName || fullname.addName['#text']
    const namelink = fullname.namelink || ""
    const surname = fullname.surname
    return { forename: forename, namelink: namelink, surname: surname }
  } 
  catch {
    return {forename: 'fehler', namelink: '', surname: 'datensatz'}
  }

}

function getPersons(letters, data) {
  const tmpLetters = letters.map(
      (letter, index) => {
          const tLetter = Object.assign({}, letter)
          const sender = getPerson(tLetter.sent.person, data)
          const receiver = getPerson(tLetter.received.person, data)
          tLetter.sender = sender
          tLetter.receiver = receiver
          return tLetter
      }
  )
  return tmpLetters
}

function getPlace(place, data) {
  debugger
  const pRef = place.ref.slice(1) //AGAIN, THIS AINT FUNNY - IDs at LEAST need to match 🙄
  const p = data.places.find(x => x["xml:id"] === pRef) || { placeName: "unbekannt" }
  const pName = p.placeName
  return pName
}

function getPlaces(letters, data) {
  const tmpLetters = letters.map(
      (letter, index) => {
          const tLetter = Object.assign({}, letter) //TODO actually it could be good to save to shallow object to save that procedure?
          const from = getPlace(tLetter.sent.place, data)
          const to = getPlace(tLetter.received.place, data)
          tLetter.from = from
          tLetter.to = to
          return tLetter
      }
  )
  return tmpLetters
}