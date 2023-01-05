import React, { useState } from 'react'

const Bar = ({position, setPosition}) => {

  const length = 8
  const plusses = Array(length).fill('+')

  return (
    <div className='double'>
      <div className='button' style={{display: 'inline'}} onClick={() => {if(position > 0) {setPosition(position-1)}}}>{'\u{25C0}'}</div>
      &nbsp;
      {plusses.map((item, index) => {
        return index == position ? '\u{2588}' : '+'
      })}
      &nbsp;
      <div className='button' style={{display: 'inline'}} onClick={() => {if(position < length-1) setPosition(position+1)}}>{'\u{25B6}'}</div>
    </div>
  )
}

export const Device = () => {

  const symbols = [
    '-',
    <div style={{color: 'blue', display: 'inline'}}>{'\u{25E5}'}</div>,
    <div style={{color: 'yellow', display: 'inline'}}>{'\u{25E5}'}</div>,
    <div style={{color: 'red', display: 'inline'}}>{'\u{25E5}'}</div>,
    <div style={{color: 'blue', display: 'inline'}}>{'\u{25E3}'}</div>,
    <div style={{color: 'yellow', display: 'inline'}}>{'\u{25E3}'}</div>,
    <div style={{color: 'red', display: 'inline'}}>{'\u{25E3}'}</div>,
    '-',
  ]

  const [positionOne, setPositionOne] = useState(0)
  const [positionTwo, setPositionTwo] = useState(0)
  const [positionThree, setPositionThree] = useState(0)
  const [positionFour, setPositionFour] = useState(0)

  return (
    <div>
      <div className='triple' style={{letterSpacing: '0.6em'}}>
        <div className='single' style={{display: 'inline'}}>&nbsp;</div>
        {symbols[positionOne]}
        {symbols[positionTwo]}
        {symbols[positionThree]}
        {symbols[positionFour]}
      </div>

      <br/>

      <Bar position={positionOne} setPosition={setPositionOne}/>
      <Bar position={positionTwo} setPosition={setPositionTwo}/>
      <Bar position={positionThree} setPosition={setPositionThree}/>
      <Bar position={positionFour} setPosition={setPositionFour}/>

    </div>
  )
}