import Link from "next/link";
import React from "react";

const Javascript = () => {
  return (
    <main>
      <section className="text-gray-400 bg-gray-900 body-font">
        <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
          <iframe
            width="560"
            height="315"
            className="rounded-xl my-5"
            src="https://www.youtube.com/embed/ER9SspLe4Hg?si=OepT1Sk-HRxh4ZEJ"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
          <div className="text-center lg:w-2/3 w-full">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
              Welcome to JavaScript course introduction
            </h1>
            <p className="leading-relaxed mb-8">
              JavaScript is the backbone of modern web development, empowering
              developers to create dynamic and interactive web experiences. In
              this course, you will dive into the fundamentals of JavaScript
              programming, from basic syntax to advanced concepts.
            </p>
            <div className="flex justify-center">
              <Link
                href={"/course/javascript/1"}
                className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
              >
                Enroll Now
              </Link>
              <Link
                href={
                  "https://www.youtube.com/watch?v=ER9SspLe4Hg&list=PLu0W_9lII9ahR1blWXxgSlL4y9iQBnLpR"
                }
                className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Javascript;
