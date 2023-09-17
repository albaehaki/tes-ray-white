"use client";
import React from "react";

// icon
import { UserCircleIcon, XCircleIcon } from "@heroicons/react/24/outline";

// components
import Card1 from "@/components/card1";
import Card2 from "@/components/card2";
import ProgressBar from "@/components/progressBar";
import CardChart from "@/components/cardChart";

interface dataCardD {
  // dataCard1: {
  name: string;
  value: number;
  icon: JSX.Element; // Gunakan JSX.Element untuk tipe elemen React
  // }[];
}

const Page = () => {
  const styleGrid = `grid gap-5 grid-cols-3 lg:grid-cols-1 pb-5`;

  const dataCard1: dataCardD[] = [
    {
      name: "Completed",
      value: 100,
      icon: <UserCircleIcon className="w-12 h-12 mx-auto text-white" />,
    },
  ];

  const chartData = [10, 80, 50, 90, 70];
  const chartLabels = ["Label 1", "Label 2", "Label 3", "Label 4", "Label 5"];

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
        <Card1
          Children={<UserCircleIcon className="w-12 h-12 mx-auto text-white" />}
          name="hasil"
          value={9872}
        />
        <Card1
          Children={<UserCircleIcon className="w-12 h-12 mx-auto text-white" />}
          name="hasil"
          value={9872}
        />
        <Card1
          Children={<UserCircleIcon className="w-12 h-12 mx-auto text-white" />}
          name="hasil"
          value={9872}
        />
        <div className="lg:col-span-4  lg:grid grid-cols-3 gap-5">
          <div className={`${styleGrid} `}>
            <Card2
              Children={
                <UserCircleIcon className="w-12 h-12 mx-auto text-white" />
              }
              name="hasil"
              value={9872}
            />
            <Card2
              Children={
                <UserCircleIcon className="w-12 h-12 mx-auto text-white" />
              }
              name="hasil"
              value={9872}
            />
            <Card2
              Children={
                <UserCircleIcon className="w-12 h-12 mx-auto text-white" />
              }
              name="hasil"
              value={9872}
            />
          </div>
          <div className={`${styleGrid}`}>
            <Card2
              Children={
                <UserCircleIcon className="w-12 h-12 mx-auto text-white" />
              }
              name="hasil"
              value={9872}
            />
            <Card2
              Children={
                <UserCircleIcon className="w-12 h-12 mx-auto text-white" />
              }
              name="hasil"
              value={9872}
            />
            <Card2
              Children={
                <UserCircleIcon className="w-12 h-12 mx-auto text-white" />
              }
              name="hasil"
              value={9872}
            />
          </div>
          <div className={`${styleGrid} `}>
            <Card2
              Children={
                <UserCircleIcon className="w-12 h-12 mx-auto text-white" />
              }
              name="hasil"
              value={9872}
            />
            <Card2
              Children={
                <UserCircleIcon className="w-12 h-12 mx-auto text-white" />
              }
              name="hasil"
              value={9872}
            />
            <Card2
              Children={
                <UserCircleIcon className="w-12 h-12 mx-auto text-white" />
              }
              name="hasil"
              value={9872}
            />
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
          <CardChart
            name={`Masuk`}
            value={9379}
            dataChart={chartData}
            labels={chartLabels}
          />
          <CardChart
            name={`Keluar`}
            value={9379}
            dataChart={chartData}
            labels={chartLabels}
          />
          <CardChart
            name={`Absen`}
            value={9379}
            dataChart={chartData}
            labels={chartLabels}
          />
        </div>
        <div className="grid lg:grid-cols-2">
          <ProgressBar name="Sedang Proses" progress={85} icon={<UserCircleIcon className="w-12 h-12 mx-auto text-white" />}/>
          <ProgressBar name="Tertunda" progress={45} icon={<UserCircleIcon className="w-12 h-12 mx-auto text-white" />}/>
          <ProgressBar name="Selesai" progress={65} icon={<UserCircleIcon className="w-12 h-12 mx-auto text-white" />}/>
          <ProgressBar name="Menunggu" progress={15} icon={<UserCircleIcon className="w-12 h-12 mx-auto text-white" />} />
        </div>
      </div>
    </>
  );
};

export default Page;
