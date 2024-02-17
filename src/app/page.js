"use server";

import { redirect } from "next/navigation";

export async function createPost(code) {
  try {
    const response = await fetch(`/api/applist?code=bwluxv}`, {
      method: "GET",
    });
    const list = await response.json();
    console.log(list, "<==================list");
  } catch (error) {
    console.error(error);
  }
  console.log(code, '<=====================code');
  // redirect("https://games.smileyshopy.in/");
}

export default async function Profile({ params }) {
  const team = await createPost(params);

  return <main>
    Abinesh
  </main>;
}
