import React, { useEffect, useState } from 'react'

export const NumbersToy = () => {

  const initialTrack = [[], [], [], [], []]
  
  const [track, setTrack] = useState(initialTrack)
  const [row, setRow] = useState(Math.floor(track.length/2))
  const [direction, setDirection] = useState('right')
  const [numberOfCharactersToAdd, setNumberOfCharactersToAdd] = useState(0)
  const [color, setColor] = useState(1)
  const [numberOne, setNumberOne] = useState(0)
  const [numberTwo, setNumberTwo] = useState(0)

  const colors = [
    'violet',
    'indigo',
    'blue',
    'green',
    'yellow',
    'orange',
    'red'
  ]

  const delayBetweenCharacters = 500

  const maxTrackLength = 18

  const maxNumber = 3;

  useEffect(() => {
    if(numberOfCharactersToAdd > 0) {
      addOneCharacter()
      setTimeout(() => setNumberOfCharactersToAdd(numberOfCharactersToAdd => numberOfCharactersToAdd-1), delayBetweenCharacters)
    } else {
      setColor(color => color == colors.length-1 ? 0 : color+1)
    }
  }, [numberOfCharactersToAdd])

  const addOneCharacter = () => {
    
    const addRandomCharacter = (characters) => {
      let randomCharacter = characters[Math.floor(Math.random() * characters.length)]
      
      if(direction == 'right') {
        for(let r=0; r<track.length; r++) {
          newTrack[r].push({
            character: r == row ? randomCharacter : '\u{00A0}',
            color: colors[color]
          })
        }
      } else {
        newTrack[row][newTrack[row].length-1] = {character: randomCharacter, color: colors[color]}
      }

      if(newTrack[0].length > maxTrackLength) {
        for(let i=0; i<newTrack.length; i++) {
          newTrack[i] = newTrack[i].slice(1)
        }
      }

      if(randomCharacter == '\u{2501}') {setDirection('right');}
      if(randomCharacter == '\u{2513}') {setDirection('down'); setRow(row => row+1)}
      if(randomCharacter == '\u{250F}') {setDirection('right');}
      if(randomCharacter == '\u{2517}') {setDirection('right');}
      if(randomCharacter == '\u{251B}') {setDirection('up'); setRow(row => row-1)}
      if(randomCharacter == '\u{2503}') {setRow(row => direction == 'up' ? row-1 : row+1)}
    } 

    let newTrack = JSON.parse(JSON.stringify(track))

    if(direction == 'right') {
      if(row == 0) {
        addRandomCharacter(['\u{2501}', '\u{2513}'])
      } else if(row == track.length-1) {
        addRandomCharacter(['\u{2501}', '\u{251B}'])
      } else {
        addRandomCharacter(['\u{2501}', '\u{2513}', '\u{251B}'])
      }
    } else if(direction == 'up') {
      if(row == 0) {
        addRandomCharacter(['\u{250F}'])
      } else {
        addRandomCharacter(['\u{2503}', '\u{250F}'])
      }
    } else if(direction == 'down') {
      if(row == track.length-1) {
        addRandomCharacter(['\u{2517}'])
      } else {
        addRandomCharacter(['\u{2503}', '\u{2517}'])
      }    
    }

    setTrack(newTrack)
  }

  const changeNumberOne = () => {
    numberOne == maxNumber ? setNumberOne(0) : setNumberOne(numberOne => numberOne+1)
  }

  const changeNumberTwo = () => {
    numberTwo == maxNumber ? setNumberTwo(0) : setNumberTwo(numberTwo => numberTwo+1)
  }

  const handleClick = () => {
    if(numberOfCharactersToAdd == 0) {
      setNumberOfCharactersToAdd(numberOne * 4 + numberTwo)
    }
  }

  return (
    <table className='double' style={{marginLeft: 0}}>
      <tbody>
        {track.map((row, rowIndex) => {
          return (
            <tr key={rowIndex}>
              {rowIndex == 0 && (
                <>
                  <td className='button ayana triple' style={{display: 'table-cell'}} id='number' rowSpan={track.length} onClick={() => changeNumberOne()}>{numberOne}</td>
                  <td className='button ayana triple' style={{display: 'table-cell'}} id='number' rowSpan={track.length} onClick={() => changeNumberTwo()}>{numberTwo}</td>
                  <td rowSpan={track.length}>&nbsp;</td>
                  <td className='button triple' rowSpan={track.length} onClick={() => {handleClick()}}>{'\u{2BC8}'}</td>
                </>
              )}

              <td>&nbsp;</td>
              {row.map((cel, celIndex) => {
                return <td style={{color: cel.color}} key={celIndex}>{cel.character}</td>
              })}
            </tr>
        )})}
      </tbody>
    </table>
  )
}