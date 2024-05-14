"use client";

import FormPost from "../form";

export default function CreatePosting() {
  return (
    <div className="w-full md:w-1/2 h-full rounded-lg bg-orange-500">
      <div className="text-center p-5 text-lg font-bold">
        <h1>Create New Post</h1>
      </div>
      <div className="p-5">
        <FormPost />
      </div>
    </div>
  );
}
