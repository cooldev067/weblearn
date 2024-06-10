import Link from "next/link";
import React from "react";

const ChapterPreview = () => {
  // Define JavaScript chapters
  const javascriptChapters = [
    {
      number: 1,
      title: "Introduction to JavaScript",
      link: "/course/javascript/1",
    },
    {
      number: 2,
      title: "Variables and Data Types",
      link: "/course/javascript/2",
    },
    {
      number: 3,
      title: "const, let, var in Javascript",
      link: "/course/javascript/3",
    },
    {
      number: 4,
      title: "Primitives and Objects in JavaScript",
      link: "/course/javascript/4",
    },
    {
      number: "🎯",
      title: "Practice Set",
      link: "/course/javascript/practiseSet1",
    },
    { number: 5, title: "Arrays", link: "/course/javascript/1" },
    { number: 6, title: "Objects", link: "/course/javascript/1" },
    {
      number: 7,
      title: "DOM Manipulation (Document Object Model)",
      link: "/course/javascript/1",
    },
    {
      number: 8,
      title: "Events and Event Handling",
      link: "/course/javascript/1",
    },
    {
      number: 9,
      title: "Forms and Form Validation",
      link: "/course/javascript/1",
    },
    { number: 10, title: "Error Handling", link: "/course/javascript/1" },
  ];

  return (
    <main>
      <section className="text-gray-400 overflow-y-scroll h-screen bg-gray-600 body-font">
        <h1 className="text-center text-purple-500 text-3xl pt-20 font-bold">
          Chapters
        </h1>
        <div className="container pt-8 py-24 mx-auto flex flex-wrap">
          {/* Map over JavaScript chapters */}
          {javascriptChapters.map((chapter) => (
            <Link
              href={chapter.link}
              key={chapter.number}
              className="flex relative pb-20 sm:items-center md:w-2/3 mx-4"
            >
              <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
                <div className="h-full w-1 bg-gray-800 pointer-events-none"></div>
              </div>
              <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-indigo-500 text-white relative z-10 title-font font-medium text-sm">
                {chapter.number}
              </div>
              <div className="flex-grow md:pl-0 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                  <h2 className="font-medium title-font text-gray-200 mb-1 text-lg">
                    {chapter.title}
                  </h2>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
};

export default ChapterPreview;
