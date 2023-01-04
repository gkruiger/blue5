import React, { useState } from 'react'

export const GardenGate = ({solutionFound}) => {

  const possibleLines = [
    '\u{2503}',
    '\u{2501}',
    '\u{2517}',
    '\u{250F}',
    '\u{2513}',
    '\u{251B}',
  ]

  const [input, setInput] = useState([
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ])

  const solution = [
    [3, 1, 1, 4],
    [5, 3, 4, 0],
    [3, 5, 2, 5],
    [2, 1, 1, 1],
  ]

  const handleClick = (rowIndex, celIndex) => {
    let newInput = JSON.parse(JSON.stringify(input))
    newInput[rowIndex][celIndex] = newInput[rowIndex][celIndex] == possibleLines.length - 1 ? 0 : newInput[rowIndex][celIndex] + 1
    setInput(newInput)
    if(JSON.stringify(newInput) === JSON.stringify(solution)) {solutionFound()}
  }

  return (
    <table className="double">
      <tbody>
        {input.map((row, rowIndex) => {
          return (
            <tr key={rowIndex}>
              <td>{rowIndex == 0 ? '\u{25B2}' : rowIndex == 1 ? '\u{25B6}' : rowIndex == 2 ? '\u{25BC}' : rowIndex == 3 ? '\u{25C0}' : ''}</td>
              <td>{'\u{2501}'}</td>
              {row.map((cel, celIndex) => {
                return <td  className="button" key={celIndex} onClick={() => {handleClick(rowIndex, celIndex)}}>{possibleLines[cel]}</td>
              })}
              <td>{'\u{2501}'}</td>
              <td>{rowIndex == 0 ? '\u{25B3}' : rowIndex == 1 ? '\u{25B7}' : rowIndex == 2 ? '\u{25BD}' : rowIndex == 3 ? '\u{25C1}' : ''}</td>
            </tr>
        )})}
      </tbody>
    </table>
  )
}