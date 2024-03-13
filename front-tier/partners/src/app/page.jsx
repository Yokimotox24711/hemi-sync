"use client"
import Image from "next/image";
import "./style.scss";
import { TextField } from "@mui/material";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  // useEffect(() => {
  //   setTimeout(() => {
  //     router.push("/chat");
  //   }, 2000);
  // }, []);

  return (
    <>
      <main className="main">
        <h1 className="title">Hello World</h1>
      </main>
    </>
  );
}
