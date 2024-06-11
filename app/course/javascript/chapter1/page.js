import Link from "next/link";
import { Button } from "@/components/ui/button";

const chOne = () => {
  return (
    <div className="flex flex-col pt-64 lg:pt-32 items-center justify-center max-h-screen">
      <main className="flex-1">
        <section className="w-full ">
          <div className="container px-4 md:px-6">
            <div className="grid max-w-4xl mx-auto gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Mastering JavaScript Variables
                </h1>
                <p className="text-gray-500 md:text-xl ">
                  Explore the differences between `const`, `let`, and `var` and
                  how they impact your code.
                </p>
              </div>
              <div className="flex justify-center">
                <img
                  alt="JavaScript Variables"
                  className="aspect-square overflow-hidden rounded-xl object-cover"
                  height="400"
                  src="/javascript.jpg"
                  width="500"
                />
              </div>
            </div>
            <div className="flex w-full items-center mt-2 justify-center md:justify-end">
              <Link
                className="inline-flex mb-10 h-9 items-center justify-center rounded-md bg-gray-900 lg:px-10 px-32 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50   -50/90 -gray-300"
                href="/course/javascript/chapter1/details"
              >
                Next
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default chOne;
