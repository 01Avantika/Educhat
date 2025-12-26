import { createContext, useState } from "react";
import run from "../config/gemini";
import { getDemoResponse } from "../queryHandler"; // Added for demo queries

export const Context = createContext();

const ContextProvider = (props) => {
    
    const [input, setInput] = useState("");
    const [recentPrompt, setRecentPrompt] = useState("");
    const [prevPrompt, setPrevPrompt] = useState([]);
    const [showResult, setShowResult] = useState(false);
    const [loading, setLoading] = useState(false);
    const [resultData, setResultData] = useState("");

    const delayPara = (index, nextWord) => {
        setTimeout(function () {
           setResultData(prev => prev + nextWord);
        }, 75 * index);
    };

    const newChat = () => {
        setLoading(false);
        setShowResult(false);
    };
    
    const onSent = async (prompt) => {

        const userInput = prompt !== undefined ? prompt : input;
        if (!userInput) return;

        setResultData("");
        setLoading(true);
        setShowResult(true);
        setRecentPrompt(userInput);
        setPrevPrompt((prev) => [...prev, userInput]);
        setInput("");

        // ---------- New Functionality: Check demo JSON first ----------
        const demoResponse = getDemoResponse(userInput);

        if (demoResponse) {
            // Use delayPara for typing animation
            const words = demoResponse.split(" ");
            words.forEach((word, i) => delayPara(i, word + " "));
            setLoading(false);
        } else {
            // ---------- Existing Gemini API call ----------
            try {
                const response = await run(userInput);

                let responseArray = response.split("**");
                let newResponse = "";
                for (let i = 0; i < responseArray.length; i++) {
                    if (i === 0 || i % 2 !== 1) {
                        newResponse += responseArray[i];
                    } else {
                        newResponse += "<b>" + responseArray[i] + "</b>";
                    }
                }
                let newResponse2 = newResponse.split("*").join("</br>");
                let newResponseArray = newResponse2.split(" ");

                for (let i = 0; i < newResponseArray.length; i++) {
                    const nextWord = newResponseArray[i];
                    delayPara(i, nextWord + " ");
                }
            } catch (error) {
                setResultData("Oops! Something went wrong. Please try again.");
                console.error(error);
            } finally {
                setLoading(false);
            }
        }
    };

    const contextValue = {
        input,
        setInput,
        recentPrompt,
        setRecentPrompt,
        prevPrompt,
        setPrevPrompt,
        showResult,
        setShowResult,
        loading,
        setLoading,
        resultData,
        setResultData,
        onSent,
        newChat,
    };

    return (
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    );
};

export default ContextProvider;
