"use client";
import React from 'react'

import useHandleStore from "@/store/handleStore"

const Index = () => {
  const handleStore = useHandleStore((state) => state)
  const handletoggle = useHandleStore((state) => state.handleToggles)
  console.log(handleStore)
  return (<>
  <div className="">index</div>
  <button onClick={() => {handletoggle("isSideBarOpen")}}>tes</button>
  </>
    
  )
}

export default Index