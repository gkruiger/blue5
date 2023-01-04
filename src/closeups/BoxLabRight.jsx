import React, { useState } from 'react'

export const BoxLabRight = ({solutionFound}) => {

  const [input, setInput] = useState([])

  const solution = [
    'red',
    'green',
    'orange',
    'blue',
  ]

  const colors = [
    'purple',
    'blue',
    'green',
    'yellow',
    'orange',
    'red'
  ]

  const handleClick = (color) => {
    document.getElementById(color).animate({transform: 'scaleX(-1)'}, {duration: 500})
    
    let newInput = [...input, color]
    setInput(newInput)
    if(JSON.stringify(newInput.slice(-4)) === JSON.stringify(solution)) {solutionFound()}
  }

  return (
    <div>
      <table className='quadruple'>
        <tbody>
          <tr>        
            {colors.map((color, index) => {
              return <td key={index} id={color} style={{color: color, cursor: 'pointer'}} onClick={() =>{handleClick(color)}}>&#9724; </td>
            })}
          </tr>
        </tbody>
      </table>
    </div>
  )
}