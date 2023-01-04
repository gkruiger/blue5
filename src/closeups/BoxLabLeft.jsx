import React, { useState } from 'react'

export const BoxLabLeft = ({solutionFound}) => {

  const possibleLines = [
    'a',
    'e',
    'h',
    'i',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'u',
    'w'
  ]

  const [input, setInput] = useState([
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
  ])

  const solution = [
    [0, 7, 8, 6, 3],
    [0, 3, 5, 10, 0],
    [0, 5, 0, 7, 8],
    [0, 11, 3, 7, 0]
  ]

  const handleClick = (rowIndex, celIndex) => {
    let newInput = JSON.parse(JSON.stringify(input))
    newInput[rowIndex][celIndex] = newInput[rowIndex][celIndex] == possibleLines.length - 1 ? 0 : newInput[rowIndex][celIndex] + 1
    setInput(newInput)
    if(JSON.stringify(newInput) === JSON.stringify(solution)) {
      solutionFound()
    }
  }

  return (
    <table className="double">
      <tbody>
        {input.map((row, rowIndex) => {
          return (
            <tr key={rowIndex}>
              <td className='eversonmono triple'>{rowIndex == 0 ? '\u{1F701}' : rowIndex == 1 ? '\u{1F702}' : rowIndex == 2 ? '\u{1F703}' : rowIndex == 3 ? '\u{1F704}' : ''}</td>
              <td>&nbsp;</td>
              {row.map((cel, celIndex) => {
                return <td  className="button ayana" key={celIndex} onClick={() => {handleClick(rowIndex, celIndex)}}>{possibleLines[cel]}</td>
              })}
            </tr>
        )})}
      </tbody>
    </table>
  )
}