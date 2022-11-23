import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useGetQuestionsQuery } from "../features/api/apiSlice";
import Home from "./Home/Home";
import Questions from "./Questions/Questions";

export default function App() {
  const { data, isSuccess } = useGetQuestionsQuery();
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          {isSuccess &&
            data.results.map((x, i) => {
              return <Route path={`question${i+1}`} key={i} element={<Questions key={i} data={x} num={i+1}/>} />;
            })}
        </Routes>
      </Router>
    </div>
  );
}
