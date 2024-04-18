"use client";

import { PostInitialize } from "@/services/posting";
import { useState } from "react";

export default function FormPost({ addPost }: any) {
  const [id, setId] = useState(PostInitialize.length + 1);

  const [formData, setFormData] = useState({
    id: 0,
    username: "",
    time: new Date().toISOString(),
    content: "",
  });

  const handleInput = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: any) => {
    setId(id + 1);
    if (formData.content == "") {
      alert("Please write something");
      return;
    }
    if (formData.username == "") {
      formData.username = "anoymouz";
    }
    setFormData({ ...formData, time: new Date().toISOString(), id: id });
    e.preventDefault();
    addPost(formData);
  };

  const handleReset = () => {
    setFormData({
      ...formData,
      username: "",
      content: "",
    });
  };

  return (
    <form>
      <div className="space-y-12">
        <div className="border-b border-gray-900/10 pb-5">
          <div className="pb-10">
            <h2 className="text-base font-bold leading-7 text-white">
              Hints..!
            </h2>
            <p className="text-sm leading-6 text-slate-300">
              Write something to post to the world, or just say hi!,,,
            </p>
            <p className="text-sm leading-6 text-slate-300">
              NOTED : If username is blank will be hide as a anoymouz
            </p>
          </div>

          <div className="mt-2 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-6">
            <div className="sm:col-span-4">
              <label
                htmlFor="username"
                className="block text-sm font-medium leading-6 text-white"
              >
                Username
              </label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <span className="flex select-none items-center pl-3 text-sky-900 sm:text-sm">
                    @
                  </span>
                  <input
                    type="text"
                    name="username"
                    id="username"
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-white placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    placeholder="anonymouz"
                    value={formData.username}
                    onChange={handleInput}
                  />
                </div>
              </div>
            </div>

            <div className="col-span-full">
              <label
                htmlFor="content"
                className="block text-sm font-medium leading-6 text-white"
              >
                Post Something..
              </label>
              <div className="mt-2">
                <textarea
                  id="content"
                  name="content"
                  rows={3}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  value={formData.content}
                  maxLength={150}
                  placeholder="Write something to the world. (max 150)"
                  onChange={handleInput}
                  required
                />
              </div>
              <p className="mt-3 text-sm leading-6 text-slate-300">
                Write something to the world.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-end gap-x-2">
        <button
          onClick={handleReset}
          type="button"
          className="text-sm font-semibold leading-6 text-white rounded-md bg-red-500 px-3 py-2"
        >
          Reset
        </button>
        <button
          onClick={handleSubmit}
          type="button"
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Post
        </button>
      </div>
    </form>
  );
}
