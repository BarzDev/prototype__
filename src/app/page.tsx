"use client";

import CreatePosting from "@/components/layouts/createPosting";
import PostingPages from "@/components/layouts/postingPages";
import { PostInitialize } from "@/services/posting";
import { useState } from "react";

export default function Home() {
  const [posts, setPosts] = useState(PostInitialize);

  const addPost = (newPost: any) => {
    setPosts([...posts, newPost]);
  };

  return (
    <main className="w-screen h-screen p-4 flex gap-2 md:flex-row flex-col">
      <CreatePosting addPost={addPost} />
      <PostingPages posts={posts} />
    </main>
  );
}
