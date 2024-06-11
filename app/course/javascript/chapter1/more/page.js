import Link from "next/link";
import React from "react";

const More = () => {
  return (
    <section className="w-full pt-12 md:pt-24 lg:pt-32 h-screen border-t">
      <div className="container px-4 md:px-6">
        <div className="grid max-w-4xl mx-auto gap-6 lg:grid-cols-2 lg:gap-12">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
              Dive Deeper
            </h2>
            <p className="text-gray-500 md:text-xl ">
              Explore additional resources to further your understanding of
              JavaScript variables.
            </p>
          </div>
          <div className="grid gap-4">
            <div className="bg-white rounded-lg p-6 shadow-sm ">
              <h3 className="text-xl font-bold mb-2">Documentation</h3>
              <p className="text-gray-500  mb-4">
                Read the official JavaScript documentation for a deeper dive
                into `const`, `let`, and `var`.
              </p>
              <Link
                className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50   -50/90 -gray-300"
                href="https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Test_your_skills:_variables"
              >
                Read Documentation
              </Link>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm ">
              <h3 className="text-xl font-bold mb-2">Video Tutorials</h3>
              <p className="text-gray-500  mb-4">
                Watch video tutorials to reinforce your understanding of these
                JavaScript concepts.
              </p>
              <Link
                className="inline-flex h-9 items-center justify-center rounded-md border border-gray-200 bg-white px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50   -800 -50 -gray-300 "
                href="https://www.youtube.com/watch?v=Icev9Oxf0WA&t=3s"
              >
                Watch Tutorials
              </Link>
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
  );
};

export default More;
