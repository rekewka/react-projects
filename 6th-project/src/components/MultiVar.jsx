import { useState } from "react"

export default function MultiVar() {

  const style = 
  `
    .selection{  
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: 100px;
    }
    
    .content-wrapper{
      height : 130px;
    }
    
    .content{
      color: white;
      display: flex;
      justify-content: space-between;
      align-items: center;
      background-image: linear-gradient(to right, #00A0A6, #8C52FF );
      height: 60px;
      width: 300px;
      margin-bottom: 0px;
    }
    
    .question-text{
      margin-left: 10px;
      font-size: 18px;
    }
    
    .button{
      color: white;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
      font-size: 30px;
      width: 60px;
      background: none;
      border: none;
    }
    
    .text{
      font-family: "Roboto";
      display: flex;
      align-items: center;
      margin: 0;
      height: 40px;
      width: 297px;
      max-width: 300px;
      border: solid black;
      font-size: 20px;
      font-weight : 500;
    }
  `

  return (
    <div className="selection">
      <style>{style}</style>
      <Content question = "WHAT IS MY NAME?" content = "MY NAME IS RUSTEM" />
      <Content question = "HOW OLD AM I?" content = "I'M 18 YEARS OLD" />
      <Content question = "WHERE AM I FROM?" content = "I'M FROM KAZAKHSTAN" />
    </div>
  )
}

function Content({question, content}){

  const [click, setClick] = useState(false)
  const [count, setCount] = useState(1)

  function clickFunction(){
    setCount(count + 1)
    if(count % 2 == 0){
      setClick(false)
    }
    else{
      setClick(true)
    }
  }

  function check(content){
    if(click == true){
      return (<h1 className="text">{content}</h1>)
    }
  }


  return(
    <div className="content-wrapper">
      <div className="content">
        <h1 className="question-text">{question}</h1>
        <button onClick={clickFunction} className="button">+</button>
      </div>

      {check(content)}
    </div>
  )
}