import React, { useState } from 'react'

export const ShapesToy = () => {

  const matrix = [
    [
      '\u{25B2}',
      '\u{25F8}',
      '\u{25B6}',
      '\u{25E4}',
      '\u{2503}',
      '\u{25FC}',
    ], [
      '\u{25C1}',
      '\u{25E5}',
      '\u{25FA}',
      '\u{25BD}',
      '\u{2503}',
      '\u{25C6}',
    ], [
      '\u{25FF}',
      '\u{25BC}',
      '\u{25E3}',
      '\u{25B7}',
      '\u{2503}',
      '\u{25FB}',
    ], [
      '\u{25C0}',
      '\u{25B3}',
      '\u{25F9}',
      '\u{25E2}',
      '\u{2503}',
      '\u{25C7}',
    ]
  ]

  const combinations = [
    {a: '03', b: '33', c: 0},
    {a: '11', b: '22', c: 0},
    {a: '00', b: '21', c: 1},
    {a: '02', b: '30', c: 1},
    {a: '01', b: '20', c: 2},
    {a: '12', b: '32', c: 2},
    {a: '10', b: '23', c: 3},
    {a: '13', b: '31', c: 3},
  ]

  const [shapesSelected, setShapesSelected] = useState([])

  const getStyle = (rowIndex, celIndex) => {
    const key = '' + rowIndex + celIndex
    if(shapesSelected.includes(key)) {
      return {color: 'blue'}
    } else {
      if(celIndex == 5) {
        for(let combination of combinations) {
          if(shapesSelected.includes(combination.a) && shapesSelected.includes(combination.b) && rowIndex == combination.c) {
            return {color: 'green'}
          }
        }
      }
    }
    return {}
  }

  return (
    <div>
      <table className="double">
        <tbody>
          {matrix.map((row, rowIndex) => { return (
            <tr key = {rowIndex}>
              {row.map((cel, celIndex) => { return (
                <td
                  className = {celIndex < 4 ? 'button' : ''}
                  style = {getStyle(rowIndex, celIndex)}
                  onClick={() => {
                    const key = '' + rowIndex + celIndex
                    if(shapesSelected.includes(key)) {
                      setShapesSelected(shapesSelected.filter((element) => element != key))
                    } else {
                      if(shapesSelected.length < 2) {
                        setShapesSelected([...shapesSelected, key])
                      }
                    }
                  }}
                  key = {'' + rowIndex + celIndex}>
                    {cel}&nbsp;
                </td>
              )})}
            </tr>
          )})}          
        </tbody>
      </table>
      <br/>
    </div>
  )
}