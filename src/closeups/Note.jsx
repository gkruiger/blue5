import React, { useState } from 'react'

export const Note = ({id}) => {

  let elements = [
    ['\u{1F702}', 'Fire', 'ahi'],
    ['\u{1F746}', 'Oil', 'aila'],
    ['\u{1F706}', 'Aqua regia (royal water)', 'ali&nbsp;&nbsp;i&nbsp;&nbsp;wai'],
    ['\u{1F701}', 'Air', 'ea'],
    ['\u{1F721}', 'Iron ore', 'hao&nbsp;&nbsp;hao'],
    ['\u{1F703}', 'Earth', 'honua'],
    ['\u{1F72A}', 'Lead ore', 'ke&nbsp;&nbsp;kepau&nbsp;&nbsp;oka'],
    ['\u{1F720}', 'Copper ore', 'keleawe&nbsp;&nbsp;keleawe'],
    ['\u{1F732}', 'Regulus', 'liona'],
    ['\u{1F708}', 'Aqua vitae (water of life)', 'ola&nbsp;&nbsp;wai'],
    ['\u{1F714}', 'Salt', 'pa&nbsp;&nbsp;akai'],
    ['\u{1F718}', 'Rock salt', 'pa&nbsp;&nbsp;akai&nbsp;&nbsp;pohaku'],
    ['\u{1F704}', 'Water', 'wai'],
    ['\u{1F705}', 'Aquafortis (strong water)', 'wai&nbsp;&nbsp;ikaika'],      
  ]
 
  const notes = [{
    id: 'missionlog',
    pages: [
      `
        <div style="text-align: left">
          <b>Khrysos Mission</b><br/>
            - Type: SAR<br/>
            - Target: dr. Inglesias Berry<br/>
            - Targets last known position: planet H-19.7/155.8<br/>
            - Targets status: unknown<br/>
            - Objectives: target location, assesment and retrieval<br/>
          <br/>
          <br/>
        </div>
      `, `
        <div style="text-align: left">
          <b>Planet details</b><br/>
          - ID: H-19.7/155.8<br/>
          - Cluster: K81<br/>
          - Surface type: 99.87% water, 0.13% land<br/>
          - Existing population: probably human<br/>
          <br/>
          <br/>
          <br/>
        </div>
      `, `
        <div style="text-align: left">
          <b>Mission brief (1/2)</b><br/>
          More than a decade ago, the Exospace Reseach Center for Other Civilizations
          provided readings for planet H-19.7/155.8 that indicated the existence of life.
          Further investigation confirmed these initial readings and even provided strong evidence for a human civilization.
          The ERCOC assigned team RED the mission to establish first contact.
        </div>
      `, `
        <div style="text-align: left">
          <b>Mission brief (2/2)</b><br/>
          Dr. Berry insisted for this mission to go alone. 
          He was supposed to send regular updates, but none was ever received.
          Team BLUE is now in charge of finding him and bringing him back. 
          The team consists of Zendaya (BLUE1), Alexandar (BLUE2), Sarah (BLUE3), Rafael (BLUE4) and you (BLUE5) of course.
          You\'ll be going alone.
          <br/>
          <br/>
        </div>
      `, `
        <div style="text-align: left">
          <b>SPPL</b><br/>
          You'll be launched from cluster K81's ERCOC Central Hub using a stardard SPPL (Single Person Planet Lander).
          The SPPL's onboard systems will automatically put you in and out of cryosleep during the journey. 
          Remember: all safety measures onboard, like entering and exiting your SPPL, are secured by your personal ID.
          <br/>
          <br/>
        </div>
      `      
    ]
  }, {
    id: 'cavenote',
    pages: [`
      <div style="text-align: left">
        <b>K81-4287-45</b><br/>     
        What a surpise!</br>
        Yesterday night I was taken in by the local people.</br>
        Everybody from the island welcomed me with their dance.</br>
        And with everybody, I really mean everybody: from only a couple of weeks old, until way over 80.</br>
        The total darkness was chased away by a great fire.</br>
        Around the fire they all stood there, looking at me.</br>
        They all stayed in their places and used only their arms for this dance.</br>
        Never have I ever seen something so magical and heart warming.
      </div>      
    `]
  }, {
    id: 'cavedrawingsleft',
    pages: [
      `<div class="double iosevka">
        \u{1FBC7} - \u{2B15}<br/>
        \u{1FBC5} - \u{2B13}<br/>
      </div>`
    ]
  }, {
    id: 'cavedrawingsright',
    pages: [
      `<div class="double iosevka">
        \u{1FBC7}<br/>
        \u{1FBC5}&nbsp;&nbsp;\u{1FBC5}<br/>
        \u{1FBC8}&nbsp;&nbsp;\u{1FBC8}&nbsp;&nbsp;\u{1FBC8}<br/>
        \u{1FBC9}&nbsp;&nbsp;\u{1FBC9}&nbsp;&nbsp;\u{1FBC9}&nbsp;&nbsp;\u{1FBC9}<br/>
      </div>`
    ]
  }, {
    id: 'bridgenote',
    pages: [
      `<div style="text-align: left">
        <b>K81-4288-62</b><br/>     
        Last night the heat reader was fiddled with for the third time this week.</br>
        I don't want to set it to the right settings again each morning, so I've put a simple lock on it.</br>
        That should do the trick.</br>
        </br>
        <table class="double iosevka" style="text-align: center">
          <tbody>
            <tr>
              <td style="color: red">\u{1F866}</td>
              <td style="color: red">\u{1F863}</td>
              <td style="color: red">\u{1F867}</td>
              <td>&nbsp;&nbsp;</td>
              <td style="color: green">\u{1F864}</td>
              <td style="color: green">\u{1F861}</td>
              <td style="color: green">\u{1F865}</td>
            </tr>
            <tr>
              <td style="color: red">\u{1F862}</td>
              <td>&nbsp;&nbsp;</td>
              <td style="color: red">\u{1F860}</td>
              <td>&nbsp;&nbsp;</td>
              <td style="color: green">\u{1F860}</td>
              <td>&nbsp;&nbsp;</td>
              <td style="color: green">\u{1F862}</td>
            </tr>
            <tr>
              <td style="color: red">\u{1F865}</td>
              <td style="color: red">\u{1F861}</td>
              <td style="color: red">\u{1F864}</td>
              <td>&nbsp;&nbsp;</td>
              <td style="color: green">\u{1F867}</td>
              <td style="color: green">\u{1F863}</td>
              <td style="color: green">\u{1F866}</td>
            </tr>
          </tbody>
        </table>
      </div>`
    ]
  }, {
    id: 'gardennote',
    pages: [
      `<div style="text-align: left">
        <b>K81-4289-12</b><br/>
        Kayana showed me her garden today.
        It was really lovely, both the garden itself and seeing her so full of passion for it.
        Apart from the colorful flowers, plants and trees, she also showed me the statues.
        She confirmed what I already suspected: they represent their gods: </br></br>
        - Awina, goddess of sea. She is in all the water, from a small raindrop to the big ocean. She is believed to be the mother of all life.</br>
        - Alano, god of the earth. He is in everything we walk on. He is believed to be the protector of all life.</br>
        - Anomi, goddess of the sky. She is in everything above the earth. She is believed to have power over all elements in the sky, like the wind, but also the sun and the stars.</br>   
        - Ailua, god of our dreams, hopes, and love. He is believed to be the driver of all feelings.</br>
      </div>
    `, `<div style="text-align: left">
        <b>K81-4289-15</b><br/>        
        Today I tried opening the garden gate.
        I saw people coming in and out of the garden, but when I tried to open the gate, it was closed.
        I asked Kayana about it.
        She said that only those who know all the sixteen steps of the gods, can get in.
        When I looked confused, she drew a few symbols in the sand:<br/><br/>
        \u{25B6} \u{2501} ? \u{2501} \u{25C1}<br/><br/>
        After that, she gave me that special look of hers, smiled and walked away. 
      </div>`
    ]
  }, {
    id: 'awinastatue',
    pages: [
      `<div class="ayana triple">awina</div><br/><br/>
      <div class="double">\u{251B} \u{250F} \u{2501} \u{2501}</div>`
    ]
  }, {
    id: 'alanostatue',
    pages: [
      `<div class="double">\u{2513} \u{2503} \u{251B} \u{2517}</div>`
    ]
  }, {
    id: 'anomistatue',
    pages: [
      `<div class="ayana triple">anomi</div><br/><br/>
      <div class="double">\u{2513} \u{250F} \u{251B} \u{250F}</div>`
    ]
  }, {
    id: 'ailuastatue',
    pages: [
      `<div class="ayana triple">ailua</div><br/><br/>
      <div class="double">\u{2517} \u{2501} \u{2501} \u{2501}</div>`
    ]
  }, {
    id: 'schoolblackboardleft',
    pages: [
      `<div class="ayana double">a e h i k l m n o p u w</div>`
    ]
  }, {
    id: 'schoolblackboardright',
    pages: [
      `<div class="double">
        <span style='color: yellow'>\u{25B2}</span><br/>
        <span style='color: green'>\u{25B2}</span>&nbsp;&nbsp;<span style='color: orange'>\u{25B2}</span></br>
        <span style='color: blue'>\u{25B2}</span>&nbsp;&nbsp;<span style='color: purple'>\u{25B2}</span>&nbsp;&nbsp;<span style='color: red'>\u{25B2}</span>
      </div>`
    ]
  }, {
    id: 'schoolnote',
    pages: [
      `<div style="text-align: left">
        <b>K81-4290-78</b><br/>
        Akamai gave me a tour of his lab today. 
        He was most proud of his setup. 
        And has was right to feel that way: 
        I witnessed an amazing collection of fluids, powers and solids.
        So many colors!
        Tomorrow, he has business elsewhere, but he invited me to do some investigation on my own. 
        This should get you access, he said: 
        <br/><br/>
        <div class="ayana double">03&nbsp;&nbsp;21&nbsp;&nbsp;23&nbsp;&nbsp;32</div>
        <br/><br/>
        I'll definitely take a look tomorrow.
      </div>`
    ]
  }, {
    id: 'lableftnote',
    pages: [
      `
        <div style="text-align: left">
          <b>K81-4293-5</b><br/>
          Of course I couldn't miss the two great canvasses in Akamai's lab.
          I quickly learned that he considered them his life's work.
          His mission - as he told me - was to discover every element within nature.
          In the last two years, he had extended his list to fourteen different elements.
          For each element he created a symbol and a name.
          Neat!
          I suspected that the elements he discovered were already known to science, but I didn't dare to spoil the fun.
          I spent a full day is his lab, asking him al kinds of questions.
          He was eager to answer and happily let me use his devices.
        </div>
      `, `
        <div style="text-align: left">
          <b>K81-4293-5 (continued)</b><br/>
          At the end of the day I was able to translate the Ayana names for the elements Akamai discovered to the ones I'm familiar with.
          <br/><br/> 
          <table class="left single">
            <tbody>
              ${elements.map((elem) => {
                return `
                  <tr>
                    <td class="left ayana">${elem[2]}</td>
                    <td>&nbsp;<td/>
                    <td class="left">${elem[1]}</td>
                  <tr>`
              }).join('')}
            </tbody>
          </table>
        </div>
      `
    ]
  }, {
    id: 'lableftcanvas',
    pages: [`
        <table class="single">
          <tbody>
            ${elements.map((elem, index) => {
              if(index % 2 == 0) return `
                <tr>
                  <td><div class="eversonmono" style="font-size: 60px; line-height: 0.8em">${elements[index][0]}</td>
                  <td>&nbsp;&nbsp;</td>
                  <td class="left"><div class="ayana" style="font-size: 40px; line-height: 1.5em">${elements[index][2]}</div></td>
                <tr>`
            }).join('')}
          </tbody>
        </table>
      `
    ]
  }, {
    id: 'labrightcanvas',
    pages: [`
        <table class="single">
          <tbody>
            ${elements.map((elem, index) => {
              if(index % 2 == 1) return `
                <tr>
                  <td><div class="eversonmono" style="font-size: 60px; line-height: 0.8em">${elements[index][0]}</td>
                  <td>&nbsp;&nbsp;</td>
                  <td class="left"><div class="ayana" style="font-size: 40px; line-height: 1.5em">${elements[index][2]}</div></td>
                <tr>`
            }).join('')}
          </tbody>
        </table>
      `
    ]
  }, {
    id: 'lableftenvelope',
    pages: [`
      <div style="text-align: left">
        <i>
        Dear<br/>
        <br/>
        If you've come this far, it means</br>
        learn quite a bit<br/>
        I hope that the notes<br/>
        Maybe you<br/>
        <br/>
        The truth is that after learning so much<br/>
        and its people, they became a</br>
        a part of them.<br/>
        So when they decided to </br>
        go with them.<br/>
        <br/>
        I'm sure this doesn't even begin to<br/>
        you must have<br/>
        I therefore invite you to<br/>
        us, to our<br/>
        My id - GREY<br/>
        <br/>
        I hope I'll<br/>
        <br/>
        Ingl
        </i>
      </div>
      `
    ]
  }, {
    id: 'labrightnote',
    pages: [
      `<div style="text-align: left">
          <b>K81-4294-82</b><br/>
          Akamai believed that the elements he had found could be combined.
          He was convinced that certain combinations would unlock new possibilities. 
          He said he already found one: fire and oil, and he hoped 
          Ailua was honored by this discovery, as it provided his people with continuous warmth and light.
          He had high hopes for combining Awina's element with its three variants.
        </div>`
    ]
  }, {
    id: 'labrightenvelope',
    pages: [`
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;reader,<br/>
      <br/>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;that you've come to<br/>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;about this island.
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I left helped you on your jouney.<br/>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;hoped to find me.<br/>
      <br/>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;about this island<br/>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;part of me, and I've become<br/>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;leave this place, I felt I had to<br/>
      <br/>
      </br>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;answer the questions<br/>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;for me<br/>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;follow me, or better: to follow</br>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;new place.<br/>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4 - will guide you to me.<br/>
      <br/>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;see you soon.<br/>
      <br/>
      &nbsp;&nbsp;&nbsp;&nbsp;esias
      `
    ]
  }]  


  
  let pages = [];
  for(let note of notes) {
    if(note.id == id) {
      pages = note.pages
    }
  }

  const [page, setPage] = useState(0)

  return (
    <div >
      <div dangerouslySetInnerHTML={{ __html: pages[page]}}/>
      {pages.length > 1 &&
        <>
          <br/>
          <div className='action' onClick={() => {setPage(page == 0 ? 0 : page-1)}} disabled={page == 0 ? 'disabled' : ''}>[Previous entry]</div>
          <div className='action' onClick={() => {setPage(page == pages.length-1 ? page : page+1)}} disabled={page == pages.length-1 ? 'disabled' : ''}>[Next entry]</div>
        </>
      }
    </div>
  )
}