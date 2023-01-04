import React, { useState } from 'react'

const Bar = ({symbol, length, position, setPosition}) => {

  const plusses = Array(length).fill('+')

  return (
    <div className='double'>
      <div className='button' style={{display: 'inline'}} onClick={() => {if(position[symbol] > 0) {let newPosition = position.slice(); newPosition[symbol]--; setPosition(newPosition)}}}>{'\u{2BC7}'}</div>
      {plusses.map((item, index) => {
        return index == position[symbol] ? '\u{2588}' : '+'
      })}
      <div className='button' style={{display: 'inline'}} onClick={() => {if(position[symbol] < length-1) {let newPosition = position.slice(); newPosition[symbol]++; setPosition(newPosition)}}}>{'\u{2BC8}'}</div>
    </div>
  )
}

export const Microscope = () => {

  const length = 8
  const symbols = [
    '\u{1F702}', 
    '\u{1F746}', 
    '\u{1F706}', 
    '\u{1F701}',
    '\u{1F721}',
    '\u{1F703}',
    '\u{1F72A}',
    '\u{1F720}',
    '\u{1F732}',
    '\u{1F708}',
    '\u{1F714}',
    '\u{1F718}',
    '\u{1F704}',
    '\u{1F705}',
  ]

  const offsets = [      
    [2, 1, 3, 7],
    [4, 6, 2, 8],
    [5, 8, 1, 7],
    [5, 3, 6, 4],
    [6, 2, 4, 6],
    [7, 8, 2, 5],
    [3, 7, 1, 2],
    [1, 4, 8, 3],
    [8, 5, 7, 4],
    [8, 6, 5, 1],
    [5, 1, 2, 1], 
    [2, 6, 6, 3],
    [2, 4, 1, 8],
    [1, 8, 3, 4],
  ]

  const [symbol, setSymbol] = useState(0)

  const [blurPosition, setBlurPosition] = useState(Array(symbols.length).fill(0))
  const [rotationPosition, setRotationPosition] = useState(Array(symbols.length).fill(0))
  const [scalePosition, setScalePosition] = useState(Array(symbols.length).fill(0))
  const [skewPosition, setSkewPosition] = useState(Array(symbols.length).fill(0))

  return (
    <div>
      <div style={{overflow: 'hidden', marginTop: '-20px', marginBottom: '-30px', pointerEvents: 'none'}}>
        <div className="eversonmono triple" style={{
          display: 'inline-block', 
          fontSize: '200px', 
          position: 'absolute',
          opacity: 0.5,
          overflow: 'none',
        }}>
          {symbols[symbol]}
        </div>
        <div className="eversonmono triple" style={{
          display: 'inline-block', 
          transition: 'all .5s', 
          fontSize: '200px',
          rotate: `${-180+((360/(16))*(rotationPosition[symbol] + offsets[symbol][1]))}deg`, 
          filter: `blur(${Math.abs(1-2/8/2*(blurPosition[symbol] + offsets[symbol][0]))}rem)`,
          transform: `scale(${Math.pow(2, ((scalePosition[symbol] + offsets[symbol][2])/4) - 2)}) skew(${-40+(5*(skewPosition[symbol] + offsets[symbol][3]))}deg, ${-40+(5*(skewPosition[symbol] + offsets[symbol][3]))}deg)`,
        }}>
          {symbols[symbol]}
        </div>
      </div>

      <div className='double'>
        {symbols.map((s, index) => {
          if (index < 7) return <div key={index} className='button' onClick={() => {setSymbol(index)}} style={{display: 'inline', marginRight: '0px'}}>{index == symbol ? ' \u{25A3} ' : ' \u{25A1} '}</div>
        })}
      </div>
      <div className='double'>
        {symbols.map((s, index) => {
          if (index >= 7) return <div key={index} className='button' onClick={() => {setSymbol(index)}} style={{display: 'inline', marginRight: '0px'}}>{index == symbol ? ' \u{25A3} ' : ' \u{25A1} '}</div>
        })}
      </div>

      <br/>

      <Bar symbol={symbol} length={length} position={blurPosition} setPosition={setBlurPosition}/>
      <Bar symbol={symbol} length={length} position={rotationPosition} setPosition={setRotationPosition}/>
      <Bar symbol={symbol} length={length} position={scalePosition} setPosition={setScalePosition}/>
      <Bar symbol={symbol} length={length} position={skewPosition} setPosition={setSkewPosition}/>
    </div>
  )
}