
import Link from "next/link";
import React from "react";

const Variables = () => {
  return (
    <main>
      <section className="w-full pt-32 bg-gray-100 ">
        <div className="container px-4 md:px-6">
          <div className="grid max-w-4xl mx-auto gap-6 lg:grid-cols-3 lg:gap-12">
            <div className="grid gap-4">
              <div className="bg-white rounded-lg p-6 shadow-sm ">
                <div className="flex items-center justify-center w-16 h-16 bg-[#55efc4] rounded-full text-3xl mb-4">
                  <LockIcon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold">const</h3>
                <p className="text-gray-500 ">
                  Variables declared with `const` are block-scoped and cannot be
                  reassigned or redeclared.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm ">
                <div className="flex items-center justify-center w-16 h-16 bg-[#ffeaa7] rounded-full text-3xl mb-4">
                  <LockOpenIcon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold">let</h3>
                <p className="text-gray-500 ">
                  Variables declared with `let` are block-scoped and can be
                  reassigned, but cannot be redeclared in the same scope.
                </p>
              </div>
            </div>
            <div className="grid gap-4">
              <div className="bg-white rounded-lg p-6 shadow-sm ">
                <div className="flex items-center justify-center w-16 h-16 bg-[#fdcb6e] rounded-full text-3xl mb-4">
                  <LockOpenIcon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold">var</h3>
                <p className="text-gray-500 ">
                  Variables declared with `var` are function-scoped and can be
                  reassigned and redeclared within the same function.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm ">
                <div className="flex items-center justify-center w-16 h-16 bg-[#74b9ff] rounded-full text-3xl mb-4">
                  <CodeIcon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold">Examples</h3>
                <p className="text-gray-500 ">
                  Explore interactive code snippets to see the differences in
                  action.
                </p>
              </div>
            </div>
            <div className="grid gap-4">
              <div className="bg-white rounded-lg p-6 shadow-sm ">
                <div className="flex items-center justify-center w-16 h-16 bg-[#81ecec] rounded-full text-3xl mb-4">
                  <ClipboardIcon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold">Practice</h3>
                <p className="text-gray-500 ">
                  Test your understanding with interactive exercises and
                  quizzes.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm ">
                <div className="flex items-center justify-center w-16 h-16 bg-[#a29bfe] rounded-full text-3xl mb-4">
                  <BookIcon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold">Resources</h3>
                <p className="text-gray-500 ">
                  Explore additional resources to deepen your understanding.
                </p>
              </div>
            </div>
          </div>
          <div className="flex w-full items-center mt-4 justify-center md:justify-end">
            <Link
              className="flex  mb-10 h-9 items-center justify-center rounded-md bg-gray-900 lg:px-10 px-32 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1"
              href="/course/javascript/chapter1/examples"
            >
              Next
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Variables;

function LockIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  );
}

function LockOpenIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 9.9-1" />
    </svg>
  );
}

function BookIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
    </svg>
  );
}

function ClipboardIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="8" height="4" x="8" y="2" rx="1" ry="1" />
      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
    </svg>
  );
}

function CodeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  );
}
