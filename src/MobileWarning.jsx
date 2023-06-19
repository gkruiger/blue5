import React from 'react'

export default function MobileWarning({setMobileCheckDone}) {

  return (
    <div>
      <div style={{
        backgroundColor: '#cccccc',
        fontStyle: 'bold',
        fontSize: 100,
        lineHeight: 1.1,
        paddingLeft: 100,
        paddingTop: 50,
        paddingBottom: 50,
      }}>
        BLUE5
      </div>
      <div style={{
        backgroundColor: '#eeeeee',
        fontSize: 40,
        lineHeight: 1.1,
        paddingLeft: 100,
        paddingRight: 100,
        paddingTop: 50,     
        paddingBottom: 50,

      }}>
        This game <i>can</i> be played on mobile.<br/><br/>
        However, your experience might be better using the native Android app.<br/><br/>
        iOS devices are out of luck.<br/>
      </div>
      <div style={{
        backgroundColor: '#ffffff',
        fontSize: 40,
        lineHeight: 1.1,
        paddingLeft: 100,
        paddingRight: 100,
        paddingTop: 50,     
      }}>
        <a href="https://play.google.com/store/apps/details?id=com.gkruiger.blue5app" style={{
          textDecoration: 'none',
          color: 'black'
        }}>
          &gt; Get the Android app<br/>
        </a>
        <br/>
        <div onClick={() => {setMobileCheckDone(true)}}>
          &gt; Continue using the web version<br/>
        </div>
      </div>
    </div>
  )
}