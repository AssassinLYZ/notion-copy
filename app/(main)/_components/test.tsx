"use client";

import { useEffect } from "react";



export const Test = () => {
    useEffect(()=>{
  console.log("USE", new Date().getTime());
    },[])
    console.log(122223, new Date().getTime());
    return (
        <>

        </>
    )
}