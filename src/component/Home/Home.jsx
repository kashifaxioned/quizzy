import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="font-rubik bg-grey text text-gold border-box">
      <div className="container mx-auto min-h-[100vh] flex items-center justify-center flex-col">
        <h2 className="capitalize text-8xl">quizzy pizzy</h2>
        <p className="mt-6 text-4xl">Test your knowledge here</p>
        <div className="flex flex-col translate-y-1/4">
          <Link
            className="py-5 px-10 mt-10 border-box text-4xl uppercase cursor-pointer transition duration-75 ease-in hover:skew-y-6"
            to="/question1"
          >
            start
          </Link>
        </div>
      </div>
    </div>
  );
}
