"use client";

import React from "react";

export default function Home() {
  const [joke, setJoke] = React.useState(null);

  const handleGenerateJoke = async () => {
    const req = await fetch("/api/joke", { method: "GET" });

    const res = await req.json();

    setJoke(res?.data?.joke);
  };

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <p className="text-2xl">
        Click the button below to generate a random joke, try not to laugh :p
      </p>

      <p className="text-lg font-medium my-12">{joke}</p>

      <button
        className="bg-green-500 rounded-md hover:bg-green-400 text-white p-4 my-8"
        onClick={handleGenerateJoke}
      >
        Generate a random joke
      </button>
    </main>
  );
}
