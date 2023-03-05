import React, { useEffect, useState } from 'react'

export default function Hints({interactions, puzzlesSolved, hintsHeight, setHintsHeight}) {

  const [hintNumber, setHintNumber] = useState(0)
  const [hints, setHints] = useState([])

  useEffect(() => {
    let interactionsWithHints = interactions.filter((interaction) => {
      return interaction.closeUp && interaction.closeUp.hints && !puzzlesSolved.includes(interaction.id)
    })

    setHints(interactionsWithHints.length != 0 ? interactionsWithHints[0].closeUp.hints : (['No hints available.']))
    setHintNumber(0)
  }, [puzzlesSolved])

  return (
    <div>
      <br/>
      ({hintNumber + 1}/{hints.length})&nbsp;
      <div style={{display: 'inline'}} dangerouslySetInnerHTML={{ __html: hints[hintNumber]}}/>
      <br/><br/>
      <div className='action' onClick={() => {if(hintNumber != 0) setHintNumber(hintNumber => hintNumber - 1)}} disabled={hintNumber == 0 ? true : false}>[Previous hint]</div>
      <div className='action' onClick={() => {if(hintNumber != hints.length-1) setHintNumber(hintNumber => hintNumber + 1)}} disabled={hintNumber == hints.length-1 ? true : false}>[Next hint]</div>
      <div className='action' onClick={() => {setHintsHeight(0)}}>[Close]</div>
    </div>
  )
}