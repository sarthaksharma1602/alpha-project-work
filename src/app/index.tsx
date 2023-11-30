"use client";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import GiphySearch from "./giphy/page";

export default function Home() {




  return <GiphySearch />;

}

Home.requireAuth = true;