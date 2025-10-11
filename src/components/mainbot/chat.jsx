import React, {useContext} from 'react'
import './chat.css'
import { assets } from '../../assets/assets'
import { Context } from '../../context/context'


const Chat = () =>{
    const {input,
        setInput,
        recentPrompt,
        setRecentPrompt,
        prevPrompt,
        setPrevPrompt,
        showResult,
        loading,
        resultData,
        onSent,
        } = useContext(Context)

  return (
    <div className="main">
        <div className="nav">
            <p>EduChat</p>
            <img src={assets.gemini_icon}  alt=""/>
        </div>
        <div className="main-container">

        {!showResult
         ?<>
           <div className="greet">
                <p><span>Hello, User</span></p>
                <p>How can i help you today?</p>
            </div>
         </>
         :<div className='result'>
            <div className='result-title'>
                <img src={assets.usericon} alt=''></img>
                <p>{recentPrompt}</p>
            </div>
            <div className="result-data">
                <img src={assets.gemini_icon} alt=""></img>
                {loading
                ?<div className='loader'>
                  <hr />
                  <hr />
                  <hr />
                </div>
                :<p dangerouslySetInnerHTML={{__html:resultData}}></p>
                }
                

            </div>

            </div>
        }   
            
            
        </div>
        <div className="main-bottom">
            <div className="search-box">
                <input type="text" placeholder='Ask Anything' 
                 value={input}
                 onChange={(e)=>setInput(e.target.value)}
                />
                
                <div>
                    <img src={assets.gallery_icon}  alt="" />
                    <img src={assets.mic_icon}  alt="" />
                    <img src={assets.send_icon}  alt="send" onClick={() => onSent(input)} />
                </div>
            </div>
            <p className='bottom-info'>
            It may display inacurate info,so double check your response.Your privacy 
            </p>
        </div>
    </div>
  )
}

export default Chat
