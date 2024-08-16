import { useState, useEffect} from "react"

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faStar} from "@fortawesome/free-solid-svg-icons"

export default function StarRating() {

    const [hover, setHover] = useState(null)
    const [rating, setRating] = useState(null)
    const [edit, setEdit] = useState(false)

    const style = `
      .star-rating{
        display: flex;
        flex-direction: column;
      }
      
      .stars{
        display: flex;
        justify-content: center;
      }
      
      .final-rating{
        margin: 50px 0px;
        display: flex;
        align-items: center;
        flex-direction: column;
      }
      
      .ratebtn{
        font-size : 20px;
        width: 100px;
        height: 30px;
      }
      
      .user-rating{
        text-align: center;
      }
      
      @media (max-width : 530px){
        .heading{font-size: 30px;}
        .user-rating{font-size: 25px;}
      }
    `

    function check()
    {
      if(localStorage.getItem('rating'))
      {
        return (
          <>
            <h1 className="user-rating">You've rated this website as {localStorage.getItem('rating')} stars</h1>
            <button onClick = {reRender} className="ratebtn">To edit</button>
          </>
      )
      }
    }

    const getColor = (index) => {
      if(index <= hover){
        return "gold"
      }
      else{
        return "gray"
      }
    }

    const reRender = () => {
      localStorage.removeItem('rating')
      setEdit(true)
      setHover(null)
      setRating(null)
    }

    function saveData(value){
      setEdit(false)
      localStorage.setItem('rating', (value+1).toString())
    }

    function starOutput(){
      if(localStorage.getItem('rating')){

        return
      }
      return(
      [...Array(5)].map((star, index) => {
            return(
            <FontAwesomeIcon 
            onClick = {() => {
              setRating(index)
              saveData(index)
            }}
            onMouseEnter = {() =>{
              if(rating == null){
                setHover(index)
              }
            }}
            onMouseLeave={() => {
              setHover(null)
            }}
            key = {index} 
            size = "4x" 
            color={getColor(index)}
            icon = {faStar}
          />
            )
          })
        )
    }

    return (
      <div className="star-rating">
        <style>{style}</style>
        <div className="present">
          <h1 className="heading">RATE THE WEBSITE <br />FROM 0 TO 5 STARS</h1>
        </div>
        <div className="stars">
          {starOutput(event)}
        </div>

        <div className="final-rating">
            {check()}
        </div>


      </div>
    )
} 