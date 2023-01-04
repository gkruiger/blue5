import React, { useState } from 'react'

export const HeatReader = () => {

  const [currentBar, setCurrentBar] = useState(0)
  const [energyLevels, setEnergyLevels] = useState([0, 0, 0, 0])
  const [direction, setDirection] = useState(1)

  const solution = [3, 1, 6, 4]
  
  const barSymbols = [
    '\u{2294}',
    '\u{228F}',
    '\u{2293}',
    '\u{2290}',
  ]

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

  const changeBar = () => {
    if(currentBar + 1 > solution.length-1) {
      setCurrentBar(0)
    } else if(currentBar + 1 < 0) {
      setCurrentBar(solution.length-1)
    } else {
      setCurrentBar(currentBar + 1)
    }
  }

  const changeEnergyLevel = (change) => {
    setEnergyLevels((previousState) => {
      let newEnergyLevel = energyLevels[currentBar] + direction;

      if(newEnergyLevel > barLevels.length-1) {
        newEnergyLevel = barLevels.length-2
        setDirection(-1)
      }
      if(newEnergyLevel < 0) {
        newEnergyLevel = 1;
        setDirection(+1)
      }
      
      let newEnergyLevels = [...previousState]
      newEnergyLevels[currentBar] = newEnergyLevel
      return newEnergyLevels
    })

  }

  return (
    <table className="quadruple" style={{textAlign: 'center'}}>
      <tbody>
        <tr>
          <td className="button" onClick={() => (changeEnergyLevel(+1))} style={{color: energyLevels[currentBar] == solution[currentBar] ? 'green' : 'black'}}>{barLevels[energyLevels[currentBar]]}</td>
        </tr>
        <tr>
          <td className="button" onClick={() => {changeBar()}}>{barSymbols[currentBar]}</td>
        </tr>
      </tbody>
    </table>
  )
}