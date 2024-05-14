"use client";

import { GetTime } from "@/helpers/getTime";
import Card from "../card";
import { useEffect, useState } from "react";
import postApi from "@/api/post";

export default function PostingPages() {
  const [posts, setPosts] = useState([]);
  const fecthPosts = async () => {
    const res = await postApi.get("/posting");
    const data = await res.data;
    // console.log(data);
    setPosts(data);
  };

  const handleRefresh = () => {
    fecthPosts();
    window.alert("REFRESH DATA");
  };

  useEffect(() => {
    fecthPosts();
  }, []);

  const reversedPosts = [...posts].reverse();
  return (
    <div className="w-full max-h-full rounded-lg bg-slate-500 md:w-1/2  ">
      <div className="text-center p-5 text-lg font-bold">
        <div className="flex justify-around items-center">
          <h1>POSTED</h1>
          <button onClick={handleRefresh} className="flex gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
              />
            </svg>
            {""}
            refresh
          </button>
        </div>
        <div
          className="border-4 rounded-lg mt-2 overflow-auto"
          style={{ height: "32rem" }}
        >
          <div className="flex flex-col gap-2 p-2">
            {reversedPosts.map((post: any) => (
              <Card
                key={post._id}
                user={post.username}
                time={GetTime(post.createdAt)}
                content={post.content}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
