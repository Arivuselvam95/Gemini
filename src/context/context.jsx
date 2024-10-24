import { createContext, useState } from "react";
import run from "../config/gemini";

 export const Context=createContext();

 const ContextProvider=(props)=>{

    const [input,setInput]=useState("");
    const [recentPrompt,setRecentPrompt]=useState("");
    const [prevPrompt,setPrevPrompt]=useState([]);
    const [showResult,setShowResult] =useState(false);
    const [loading,setLoading]=useState(false);
    const [result,setResult]=useState("");
    const [history,setHistory]=useState([])
    const DelayPara=(index,nextword)=>{
        setTimeout(function(){
            setResult(prev=>prev+nextword);
        },75*index);
    }

    const newChat=()=>{
        setLoading(false);
        setShowResult(false);
    }

    const onSent= async (prompt)=>{
        
        setResult("");
        setLoading(true);
        setShowResult(true);
        let response;
        if(typeof prompt==="string" && prompt!==undefined){
            
            response=await run(prompt);
            setRecentPrompt(prompt);
        }else{
            setRecentPrompt(input);
            setPrevPrompt(prev=>[...prev,input]);
            response = await run(input);
        }
        setHistory(his=>[...his,
            {
                role: "user",
                parts: [
                  {text: input},
                ],
              },
              {
                role: "model",
                parts: [
                  {text: response},
                ],
              }
            ]
        )
        let ResponseArray=response.split("**");
        let newResponse="";
        for(let i=0;i<ResponseArray.length;i++){
            if(i===0||i%2!==1){
                newResponse+=ResponseArray[i];
            }else{
                newResponse+="<b>"+ResponseArray[i]+"</b>";
            }
        }

        newResponse=newResponse.split("**").join("</br>");
        newResponse=newResponse.split("\n").join("</br>");
        newResponse=newResponse.split("</br></br>").join("</br>");
        let typingResponse=newResponse.split(" ");
        for(let index=0;index<typingResponse.length;index++){
            const word=typingResponse[index];
            DelayPara(index,word+" ");
        }
        setLoading(false);
        setInput("");
    }
    
    const ContextValue={ 
        input,
        setInput,
        loading,
        result,
        showResult,
        recentPrompt,
        setRecentPrompt,
        onSent,
        prevPrompt,
        setPrevPrompt,
        newChat,
    }
    return (
        <Context.Provider value={ContextValue}>
            {props.children}
        </Context.Provider>
    )
 }

 export default ContextProvider