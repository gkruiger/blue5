import React from 'react'
import { useState, useEffect } from 'react'

import AnimateHeight from './react-animate-height'

import { Keypad } from './closeups/Keypad'
import { Note } from './closeups/Note'
import { CaveDoor } from './closeups/CaveDoor'
import { HeatReader } from './closeups/HeatReader'
import { HeatDistributor } from './closeups/HeatDistributor'
import { GardenGate } from './closeups/GardenGate'
import { NumbersToy } from './closeups/NumbersToy'
import { BoxLock } from './closeups/BoxLock'
import { ShapesToy } from './closeups/ShapesToy'
import { SchoolDoor } from './closeups/SchoolDoor'
import { BoxLabLeft } from './closeups/BoxLabLeft'
import { BoxLabRight } from './closeups/BoxLabRight'
import { Microscope } from './closeups/Microscope'
import { Device } from './closeups/Device'

export default function CloseUp({closeUp, solutionFound}) {

  const [closeUpHeight, setCloseUpHeight] = useState(0)
  const [localCloseUpID, setLocalCloseUpID] = useState()

  useEffect(() => {
    if(closeUp?.id != undefined) {
      setLocalCloseUpID(closeUp?.id)
      setCloseUpHeight('auto')
    } else {
      setCloseUpHeight(0)
    }
  }, [closeUp])

  function getContent() {

    switch (localCloseUpID) {
      case 'MissionLog': return <Note key={'missionlog'} id='missionlog'/>
      case 'LeftKeypad': return <Keypad key={'blue'} solution={['B', 'L', 'U', 'E']} solutionFound={solutionFound}/>
      case 'RightKeypad': return <Keypad key={'five'} solution={['F', 'I', 'V', 'E']} solutionFound={solutionFound}/>
      case 'CaveNote': return <Note key={'cavenote'} id='cavenote'/>
      case 'CaveDoor': return <CaveDoor solutionFound={solutionFound}/>
      case 'CaveDrawingsLeft': return <Note key={'cavedrawingsleft'} id='cavedrawingsleft'/>
      case 'CaveDrawingsRight': return <Note key={'cavedrawingsright'} id='cavedrawingsright'/>
      case 'BoxLock': return <BoxLock solutionFound={solutionFound}/>
      case 'HeatReader': return <HeatReader solutionFound={solutionFound}/>
      case 'BridgeNote': return <Note key={'cavenote'} id='bridgenote'/>
      case 'HeatDistributor': return <HeatDistributor solutionFound={solutionFound}/>
      case 'GardenNote': return <Note key={'gardennote'} id='gardennote'/>
      case 'GardenGate': return <GardenGate solutionFound={solutionFound}/>
      case 'AwinaStatue': return <Note key={'awinastatue'} id='awinastatue'/>
      case 'AlanoStatue': return <Note key={'alanostatue'} id='alanostatue'/>
      case 'AiluaStatue': return <Note key={'ailuastatue'} id='ailuastatue'/>
      case 'AnomiStatue': return <Note key={'anomistatue'} id='anomistatue'/>
      case 'SchoolBlackboardLeft': return <Note key='schoolblackboardleft' id='schoolblackboardleft'/>
      case 'SchoolBlackboardRight': return <Note key='schoolblackboardright' id='schoolblackboardright'/>
      case 'NumbersToy': return <NumbersToy/>
      case 'ShapesToy': return <ShapesToy/>
      case 'SchoolDoor': return <SchoolDoor solutionFound={solutionFound}/>
      case 'SchoolNote': return <Note key={'schoolnote'} id='schoolnote'/>
      case 'LabLeftNote': return <Note key={'lableftnote'} id='lableftnote'/>
      case 'LabLeftCanvas': return <Note key={'lableftcanvas'} id='lableftcanvas'/>
      case 'LabRightCanvas': return <Note key={'labrightcanvas'} id='labrightcanvas'/>
      case 'BoxLabLeft': return <BoxLabLeft solutionFound={solutionFound}/>
      case 'LabLeftEnvelope': return <Note key={'lableftenvelope'} id='lableftenvelope'/>
      case 'LabRightNote': return <Note key={'labrightnote'} id='labrightnote'/>
      case 'BoxLabRight': return <BoxLabRight solutionFound={solutionFound}/>
      case 'LabRightEnvelope': return <Note key={'labrightenvelope'} id='labrightenvelope'/>
      case 'Microscope': return <Microscope/>
      case 'Device': return <Device/>
      case 'LeftKeypad2': return <Keypad key={'gray'} solution={['G', 'R', 'E', 'Y']} solutionFound={solutionFound}/>
      case 'RightKeypad2': return <Keypad key={'four'} solution={['F', 'O', 'U', 'R']} solutionFound={solutionFound}/>
      default: return
    }
  }

  return (
    <div className='closeUpContainer'>
      <AnimateHeight
        duration={500}
        animateOpacity={true}
        height={closeUpHeight}
      >
        <br/>
        <div className='closeUp'>
          {getContent()}
        </div>
        <br/>
      </AnimateHeight>
    </div>
  )
}