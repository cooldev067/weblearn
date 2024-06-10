"use client";

import React, { useState } from "react";
import axios from "axios";

const PractiseSet1 = () => {
  const questions = [
    {
      id: 1,
      text: "Create a variable of type string & try to add a number to it.",
    },
    {
      id: 2,
      text: "By using typeof operator, find the datatype of the previous question.",
    },
    {
      id: 3,
      text: "Create a Const object in JavaScript. Can you change it to older number later?",
    },
    {
      id: 4,
      text: "Try to add a new key to the Const object in problem 3.",
    },
    {
      id: 5,
      text: "Write a JavaScript program to create a word meaning dictionary of 5 words.",
    },
    {
      id: 6,
      text: "Write a JavaScript function that takes two numbers as parameters and returns their sum.",
    },
  ];

  // Initialize solutions state with empty strings for each question
  const [solutions, setSolutions] = useState({
    sol1: "",
    sol2: "",
    sol3: "",
    sol4: "",
    sol5: "",
    sol6: "",
  });
  const handleSolutionChange = (index, value) => {
    setSolutions((prevState) => ({
      ...prevState,
      [`sol${index + 1}`]: value,
    }));
  };

  const handleSubmit = async () => {
    try {
      const solutionsString = JSON.stringify(solutions);
      const res = await axios.post("/api/sol", { content: solutionsString });
      console.log(res.data);
    } catch (error) {
      console.error("Error submitting solutions:", error);
    }
  };

  return (
    <div className="pt-24 pb-10">
      <h1 className="text-3xl font-bold text-white text-center py-5 mb-6">
        Practice Set 1
      </h1>
      <main className="px-5 md:px-5 flex flex-wrap items-center justify-center gap-10 text-white">
        {questions.map((question, index) => (
          <div key={question.id} className="w-full lg:w-2/5 mb-6">
            <h2 className="text-xl font-semibold mb-2">
              Question {question.id}
            </h2>
            <p className="text-gray-400 mb-2">{question.text}</p>
            <textarea
              name={`sol${index + 1}`}
              className="border border-gray-600 outline-none rounded-md p-2 bg-gray-700 text-white w-full h-24 resize-none"
              placeholder="Write your solution here..."
              value={solutions[`sol${index + 1}`]}
              onChange={(e) => handleSolutionChange(index, e.target.value)}
            ></textarea>
          </div>
        ))}
      </main>
      <div className="flex justify-center">
        <button
          className="bg-purple-700 hover:bg-purple-600 text-white font-semibold py-2 px-4 rounded"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default PractiseSet1;
