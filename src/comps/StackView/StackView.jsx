import "./StackView.css";
import { useNavigate, useParams } from "react-router-dom";
import newCard from "../../assets/icons/new-card.svg"
import backButton from "../../assets/icons/back.svg"
import editButton from '../../assets/icons/edit-card.svg'

export default function StackView({ stackChoice }) {
  const params = useParams();
  const navigator = useNavigate();
  let stackId = params.stackId;
  let questions = stackChoice[stackId].questions;
  let id = Math.floor(Math.random() * questions.length);

  return (
    <div className='stack__container'>
      <img className='stack__icon stack__icon_new-card' src={newCard} alt="add new card" />
      <img src={backButton} alt="go back" className='stack__icon stack__icon_back-button' onClick={()=> navigator(-1)} />
      <h2 className="stack__title">{stackChoice[stackId].name}</h2>

      <div className="stack__card">
        <h3 className='stack__question'>
          {questions[Math.floor(Math.random() * questions.length)].question}
        </h3>
      </div>
      <div className="stack__bar">
        <p className="stack__status">{`1 / 1`}</p>
      </div>
    </div>
  );
}
