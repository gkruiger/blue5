import React from 'react'
import {useState, useEffect} from 'react'

import {v4 as uuidv4} from 'uuid';
import {isMobile} from 'react-device-detect';

import MobileWarning from './MobileWarning'

import Menu from './Menu'
import Sound from './Sound'
import CloseUp from './CloseUp'
import Actions from './Actions'
import Story from './Story'

import {interactions, locations} from './gameData'

export default function App() {

  let state = JSON.parse(localStorage.getItem('state'))

  const [isSoundOn, setIsSoundOn] = useState(state?.isSoundOn ?? true)
  const [actions, setActions] = useState(state?.actions)
  const [storyLines, setStoryLines] = useState(state?.storyLines)
  const [location, setLocation] = useState(state?.location)
  const [history, setHistory] = useState(state?.history ?? [])
  const [closeUp, setCloseUp] = useState(state?.closeUp)
  const [fadeOut, setFadeOut] = useState(false)
  const [mobileCheckDone, setMobileCheckDone] = useState(false)
 
  const saveStateToLocalStorage = () => {
    localStorage.setItem(
      'state', 
      JSON.stringify({
        isSoundOn: isSoundOn,
        actions: actions,
        storyLines: storyLines,
        location: location,
        history: history,
        closeUp: closeUp,
      })
    )
  }
  
  useEffect(() => {
    saveStateToLocalStorage()
  }, [isSoundOn, actions, storyLines, location, history, closeUp]);

  const processAction = (id) => {
    
    if(id == 79) {

      setFadeOut(true)

      setTimeout(() => {
        setStoryLines([])
        setFadeOut(false)
        setStoryLines([{text: 'The rest of the journey might one time be written.<br/><br/>Thanks for playing!', id: uuidv4()}])
      }, 6000);

    }
    
    for(let action of interactions) {
      if(action.id == id) {
        if(action.closeUp) setCloseUp(action.closeUp)
        if(action.texts) addStoryLines(action.texts)
        if(action.location) {
          setLocation(action.location)
          addStoryLines(getLocationTexts(action.location))
        }
          
        if(!action.closeUp) setHistory(history => [...history, id])
      }
    }
  }

  const addStoryLines = (texts) => {
    if(texts != undefined) {
      setStoryLines(storyLines => [...(storyLines ? storyLines : []), {text: texts.join(' ') + '<br/><br/>', id: uuidv4()}])
    }
  }
  
  const getLocationTexts = (id) => {
    for(let location of locations) {
      if(location.id == id) {
        return location.texts
      }
    }
  }

  useEffect(function updateActions() {
    setActions([])

    for(let action of interactions) {
      let add = true; 
      
      if(action.requirements.location != location) add = false
      
      for(let item of action.requirements.notInHistory) {
        if(Array.isArray(item)) {
          if(item.every((element) => history.includes(element))) {
            add = false;
          }
        } else {
          if(history.indexOf(item) != -1) {
            add = false
          }
        }
      }

      let temp = false;
      
      if(action.requirements.inHistory.length == 0) {
        temp = true;
      }
      
      for(let item of action.requirements.inHistory) {
        if(Array.isArray(item)) {
          if(item.every((element) => history.includes(element))) {
            temp = true;
          }
        } else {
          if(history.indexOf(item) != -1) {
            temp = true
          }
        }
      }
      if(!temp) add = false

      if(closeUp != undefined && action.closeUp && closeUp.id == action.closeUp.id) add = false

      if(action.id == history[history.length - 1] && action.closeUp == undefined) add = false

      if(add) {
        setActions(actions => [...(actions ? actions : []), {id: action.id, name: action.name}])  
      }
    }
  }, [location, history, closeUp]);

  async function solutionFound() {
    for(let action of interactions) {
      if(action?.closeUp?.id == closeUp.id) {
        setCloseUp(undefined)
        setHistory(history => [...history, action.id])
        setStoryLines(storyLines => [...storyLines, {text: closeUp.texts.join(' ') + '<br/><br/>', id: uuidv4()}])
      }
    }
  }

  function restart() {
    localStorage.removeItem('state')
    window.location.reload()
  }

  if(storyLines == undefined) {
    processAction(0)
  }

  const getContent = () => {
    if(isMobile && !mobileCheckDone) {
      return (
        <MobileWarning
          setMobileCheckDone={setMobileCheckDone}
        />
      )
    } else {
      return (
        <div className="app">
          <Menu 
            isSoundOn={isSoundOn} 
            setIsSoundOn={setIsSoundOn}
            restart={restart}
          />
          <CloseUp
            closeUp={closeUp}
            solutionFound={solutionFound}
          />
          <Actions
            actions={actions}
            processAction={processAction}
            closeUp={closeUp}
            setCloseUp={setCloseUp}
          />
          <Story
            lines={storyLines}
            fadeOut={fadeOut}
          />
          <Sound
            isSoundOn={isSoundOn}
          />
        </div>
      )
    } 
  }

  return (
    getContent()
  )
}