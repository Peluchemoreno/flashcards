import "./StackView.css";
import { useNavigate, useParams } from "react-router-dom";
import newCard from "../../assets/icons/new-card.svg";
import backButton from "../../assets/icons/back.svg";
import forwardButton from "../../assets/icons/forward.svg";
import editButton from "../../assets/icons/edit-card.svg";
import flipCard from "../../assets/icons/flip.svg";
import fullscreenButton from "../../assets/icons/full.svg";
import { useState } from "react";

export default function StackView({ stackChoice }) {
  const params = useParams();
  const navigator = useNavigate();
  let stackId = params.stackId;
  let questions = stackChoice[stackId].questions;
  
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [displayingQuestion, setDisplayingQuestion] = useState(true)
  

  function handleNextCardClick(){
    setCurrentQuestion(currentQuestion + 1)
  }

  function handlePreviousCardClick(){
    setCurrentQuestion(currentQuestion - 1)
  }

  return (
    <div className="stack__container">
      <img
        className="stack__icon stack__icon_new-card"
        src={newCard}
        alt="add new card"
      />
      <img
        src={backButton}
        alt="go back"
        className="stack__icon stack__icon_back-button"
        onClick={() => navigator(-1)}
      />
      <h2 className="stack__title">{stackChoice[stackId].name}</h2>

      <div className="stack__card">
        {displayingQuestion ? <h3 className="stack__question">
          {questions[currentQuestion].question}
        </h3> : <p className="stack__answer">{questions[currentQuestion].answer}</p>}
      </div>
      <div className="stack__bar">
        <div className="stack__bar_center-controls">
          <img
            src={backButton}
            alt="previous card"
            className="stack__icon stack__icon_previous-card"
            onClick={()=>{
              if (currentQuestion === 0){
                setCurrentQuestion(questions.length - 1)
              } else {
                handlePreviousCardClick()
              }
              if (displayingQuestion === false){
                setDisplayingQuestion(true)
              }
            }}
          />
          <p className="stack__status">{`${currentQuestion + 1} / ${questions.length}`}</p>
          <img
            src={forwardButton}
            alt="next card"
            className="stack__icon stack__icon_next-card"
            onClick={()=>{
              if (currentQuestion === questions.length - 1){
                setCurrentQuestion(0)
              } else {
                handleNextCardClick()
              }
              if (displayingQuestion === false){
                setDisplayingQuestion(true)
              }
            }}
          />
        </div>
        <div className="stack__bar_controls">
          <img
            src={editButton}
            alt="edit card"
            className="stack__icon stack__icon_edit"
          />
          <img
            src={fullscreenButton}
            alt="fullscreen"
            className="stack__icon stack__icon_fullscreen"
          />
          <img
            src={flipCard}
            alt="flip card"
            className="stack__icon stack__icon_flip"
            onClick={()=>{
              setDisplayingQuestion(!displayingQuestion)
            }}
          />
        </div>
      </div>
    </div>
  );
}
