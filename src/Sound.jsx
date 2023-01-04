import React from 'react'
import { useEffect } from 'react';

import part1 from './music/part1.mp3'
import part2 from './music/part2.mp3'

export default function Sound({isSoundOn}) {
  
  let index = 0;

  const playlist = [
    part1, 
    part2
  ]

  useEffect(() => {
    let audioElement = document.getElementById('music')
    if(isSoundOn) {
      audioElement.play().catch((error) => {
        document.addEventListener('click', () => {
          audioElement.play()
        }, { once: true } )
      })
      audioElement.addEventListener('ended', function(){
        index++;
        if(index > playlist.length-1) {
          index = 0;
        }
        audioElement.src = playlist[index]
    }, true);      
    } else {
      audioElement.pause()
    }
  }, [isSoundOn])

  return (
    <div>
      <audio type="audio/mpeg" id="music" src={playlist[index]} loop></audio>
    </div>
  )
}