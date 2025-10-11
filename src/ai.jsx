import React from "react";
import Sidebar from "./components/sidebar/sidebar.jsx"
import Chat from "./components/mainbot/chat.jsx"
import ContextProvider from "./context/context"

const AI_assistant = () => {
    return(
      <ContextProvider>
      <div style={{ display: "flex", height: "100vh" }}>
      {/* Sidebar takes 25% width */}
      <div style={{ width: "25%", borderRight: "1px solid #fffcfcff" }}>
        <Sidebar />
      </div>

      {/* Chat area takes remaining 75% */}
      <div style={{ width: "75%", padding: "35px" }}>
        <Chat />
      </div>
      </div>
      </ContextProvider>
        
    )
}

export default AI_assistant