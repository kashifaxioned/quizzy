import React, { useEffect, useMemo, useRef, useState } from "react";
import he from 'he'
import { Link } from "react-router-dom";

export default function Questions(props) {
  const data = props.data;

  const optionsArr = useMemo(
    () =>
      [data.correct_answer, ...data.incorrect_answers].sort(
        () => Math.random() - 0.5
      ),
    [data]
  );

  const clickedContainer = useRef();

  const correctAnswer = useRef();

  const [isClicked, setClicked] = useState(false);

  const [isChecked, setChecked] = useState(false);

  const [isAnswerCorrect, setAnswerCorrect] = useState(false);

  const handleClick = (e) => {
    clickedContainer.current &&
      clickedContainer.current.classList.remove("bg-orange", "text-black");
    clickedContainer.current = e.target;
    clickedContainer.current.className += " bg-orange text-black";
    setClicked(true);
  };

  useEffect(() => {
    if (isChecked) {
      setClicked(false);
      if (
        clickedContainer.current.textContent ===
        correctAnswer.current.props.children
      ) {
        clickedContainer.current.classList.add(
          "bg-green",
          "pointer-events-none"
        );
        setAnswerCorrect(true);
      } else {
        clickedContainer.current.classList.add(
          "bg-red",
          "pointer-events-none",
          "text-black"
        );
      }
    }
  }, [isChecked]);

  return (
    <div className="font-rubik bg-grey text text-gold border-box overflow-hidden">
      <div className="container mx-auto min-h-[100vh] text-center translate-y-1/4 flex-col">
        <h3 className="text-6xl">Question no {props.num}</h3>
        <p className="mt-12 text-3xl py-8 px-12 border border-gold rounded-full text-left">
          {he.decode(data.question)}
        </p>
        <div className="mt-10 flex flex-wrap justify-between">
          {optionsArr.map((x, i) => {
            return x === data.correct_answer ? (
              (correctAnswer.current = (
                <span
                  key={i}
                  onClick={handleClick}
                  className={`py-6 basis-[48%] ${i < 2 && "mb-10"} ${
                    isChecked && "bg-green text-black pointer-events-none"
                  } text-2xl border border-gold cursor-pointer`}
                >
                  {he.decode(x)}
                </span>
              ))
            ) : (
              <span
                key={i}
                onClick={handleClick}
                className={`py-6 basis-[48%] ${
                  isChecked && "pointer-events-none"
                } ${
                  i < 2 && "mb-10"
                } text-2xl border border-gold cursor-pointer`}
              >
                {he.decode(x)}
              </span>
            );
          })}
        </div>
        {isClicked && (
          <span
            onClick={() => setChecked(true)}
            className="py-5 px-10 mt-12 border border-gold text-2xl cursor-pointer uppercase inline-block text-right transition-all durtion-100 ease-in hover:bg-orange hover:text-grey"
          >
            submit
          </span>
        )}

        {isAnswerCorrect && (
          <Link
            to={`/question${props.num + 1}`}
            className="py-5 px-10 mt-12 border border-gold text-2xl cursor-pointer uppercase inline-block text-right transition-all durtion-100 ease-in hover:bg-orange hover:text-grey"
          >
            next
          </Link>
        )}
        {!isAnswerCorrect && isChecked && (
          <Link
            to={`/`}
            className="py-5 px-10 mt-12 border border-gold text-2xl cursor-pointer uppercase inline-block text-right transition durtion-100 ease-in hover:bg-orange hover:text-grey"
          >
            go to home
          </Link>
        )}
      </div>
    </div>
  );
}
