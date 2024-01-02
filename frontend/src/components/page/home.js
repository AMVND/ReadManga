import React from "react";
import MangaCard from "../mangacomponents/MangaCard";

function Home() {

  return (
    <div className="min-h-full">
      {/* NAVBAR */}
        <header className="bg-white shadow">
          <div className="mx-auto max-w-7xl px-4 py-2 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900"></h1>
          </div>
        </header>
        <main>
          <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
              <MangaCard/>
          </div>
        </main>
      </div>
  );
}
export default Home;