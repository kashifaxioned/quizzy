import React, {  useRef, useState } from "react";

export default function Questions() {
  const [isClicked, setClicked] = useState(false);

  const clickedContainer = useRef();

  const handleClick = (e) => {
    clickedContainer.current && clickedContainer.current.classList.remove("bg-orange", "text-black");
    clickedContainer.current = e.target;
    clickedContainer.current.className += " bg-orange text-black"
    setClicked(true);
  };

  return (
    <div className="font-rubik bg-grey text text-gold border-box">
      <div className="container mx-auto min-h-[100vh] text-center translate-y-1/4 flex-col">
        <h3 className="text-6xl">Question no 1</h3>
        <p className="mt-12 text-3xl py-8 px-12 border border-gold rounded-full text-left">
          On which day did construction start on &quot;The Pentagon&quot;, the
          headquarters for the United States Department of Defense?
        </p>
        <div className="mt-10 flex flex-wrap justify-between">
          <button
            onClick={handleClick}
            className={`py-6 basis-[48%] mb-10 text-2xl border border-gold cursor-pointer`}
          >
            September 11, 1941
          </button>
          <button
            onClick={handleClick}
            className={`py-6 basis-[48%] mb-10 text-2xl border border-gold cursor-pointer`}
          >
            September 2, 1962
          </button>
          <button
            onClick={handleClick}
            className={`py-6 basis-[48%] text-2xl border border-gold cursor-pointer`}
          >
            January 15, 1943
          </button>
          <button
            onClick={handleClick}
            className={`py-6 basis-[48%] text-2xl border border-gold cursor-pointer`}
          >
            June 15, 1947
          </button>
        </div>
        {isClicked && <span className="py-5 px-10 mt-12 border border-gold text-2xl cursor-pointer uppercase inline-block text-right transition durtion-100 ease-in hover:bg-orange hover:text-grey">submit</span>}
      </div>
    </div>
  );
}
