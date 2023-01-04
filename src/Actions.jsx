import React from 'react'

export default function Actions({actions, processAction, closeUp, setCloseUp}) {
   
  return (
    <div className='actionsContainer'>
      <div className="actions">
        <br/>
        {closeUp == undefined && actions != null && actions.map((action, index) =>
          <div className="action" key={index} onClick={() => {processAction(action.id)}}>
            [{action.name}]
          </div>
        )}
        {closeUp != undefined && 
          <div className="action" onClick={() => {setCloseUp(undefined)}}>
          [Go back]
        </div>
        }
        <br/>
      </div>
    </div>
  )
}