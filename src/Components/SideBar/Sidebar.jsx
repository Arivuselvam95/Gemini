import React, { useState } from 'react'
import "./Sidebar.css"
import { Context } from '../../context/context';
import { useContext } from 'react';
const Sidebar = () => {

    const [extended,setExtended]=useState(false);
    const {onSent,
        prevPrompt,
        setPrevPrompt,
        newChat}=useContext(Context);
    const loadPrompt=(inputprompt)=>{
        onSent(inputprompt)
    }  

    return (
        <div className='Sidebar'>
            <div className="top">
                <img onClick={()=>setExtended(!extended)} className='menu' src="side-bar.png" alt="" />
                <div onClick={()=>newChat()} className="new-chat">
                    <img src="chat-plus.png" alt="" />
                    {extended?<p>New Chat</p>:null}
                </div>
                {extended?
                <div className='recent'>
                    <p className="recent-title">Recent</p>
                    {prevPrompt.map((item,index)=>{
                        return(
                            <div onClick={()=>loadPrompt(item)} key={index} className="recent-entry">
                                <img src="message.png" alt="" />
                                <p >{item.slice(0,10)}...</p>
                            </div>
                        )
                    })}
                    
                </div>
            :
            null}

            </div>
            <div className="bottom">
                <div className='bottom-item recent-entry'>
                    <img src="help.png" alt="" />
                    {extended?<p>Help</p>:null}
                </div>
                <div className='bottom-item recent-entry'>
                    <img src="recent-activities.png" alt="" />
                    {extended?<p>Activities</p>:null}
                    
                </div>
                <div className='bottom-item recent-entry'>
                    <img src="settings.png" alt="" />
                    {extended?<p>Settings</p>:null}
                </div>
            </div>

        </div>
    )
}

export default Sidebar
