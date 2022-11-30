import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useGetQuestionsQuery } from "../features/api/apiSlice";
import Home from "./Home/Home";
import Questions from "./Questions/Questions";
import PageNotFound from './404'

export default function App() {
  const { data, isSuccess } = useGetQuestionsQuery();
  return (
    <div className="font-rubik bg-grey text text-gold border-box">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          {isSuccess &&
            data.results.map((x, i) => {
              return <Route path={`question-${i+1}`} key={i} element={<Questions key={i} data={x} num={i+1}/>} />;
            })}
          <Route path="*" element={<PageNotFound/>}/>
        </Routes>
      </Router>
    </div>
  );
}
