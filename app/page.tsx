"use client";

import Navbar from "./components/Navbar";
import Search from "./components/Search";


export default function Home() {
  return (
    <div className="">
      <div className="flex justify-between">
        <h1 className="m-2 p-1 text-xl">Reciepts</h1>
        <Navbar />
      </div>
      <div className="flex items-center justify-center">
        <Search />
      </div>
    </div>
  );
}
