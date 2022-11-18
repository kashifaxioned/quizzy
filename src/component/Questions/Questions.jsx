import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

export default function Questions(props) {
  const data = props.data;

  let optionsArr = [data.correct_answer, ...data.incorrect_answers];

  useEffect(() => {
    optionsArr = optionsArr.sort(() => Math.random() - 0.5);
  }, []);

  const [isClicked, setClicked] = useState(false);

  const [isChecked, setChecked] = useState(false)

  const [isAnswerCorrect, setAnswerCorrect] = useState(null) 

  const clickedContainer = useRef();

  let correctAnswer = useRef();

  const handleClick = (e) => {
    clickedContainer.current &&
      clickedContainer.current.classList.remove("bg-orange", "text-black");
    clickedContainer.current = e.target;
    clickedContainer.current.className += " bg-orange text-black";
    setClicked(true);
  };

  const checkAnswer = () => {
    if(clickedContainer.current.textContent === correctAnswer.current.props.children) setAnswerCorrect(true)
    setChecked(true)
    setClicked(false)
  };

  return (
    <div className="font-rubik bg-grey text text-gold border-box overflow-hidden">
      <div className="container mx-auto min-h-[100vh] text-center translate-y-1/4 flex-col">
        <h3 className="text-6xl">Question no {props.num}</h3>
        <p className="mt-12 text-3xl py-8 px-12 border border-gold rounded-full text-left">
          {data.question}
        </p>
        <div className="mt-10 flex flex-wrap justify-between">
          {optionsArr.map((x, i) => {
            return x === data.correct_answer ? (correctAnswer.current = <span onClick={handleClick} className={`py-6 basis-[48%] ${x === data.correct_answer && isChecked && 'bg-green text-black'} ${i < 2 && "mb-10"} text-2xl border border-gold cursor-pointer`}>{x}</span>) : (<span onClick={handleClick} className={`py-6 basis-[48%] ${x === data.correct_answer && isChecked && 'bg-green text-black'} ${i < 2 && "mb-10"} text-2xl border border-gold cursor-pointer`}> {x} </span>)
          })}
        </div>
        {isClicked && (
          <span
            onClick={checkAnswer}
            className="py-5 px-10 mt-12 border border-gold text-2xl cursor-pointer uppercase inline-block text-right transition durtion-100 ease-in hover:bg-orange hover:text-grey"
          >
            submit
          </span>
        )}
        {isAnswerCorrect && <Link to={`/question${props.num + 1}`} className="py-5 px-10 mt-12 border border-gold text-2xl cursor-pointer uppercase inline-block text-right transition durtion-100 ease-in hover:bg-orange hover:text-grey">next</Link>}
      </div>
    </div>
  );
}
