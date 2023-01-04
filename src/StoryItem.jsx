import React from 'react'
import { useState, useEffect } from 'react'

import AnimateHeight from './react-animate-height'

export default function StoryItem({text}) {

  const [height, setHeigth] = useState(0)

  useEffect(() => {
    setHeigth('auto')
  }, []);

  return (
    <AnimateHeight
      duration={500}
      animateOpacity={true}
      height={height}
    >
      <div dangerouslySetInnerHTML={{ __html: text}}/>
    </AnimateHeight>
  )
}