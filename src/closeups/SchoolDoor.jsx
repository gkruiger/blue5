import React, { useState, useEffect } from 'react'

export const SchoolDoor = ({solutionFound}) => {
 
  const [numbersSelected, setNumbersSelected] = useState([])

  const solution = [3, 9, 11, 14]

  const handleClick = (number) => {
    if(numbersSelected.includes(number)) {
       setNumbersSelected(numbersSelected.filter(n => n != number))
    } else if(numbersSelected.length != solution.length) {
      setNumbersSelected(numbersSelected => [...numbersSelected, number])
    }
  }

  useEffect(() => {
    if(JSON.stringify(numbersSelected.sort()) == JSON.stringify(solution.sort())) {
      solutionFound() 
    }
  }, [numbersSelected])

  const size = 19;

  let numberLine = [];
  for(let i=0; i<size; i++) {
    numberLine.push((i+1) % 4 == 0 ? '\u{254B}' : '\u{253C}')
  }

  return (
    <div className='double'>
      {numberLine.map((character, index) => {
        return ( 
          <div className='button' style={{display: 'inline-block', color: numbersSelected.includes(index+1) ? 'blue' : 'black'}} key={index} onClick={() => handleClick(index+1)}>
            {character}
          </div>
        )
      })}

      &nbsp; 

      {solution.map((item, index) => {
        return ( 
          <div key={index} style={{display: 'inline-block', color: numbersSelected.length > index ? 'blue' : 'black'}}>
            {numbersSelected.length > index ? '\u{2588}' : '\u{2592}'}
          </div>
        )
      })}
    </div>
  )
}