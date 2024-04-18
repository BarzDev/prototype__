import { GetTime } from "@/helpers/getTime";
import Card from "../card";

export default function PostingPages({ posts }: any) {
  const reversedPosts = [...posts].reverse();
  return (
    <div className="w-full max-h-full rounded-lg bg-slate-500 md:w-1/2  ">
      <div className="text-center p-5 text-lg font-bold">
        <h1>POSTED</h1>
        <div
          className="border-4 rounded-lg mt-2 overflow-auto"
          style={{ height: "32rem" }}
        >
          <div className="flex flex-col gap-2 p-2">
            {reversedPosts.map((post: any) => (
              <Card
                key={post.id}
                user={post.username}
                time={GetTime(post.time)}
                content={post.content}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
