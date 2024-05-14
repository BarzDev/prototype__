"use client";

import CreatePosting from "@/components/layouts/createPosting";
import PostingPages from "@/components/layouts/postingPages";

export default function Home() {
  return (
    <main className="w-screen h-screen p-4 flex gap-2 md:flex-row flex-col">
      <CreatePosting />
      <PostingPages />
    </main>
  );
}
