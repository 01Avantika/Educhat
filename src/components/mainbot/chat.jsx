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
        : <div className="result">
         {/* User Message */}
         <div className="chat-row user">
           <div className="chat-bubble user-bubble">
             <p>{recentPrompt}</p>
           </div>
           <img src={assets.usericon} alt="user" className="chat-avatar" />
         </div>
       
         {/* AI Message */}
         <div className="chat-row ai">
           <img src={assets.gemini_icon} alt="ai" className="chat-avatar" />
           <div className="chat-bubble ai-bubble">
             {loading ? (
               <div className="loader">
                 <hr />
                 <hr />
                 <hr />
               </div>
             ) : (
               <div dangerouslySetInnerHTML={{ __html: resultData }}></div>
             )}
           </div>
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
