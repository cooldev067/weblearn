import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const Quiz = () => {
  return (
    <main>
      <section className="w-full pt-12 md:pt-24 lg:pt-32 h-screen bg-gray-100 ">
        <div className="container px-4 md:px-6">
          <div className="grid max-w-4xl mx-auto gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Test Your Knowledge
              </h2>
              <p className="text-gray-500 md:text-xl ">
                Practice what you've learned with interactive quizzes and
                exercises.
              </p>
            </div>
            <div className="grid gap-4">
              <div className="bg-white rounded-lg p-6 shadow-sm ">
                <h3 className="text-xl font-bold mb-2">Quiz</h3>
                <p className="text-gray-500  mb-4">
                  Test your understanding of `const`, `let`, and `var` with this
                  interactive quiz.
                </p>
                <Button>Take the Quiz</Button>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm ">
                <h3 className="text-xl font-bold mb-2">Exercises</h3>
                <p className="text-gray-500  mb-4">
                  Practice your skills with hands-on coding exercises.
                </p>
                <Button>Start Exercises</Button>
              </div>
            </div>
          </div>
          <div className="flex w-full items-center mt-4 justify-center md:justify-end">
            <Link
              className="inline-flex mb-10 h-9 items-center justify-center rounded-md bg-gray-900 lg:px-10 px-32 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50   -50/90 -gray-300"
              href="/course/javascript/chapter1/more"
            >
              Next
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Quiz;
