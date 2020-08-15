import React, { useContext, useState } from "react";
import { DataContext } from "./../modules/Contexts";
import Table, { TableHeadCell } from 'Components/Table/Table'
import Toolbox from "Components/Filter/Filter";

export default function Letters(props) {
    const data = useContext(DataContext)
    const [by, sortL] = useState({ asc: true, col: 'nr' })
    const letters = [...data.letters]
    const pLetters = getPersons(letters, data)
    const fullLetters = getPlaces(pLetters, data)

    sortBy()
    function sortBy() {
        switch (by.col) {
            case 'nr':
                console.log("by Num")
                sortByNum(fullLetters, by.col, by.asc)
                break;
            case 'sender':
            case 'receiver':
                sortByName(fullLetters, by.col, by.asc)
                break;
            case 'from':
            case 'to':
                sortByLetter(fullLetters, by.col, by.asc)
                break;
            case 'date':
                sortByDate(fullLetters, by.col, by.asc)
                break;
            default:
                break;
        }
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

    function onSelect(id) {
        if (id === by.col) toggleDirection()
        else sortL({ asc: by.asc, col: id })
    }

    function toggleDirection() {
        const dir = by.asc ? false : true
        sortL({ asc: dir, col: by.col })
    }

    return (
        <div className="container main-container">
            <div className="row">
                <div className="col-md-12">
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <TableHeadCell dir={by['asc'] ? 'down' : 'up'} active={by.col === 'nr'} callback={() => onSelect('nr')}>Nr</TableHeadCell>
                                <TableHeadCell dir={by['asc'] ? 'down' : 'up'} active={by.col === 'sender'} callback={() => onSelect('sender')}>Von</TableHeadCell>
                                <TableHeadCell dir={by['asc'] ? 'down' : 'up'} active={by.col === 'receiver'} callback={() => onSelect('receiver')}>An</TableHeadCell>
                                <TableHeadCell dir={by['asc'] ? 'down' : 'up'} active={by.col === 'date'} callback={() => onSelect('date')}>Datum</TableHeadCell>
                                <TableHeadCell dir={by['asc'] ? 'down' : 'up'} active={by.col === 'from'} callback={() => onSelect('from')}>Abgesendet</TableHeadCell>
                                <TableHeadCell dir={by['asc'] ? 'down' : 'up'} active={by.col === 'to'} callback={() => onSelect('to')}>Empfangen</TableHeadCell>
                            </tr>
                        </thead>
                        <tbody>
                            {fullLetters.map((letter, i) => {
                                // return (<div key={i}>{letter['#text']}</div>)
                                return <Letter key={i} nr={letter.number} date={letter.date} sender={letter.sender} receiver={letter.receiver} from={letter.from} to={letter.to} content={letter['#text']} />
                            })}
                        </tbody>
                    </table>
                </div>
                <div className="toolbox-position-container">
                <Toolbox />
                </div>                            
            </div>
        </div>
    )
}

function Letter(props) {
    return (
        <tr>
            <td>{props.nr}</td>
            <Person person={props.sender} />
            <Person person={props.receiver} />
            <DateFormatted date={props.date} />
            <Place name={props.from} />
            <Place name={props.to} />
        </tr>
    )
}

function getPerson(person, data) {
    const pRef = person.ref.split(" ")[0]
    const p = data.persons.find(x => x["xml:id"] === pRef)
    const fullname = Array.isArray(p.persName) ? p.persName[0] : p.persName
    const fName = Array.isArray(fullname.forename) ? fullname.forename[0] + " " + fullname.forename[1] : fullname.forename
    const forename = fName || fullname.addName['#text']
    const namelink = fullname.namelink || ""
    const surname = fullname.surname
    return { forename: forename, namelink: namelink, surname: surname }
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
    const pRef = place.ref
    const p = data.places.find(x => x["xml:id"] === pRef) || { placeName: "-" }
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

function Person({ person }) {
    return (
        <td>
            {person.namelink ? `${person.namelink} ${person.surname}, ${person.forename} ` : `${person.surname}, ${person.forename} `}
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

function Place({ name }) {
    return (
        <td>
            {name}
        </td>
    )
}