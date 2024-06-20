"use client";
import React from "react";
import Image from "next/image";
import Button from "/src/components/button";
import { useState } from 'react';

export default function Home() {
  const [text, setText] = useState("Kamu mau jalan sama aku gx?");
  const [buttonDisabled, disabledAllButtons] = useState(false);
  const handleClick = () => {
    setText("Sampai ketemu besok :3");
    disabledAllButtons(true);
  };
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-indigo-100">
      <h1 className="text-gray-700 m-[1vw] font-sans text-xl font-light">{text}</h1>
      <Image
      src = "/center_img.png"
      width={200}
      height={200}
      alt="Ada yang nawarin"
      />
      <div>
        <Button color="green" onClick = {handleClick} isDisabled = {false} >Mau</Button>
        <Button color="red" onClick = {() => setText("Harus mau, bwle")} isDisabled = {buttonDisabled}>Gak</Button>
      </div>
    </main>
  );
}
