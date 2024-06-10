"use client";

import ChapterPreview from "@/components/ChapterPreview";
import Error from "next/error";
import { notFound } from "next/navigation";
import React from "react";

const Chapters = ({ params }) => {
  // Sample chapters data
  const chapters = [
    {
      ch: 1,
      iframe: `<iframe width="560" class='rounded-xl scale-125' height="315" src="https://www.youtube.com/embed/ER9SspLe4Hg?si=ySisnhJVP6mEc9HR" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
    },
    {
      ch: 2,
      iframe: `<iframe width="560" height="315" class='rounded-xl' src="https://www.youtube.com/embed/Q4p8vRQX8uY?si=Mb1mN7R9tj5M2fzp" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
    },
    {
      ch: 3,
      iframe: `<iframe width="560" height="315" class='rounded-xl' src="https://www.youtube.com/embed/Icev9Oxf0WA?si=1TcgNvPrVSBJgplu" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
    },
    {
      ch: 4,
      iframe: `<iframe width="560" height="315" class='rounded-xl' src="https://www.youtube.com/embed/qpU3WIqRz9I?si=CfxmBT8QNLWn8q6l" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
    },
  ];

  // Convert params.chapter to a number
  const chapterNumber = parseInt(params.chapters);

  // Find the chapter with the specified chapter number
  const selectedChapter = chapters.find(
    (chapter) => chapter.ch === chapterNumber
  );

  if (!selectedChapter) {
    return <Error statusCode={404} />;
  }

  return (
    <main className="flex flex-col lg:flex-row">
      <div className="w-full flex rounded-xl items-center justify-center h-screen">
        <div dangerouslySetInnerHTML={{ __html: selectedChapter.iframe }} />
      </div>
      <div className="lg:w-3/5 w-full">
        <ChapterPreview />
      </div>
    </main>
  );
};

export default Chapters;
