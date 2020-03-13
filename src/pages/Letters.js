import React, { useContext } from "react";
import { DataContext } from "../modules/Contexts";

export default function Letters(props) {
    const data = useContext(DataContext)
    const letters = data.letters
    console.log(letters)

    return (
        <div className="container main-container">
            <div className="row">
                <div className="col-md-12">
                    <Table>
                        {letters.map((letter, i) => {
                            // return (<div key={i}>{letter['#text']}</div>)
                            return <Letter key={i} nr={letter.number} date={letter.date} sent={letter.sent} received={letter.received} content={letter['#text']} />
                        })}
                    </Table>
                </div>
            </div>
        </div>
    )
}

function Table(props) {
    return (
        <table className="table table-striped table-bordered table-sm">
            <thead>
                <tr>
                    <th className="th-sm">Nr</th>
                    <th className="th-sm">Von</th>
                    <th className="th-sm">An</th>
                    <th className="th-sm">Datum</th>
                    <th className="th-sm">Abgesendet</th>
                    <th className="th-sm">Empfangen</th>
                    <th className="th-sm">Typ</th>
                </tr>
            </thead>
            <tbody>
                {props.children}
            </tbody>
        </table>
    )
}

function Letter(props) {
    return (
        <tr>
            <td>
                {props.nr}
            </td>
            <Person person={props.sent} />
            <Person person={props.received}/>
            <DateFormatted date={props.date} />
            <Place />
            <Place />
            <LetterType />
        </tr>
    )
}

function Person(props) {
    const data = useContext(DataContext)
    const pRef = props.person.person.ref.split(" ")[0]
    const person = data.persons.find(x => x["xml:id"] === pRef)
    const fullname = Array.isArray(person.persName) ? person.persName[0] : person.persName
    const fName = Array.isArray(fullname.forename) ? fullname.forename[0] + " " + fullname.forename[1] : fullname.forename
    const forename = fName || fullname.addName['#text']
    const namelink = fullname.namelink || ""
    const surname = fullname.surname
    return (
        <td>
            {namelink ? `${forename} ${namelink} ${surname}` : `${forename} ${surname}`}
        </td>
    )
}
//Date is reserved 🤦‍♂️
function DateFormatted(props) {
    const d = new Date(props.date)
    const year = d.getFullYear() || ""
    const month = d.getMonth() || ""
    const day = d.getDate() || ""

    return(
        <td>
            {`${day}. ${month}. ${year}`}
        </td>
    )
}

function Place(props) {

    return (
         <td>
             Ort
         </td>
    )
}

function LetterType(props) {
    return (
        <td>
            Typ
        </td>
    )
}