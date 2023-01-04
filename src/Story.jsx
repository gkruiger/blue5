import React from 'react'

import StoryItem from './StoryItem'

export default function Story({lines, fadeOut}) {
  return (
    <div className={fadeOut ? 'storyContainer fadeOut' : 'storyContainer'}>
      <br/>
      <div className="story">
        {lines != null && lines.slice().reverse().map((line) => (
          <StoryItem
            text={line.text}
            id={line.id}
            key={line.id}
          />
        ))}
      </div>
      <br/>
    </div>
  )
}