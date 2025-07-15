"use client";

import Navbar from "./components/Navbar";
import Search from "./components/Search";


export default function Home() {
  return (
    <div className="">
      <Navbar />
      <div className="flex items-center justify-center">
        <Search />
      </div>
    </div>
  );
}
