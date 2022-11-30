import React from "react";
import { Link } from "react-router-dom";

export default function PageNotFound() {
  return (
    <div className="min-h-[100vh] flex flex-col justify-center items-center">
      <h2 className="text-6xl">Page not found</h2>
      <Link
        to={`/`}
        className="py-3 px-10 mt-12 border border-gold text-2xl cursor-pointer uppercase inline-block text-right transition durtion-100 ease-in hover:bg-orange hover:text-grey"
      >
        go to home
      </Link>
    </div>
  );
}
