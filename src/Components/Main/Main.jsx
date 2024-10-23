import React, { useContext } from 'react'
import './Main.css'
import { Context } from '../../context/context'

const Main = () => {

  const {onSent,recentPrompt,showResult,loading,result,setInput,input}=useContext(Context)
  return (
    <div className='main'>
        <div className="nav">
            <p>Gemini</p>
            <img src="user-img.avif" alt="" />
        </div>
        <div className='main-container'>
          {!showResult?<>
            <div className="greet">
              <p><span>Hello, Dev.</span></p>
              <p>How can I assist you?</p>
            </div>
            <div className="cards">
              <div className="card">
                <p>Suggest beautiful places to upcoming road trip</p>
                <img src="compass.png" alt="" />
              </div>
              <div className="card">
                <p>Briefly explain the content for business presentation</p>
                <img src="bulb.png" alt="" />
              </div>
              <div className="card">
                <p>Brainstorm team bonding activities for our work retreat </p>
                <img src="message.png" alt="" />
              </div>
              <div className="card">
                <p>Improve the readiability of the following code</p>
                <img src="code.webp" alt="" />
              </div>
            </div>
          </>
          :
          <>
            <div className='result'>
              <div className="result-title">
                <img src="user-img.avif" alt="user" />
                <p>{recentPrompt}</p>
              </div>
              <div className="result-data">
                <img src="Gemini.png" alt="gemini" />
              {loading?
              <div className='loader'>
                <hr />
                <hr />
                <hr />
              </div>                
              :<p dangerouslySetInnerHTML={{__html:result}}></p>
              }
              </div>
            </div>
          </>}
            
            <div className="main-bottom">
              <div className="search-box">
                <input onChange={(e)=>setInput(e.target.value)} value={input} type="text" placeholder='Enter a prompt here'/>
                <div className='search-icons'>
                  <img src="gallery.png" alt="" />
                  <img src="mic.png" alt="" />
                  {input?<img onClick={onSent} src="sent.png" alt="" />:null}
                </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Main
