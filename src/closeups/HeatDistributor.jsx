import React, { useState } from 'react'

export const HeatDistributor = ({solutionFound}) => {

  const [energyLevels, setEnergyLevels] = useState([0, 0, 0, 0])
  const [handle, setHandle] = useState(false)

  const solution = [3, 1, 6, 4]

  const barLevels = [
    '\u{2581}',
    '\u{2582}',
    '\u{2583}',
    '\u{2584}',
    '\u{2585}',
    '\u{2586}',
    '\u{2587}',
    '\u{2588}',
  ]

  const changeEnergyLevel = (bar, change) => {
    setEnergyLevels((previousState) => {
      let newEnergyLevel = energyLevels[bar] + change;
      if(newEnergyLevel > barLevels.length-1) {
        newEnergyLevel = 0
      }
      
      let newEnergyLevels = [...previousState]
      newEnergyLevels[bar] = newEnergyLevel
      return newEnergyLevels
    })

  }

  const changeHandle = () => {
    if(JSON.stringify(energyLevels) == JSON.stringify(solution)) {
      setHandle(!handle)
      setTimeout(() => {
        solutionFound() 
      }, 500);
    }
  }

  return (
    <div>
      <table className='triple'>
        <tbody>
          <tr>
            <td className='button' onClick={() => changeEnergyLevel(0, +1)}>{barLevels[energyLevels[0]]}</td>
            <td className='button' onClick={() => changeEnergyLevel(1, +1)}>{barLevels[energyLevels[1]]}</td>
            <td className='button' onClick={() => changeEnergyLevel(2, +1)}>{barLevels[energyLevels[2]]}</td>
            <td className='button' onClick={() => changeEnergyLevel(3, +1)}>{barLevels[energyLevels[3]]}</td>
            <td>&nbsp;</td>
            <td className='button' onClick={() => changeHandle()} rowSpan={2} style={{fontSize: '150px', verticalAlign: handle ? 'bottom' : 'top'}}>{handle ? '\u{2442}' : '\u{2443}'}</td>
          </tr>
          <tr>
            <td>{'\u{2294}'}</td>
            <td>{'\u{228F}'}</td>
            <td>{'\u{2293}'}</td>
            <td>{'\u{2290}'}</td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
      <br/>
    </div>
  )
}