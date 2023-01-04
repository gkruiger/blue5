import React, { useState, useEffect } from 'react'

export const CaveDoor = ({solutionFound}) => {

  const possibleArrows = [
    '\u{2B15}',
    '\u{2B13}',
    '\u{25EA}',
    '\u{25E8}',
    '\u{2B14}',
    '\u{2B12}',
    '\u{25E9}',
    '\u{25E7}',
  ]

  const solution = [2, 1, 0, 1]

  const [arrows, setArrows] = useState([0, 0, 0, 0])

  useEffect(() => {
    if(JSON.stringify(arrows) == JSON.stringify(solution)) {
      solutionFound() 
    }
  }, [arrows])

  const changeArrow = (arrow) => {
    let newArrows = JSON.parse(JSON.stringify(arrows))
    newArrows[arrow] += 1
    if(newArrows[arrow] == possibleArrows.length) newArrows[arrow] = 0
    if(newArrows[arrow] < 0) newArrows[arrow] = possibleArrows.length - 1
    setArrows(newArrows)
  }

  return (
    <div>
      <div className='triple ayana'>
        welina
      </div>
      <table className="quadruple">
        <tbody>
          <tr>
            {arrows.map((arrow, index) => {
              return <td key={index} className="button" onClick={() => {changeArrow(index)}}>{possibleArrows[arrow]}</td>
            })}
          </tr>
        </tbody>
      </table>
    </div>
  )
}