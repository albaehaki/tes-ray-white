"use client"
import React from "react";

// icon
import { UserCircleIcon, XCircleIcon } from "@heroicons/react/24/outline";

// components
import Card1 from "@/components/card1";
import Card2 from "@/components/card2";
import ProgressBar from "@/components/progressBar";
import LineChart from "@/components/lineChart";

const Page = () => {
  const styleGrid = `grid gap-5 `;
  const chartData = [10, 80, 50, 90, 70];
  const chartLabels = ['Label 1', 'Label 2', 'Label 3', 'Label 4', 'Label 5'];
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
      <div className="grid grid-cols-6 gap-5 pt-5">
        <Card1 />
        <Card1 />
        <Card1 />
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
      <div className="grid grid-cols-2 justify-between pt-5">
        <div className="justify-self-start">
          <p className="font-bold text-xl tracking-wider">Dasboard</p>
          <p className="text-xs">User Quantity</p>
        </div>
      </div>
      <div className="bg-white mt-5 w-auto min-h-[100px] rounded-lg">
        <div className="grid grid-cols-4">
        <LineChart data={chartData} labels={chartLabels}/>
        </div>
       
        <div className="grid grid-cols-2">
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
