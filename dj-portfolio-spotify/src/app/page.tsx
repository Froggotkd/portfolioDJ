"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import { LPage } from "./home";
import dynamic from "next/dynamic";


export default function Home() {
  const router = useRouter();

  return (
    <div>
      <LPage />
    </div>
  );
}
