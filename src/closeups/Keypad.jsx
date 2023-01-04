import React, { useState, useEffect } from 'react'

export const Keypad = ({solution, solutionFound}) => {

  const temp = [
    ['', '', '', ''],
    ['', '', '', ''],
    ['', '', '', ''],
    ['', '', '', ''],
  ]

  let otherLetters = [
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
  ]
  otherLetters = otherLetters.filter(value => !solution.includes(value))

  const [matrix, setMatrix] = useState([])
  const [lettersSelected, setLettersSelected] = useState([])

  if(matrix.length == 0) {
    for(let letter of solution) {
      let row;
      let column;
      do {
        row = Math.floor(Math.random() * temp.length)
        column = Math.floor(Math.random() * temp[0].length)
      } while(temp[row][column] != '')
      temp[row][column] = letter
    }

    for(let r=0; r<temp.length; r++) {
      for(let c=0; c<temp[r].length; c++) {
        if(temp[r][c] == '') {
          temp[r][c] = otherLetters[Math.floor(Math.random() * otherLetters.length)]
          otherLetters = otherLetters.filter(value => value != temp[r][c])
        }
      }
    }

    setMatrix(temp)
  }  

  useEffect(() => {
    if(JSON.stringify(lettersSelected.sort()) == JSON.stringify(solution.sort())) {
      solutionFound() 
    }
  }, [lettersSelected])

  const handleClick = (cel) => {
    if(lettersSelected.includes(cel)) {
        setLettersSelected(lettersSelected.filter((element) => element != cel))
    } else if(lettersSelected.length < 4) {
        setLettersSelected([...lettersSelected, cel])
    }
  }
  
  return (
    <table className="double">
      <tbody>
        {matrix.map((row) => {
          return (
            <tr key={row[0]}>
            {row.map((cel) => {
              return (
                <td 
                  className='button'
                  style={lettersSelected.includes(cel) ? {color: 'blue'} : {}} 
                  onClick={() => {handleClick(cel)}}
                  key={cel}>
                    {cel}&nbsp;
                </td>
              )
            })}
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}