import React, { useEffect, useState} from 'react'

export const BoxLock = ({solutionFound}) => {
 
  const [arrows, setArrows] = useState([0, 1, 2, 3, 4, 5, 6, 7])
  const [mouseOver, setMouseOver] = useState(-1)

  const gears = [
    [0, 1, 7],
    [1, 5],
    [2, 1, 3],
    [3, 7],
    [4, 3, 5],
    [5, 1],
    [6, 5, 7],
    [7, 3],
  ]

  const solution = [4, 5, 6, 7, 0, 1, 2, 3]

  const possibleArrows = [
    '\u{1F866}',
    '\u{1F863}',
    '\u{1F867}',
    '\u{1F860}',
    '\u{1F864}',
    '\u{1F861}',
    '\u{1F865}',
    '\u{1F862}',
  ]

  useEffect(() => {
    if(JSON.stringify(arrows) == JSON.stringify(solution)) {
      solutionFound() 
    }
  }, [arrows])

  const handleClick = (index) => {   
    gears[index].map((gear) => {
      setArrows((previousState) => {
        let newArrows = [...previousState]
        newArrows[gear] = newArrows[gear] + 1 == possibleArrows.length ? 0 : arrows[gear] + 1
        return newArrows
      })
    })
  }

  const handleMouseOver = (value) => {
    setMouseOver(value)
  }

  const getColor = (index) => {
    if(mouseOver != -1) {
      for(let i=0; i<gears[mouseOver].length; i++) {
        if(gears[mouseOver][i] == index) {
          return 'blue'
        }
      }
    } 
    return 'black'
  }

  const cell = (index) => {
    return (
      <td
        className="button"
        onMouseOver={() => {handleMouseOver(index)}} 
        onMouseOut={() => {handleMouseOver(-1)}}
        onClick={() => {handleClick(index)}}
        style={{color: getColor(index), width: "60px"}}>
          {possibleArrows[arrows[index]]}
        </td>
    )
  }

  return (
    <table className="triple iosevka" style={{textAlign: 'center'}}>
      <tbody>
        <tr>
          {cell(0)}
          {cell(1)}
          {cell(2)}
        </tr>
        <tr>
          {cell(7)}
          <td>&nbsp;&nbsp;</td>
          {cell(3)}
        </tr>
        <tr>
          {cell(6)}
          {cell(5)}
          {cell(4)}
        </tr>
      </tbody>
    </table>
  )
}