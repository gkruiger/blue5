import React from 'react'
import { useState } from 'react'

import Hints from './Hints'

import AnimateHeight from './react-animate-height'

export default function Menu({isSoundOn, setIsSoundOn, restart, interactions, puzzlesSolved}) {

  const nbsps = (spaces) => {
    return '\u{00A0}'.repeat(spaces)
  }

  const [soundHeight, setSoundHeight] = useState(0)
  const [restartHeight, setRestartHeight] = useState(0)
  const [aboutHeight, setAboutHeight] = useState(0)
  const [hintsHeight, setHintsHeight] = useState('auto')
  
  return (
    <div className='menuContainer'>
      <div className='menu'>
        <br/>
        <div className='menuItems'>
          <div>
            <div>
              BLUE5
            </div>
          </div>
          <div>
            <div className={hintsHeight === 0 ? 'menuItem' : 'menuItem active'} onClick={() => {
              if(hintsHeight === 0) {
                setSoundHeight(0)
                setRestartHeight(0)
                setAboutHeight(0)
                setHintsHeight('auto')
              } else {
                setHintsHeight(0)
              }}}>Hints
            </div>
            <div className={soundHeight === 0 ? 'menuItem' : 'menuItem active'} onClick={() => {
              if(!isSoundOn) {
                setIsSoundOn(true)
              } else {
                if(soundHeight === 0) {
                  setSoundHeight('auto')
                  setRestartHeight(0)
                  setAboutHeight(0)
                  setHintsHeight(0)
                } else {
                  setSoundHeight(0)
              }}}}>
                Sound: {isSoundOn ? 'on' : 'off'}
            </div>
            <div className={restartHeight === 0 ? 'menuItem' : 'menuItem active'} onClick={() => {
              if(restartHeight === 0) {
                setSoundHeight(0)
                setRestartHeight('auto')
                setAboutHeight(0)
                setHintsHeight(0)
              } else {
                setRestartHeight(0)
              }}}>
                Restart
            </div>
            <div className={aboutHeight === 0 ? 'menuItem' : 'menuItem active'} onClick={() => {
              if(aboutHeight === 0) {
                setSoundHeight(0)
                setRestartHeight(0)
                setAboutHeight('auto')
                setHintsHeight(0)
              } else {
                setAboutHeight(0)
              }}}>About
            </div>
          </div>
        </div>

        <AnimateHeight
          duration={500}
          animateOpacity={true}
          height={hintsHeight}
        >
          <Hints
            interactions={interactions}
            puzzlesSolved={puzzlesSolved}
            hintsHeight={hintsHeight}
            setHintsHeight={setHintsHeight}
          />
        </AnimateHeight>

        <AnimateHeight
          duration={500}
          animateOpacity={true}
          height={soundHeight}
        >
          <div className='menuItemContent'>
            <br/>
            +--------------------------------------------------------+
            | Every time someone turns the sound of, its creator{nbsps(5)}|
            | sheds a tear.{nbsps(42)}|
            |{nbsps(56)}|
            | Are you sure?{nbsps(42)}|
            |{nbsps(56)}|
            | <div className='button' onClick={() => {setIsSoundOn(false); setSoundHeight(0)}}>[Yes, turn it off.]</div>{nbsps(36)}|
            | <div className='button' onClick={() => {setSoundHeight(0)}}>[Now that you mention it, maybe not.]</div>{nbsps(18)}| 
            +--------------------------------------------------------+
          </div>
        </AnimateHeight>

        <AnimateHeight
          duration={500}
          animateOpacity={true}
          height={restartHeight}
        >
          <div className='menuItemContent'>
            <br/>
            +--------------------------------------------------------+
            | You will loose all your progress and start the game{nbsps(4)}|
            | from the beginning.{nbsps(36)}|
            |{nbsps(56)}|
            | Are you sure?{nbsps(42)}|
            |{nbsps(56)}|
            | <div className='button' onClick={() => {restart()}}>[Yes, take me to the beginning!]</div>{nbsps(23)}|
            | <div className='button' onClick={() => {setRestartHeight(0)}}>[Now that you mention it, maybe not.]</div>{nbsps(18)}|
            +--------------------------------------------------------+
          </div>
        </AnimateHeight>

        <AnimateHeight
          duration={500}
          animateOpacity={true}
          height={aboutHeight}
        >
          <div className='menuItemContent'>
            <br/>
            +--------------------------------------------------------+
            | Made by Gertjan Kruiger. {nbsps(30)}|
            | Music by <a href="https://www.youtube.com/@XXrunnerXX">Jesse Kruiger</a>. {nbsps(31)}|
            | More about this game on my <a href="https://www.ontdeksels.nl/blue5-an-adventure-in-monospace/">personal website</a>. {nbsps(10)}|
            | Android app available in the <a href="https://play.google.com/store/apps/details?id=com.gkruiger.blue5app">Google Play Store</a>. {nbsps(7)}|
            | Code available in Github (<a href="https://github.com/gkruiger/blue5">Web</a> | <a href="https://github.com/gkruiger/blue5app">App</a>). {nbsps(17)}|
            |{nbsps(56)}|
            | <div className='button' onClick={() => {setAboutHeight(0)}}>[Ok, good to know.]</div>{nbsps(36)}|
            +--------------------------------------------------------+
          </div>
        </AnimateHeight>

        <br/>
      </div>
    </div>
  )
}