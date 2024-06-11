import Link from "next/link";
import React from "react";

const Examples = () => {
  return (
    <main>
      <section className="w-full pt-12 md:pt-24 lg:pt-32">
        <div className="container px-4 md:px-6">
          <div className="grid max-w-4xl mx-auto gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Const, Let, and Var in Action
              </h2>
              <p className="text-gray-500 md:text-xl ">
                Explore interactive examples to see the differences between
                `const`, `let`, and `var` in action.
              </p>
            </div>
            <div className="grid gap-4">
              <div className="bg-white w-[58%] rounded-lg p-6 shadow-sm ">
                <h3 className="text-xl font-bold mb-2">Const</h3>
                <div className="bg-gray-100 rounded-lg p-4 ">
                  <pre className="text-sm overflow-x-scroll font-mono text-gray-500 ">
                    <code>
                      const PI = 3.14; PI = 3.15; // Error: Assignment to
                      constant variable. const PI = 3.16; // Error: Identifier
                      'PI' has already been declared
                    </code>
                  </pre>
                </div>
              </div>
              <div className="bg-white w-[58%] rounded-lg p-6 shadow-sm ">
                <h3 className="text-xl font-bold mb-2">Let</h3>
                <div className="bg-gray-100 rounded-lg p-4 ">
                  <pre className="text-sm overflow-x-scroll font-mono text-gray-500 ">
                    <code>
                      let x = 5; x = 10; // Allowed: Reassignment let x = 15; //
                      Error: Identifier 'x' has already been declared
                    </code>
                  </pre>
                </div>
              </div>
              <div className="bg-white w-[58%] rounded-lg p-6 shadow-sm ">
                <h3 className="text-xl font-bold mb-2">Var</h3>
                <div className="bg-gray-100 rounded-lg p-4 ">
                  <pre className="text-sm overflow-x-scroll font-mono text-gray-500 ">
                    <code>
                      var y = 5; y = 10; // Allowed: Reassignment var y = 15; //
                      Allowed: Redeclaration
                    </code>
                  </pre>
                </div>
              </div>
            </div>
          </div>
          <div className="flex w-full items-center mt-4 justify-center md:justify-end">
            <Link
              className="flex  mb-10 h-9 items-center justify-center rounded-md bg-gray-900 lg:px-10 px-32 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1"
              href="/course/javascript/chapter1/quiz"
            >
              Next
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Examples;
