"use client";
import React from "react";

// icon
import { UserCircleIcon, XCircleIcon } from "@heroicons/react/24/outline";

// components
import Card1 from "@/components/card1";
import Card2 from "@/components/card2";
import ProgressBar from "@/components/progressBar";
import CardChart from "@/components/cardChart";

const Page = () => {
  const styleGrid = `grid gap-5 grid-cols-3 lg:grid-cols-1 pb-5`;

  return (
    <>
      <div className="grid grid-cols-2 justify-between">
        <div>
          <p className="font-bold text-xl tracking-wider">Dasboard</p>
          <p className="text-xs">User Quantity</p>
        </div>
        <button className="justify-self-end py-2 px-4 flex items-center bg-slate-800 text-white">
          Go To CRM
        </button>
      </div>
      <div className="grid lg:grid-cols-7 grid-cols-1 gap-5 pt-5">
        <Card1 />
        <Card1 />
        <Card1 />
        <div className="lg:col-span-4  lg:grid grid-cols-3 gap-5">
          <div className={`${styleGrid} `}>
            <Card2 />
            <Card2 />
            <Card2 />
          </div>
          <div className={`${styleGrid}`}>
            <Card2 />
            <Card2 />
            <Card2 />
          </div>
          <div className={`${styleGrid} `}>
            <Card2 />
            <Card2 />
            <Card2 />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 justify-between pt-5">
        <div className="justify-self-start">
          <p className="font-bold text-xl tracking-wider">Dasboard</p>
          <p className="text-xs">User Quantity</p>
        </div>
      </div>
      <div className="bg-white mt-5 w-auto min-h-[100px] rounded-lg pb-5">
        <div className="grid lg:grid-cols-3 gap-5 p-5">
          <CardChart />
          <CardChart />
          <CardChart />
        </div>
        <div className="grid lg:grid-cols-2">
          <ProgressBar />
          <ProgressBar />
          <ProgressBar />
          <ProgressBar />
        </div>
      </div>
    </>
  );
};

export default Page;
